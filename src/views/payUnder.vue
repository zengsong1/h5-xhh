<template>
    <div id="pay_main">
			<div class="pay_main_xx_00">
					<span>订单号: </span><span>{{ORDER_ID}}</span><br>
					<span>收款开户名: </span><span>艾象科技（深圳）股份有限公司</span><br>
					<span>收款账户: </span><span>000258854849</span><br>
					<span>收款开户行: </span><span>深圳农村商业银行股份有限公司共乐支行</span>
			</div>
			<div class="pay_main_xx">
				<div class="pay_main_xx_01">
					<p>支付方式:</p>
					<span>对公转账</span>
				</div>
				<div class="pay_main_xx_02">
					<p>支付金额:</p>
					<span>¥ {{REAL_PAY}}</span>
				</div>
			</div>
            <div class="pay_main_botton01" @click="goDetail">
				订单详情
			</div>
			<router-link to="/index"><div class="pay_main_botton02">
				随便逛逛
			</div>
			</router-link>
	</div>
</template>
<script>
export default {
    data(){
		return{
			ORDER_ID:'',
			REAL_PAY:'',
			GOODS_POSITION:''
		}
	},
	created(){
		this.ORDER_ID=this.$route.query.ORDER_ID
		this.REAL_PAY=this.$route.query.REAL_PAY
		this.GOODS_POSITION=this.$route.query.GOODS_POSITION
	},
	methods:{
		goDetail(){
			this.$router.push('orderDetail?GOODS_POSITION='+this.GOODS_POSITION+'&&ORDER_ID='+this.ORDER_ID)
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
@import '../style/css/reset.css';
@import '../style/css/common.css';
@import '../style/css/pay.css';
.pay_main_xx_00{
	position: absolute;
	left: .6rem;
	top: 1.4rem;
	z-index: 1;
	line-height: .3rem;
	font-weight: bold;
}
#pay_main{
	width: 3.1rem;
}
.pay_main_xx{
	width: 3.1rem;
	background-size: 3.1rem 2.42rem;
}
.pay_main_xx_00 span{
	font-size: .1rem;
}
.pay_main_botton01,.pay_main_botton02{
	width:3.1rem;
}
</style>