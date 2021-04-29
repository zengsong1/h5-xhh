<template>
    <div>
		<goBack></goBack>
        <div id="question_title">
			<h1>常见问题</h1>
		</div>
		<div id="question_mian">
			<h6 class="h6tilte">配送类</h6>
			<div class="question_mian_inner">
				<h6>Q：订单已提交成功，什么时候可以发货?</h6>
				<p>A：订单提交成功后我们会尽快发货，详细进度查询，您可
					进入我的找礼品网我的订单，点击跟踪包裹，可实时查看订
					单进度。</p>
			</div>
			<div class="question_mian_inner">
				<h6>Q：签收时发现商品包装破损，该如何处理?</h6>
				<p>A：商品签收时如包装有破损，请您直接拒收；商品签收后
					如商品本身有问题，请您在我的找礼品网我的订单，中提交
					退换货申请，将有专业售后人员为您解决。</p>
			</div>
			<div class="question_mian_inner">
				<h6>Q：能否提供配送员的联系电话?</h6>
				<p>A：当订单状态显示已发货，找礼品网自配送会在系统中更
					新配送人员号码；在我的订单----包裹跟踪---包装状态-
					查询配送员电话。</p>
			</div>
			<div class="question_mian_inner">
				<h6>Q：订单取消了，还想要，能不能再配送过来?</h6>
				<p>A：非常抱歉，订单一旦取消将无法恢复，建议您重新下单
					购买</p>
			</div>
			<div class="question_mian_inner">
				<h6>Q：为什么提交订单时系统提示液体无法配送?</h6>
				<p> A：液体商品因考虑到运输安全，受公安部门、安检限制，
					因此无法配送，建议您选择其他途径购买。</p>
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