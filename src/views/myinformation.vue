<template>
    <div>
        <goBack></goBack>
        <div id="header_myinformation">
			<h1>个人信息</h1>
		</div>
        <div id="main_myinformation">
			<div class="main_myinformation_inner">
				<div class="main_myinformation_inner_portrait">
					<p>头像</p>
					<!-- <img :src="userInfo.HEAD_IMAGE"> -->
                    <van-uploader :after-read="onRead" v-model="fileList" multiple :max-count="1" />
					<i class="jiantou"></i>
				</div>
				<div class="main_myinformation_inner_name">
					<p>账号昵称</p>
                    <input type="text" v-model="NICKNAME"/>
					<i class="jiantou"></i>
				</div>
				<div class="main_myinformation_inner_number">
					<p>手机号</p>
					<span>{{userInfo.PHONE}}</span>
				</div>
				<div class="main_myinformation_inner_e-Mail">
					<p>绑定邮箱</p>
                    <input type="text" v-model="EMAIL" @blur="specialReg(EMAIL)"/>
                    <i class="jiantou"></i>
				</div>
				<div class="main_myinformation_inner_enterprise-name">
					<p>企业名称</p>
					<span>{{userInfo.USER_NAME}}</span>
				</div>
				<div class="main_myinformation_inner_code">
					<p>统一社会信用代码</p>
					<span>{{userInfo.SOCIAL_CODE}}</span>
				</div>	
			</div>
		</div>
        <div class="bottom">
            <button @click="modify">修改</button>
        </div>
    </div>
</template>
<script>
import { Uploader } from 'vant';
import { Toast } from 'vant';
import goBack from '../components/goback.vue'
export default {
    data(){
        return{
            userInfo:{
            },
            NICKNAME:'',
            EMAIL:'',
            imgUrl:'',
            yxReg:true,
            fileList: [
                {
                    url:null
                }
            ],//vant 插件
        }
    },
    methods:{
        onRead(file) {
            this.imgUrl=file.file //64位编译后的图片地址	
        },
        modify(){
            if(this.NICKNAME==''||this.EMAIL==''){
                Toast('不能为空')
            }else if(!this.yxReg){
                Toast('请输入有效邮箱号')
            }else if(this.imgUrl==''){
                let url ='headquarters/Api/editUserInfo.do';
				let params = new URLSearchParams();
				params.append('token', window.userInfo.token);
                params.append('EMAIL', this.EMAIL);
                params.append('NICK_NAME', this.NICKNAME);
				this.$axios({
				method: 'post',
				url:url,
				data:params
				}).then((res)=>{
					if(res.data.status==0){
                        Toast('修改成功')
					}
                })
            }else{
                let url ='headquarters/Api/uploadLicense.do';
				let formData = new FormData() //axios 上传图片文件
				formData.append('file', this.imgUrl);//你要传给后台的参数值 key/value
				this.$axios({
				method: 'post',
				url:url,
                data:formData
                }).then((res)=>{
					if(res.data.status==0){
                        let urlList=res.data.url
                        let url ='headquarters/Api/editUserInfo.do';
                        let params = new URLSearchParams();
                        params.append('token', window.userInfo.token);
                        params.append('EMAIL', this.EMAIL);
                        params.append('NICK_NAME', this.NICKNAME);
                        params.append('HEAD_IMAGE', urlList);
                        this.$axios({
                        method: 'post',
                        url:url,
                        data:params
                        }).then((res)=>{
                            if(res.data.status==0){
                                Toast('修改成功')
                            }
                        })
					}
                })
            }
        },
        specialReg(val){
			 let reg =/^[a-zA-Z0-9_-]+@[a-zA-Z0-9_-]+(\.[a-zA-Z0-9_-]+)+$/;
             if(!reg.test(val)){
                  this.yxReg=false
			 }else{
                 this.yxReg=true
			 } 
		},
        getuserInfo(){
				var url ='headquarters/Api/userInfo.do';
				var params = new URLSearchParams();
           	 	params.append('token',window.userInfo.token);
				this.$axios({
				method: 'post',
				url:url,
				data:params
				}).then((res)=>{
                    if(res.data.status==0){
						let val=res.data.content.currentUser
                        this.userInfo=val
                        if(val.NICK_NAME!="undefined"){
                            this.NICKNAME=val.NICK_NAME
                        }
                        if(val.EMAIL!="undefined"){
                            this.EMAIL=val.EMAIL
                        }
                        this.fileList[0].url=val.HEAD_IMAGE
                        this.fileList[0].url=val.HEAD_IMAGE
                    }
                })
			},
    },
    activated(){
       this.getuserInfo(); 
    },
    components:{
        [Uploader.name]: Uploader,
        goBack
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
@import '../style/css/reset.css';
@import '../style/css/common.css';
@import '../style/css/myinformation.css';
.bottom button{
    width: 3.47rem;
    height: .4rem;
    background:#EC2B48;
    border-radius:.2rem;
    color: #ffffff;
    font-size: .14rem;
    text-align: center;
    border: none;
   
}
.bottom{
     margin: .3rem auto 0 auto;
     width: 3.47rem;
}

#main_myinformation .main_myinformation_inner i{
	position: absolute;
	right: .3rem;
}
.van-uploader__preview-image {
    display: block;
    width: .5rem !important;
    height: .5rem !important;
    border-radius: 50% !important;
}
.van-uploader__upload{
    border-radius: 50%;
    width: .5rem;
    height: .5rem;
    margin: 0 !important;
}
.van-uploader{
    left: -.1rem;
}
.van-image__error, .van-image__img, .van-image__loading{
    display: block;
    width: 100%;
    height: 100%;
    border-radius: 50%;
}
.van-uploader__preview{
    position: relative ;
    margin:0 !important;
}
.van-uploader__upload-icon{
    position: absolute;
    left: .12rem ;
}
</style>