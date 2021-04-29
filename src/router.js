import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)

const routerPush = VueRouter.prototype.push//路由报错处理
VueRouter.prototype.push = function push(location) {
  return routerPush.call(this, location).catch(error=> error)
}
export default new VueRouter({
  mode: 'history',
  routes: [
    { path: '/', redirect: 'index' },
    { path: '/index', component: ()=> import('./views/indexJT.vue'),meta: {keepAlive: true},
    beforeEnter: (to, from, next) => {
      if (localStorage.getItem('userInfo')){
          let userInfo=JSON.parse(localStorage.getItem('userInfo'))
          if (userInfo.role==2){
            next({
              path: '/giftCoupons',
            })
          }else if (userInfo.role==4){
            next({
              path: '/indexYG',
            })
          }else{
            next()
          }
      }else {
        next()
      }
        
    }},
    
    { path: '/indexYG', component: () => import('./views/indexYG.vue'),meta: {keepAlive: false}},
    { path: '/login', component: () => import('./views/login.vue'),meta: {keepAlive: true}},
    { path: '/giftCoupons', component: () => import('./views/giftCoupons.vue'),meta: {keepAlive: false}},
    { path: '/giftorder', component: () => import('./views/giftorder.vue'),meta: {keepAlive: true}},
    { path: '/giftGoods', component: () => import('./views/giftGoods.vue'),meta: {keepAlive: true}},
    { path: '/giftEdit', component: () => import('./views/giftEdit.vue'),meta: {keepAlive: true}},
    { path: '/myMessage', component: () => import('./views/myMessage.vue'),meta: {keepAlive: true}},
    { path: '/changePhone', component: () => import('./views/changePhone.vue'),meta: {keepAlive: false}},
    { path: '/myData', component: () => import('./views/myData.vue'),meta: {keepAlive: true}},
    { path: '/myYG', component: () => import('./views/myYG.vue'),meta: {keepAlive: false}},
    { path: '/loginphone', component: () => import('./views/loginphone.vue'),meta: {keepAlive: true}},
    { path: '/resetPassword', component: () => import('./views/resetPassword.vue'),meta: {keepAlive: false}},
    { path: '/register', component: () => import('./views/register.vue'),meta: {keepAlive: true}},
    { path: '/sort', component: () => import('./views/sort.vue'),meta: {keepAlive: true},
    beforeEnter: (to, from, next) => {
      if (localStorage.getItem('userInfo')){
        let userInfo=JSON.parse(localStorage.getItem('userInfo'))
          if (userInfo.role==4){
          next({
            path: '/indexYG',
          })
        }else{
          next()
        }
      }else {
      next()
      }
      }
    },
    { path: '/initialSearch', component: () => import('./views/initialSearch.vue'),meta: {keepAlive: false}},
    { path: '/my', component: () => import('./views/my.vue'),meta: {keepAlive: true}},
    { path: '/shoppingcart', component: () => import('./views/shoppingcart.vue'),meta: {keepAlive: false},
      beforeEnter: (to, from, next) => {
        if (!localStorage.getItem('userInfo')) {
          next({
            path: '/login',
            query: {
              redirect:to.fullPath
            }
          })
        } else {
          next()
        }
      } },
      { path: '/weekSpecial', component: () => import('./views/weekSpecial.vue'),meta: {keepAlive: false}},
      { path: '/festival', component: () => import('./views/dragonBoatFestival.vue'),meta: {keepAlive: false}},
      { path: '/midAutumn', component: () => import('./views/mid-autumn.vue'),meta: {keepAlive: false}},
      { path: '/startSchool', component: () => import('./views/start_school.vue'),meta: {keepAlive: false}},
      { path: '/national', component: () => import('./views/national.vue'),meta: {keepAlive: false}},
      { path: '/doubleNinth', component: () => import('./views/doubleNinth.vue'),meta: {keepAlive: false}},
      { path: '/calendar', component: () => import('./views/calendar.vue'),meta: {keepAlive: false}},
      { path: '/envelope', component: () => import('./views/envelope.vue'),meta: {keepAlive: false}},
      { path: '/year', component: () => import('./views/year.vue'),meta: {keepAlive: false}},
      { path: '/umbrella', component: () => import('./views/umbrella.vue'),meta: {keepAlive: false}},
    { path: '/detail', component: () => import('./views/detail.vue'),meta: {keepAlive: false}},
    { path: '/addressEdit', component: () => import('./views/addressEdit.vue'),meta: {keepAlive: false}},
    { path: '/addressSG', component: () => import('./views/addressSG.vue'),meta: {keepAlive: false}},
    { path: '/custom_detail', component: () => import('./views/custom_detail.vue'),meta: {keepAlive: false}},
    { path: '/writeorder', component: () => import('./views/writeorder.vue'),meta: {keepAlive: true}},
    { path: '/search', component: () => import('./views/search.vue'),meta: {keepAlive: true}},
    { path: '/messageFP', component: () => import('./views/messageFP.vue'),meta: {keepAlive: true}},
    { path: '/payUnder', component: () => import('./views/payUnder.vue'),meta: {keepAlive: false}},
    { path: '/orderDetail', component: () => import('./views/orderDetail.vue'),meta: {keepAlive: true}},
    { path: '/design', component: () => import('./views/design.vue'),meta: {keepAlive: true}},
    { path: '/logistics', component: () => import('./views/logistics.vue'),meta: {keepAlive: true}},
    { path: '/myinformation', component: () => import('./views/myinformation.vue'),meta: {keepAlive: true}},
    { path: '/customerFW', component: () => import('./views/customerFW.vue'),meta: {keepAlive: true}},
    { path: '/question_01',component: () => import('./views/question_01.vue'),meta: {keepAlive: true}},
    { path: '/question_02',component: () => import('./views/question_02.vue'),meta: {keepAlive: true}},
    { path: '/question_03', component: () => import('./views/question_03.vue'),meta: {keepAlive: true}},
    { path: '/question_04', component: () => import('./views/question_04.vue'),meta: {keepAlive: true}},
    { path: '/question_05',component: () => import('./views/question_05.vue'),meta: {keepAlive: true}},
    { path: '/question_06', component: () => import('./views/question_06.vue'),meta: {keepAlive: true}},
    { path: '/question_07', component: () => import('./views/question_07.vue'),meta: {keepAlive: true}},
    { path: '/Mycollect', component: () => import('./views/Mycollect.vue'),meta: {keepAlive: false}},
    { path: '/Myintegral', component: () => import('./views/Myintegral.vue'),meta: {keepAlive: true}},
    { path: '/Mxintegral', component: () => import('./views/Mxintegral.vue'),meta: {keepAlive: true}},
    { path: '/normal_order', component: () => import('./views/normal_order.vue'),meta: {keepAlive: false}},
    { path: '/custom_order', component: () => import('./views/custom_order.vue'),meta: {keepAlive: true}},
    { path: '/integral_order', component: () => import('./views/integral_order.vue'),meta: {keepAlive: true}},
    { path: '*',component: (resolve) => require(['./views/error404.vue'], resolve)},
    { path: '/Mywallet', component: () => import('./views/Mywallet.vue'),meta: {keepAlive: true}},
    { path: '/unitManage', component: () => import('./views/unit_manger.vue'),meta: {keepAlive: true}},
    { path: '/foundationManage', component: () => import('./views/foundation_manger.vue'),meta: {keepAlive: true}},
    { path: '/staff', component: () => import('./views/staff.vue'),meta: {keepAlive: true}},
    { path: '/staffEditor', component: () => import('./views/staff_editor.vue'),meta: {keepAlive: true}},
    { path: '/groupManage', component: () => import('./views/groupManger.vue'),meta: {keepAlive: true}},
    { path: '/client', component: () => import('./views/client.vue'),meta: {keepAlive: true}},
    { path: '/salesManage', component: () => import('./views/sales_manage.vue'),meta: {keepAlive: true}},
    { path: '/move', component: () => import('./views/move.vue'),meta: {keepAlive: true}},
    { path: '/jtOrderDetail', component: () => import('./views/group_order_detail.vue'),meta: {keepAlive: true}},
    { path: '/accountInfo', component: () => import('./views/accountInfo.vue'),meta: {keepAlive: false}},
    { path: '/modifyData', component: () => import('./views/modifyData.vue'),meta: {keepAlive: false}},
    { path: '/modifyOrder', component: () => import('./views/modifyOrder.vue'),meta: {keepAlive: false}},
    { path: '/submitPage', component: () => import('./views/submitPage.vue'),meta: {keepAlive: false}}, 
    { path: '/active-2021dw', component: () => import('./views/active-2021dw.vue'),meta: {keepAlive: false}}, 
    
  ],
   scrollBehavior( to, from, savedPosition) {
    return {
      x: 0,
      y: 0
    }
  }
})
