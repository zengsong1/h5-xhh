<template>
    <div>
		<goBack></goBack>
        <div id="question_title">
			<h1>常见问题</h1>
		</div>
		<div id="question_mian">
			<h6 class="h6tilte">账户类</h6>
			<div class="question_mian_inner">
				<h6>Q：如何增强账户的安全性?</h6>
				<p>A：您可以登录找礼品网账户， 在我的找礼品网-个人信
					息管理里绑定账户手机号码、验证邮箱并及时修改账户密
					码（高强度密码建议：3种任意组合字母、数字、标点符
					号），提高您账户的安全性能。</p>
			</div>
			<div class="question_mian_inner">
				<h6>Q：如何绑定?</h6>
				<p>A：1、验证邮箱：登录找礼品网我的找礼品网个人信息管
					理编辑个人资料基本信息验证邮箱完善个人信息</p>
				<p style="text-indent: 1.7em;margin: 0;">2、绑定手机：我的找礼品网个人信息管理手机绑定
					手机号码下一步输入校验码完成绑定</p>
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