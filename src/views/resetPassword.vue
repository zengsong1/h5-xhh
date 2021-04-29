<template>
    <div>
        <div id="header_amend">
            <goBack></goBack>
			<h1>重置密码</h1>
		</div>
		<div id="resetPassword">
			<div class="resetPassword_inner">
			<input type="text" placeholder="手机号" v-model="phoneNumber" :disabled="inputFlag"/>
			<input type="text" placeholder="验证码" v-model="captcha"/>
			<span v-show="show" @click="getcode">获取验证码</span>
			<span v-show="!show" class="count">{{count}} s</span>
			<input type="password" placeholder="密码" v-model="password"/>
			<input type="password" placeholder="确认密码" v-model="surepassword"/>
			</div>
		</div>
		<div id="resetPassword_footer">
			<div @click="clickPassword">重置密码</div>
		</div>
    </div>
</template>
<script>
import goBack from '../components/goback.vue'
import { Dialog } from 'vant'; //提示框
export default {
	data(){
		return{
			show: true,
			phoneNumber:'',
			captcha:'',
			password:'',
			surepassword:'',
			count:'',
			inputFlag:false
		}
	},
	methods:{
		getcode(){//获取验证码
			var url ='headquarters/Api/sendEditSms.do';
			var params = new URLSearchParams();
			params.append('phone', this.phoneNumber);//你要传给后台的参数值 key/value
				this.$axios({
				method: 'post',
				url:url,
				data:params
				}).then((res=>{
				     if(res.data.status==0) {
							const TIME_COUNT = 60; //验证码倒计时
							if (!this.timer) {
							this.count = TIME_COUNT;
							this.show = false;
							this.timer = setInterval(() => {
							if (this.count > 0 && this.count <= TIME_COUNT) {
							this.count--;
							} else {
								this.show = true;
								clearInterval(this.timer);
								this.timer = null;
							}
							}, 1000)
						}
					}else{
						Dialog.alert({
						message:res.data.content
						})
					}
				}))
		},
		clickPassword(){ //点击修改密码
			if(!this.phoneNumber=='' && !this.captcha=='' && !this.password=='' && !this.surepassword==''){
				if(this.password == this.surepassword){
					var url='group/Api/editPassword.do';
					var params = new URLSearchParams();
					params.append('phone', this.phoneNumber);
					params.append('PASSWORD', this.password);
					params.append('code', this.captcha);
						this.$axios({
						method: 'post',
						url:url,
						data:params
						}).then((res)=>{
							if(res.data.status==0){
								Dialog.alert({
								message:'修改成功'
								}).then(()=>{
									this.$router.push('login')
								})
							}else{
								Dialog.alert({
								message:res.data.content
								})
							}
						})					
				}else{
					Dialog.alert({
					message:'密码输入不一致'
					})
				}
			}else{
				Dialog.alert({
				message:'请填写相关数据'
				})
			}
		},
	},
    components:{
        goBack
	},
	created(){
		if(this.$route.query.phone){
			this.phoneNumber=this.$route.query.phone
			this.inputFlag=true;
		}else{
			this.phoneNumber=''
			this.inputFlag=false;
		}
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
@import '../style/css/resetPassword.css';
</style>