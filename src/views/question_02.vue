<template>
    <div>
		<goBack></goBack>
        <div id="question_title">
			<h1>常见问题</h1>
		</div>
		<div id="question_mian">
			<h6 class="h6tilte">支付类</h6>
			<div class="question_mian_inner">
				<h6>Q：如果我选择银行转账，我需要注意什么吗?</h6>
				<p>A：如果您选择的是银行转账，请您务必在汇款单的用途栏
						内注明您的订单号，货款到账时间一般为款汇出后2-5个工
						作日，收到货款后我们会尽快确认为您发货，9天未付款的
						订单将被取消，需重新下单。汇款完毕后进入我的订单信息
						页面填写转账信息。
                 </p>
			</div>
			<div class="question_mian_inner">
				<h6>Q：如果我选择银行转账，我需要注意什么吗?</h6>
				<p>A：请您先查看您的网上银行交易记录（您可以电话联系银
					行客服、或是通过ATM、银行柜台、登录个人网上银行等方
					式查询），确认款项是否成功划出：
				<p style="text-indent: 1em;margin: 0;">  ●若款项未成功划出，请您在"我的找礼品网我的订单"中找
					到该订单重新支付即可</p>
				<p style="text-indent: 1em;margin: 0;">	  ●若款项已成功划出，请您联系找礼品网客服处理</p>
			</div>
			<div class="question_mian_inner">
				<h6>Q：为什么我的订单不能选择货到付款?</h6>
				<p>A：A:以下几种情况不支持货到付款的:（1）部分商品属
					于第三方卖家发货的商品，不支持货到付款;
					（2）您所在地区不在货到付款配送范围      
			     </p>
			</div>
		</div>
    </div>
</template>
<script>
import goBack from '../components/goback.vue'
export default {
	components:{
		goBack
	}
}
</script>
<style scoped>
@import '../style/css/reset.css';
@import '../style/css/common.css';
@import '../style/css/question.css';
</style>