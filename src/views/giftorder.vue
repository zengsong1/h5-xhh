<template>
    <div>
        <goBack></goBack>
        <div id="orderPT_title">
			礼品兑换订单
		</div> 
	    <!-- 订单详情 -->
        <div style="margin-top:.7rem;margin-bottom:.4rem;">
		<div id="orderPT_main" v-for="(item,index) in orderList" :key="index">
			<div class="orderPT_main_top">
				<h6 class="h6tilte">订单日期</h6>
				<p>{{item.CREATE_DATE}}</p>
				<span>{{item.ORDER_STATUS==0 ?'待支付': item.ORDER_STATUS== 1 ?'待发货': item.ORDER_STATUS==2 ?'待收货': item.ORDER_STATUS==3 ?'已完成': item.ORDER_STATUS==4 ?'取消订单'
                  : item.ORDER_STATUS==5 ?'退款成功':''}}</span>
			</div>
			<div class="orderPT_main_center">
				<div class="orderPT_main_img">
					<img :src="item.INDEX_PICTURE">
				</div>
				<div class="orderPT_main_xx">
					<p>{{item.GOODS_NAME}}</p>
                    <p style="font-size:.1rem;color: #7D7D7D;">{{item.SPEC}}</p>
                    <div style="display:flex;justify-content: space-between;">
                    </div>
				</div>
			</div>
            <div class="orderPT_main_dh">
				<span>兑换券订单号 : </span><span>{{item.COUPON_ORDER_ID}}</span><br>
                <span>兑换券卡号 : </span><span>{{item.COUPON_CARD_ID}}</span>
			</div>
            <div class="orderPT_main_sj">
				<span>收件人信息 :</span><span>{{item.RECEIVER+' ; '+item.PHONE_NUMBER+' ; '+item.PROVINCE+item.CITY+item.AREA+item.DETAILS_ADDRESS}}</span><br>
			</div>
			<div class="orderPT_main_bottom">
                <router-link :to="'logistics?COUPON_ORDER_ID='+item.COUPON_ORDER_ID"><button type="button" v-show="item.ORDER_STATUS==3 ||item.ORDER_STATUS==2">物流跟踪</button></router-link>
                <button type="button" @click="qrsh(item.COUPON_ORDER_ID)" v-show="item.ORDER_STATUS==2">确认收货</button>
			</div>
		</div>
        <div class="noList" v-show="orderList.length==0">
            <img src="../img/home/ddqs@2x.png">
            <p>您没有相关订单</p>
        </div>
        </div>
    </div>
</template>
<script>
import goBack from '../components/goback.vue'
import { Dialog,Toast} from 'vant';
export default {
    data(){
        return{
            orderList:[],
            currentPage:'1'
        }
    },
    components:{
        goBack
    },
    methods:{
        getorderList(){
           var url ='group/Api/couponOrder.do';
				var params = new URLSearchParams();
                params.append('token',window.userInfo.token);
                params.append('currentPage',this.currentPage);
				this.$axios({
				method: 'post',
				url:url,
				data:params
				}).then((res)=>{
                    if(res.data.status==0){
                        this.orderList=res.data.content.couponOrder
                    }
                })
       },
       qrsh(item){
           Dialog.confirm({
				message:'确认收货?'
			}).then(()=>{
            let url ='group/Api/couponConfirmReceive.do';
				var params = new URLSearchParams();
                params.append('token',window.userInfo.token);
                params.append('COUPON_ORDER_ID',item);
				this.$axios({
				method: 'post',
				url:url,
				data:params
				}).then((res)=>{
                    if(res.data.status==0){
                        Toast('确认成功')
                        this.getorderList()
                    }
                })
            }).catch(()=>{

			})
       }
    },
    activated(){
        this.getorderList()
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
@import '../style/css/orderPT.css';
.header-back{
    position: fixed;
    top: 0.2rem;
    left: 0.2rem;
}
.orderPT_main_center{
    border-bottom: 1px solid #D5D5D5;
}
.orderPT_main_dh{
    border-bottom: 1px solid #D5D5D5;
    color: #1C1C1C;
    font-size: .14rem;
    height: .5rem;
}
.orderPT_main_dh span:nth-child(5){
    display: inline-block;
    text-indent: 1em;
}
.orderPT_main_sj{
    color: #1C1C1C;
    font-size: .14rem;
}
.orderPT_main_sj span:nth-child(2){
    display: inline-block;
    text-indent: 1em;
}
</style>