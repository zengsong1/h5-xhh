
const state = {//礼品兑换券
    giftExchange:{
        goodsList:null,
        COUPON_NAME:null,
        COUPON_CARD_ID:null
    },
    checkaddress:null,//选中地址
    defaultaddress:null,//默认地址
    FPflag:false,//发票开关
    FPmessage:{
        UNIT_NAME:null,
        TAXPAYER_CODE:null,
        REGISTERED_ADDRESS:null,
        REGISTERED_CALL:null,
        BANK:null,
        AREA:null,
        AREA_ID:null,
        BANK_ACCOUNT:null,
        CITY:null,
        CITY_ID:null,
        CONTACT:null,
        DETAILS_ADDRESS:null,
        PROVINCE:null,
        PROVINCE_ID:null,
        RECEIVE:null,
    } //发票默认信息
}

const mutations = {
    checkDZ(state,payload) {
        state.checkaddress=payload
    },
    defaultDZ(state,payload) {
        state.defaultaddress=payload
    },
    deleteDZ(state,payload){//删除地址时
        if(payload=='0'){
            state.defaultaddress=null
        }else if(state.checkaddress==payload){
            state.checkaddress=null
        }
    },
    defaultFP(state,payload){
        if(payload){
            state.FPmessage=payload
        }
    },
    checkFP(state,payload){
        state.FPflag = payload   
    },
    giftCoupons(state,payload){
        state.giftExchange=payload   
    },
    deletegiftCoupons(state,payload){
        state.giftExchange=payload
    },

}

const actions = {
    // addAction(context,payload) {
    //     context.commit('checkGOODSNUM',payload)
    // }
}
export default {
    namespaced : true,
    state,
    actions,
    mutations
}