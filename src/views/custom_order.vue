<template>
    <div>
        <goBack></goBack>
        <div id="orderPT_title">
			定制订单
		</div>
		<!-- 订单导航 -->
		<div id="orderDZ_nav">
			<orderNav :filmTypes="filmTypes" :pageNum="pageNum" ref="headerChild"></orderNav> 
		</div>
	    <!-- 订单详情 -->
        <div style="margin-top:1.2rem;">
		<div id="orderPT_main" v-for="(item,index) in orderList" :key="index">
			<router-link :to="'orderDetail?ORDER_ID='+item.ORDER_ID"><div class="orderPT_main_top">
				<h6 class="h6tilte">订单日期</h6>
				<p>{{item.CREATE_DATE}}</p>
				<span>{{item.ORDER_STATUS==0 ?'待支付': item.ORDER_STATUS== 1 ?'待发货': item.ORDER_STATUS==2 ?'待收货': item.ORDER_STATUS==3 ?'已完成': item.ORDER_STATUS==4 ?'待上传设计稿'
                  : item.ORDER_STATUS==5 ?'生产中':item.ORDER_STATUS==6 ? '待付尾款':item.ORDER_STATUS==7?'订单已取消':item.ORDER_STATUS==8?'退款成功':item.ORDER_STATUS==9 ?'支付超时':''}}</span>
			</div></router-link>
			<router-link :to="'orderDetail?ORDER_ID='+item.ORDER_ID"><div class="orderPT_main_center" v-for="(item2,index2) in item.cartList" :key="index2">
				<div class="orderPT_main_img">
					<img :src="item2.INDEX_PICTURE">
				</div>
				<div class="orderPT_main_xx">
					<p>{{item2.GOODS_NAME}}</p>
                    <p style="font-size:.1rem;color: #7D7D7D;">{{item2.SPEC}}</p>
					<div style="display:flex;justify-content: space-between;">
					<p style="font-weight:bold;margin-top:.2rem;">￥{{item2.GOODS_CURRENT_PRICE |numFilter}}</p>
                    <span>x{{item2.AMOUNT}}{{item2.GOODS_UNIT?item2.GOODS_UNIT:'件'}}</span>
					</div>
				</div>
			</div>
            </router-link>
			<div class="orderPT_main_bottom">
                <div class="amount">
                    <span>总价：</span><span>{{item.TOTAL_AMOUNT|numFilter}}</span><br>
                </div>
				<router-link :to="'orderDetail?ORDER_ID='+item.ORDER_ID"><button type="button" v-show="item.ORDER_STATUS==0">现在支付</button></router-link>
                <router-link :to="'orderDetail?ORDER_ID='+item.ORDER_ID"><button type="button" v-show="item.ORDER_STATUS==6">支付尾款</button></router-link>
                <button type="button" v-show="item.ORDER_STATUS==0" @click="qxdd(item.ORDER_ID)">取消订单</button>
                <router-link :to="'logistics?ORDER_ID='+item.ORDER_ID"><button type="button" v-show="item.ORDER_STATUS==3 ||item.ORDER_STATUS==2">物流跟踪</button></router-link>
                <button type="button" @click="qrsh(item.ORDER_ID)" v-show="item.ORDER_STATUS==2">确认收货</button>
			</div>
		</div>
        <div class="noList" v-show="orderList.length==0">
            <img src="../img/home/ddqs@2x.png">
            <p>您没有相关订单</p>
            <router-link to="/sort"><span>马上去逛逛</span></router-link>
        </div>
        </div>
    </div>
</template>
<script>
import goBack from '../components/goback.vue'
import orderNav from '../components/orderNav.vue'
import { Dialog,Toast} from 'vant';
export default {
   data(){
       return{
           filmTypes:[
				{ id: '', name: '全部'},
				{ id: '0', name: '待付定金'},
				{ id: '4', name: '待确认设计'},
				{ id: '5', name: '生产中'},
				{ id: '6', name: '支付尾款'},
                { id: '1', name: '待发货'},
                { id: '2', name: '待收货'},
                ],
          curType:'', 
		  orderList:[],
          pageNum:'',
       }
   },
   methods:{
       getorderList(POSITION,STATUS,currentPage){
           var url ='order/Api/orderList.do';
				var params = new URLSearchParams();
                params.append('token',window.userInfo.token);
                params.append('TOP_ID',window.userInfo.TOP_ID);
                params.append('ORDER_POSITION',POSITION);
                if(STATUS){
                    params.append('ORDER_STATUS',STATUS);
                }
                if(currentPage){
                    params.append('currentPage',currentPage);
                }
				this.$axios({
				method: 'post',
				url:url,
				data:params
				}).then((res)=>{
                    if(res.data.status==0){
						this.pageNum=res.data.content.pages;
                        this.orderList=res.data.content.orderList
                    }
                })
	   },
       getorderListpage(POSITION,STATUS,currentPage){//下拉加载
           var url ='order/Api/orderList.do';
				var params = new URLSearchParams();
                params.append('token',window.userInfo.token);
                params.append('TOP_ID',window.userInfo.TOP_ID);
                params.append('ORDER_POSITION',POSITION);
                if(STATUS){
                    params.append('ORDER_STATUS',STATUS);
                }
                if(currentPage){
                    params.append('currentPage',currentPage);
                }
				this.$axios({
				method: 'post',
				url:url,
				data:params
				}).then((res)=>{
                    if(res.data.status==0){
                        this.pageNum=res.data.content.pages
                        if(currentPage<=res.data.content.pages){
                        this.orderList.push(...res.data.content.orderList)
                        }
                    }
                })
       },
        qxdd(ORDER_ID){
            Dialog.confirm({
				message:'确定要取消订单吗?'
			}).then(()=>{
				let url ='order/Api/cancelOrder.do';
					let params = new URLSearchParams();
					params.append('token', window.userInfo.token);
					params.append('ORDER_ID',ORDER_ID);
					this.$axios({
					method: 'post',
					url:url,
					data:params
					}).then((res)=>{
						if(res.data.status==0){
                            Toast('取消订单成功')
                            let POSITION=this.$route.query.ORDER_POSITION;
                            let STATUS=this.$refs.headerChild.curType //获取子组件curType的数据
                            this.$refs.headerChild.currentPage='1'//子组件currentPage同步属性
                            document.body.scrollTop = 0;
							this.getorderList(POSITION,STATUS,1);
						}else{
							Toast('取消订单失败')
						}
					})
			}).catch(()=>{

			})
        },
        qrsh(ORDER_ID){
            Dialog.confirm({
				message:'确认收货?'
			}).then(()=>{
				let url ='group/Api/confirmReceive.do';
					let params = new URLSearchParams();
					params.append('token', window.userInfo.token);
					params.append('ORDER_ID',ORDER_ID);
					this.$axios({
					method: 'post',
					url:url,
					data:params
					}).then((res)=>{
						if(res.data.status==0){
                            let POSITION=this.$route.query.ORDER_POSITION;
                            let STATUS=this.$refs.headerChild.curType //获取子组件curType的数据
                            this.$refs.headerChild.currentPage='1'//子组件currentPage同步属性
                            document.body.scrollTop = 0;
							this.getorderList(POSITION,STATUS,1);
						}
					})
			}).catch(()=>{

			})
        }
   },
    components:{
       goBack,
       orderNav
    },
    filters: {
	numFilter (value) {
         // 截取当前数据到小数点后两位
         if(value!=undefined){
           let realVal = value.toFixed(2)
    	    return realVal
         }
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
@import '../style/css/common.css';
@import '../style/css/reset.css';
@import '../style/css/orderPT.css';

.header-back{
    position: fixed;
    top: 0.2rem;
    left: 0.2rem;
}
</style>