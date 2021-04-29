<template>
    <div>
		<goBack></goBack>
        <div id="question_title">
			<h1>常见问题</h1>
		</div>
		<div id="question_mian">
			<h6 class="h6tilte">订单类</h6>
			<div class="question_mian_inner">
				<h6>Q：如何取消订单?</h6>
				<p>A：您可以进入我的找礼品网我的订单自行操作订单取消或 致电客服中心由客服为您取消订单；如订单已进入配送环节 不确保能够拦截成功，配送上门时还请您拒收，感谢您的配合。</p>
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