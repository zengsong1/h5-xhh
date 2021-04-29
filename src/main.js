import Vue from 'vue'
import App from './App.vue'
import router from './router'
import axios from 'axios'
import 'vant/lib/index.css';
import store from './store'
import { Toast,DatetimePicker,Popup,RadioGroup, Radio ,Search,Overlay,Icon,ActionSheet,Area,Field,Tabs,Tab,Dialog,Button} from 'vant';
import VueLazyLoad from 'vue-lazyload'; 
Vue.use(DatetimePicker).use(Popup).use(RadioGroup).use(Radio).use(Search ).use(Overlay).use(Icon).use(Dialog).use(Button )
.use(ActionSheet).use(Area).use(Field).use(Tabs).use(Tab).use(Toast);
Vue.use(VueLazyLoad,{
  preLoad: 1.3,
  error: require("../src/img/home/loading02.png"),
  loading: require("../src/img/home/loading02.png"),
  attempt: 1
})

// 响应拦截器// 状态码返回统一处理
axios.interceptors.response.use(     
  response => { 
  // 如果返回的状态码为200，说明接口请求成功，可以正常拿到数据 
  if (response.status === 200) {
    switch(response.data.status) {
      case '1':
            Toast(response.data.content)
        break;
      case '2':
            Toast('请登录')
            if(localStorage.getItem('userInfo')){
              localStorage.removeItem('userInfo')
            }
            setTimeout(() => {
              router.push('/login')
            }, 2000);
        break;

      case '3':
            Toast('用户名或密码错误')
        break;
        
      case '4':
            Toast('金额不足')
        break;

      case '5':
            Toast('积分不足')
        break;
    }
    return Promise.resolve(response);
    } else {  
    return Promise.reject(response); 
    } 
  }
)
Vue.config.productionTip = false
// axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';
axios.defaults.baseURL="https://www.zhaolipin.net/zlp-api/";//默认生产地址前缀
//  axios.defaults.baseURL="http://192.168.0.117:8089";//默认测试地址前缀
//  axios.defaults.baseURL="https://test.zhaolipin.net/zlp-api/";//默认测试地址前缀

router.beforeEach((to, from, next) => {
  if (to.path == "/login" || to.path == "/resetPassword" || to.path == "/loginphone" || to.path == "/resetPassword"  || to.path == "/tcp" || to.path == "/register"|| to.path == "/changePhone") {
    document.querySelector("body").setAttribute("style","background:#FFFFFF")
    next();
}else {
    document.querySelector("body").setAttribute("style","background:#F1F1F1")
    next();
  }
  if(to.path=="/index" || to.path=="/login"|| to.path=="/loginphone" || 
  to.path=="/sort" || to.path=="/giftorder" || to.path=="/changePhone" || 
  to.path=="/myMessage" || to.path=="/indexYG" || to.path=="/myYG" || to.path=="/giftEdit" || 
  to.path=="/search" || to.path=="/initialSearch" || to.path=="/detail" || to.path=="/custom_detail"||
  to.path=="/shoppingcart"||to.path=="/addressSG"||to.path=="/addressEdit"||to.path=="/writeorder"||
  to.path=="/messageFP"||to.path=="/orderDetail"||to.path=="/design"
    ||to.path=="/logistics"||to.path=="/my"||to.path=="/myinformation"||to.path=="/Mycollect" ||
    to.path=="/Mxintegral" ||to.path=="/normal_order"||to.path=="/integral_order"||to.path=="/custom_order" ||
    to.path=="/giftCoupons" ||to.path=="/Mywallet" || to.path=="/modifyOrder" || to.path == "/accountInfo"){
      // if(localStorage.getItem('MALLS_NAME')){
      //   document.title=localStorage.getItem('MALLS_NAME')
      // }else{
      //   document.title='深购网'
      // }
      document.title='旭焕晖物业商城'
    if(localStorage.getItem('userInfo')){
      window.userInfo=JSON.parse(localStorage.getItem('userInfo'));
      }else{
      window.userInfo=''
      }
  } 
})

Vue.prototype.$axios = axios;
new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')

