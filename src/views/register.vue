<template>
  <div>
    <div id="register_header">
      <goBack></goBack>
      <h1>注册</h1>
    </div>
    <div v-show="!success">
      <div class="logo">
        <img src="../assets/AXKJlogo.png" />
      </div>
      <div id="register">
        <div class="register_inner">
          <div class="type-option">
            <input placeholder="类型选择" v-model="optionType" />
            <div @click="swit" :class="[isShow?'trangle-up':'trangle-down']"></div>
            <ul v-show="isShow">
              <li
                @click="getOptionValue(item)"
                v-for="(item,index) in option"
                :key="index"
              >{{item.value}}</li>
            </ul>
          </div>

          <div class="phone-code">
            <input type="text" placeholder="手机号" v-model="phoneNumber" @input="phoneReg()" />
            <i style="top:.3rem;" v-show="phoneNo">请输入正确的手机号</i>
            <span v-show="show" @click="getcode">获取验证码</span>
          </div>
          <input type="text" placeholder="验证码" v-model="captcha" />

          <span v-show="!show" class="count">{{count}} s</span>
          <input type="password" placeholder="密码" v-model="password" />
          <input type="password" placeholder="确认密码" v-model="surepassword" />
          <input type="text" placeholder="推荐码" v-model="qyname" />
          <div class="recommend-code">
            <span>推荐码</span>
            <div>xxxx</div>
          </div>
        </div>
      </div>
      <div id="footer_register">
        <div class="footer_register_inner">
          <input type="checkbox" id="click" v-on:click="CheckItem($event)" name="checkbox" />
          <label for="click"></label>
          <span>同意</span>
          <i>《艾象科技服务协议》</i>
        </div>
        <div class="footer_register_bottom" @click="register">
          <span>注册</span>
        </div>
      </div>
    </div>
    <div class="register-succ" v-show="success">
      <div class="succ-top">
        <div>
          <img src="../assets/cg.png" style="height:.62rem;width:.62rem" />
        </div>
        <div class="succ-txt">恭喜您，注册成功</div>
        <div class="waite">请等待人员审核，我们将在30分钟内审核完成</div>
      </div>
      <div class="succ-btn" @click="goShopping">立即购物</div>
    </div>
  </div>
</template>
<script>
import { Uploader } from "vant";
import { Dialog } from "vant";
import goBack from "../components/goback.vue";
import "../libs/security";
export default {
  data() {
    return {
      phoneNumber: "",
      captcha: "",
      password: "",
      surepassword: "",
      qyname: "",
      imgUrl: "",
      xycode: "",
      count: "",
      file: "",
      show: true,
      fileList: [], //vant 插件
      phoneNo: false, //正则显示
      xydmNo: false,
      isShow: false,
      optionType: "",
      success: false,
      option: [
        {
          id: 0,
          value: "公司"
        },
        {
          id: 1,
          value: "政府"
        }
      ]
    };
  },
  methods: {
	  goShopping(){
		  this.$router.push('/index')
	  },
    getOptionValue(item) {
      this.optionType = item.value;
      this.isShow = false;
    },
    swit() {
      this.isShow = !this.isShow;
    },
    phoneReg() {
      // 手机正则
      var reg = /^1(3|4|5|7|8)\d{9}$/;
      if (!reg.test(this.phoneNumber)) {
        this.phoneNo = true; //true为提示显示
      } else {
        this.phoneNo = false;
      }
    },
    xyReg() {
      //信用代码正则
      var Reg = /(^[ a-zA-Z0-9]{15}$)|(^[ a-zA-Z0-9]{18}$)/;
      if (!Reg.test(this.xycode)) {
        this.xydmNo = true; //true为提示显示
      } else {
        this.xydmNo = false;
      }
    },
    getcode() {
      //获取验证码
      var url = "headquarters/Api/sendNoChickSms.do";
      var params = new URLSearchParams();
      params.append("phone", this.phoneNumber); //你要传给后台的参数值 key/value
      this.$axios({
        method: "post",
        url: url,
        data: params
      }).then(res => {
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
        } else {
          Dialog.alert({
            message: res.data.content
          });
        }
      });
    },
    register() {
      //点击注册
      if (
        !this.phoneNumber == "" &&
        !this.captcha == "" &&
        !this.password == "" &&
        !this.xycode == "" &&
        !this.qyname == "" &&
        !this.phoneNo &&
        !this.xydmNo
      ) {
        if (this.password == this.surepassword) {
          if (window.xyFlag) {
            var url = "headquarters/Api/uploadLicense.do";
            let formData = new FormData(); //axios 上传图片文件
            formData.append("file", this.imgUrl); //你要传给后台的参数值 key/value
            this.$axios({
              method: "post",
              url: url,
              data: formData
            })
              .then(res => {
                if (res.data.status == 0) {
                  var url = "headquarters/Api/generateRSAKey.do";
                  var params = new URLSearchParams();
                  params.append("phone", this.phoneNumber); //你要传给后台的参数值 key/value
                  this.$axios({
                    method: "post",
                    url: url,
                    data: params
                  }).then(res => {
                    if (res.data.status == 0) {
                      var rsa = res.data;
                      var pwdKey = new RSAUtils.getKeyPair(
                        rsa.content.exponent,
                        "",
                        rsa.content.modulus
                      ); //加密操作
                      var reversedPwd = this.password
                        .split("")
                        .reverse()
                        .join("");
                      var encrypedPwd = RSAUtils.encryptedString(
                        pwdKey,
                        reversedPwd
                      );
                      var url = "headquarters/Api/frontRegister.do";
                      var params = new URLSearchParams();
                      params.append("phone", this.phoneNumber); //你要传给后台的参数值 key/value
                      params.append("code", this.captcha);
                      params.append("PASSWORD", encrypedPwd);
                      params.append("USER_NAME", this.qyname);
                      params.append("SOCIAL_CODE", this.xycode);
                      params.append("BUSINESS_LICENSE", res.data.url);
                      this.$axios({
                        method: "post",
                        url: url,
                        data: params
                      }).then(res => {
                        if (res.data.status == 0) {
                          Dialog.alert({
                            message: res.data.content,
                            overlay: true
                          });
                          this.success = true;
                          // this.$router.push('login')
                        } else {
                          Dialog.alert({
                            message: res.data.content,
                            overlay: true
                          });
                        }
                      });
                    }
                  });
                } else {
                  Dialog.alert({
                    message: "上传图片错误",
                    overlay: true
                  });
                }
              })
              .catch(err => {
                Dialog.alert({
                  message: "请上传营业执照",
                  overlay: true
                });
              });
          } else {
            Dialog.alert({
              message: "请同意协议",
              overlay: true
            });
          }
        } else {
          Dialog.alert({
            message: "密码输入不一致"
          });
        }
      } else {
        Dialog.alert({
          message: "请填写正确的相关数据"
        });
      }
    },
    onRead(file) {
      this.imgUrl = file.file; //64位编译后的图片地址
    },
    CheckItem(e) {
      if (!e.target.checked) {
        window.xyFlag = false;
      } else {
        window.xyFlag = true;
      }
    }
  },
  components: {
    goBack,
    [Uploader.name]: Uploader
  }
};
//百度数字统计
var _hmt = _hmt || [];
(function() {
  var hm = document.createElement("script");
  hm.src = "https://hm.baidu.com/hm.js?1678150ae4fb32e8f156a085feb56d7d";
  var s = document.getElementsByTagName("script")[0];
  s.parentNode.insertBefore(hm, s);
})();
</script>
<style  scoped>
@import "../style/css/common.css";
@import "../style/css/reset.css";
@import "../style/css/register.css";
.waite {
  font-size: 0.12rem;
  font-family: Microsoft YaHei;
  font-weight: 400;
  color: rgba(64, 64, 64, 1);
  margin-top: 0.09rem;
}
.register-succ {
  width: 2.75rem;
  margin: 0 auto;
  text-align: center;
}
.succ-txt {
  font-size: 0.2rem;
  font-family: Microsoft YaHei;
  font-weight: bold;
  color: rgba(57, 57, 57, 1);
}
.succ-btn {
  font-size: 0.14rem;
  font-family: Microsoft YaHei;
  font-weight: 400;
  color: rgba(255, 255, 255, 1);
  background: linear-gradient(
    90deg,
    rgba(246, 83, 107, 1) 0%,
    rgba(236, 43, 72, 1) 100%
  );
  border-radius: 3px;
  height: 0.44rem;
  line-height: 0.44rem;
  margin-top: 1.3rem;
}
.recommend-code {
  display: flex;
}
.recommend-code span {
  margin-right: 0.22rem;
}
.phone-code {
  position: relative;
}
.phone-code span {
  position: absolute;
  top: 0;
  right: 0;
}
.trangle-up {
  position: absolute;
  top: 0;
  right: 0;
  width: 0;
  height: 0;
  border-width: 0 0.12rem 0.1rem;
  border-style: solid;
  border-color: transparent transparent rgba(107, 105, 105, 1);
}
.trangle-down {
  position: absolute;
  top: 0;
  right: 0;
  width: 0;
  height: 0;
  border-top: 0.1rem solid rgba(107, 105, 105, 1);
  border-right: 0.12rem solid transparent;
  border-left: 0.12rem solid transparent;
}
.type-option {
  position: relative;
  margin-bottom: 0.4rem;
}
.type-option input {
  margin-bottom: 0 !important;
}
.type-option ul {
  background: rgba(242, 242, 242, 1);
  text-align: right;
  font-size: 0.14rem;
  font-family: Microsoft YaHei;
  font-weight: 400;
  color: rgba(32, 32, 32, 1);
  /* display: none; */
}
.type-option ul li {
  height: 0.3rem;
  line-height: 0.3rem;
  padding: 0 0.28rem;
  box-sizing: border-box;
}
.logo {
  text-align: center;
  margin-bottom: 0.21rem;
}
#register >>> .van-uploader__input {
  position: absolute;
  top: 0;
  width: 100% !important;
  height: 100%;
  overflow: hidden;
  cursor: pointer;
  opacity: 0;
}
</style>