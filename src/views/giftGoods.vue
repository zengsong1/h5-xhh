<template>
    <div>
        <goBack></goBack>
        <div id="collect_title">
			<h1>{{giftExchange.COUPON_NAME?giftExchange.COUPON_NAME:''}}</h1>
			<p @click="signOut">退出</p>
		</div>
         <div id="giftCard">
			<p>兑换卡号 : {{giftExchange.COUPON_CARD_ID?giftExchange.COUPON_CARD_ID:''}}</p>
		</div>
	    <div id="collect_main" v-for="(item,index) in giftExchange.goodsList" :key="index">
			<div class="collect_main_left">
				<img :src="item.INDEX_PICTURE">
			</div>
			<div class="collect_main_right">
				<p>{{item.GOODS_NAME}}</p>
				<span>￥{{item.CURRENT_PRICE|numFilter}}</span>
				<button @click="goExchange(item.GOODS_ID)">兑换</button>
			</div>
		</div>
    </div>
</template>
<script>
import goBack from '../components/goback.vue';
import { Toast } from 'vant';
import { mapState,mapMutations } from 'vuex'
export default {
    data(){
        return{
        }
    },
    computed:{
        ...mapState('address', ["giftExchange"]),
    },
    components:{
        goBack
    },
    methods:{
        ...mapMutations('address', ["deletegiftCoupons"]),
        signOut(){
            let url ='group/Api/exitCoupon.do';
                        let params = new URLSearchParams();
                        params.append('token', window.userInfo.token);
                        params.append('couponKey', this.giftExchange.couponKey);
                        this.$axios({
                        method: 'post',
                                url:url,
                                data:params
                        }).then((res=>{
				        if(res.data.status==0) {
                          this.$router.push('/indexYG');
                          this.deletegiftCoupons('null');
					    }
				    }))  
        },
        goExchange(item){
            this.$router.push('/giftEdit?GOODS_ID='+item);
        }
    },
    mounted(){
        if(!this.giftExchange.COUPON_CARD_ID){
            this.$router.go(-1);
        }
    },
    filters: {
	numFilter (value) {
         // 截取当前数据到小数点后两位
    	let realVal = value.toFixed(2)
    	return realVal
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
@import '../style/css/Mycollect.css';
#giftCard{
     width: 3.75rem;
    height: .2rem;
    background: #FFFFFF;
    color: #1C1C1C;
    font-size: .14rem;
    line-height: .2rem;
    text-align: center;
}
</style>