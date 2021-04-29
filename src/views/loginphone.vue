<template>
    <div>
        <div id="login_header">
			<h1>登录</h1>
		</div>
		<div id="logo">
			<img src="../assets/AXKJlogo.png"/>
		</div>
		<div id="login">
			<div class="login_phone">
				<input type="text" placeholder="请输入账号"  v-model="phoneNumber"/>
			</div>
			<div class="logins_password">
				<input type="password" placeholder="请输入密码"  v-model="passWord"/>
				<router-link to="resetPassword">忘记密码</router-link>
			</div>
		</div>
		<div id="logins">
			<div class="logins_top" @click="clickLogin">
				<span>登录</span>
			</div>
			<div class="logins_bottom">
				<span @click="phoneLogin">短信登录</span>
                <!-- <span @click="TzReg">新用户注册</span> -->
			</div>
		</div>
    </div>
</template>
<script>
import '../libs/security';
import { Dialog } from 'vant';
export default {
    data(){
        return{
		phoneNumber:'',
		passWord:'',
		redirect:''
        }
	},
    methods:{
		TzReg(){
			this.$router.push('register')	
		},
		phoneLogin(){
			this.$router.push('loginphone?redirect='+this.redirect)
		},
        clickLogin(){
			if(this.phoneNumber=='' || this.passWord==''){
				Dialog.alert({
						message: '请输入手机号和密码'
				})
			}else{
			var url ='headquarters/Api/generateRSAKey.do';
			var params = new URLSearchParams();
			params.append('phone', this.phoneNumber);//你要传给后台的参数值 key/value
				this.$axios({
				method: 'post',
				url:url,
				data:params
				}).then( (res)=>{
					if(res.data.status==0){
					var rsa = res.data
					var pwdKey = new RSAUtils.getKeyPair(rsa.content.exponent, "", rsa.content.modulus);//加密操作
					var reversedPwd = this.passWord.split("").reverse().join("");
					var encrypedPwd = RSAUtils.encryptedString(pwdKey, reversedPwd);
					var url ='phone/Api/groupAccountLogin.do';
					var params = new URLSearchParams();
					params.append('phone', this.phoneNumber);//你要传给后台的参数值 key/value
					params.append('PASSWORD',encrypedPwd);
					this.$axios({ //登录接口
					method: 'post',
					url:url,
					data:params
					}).then(res => {
						if(res.data.status==0){
							localStorage.setItem("userInfo", JSON.stringify(res.data.content))
          					this.$router.replace(this.redirect)
							// if(res.data.content.role==2){
							// 	this.$router.replace('/giftCoupons')
							// }else if(res.data.content.role==4){
							// 	this.$router.replace('/indexYG')
							// }else{
							// 	this.$router.replace('/')
							// }
						}
					})
				}
			});
		}
	  }	
	},
	created(){
		this.redirect = this.$route.query.redirect || '/';
	}
}
//百度数字统计
var _hmt = _hmt || [];
(function() {
  var hm = document.createElement("script");
  hm.src = "https://hm.baidu.com/hm.js?1678150ae4fb32e8f156a085feb56d7d";
  var s = document.getElementsByTagName("script")[0]; 
  s.parentNode.insertBefore(hm, s);
})();
</script>
<style>
@import '../style/css/common.css';
@import '../style/css/reset.css';
@import '../style/css/login.css';
</style>