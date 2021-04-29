<template>
    <div>
		<goBack></goBack>
        <div id="question_title">
			<h1>常见问题</h1>
		</div>
		<div id="question_mian">
			<h6 class="h6tilte">发票类</h6>
			<div class="question_mian_inner">
				<h6>Q：订单送到了，但没有发票，怎么办?</h6>
				<p>A：请您在订单发货后一个月内申请补开发票，可进入我的
					找礼品网发票管理，点击补开发票，进行自助申请，收到您
					的申请后，我们会通过平信方式寄出。</p>
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