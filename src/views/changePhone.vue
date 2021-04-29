<template>
    <div>
        <div id="header_amend">
            <goBack></goBack>
			<h1>更换手机号</h1>
		</div>
        <div id="resetPassword" v-show="!nextFlag">
			<div class="resetPassword_inner">
			<input type="text" placeholder="手机号" v-model="phoneNumber" disabled/>
			<input type="text" placeholder="验证码" v-model="captcha"/>
			<span v-show="show" @click="getcode">获取验证码</span>
			<span v-show="!show" class="count">{{count}} s</span>
			</div>
		</div>
        <div id="resetPassword" v-show="nextFlag">
			<div class="resetPassword_inner">
			<input type="text" placeholder="手机号" v-model="phoneNumber"/>
			<input type="text" placeholder="验证码" v-model="captcha"/>
            <span v-show="show" @click="getcode">获取验证码</span>
			<span v-show="!show" class="count">{{count}} s</span>
			</div>
		</div>
		<div id="resetPassword_footer">
			<div @click="next" v-show="!nextFlag">下一步</div>
            <div @click="next" v-show="nextFlag">确定</div>
		</div>
    </div>
</template>
<script>
import goBack from '../components/goback.vue'
import { Toast} from 'vant';
export default {
    data(){
        return{
            show: true,
            phoneNumber:'',
            nextFlag:false,
            phoneNumbertoo:'',
			captcha:'',
			count:'',
        }
    },
    components:{
        goBack
    },
    methods:{
        getcode(){//获取验证码
            if(this.nextFlag){
                var url ='headquarters/Api/bindNewPhoneSms.do';
            }else{
                var url ='headquarters/Api/verifyPhoneSms.do';
            }
			var params = new URLSearchParams();
            params.append('phone', this.phoneNumber);//你要传给后台的参数值 key/value
            params.append('token', window.userInfo.token);
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
							}
							}, 1000)
						}
					}
				}))
        },
        next(){
            if(this.nextFlag){
                var url ='headquarters/Api/editPhone.do';
            }else{
                var url ='headquarters/Api/verifyPhone.do';
            }
			var params = new URLSearchParams();
            params.append('phone', this.phoneNumber);//你要传给后台的参数值 key/value
            params.append('token', window.userInfo.token);
            params.append('code', this.captcha);
            this.$axios({
					method: 'post',
					url:url,
					data:params
					}).then((res)=>{
                        if(res.data.status==0){
                            if(this.nextFlag){
                                Toast('修改成功')
                                setTimeout(() => {
                                    this.$router.push('login')
                                }, 1000);
                            }else{
                                this.nextFlag=true;
                                this.phoneNumber=''
                                this.captcha=''
                                this.show = true;
								clearInterval(this.timer);
								this.timer = null;
                            }    
                        }	
                    })
        }
    },
    created(){
		if(this.$route.query.phone){
			this.phoneNumber=this.$route.query.phone
		}else{
			this.phoneNumber=''
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
<style scoped>
@import '../style/css/common.css';
@import '../style/css/reset.css';
@import '../style/css/resetPassword.css';
html,body{
    background: #ffffff;
}
</style>