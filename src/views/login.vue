<template>
  <div>
    <div class="login_top">
      <img src="../img/home/登录/denglu.png" alt="" />
      <div class="gs_bc">
        <img src="../img/home/首页/gongsi@3x.png" alt="" />
      </div>
    </div>
    <div class="logint_user_name">账号登录</div>
    <div v-if="isShow">
      <div id="login">
        <div class="login_phone">
          <img src="../img/home/登录/iphone.png" alt="" />
          <input type="text" placeholder="请输入手机号" v-model="phoneNumber" @input="intUserName()" />
          <img v-show="userNameClose" @click="closePhoneNumber" src="../img/home/登录/close.png" alt="">
        </div>
        <div class="login_password">
          <img src="../img/home/登录/pw.png" alt="" />
          <input type="password" placeholder="请输入密码" v-model="passWord"  @input="intPwd()"/>
          <img v-show="pwdClose"  @click="closePwd" src="../img/home/登录/close.png" alt="">
          <!-- <router-link to="resetPassword" class="forget">忘记密码</router-link> -->
        </div>
      </div>
      <div id="logins">
        <div class="logins_top" @click="clickLogin">
          <span>登录</span>
        </div>
        <div class="logins_bottom">
          <!-- <span @click="phoneLogin">短信登录</span> -->
          <!-- <span @click="TzReg">新用户注册</span> -->
        </div>
      </div>
    </div>
    <div v-else>
      <div id="login">
        <div class="login_phone">
          <input type="text" placeholder="请输入手机号" v-model="phoneNumber" />
        </div>
        <div class="login_password">
          <input type="text" placeholder="请输入验证码" v-model="code" />
          <span v-show="show" @click="getcode">获取验证码</span>
          <span v-show="!show" class="count">{{ count }} s</span>
        </div>
      </div>
      <div id="logins">
        <div class="logins_top" @click="Login">
          <span>登录</span>
        </div>
        <div class="logins_bottom">
          <span @click="MMLogin">密码登录</span>
          <!-- <router-link to="register">新用户注册</router-link> -->
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import "../libs/security";
import { Toast } from "vant";
export default {
  data() {
    return {
      isShow: true,
      phoneNumber: "",
      passWord: "",
      code: "",
      show: true,
      count: "",
      timer: null,
      bankType: "",
      userNameClose : false, // 显示×
      pwdClose : false, // 
    };
  },
  methods: {
    // 清除用户名
    closePhoneNumber() {
      this.phoneNumber = ""
      this.userNameClose  = false 
    },
    closePwd() {
        this.passWord = ""
        this.pwdClose  = false 
    },
    // 用户输入监听
    intUserName() {
      if(this.phoneNumber == "") {
        this.userNameClose  = false 
      }
      else {
        this.userNameClose  = true 
        
      }
      
    },
    // 密码输入监听
    intPwd() {
      if(this.passWord == "") {
        this.pwdClose  = false 
      }
      else {
        this.pwdClose  = true 
      }
      
    },
    TzReg() {
      this.$router.push("register");
    },
    phoneLogin() {
      this.isShow = false;
    },
    MMLogin() {
      this.isShow = true;
    },
    clickLogin() {
      if (this.phoneNumber == "" || this.passWord == "") {
        Toast("请输入手机号和密码");
        return;
      }
      var url = "headquarters/Api/generateRSAKey.do";
      var params = new URLSearchParams();
      params.append("phone", this.phoneNumber); //你要传给后台的参数值 key/value
      this.$axios({
        method: "post",
        url: url,
        data: params,
      }).then((res) => {
        if (res.data.status == 0) {
          var rsa = res.data;
          var pwdKey = new RSAUtils.getKeyPair(
            rsa.content.exponent,
            "",
            rsa.content.modulus
          ); //加密操作
          var reversedPwd = this.passWord.split("").reverse().join("");
          var encrypedPwd = RSAUtils.encryptedString(pwdKey, reversedPwd);
          var url = "auditGroup/Api/accountLogin.do";
          var params = new URLSearchParams();
          params.append("phone", this.phoneNumber); //你要传给后台的参数值 key/value
          params.append("PASSWORD", encrypedPwd);
          this.$axios({
            //登录接口
            method: "post",
            url: url,
            data: params,
          }).then((res) => {
            if (res.data.status == 0) {
              localStorage.setItem(
                "userInfo",
                JSON.stringify(res.data.content)
              );
              this.$router.replace(this.redirect);
              // if(res.data.content.role==2){
              // 	this.$router.replace('/giftCoupons')
              // }else if(res.data.content.role==4){
              // 	this.$router.replace('/indexYG')
              // }else{
              // 	this.$router.replace('/')
              // }
            }
          });
        }
      });
    },
    getcode() {
      var url = "headquarters/Api/sendNoChickSms.do";
      var params = new URLSearchParams();
      params.append("phone", this.phoneNumber); //你要传给后台的参数值 key/value
      this.$axios({
        method: "post",
        url: url,
        data: params,
      }).then((res) => {
        if (res.data.status == 0) {
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
            }, 1000);
          }
        }
      });
    },
    Login() {
      var url = "phone/Api/groupSmsLogin.do";
      var params = new URLSearchParams();
      params.append("phone", this.phoneNumber); //你要传给后台的参数值 key/value
      params.append("code", this.code);
      this.$axios({
        //登录接口
        method: "post",
        url: url,
        data: params,
      }).then((res) => {
        if (res.data.status == 0) {
          localStorage.setItem("userInfo", JSON.stringify(res.data.content));
          this.$router.replace(this.redirect);
        }
      });
    },
  },
  created() {
    this.redirect = this.$route.query.redirect || "/";
  },
  mounted() {
    if (this.$route.query.fromType == "ruralBank") {
      document.title = "深圳农商行";
      this.bankType = "ruralBank";
    }
  },
};
//百度数字统计
var _hmt = _hmt || [];
(function () {
  var hm = document.createElement("script");
  hm.src = "https://hm.baidu.com/hm.js?1678150ae4fb32e8f156a085feb56d7d";
  var s = document.getElementsByTagName("script")[0];
  s.parentNode.insertBefore(hm, s);
})();
</script>
<style>
@import "../style/css/common.css";
@import "../style/css/reset.css";
@import "../style/css/login.css";
@import "../style/css/loginphone.css";
</style>