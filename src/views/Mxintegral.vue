<template>
    <div>
        <goBack></goBack>
        <div id="Mxintegral_title">
			积分明细
		</div>
		<div id="Mxintegral_header">
			<p>我的积分:</p>
			<span>{{jfNum}}</span>
		</div>
		<div id="Mxintegral_main">
			<div class="Mxintegral_main01">
				
			</div>
			<div class="Mxintegral_main02" v-show="jfDetails" v-for="(item,index) in jfDetails" :key="index">
				<router-link :to="'orderDetail?ORDER_ID='+item.ORDER_ID"><div class="Mxintegral_main02_left">
					<p>{{item.INCOME_REASON==1?'购物获得积分':item.INCOME_REASON==2?'兑换消耗积分':item.INCOME_REASON==3?'后台增加':''}}</p>
					<p>订单号：{{item.ORDER_ID}}</p>
					<p>{{item.CREATE_DATE}}</p>
				</div> </router-link>
				<div class="Mxintegral_main02_right">
					<p>{{item.RECORD_TYPE==0?'+'+item.AMOUNT:item.RECORD_TYPE==1?'-'+item.AMOUNT:''}}</p>
				</div>
			</div>
            <Loading v-if="currentPage!=pageNum && jfDetails "></Loading>
            <div class="Mxintegral_main02" v-show="!jfDetails">
					<p  style="margin-left:1.1rem;">当前无兑换详情</p>
				</div>
		</div>
    </div>
</template>
<script>
import goBack from '../components/goback.vue'
import Loading from'../components/loading'
export default {
   data(){
       return {
           jfNum:'',
           jfDetails:'',
           pageNum:'',
           currentPage:'1',
       }
   },
   methods:{
        getintegrationList(){
            let url ='headquarters/Api/integrationList.do';
                let params = new URLSearchParams();
                params.append('token', window.userInfo.token);
                params.append('currentPage', 1);
				this.$axios({
				method: 'post',
                url:url,
                data:params
				}).then((res)=>{
                    if(res.data.status==0){
                        let val=res.data.content
                        this.jfNum=val.INTEGRATION
                        if(val.integrationList!=''){
                            this.jfDetails=val.integrationList
                        }else{
                            this.jfDetails=false
                        }
                        this.pageNum=val.pages
                    }
                })
        },
        getintegrationListpage(){
            let url ='headquarters/Api/integrationList.do';
                let params = new URLSearchParams();
                params.append('token', window.userInfo.token);
                params.append('currentPage', this.currentPage);
				this.$axios({
				method: 'post',
                url:url,
                data:params
				}).then((res)=>{
                    if(res.data.status==0){
                       let val=res.data.content
                    if(this.currentPage<=res.data.content.pages){
                       this.jfDetails.push(...val.integrationList)
                       }
                    }
                })
        }
    },
    activated(){
        this.getintegrationList();
    },
    updated(){
            var _this=this;
            window.onscroll = function(){
            //变量scrollTop是滚动条滚动时，距离顶部的距离
            var scrollTop = document.documentElement.scrollTop||document.body.scrollTop;
            //变量windowHeight是可视区的高度
            var windowHeight = document.documentElement.clientHeight || document.body.clientHeight;
            //变量scrollHeight是滚动条的总高度
                var scrollHeight = document.documentElement.scrollHeight||document.body.scrollHeight;
                //滚动条到底部的条件
                if(scrollTop+windowHeight==scrollHeight){
                    if(_this.currentPage<_this.pageNum){
                            if(window.location.pathname=='/Mxintegral'){
                                     _this.currentPage++
                                     _this.getintegrationListpage()
                            }   
                        }
                }
            }
    },
    components:{
        goBack,
        Loading
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
@import '../style/css/Mxintegral.css';
</style>