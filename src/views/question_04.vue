<template>
    <div>
		<goBack></goBack>
        <div id="question_title">
			<h1>常见问题</h1>
		</div>
		<div id="question_mian">
			<h6 class="h6tilte">退换类</h6>
			<div class="question_mian_inner">
				<h6>Q：我想办理退换货如何操作?</h6>
				<p>A：找礼品网为您提供了自助申请退换货的服务，登录后进
					入我的找礼品网我的订单，点击申请退换货，自助完成退换
					货的申请。</p>
			</div>
			<div class="question_mian_inner">
				<h6>Q：我提交了退换货申请想要取消，怎么办?</h6>
				<p>A：您可至我的找礼品网  我的退换货我的退换货记录，点
					击取消，按钮即可。</p>
			</div>
			<div class="question_mian_inner">
				<h6>Q：什么样的情况会收取退换货的运费?</h6>
				<p>A：因商品质量问题造成的退换货，找礼品网免费为您提供
						上门取件或上门换货服务；但因非商品质量问题由客户发起
						的退换货行为，将由客户承担退换货运费！</p>
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