<template>
    <div>
        <goBack></goBack>
        <div id="logistics_title">
			物流信息
		</div>
		<div id="logistics_main">
            <span v-show="expressName">物流公司:{{expressName}}</span>
            <span style="margin-left:.1rem;" v-show="expressNum">快递单号:{{expressNum}}</span>
            <p v-show="expressBZ">备注:{{expressBZ}}</p>
			<div class="logistics_main_inner" v-show="reverseList"  v-for="(item,index) in reverseList" :key="index">
				<div class="logistics_main_left">	
				    <div class="logistics_main_left_inner" :class="{ wlactive2:index===0}"></div>
				</div>
				<div class="logistics_main_right">
                    <p>{{item.orderLogistics}}</p>
					<p :class="{wlactive:index==0}">{{item.status}}</p>
					<span class="wlactive1">{{item.time}}</span>
				</div>
			</div>
            <div class="logistics_main_inner" v-show="!reverseList">
                   <p>{{Logistics}}</p> 
			</div>
		</div>
    </div>
</template>
<script>
import goBack from '../components/goback.vue'
export default {
    data(){
        return{
            Logistics:[],
            expressNum:'',
            expressName:'',
            expressBZ:''
        }
    },
    computed:{
        reverseList:{
            set: function () {
                return this.Logistics
            },
            get: function () {
                if(typeof this.Logistics!= 'string'){
                    return this.Logistics
                }else{
                    return false
                }      
             }
        }
    },
    methods:{
        getLogistics(){
            let url ='group/Api/orderLogistics.do';
				let params = new URLSearchParams();
				params.append('token', window.userInfo.token);
				params.append('ORDER_ID', this.$route.query.ORDER_ID);
				this.$axios({
				method: 'post',
				url:url,
				data:params
				}).then((res)=>{
					if(res.data.status==0){
                        let val=res.data.content
                        this.expressNum=val.EXPRESS_NO
                        this.expressName=val.NAME
                        this.expressBZ=val.EXPRESS_BZ
                        if(val.orderLogistics){
                            this.Logistics=val.orderLogistics;
                        }
                        
					}
                })
                                    
        },
        getgiftLogistics(){//礼品卷兑换信息
            let url ='group/Api/couponOrderLogistics.do';
				let params = new URLSearchParams();
				params.append('token', window.userInfo.token);
				params.append('COUPON_ORDER_ID', this.$route.query.COUPON_ORDER_ID);
				this.$axios({
				method: 'post',
				url:url,
				data:params
				}).then((res)=>{
					if(res.data.status==0){
                        let val=res.data.content
                        this.expressNum=val.EXPRESS_NO
                        this.expressName=val.NAME
                        this.expressBZ=val.EXPRESS_BZ
                        if(val.orderLogistics){
                            this.Logistics=val.orderLogistics;
                        }
                        
					}
                })
                                    
        }
    },
    components:{
        goBack
    },
    activated(){
        if(this.$route.query.COUPON_ORDER_ID){
            this.getgiftLogistics()
        }else if(this.$route.query.ORDER_ID){
            this.getLogistics();
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
@import '../style/css/logisticsxx.css';
</style>