<template>
    <div>
        <goBack></goBack>
        <div id="customer_title">
			<h1>常见问题</h1>
		</div>
		<div id="customer_main">
			<ul>
				<router-link to="question_01">
					<li>
						<div> 
							<img src="../img/home/常见问题/dd@2x.png">
							<p>订单类</p>
						</div>
					</li>
				</router-link>
				<!-- <router-link to="question_02"><li><img src="../img/home/常见问题/zf@2x.png"><p>支付类</p></li></router-link> -->
				<router-link to="question_03"><li><div> <img src="../img/home/常见问题/ps@2x.png"><p>配送类</p></div> </li></router-link>
				<!-- <router-link to="question_04"><li><div> <img src="../img/home/常见问题/th@2x.png"><p>退货类</p></div> </li></router-link> -->
				<router-link to="question_05"><li><div> <img src="../img/home/常见问题/tk@2x.png"><p>退款类</p></div> </li></router-link>
				<!-- <router-link to="question_06"><li><img src="../img/home/常见问题/fp@2x.png"><p>发票类</p></li></router-link> -->
				<router-link to="question_07"><li><div> <img src="../img/home/常见问题/zh@2x.png"><p>账户类</p></div> </li></router-link>
				
			</ul>
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
@import '../style/css/customerFW.css';
</style>