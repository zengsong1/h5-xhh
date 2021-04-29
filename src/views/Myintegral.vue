<template>
    <div>
        <goBack></goBack>
        <div id="integral_header">
			<h1>我的积分</h1>
		</div>
		<div id="integral_title">
			<div class="integral_title_01">
				<img src="../img/home/gth@2x.png">
				<span @click="goMxintegral">积分明细</span>
			</div>
			<div class="integral_title_02">
				<img src="../img/home/jf@2x.png">
				<span>{{jfNum}}</span>
				<p>您当前可用积分</p>
			</div>
		</div>
	    <!-- 积分兑换 -->
		<div id="integral_main">
			<h6>积分兑换</h6>
			<div class="integral_main_inner" v-show="jfList!=''" v-for="(item,index) in jfList" :key="index" >
				<div class="integral_main_left">
					<img :src="item.INDEX_PICTURE">
				</div>
				<div class="integral_main_right">
					<p>{{item.GOODS_NAME}}</p>
					<span>￥{{item.CURRENT_PRICE|numFilter}}</span>
					<i>{{item.INTEGRATION}}分兑换</i>
					<button>查看详情</button>
				</div>
			</div>
            <div class="nojf" v-show="jfList==''">
                <img src="../img/home/nojf.png">
                <p>暂无积分兑换商品</p>
            </div>		
		</div>
    </div>
</template>
<script>
import goBack from '../components/goback.vue'
export default {
    data(){
        return{
            jfNum:'',
            jfList:''
            
        }
    },
    components:{
        goBack
    },
    methods:{
        getintegralTopList(){
            let url ='headquarters/Api/integralTopList.do';
				this.$axios({
				method: 'post',
				url:url,
				}).then((res)=>{
                    if(res.data.status==0){
                        let val=res.data.content
                        if(val.integralList){
                            this.jfList=val.integralList
                        }
                    }
                })
        },
        goMxintegral(){
            this.$router.push('/Mxintegral')
        }
    },
    created(){
        if(this.$route.query.integral){
            this.jfNum=this.$route.query.integral
        }
        this.getintegralTopList();
    },
    filters: {
	numFilter (value) {
         // 截取当前数据到小数点后两位
    	let realVal = value.toFixed(2)
    	return realVal
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
@import '../style/css/Myintegral.css';
.header-back {
  background: url(../img/home/icon/jt_right2.png) no-repeat;
  background-size: contain;
}
.nojf img{
    display: block;
    width: 1.6rem;
    height: 1.2rem;
    margin: 1rem auto .2rem auto;
}
.nojf p{
    text-align: center;
    font-size: .16rem;
}
</style>