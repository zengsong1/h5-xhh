<template>
    <div>
		<goBack></goBack>
        <div id="question_title">
			<h1>常见问题</h1>
		</div>
		<div id="question_mian">
			<h6 class="h6tilte">退款类</h6>
			<div class="question_mian_inner">
				<h6>Q：订单取消成功后多久可以收到退款?</h6>
				<p> A：各类型订单退款周期不一样。</p>
			</div>
			<div class="question_mian_inner">
				<h6>Q：礼品卡支付的，款项退到哪里?</h6>
				<p>A：礼品卡支付的款项，产生取消、退换货只可退回到您的
					找礼品网账户中</p>
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