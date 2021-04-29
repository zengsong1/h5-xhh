<template>
    <div>
        <goBack></goBack>
        <div id="orderPT_title">
			普通订单
		</div>
		<!-- 订单导航 -->
		<div id="orderPT_nav">
			<!-- <ul>
                <li :class="{ activemy: curType === item.id }" v-for="(item,index) in filmTypes" :key="index" @click="changeType(item)">{{item.name}}</li>
			</ul> -->
           <orderNav :filmTypes="filmTypes" :pageNum="pageNum" :orderStatus="orderStatus" ref="headerChild"></orderNav> 
		</div>
        
	    <!-- 订单详情 -->
        <div style="margin-top:1.15rem;"> 
            <!-- <div id="orderPT_main" v-for="(item) in toAudit" :key="item.AREA_ID">
                <div class="orderPT_main_top">
                    <p>订单号: {{item.ORDER_ID}}</p>
                    <span>待审核</span>
                </div>
                <div class="orderPT_main_has_but" v-for="(item2,index2) in item.cartList" :key="item2.ORDER_ID+index2">
                    <div>
                        <div class="orderPT_main_img">
                            <img :src="item2.INDEX_PICTURE">
                        </div>
                        <div class="orderPT_main_xx">
                            <p>{{item2.GOODS_NAME}}</p>
                            
                            <p style="font-size:.1rem;color: #7D7D7D;">{{item2.SPEC}}</p>
                            <div style="display:flex;justify-content: space-between;">
                            <p style="font-weight:bold;margin-top:.2rem;">￥{{item2.GOODS_CURRENT_PRICE |numFilter}}</p>
                            <span>x{{item2.AMOUNT}}</span>
                            </div>
                        </div> 
                    </div>  
                </div>
                <div class="orderPT_main_has_but_1">
                    <div @click="qxOrder(item2)">取消订单</div>
                    <div @click="xgOrder(item2)">修改</div>
                </div>
            </div> 
            <div id="orderPT_main" v-for="(item) in toAudit" :key="item.AREA_ID">
                <div class="orderPT_main_top">
                    <p>订单号: {{item.ORDER_ID}}</p>
                    <span>审核中</span>
                </div>
                <div class="orderPT_main_center" v-for="(item2,index2) in item.cartList" :key="item2.ORDER_ID+index2">
                    <div class="orderPT_main_img">
                        <img :src="item2.INDEX_PICTURE">
                    </div>
                    <div class="orderPT_main_xx">
                        <p>{{item2.GOODS_NAME}}</p>
                        
                        <p style="font-size:.1rem;color: #7D7D7D;">{{item2.SPEC}}</p>
                        <div style="display:flex;justify-content: space-between;">
                        <p style="font-weight:bold;margin-top:.2rem;">￥{{item2.GOODS_CURRENT_PRICE |numFilter}}</p>
                        <span>x{{item2.AMOUNT}} </span>
                        </div>
                    </div>
                </div>
            </div> 
            <div id="orderPT_main" v-for="(item) in toAudit" :key="item.AREA_ID">
                <div class="orderPT_main_top">
                    <p>订单号: {{item.ORDER_ID}}</p>
                    <span>待发货</span>
                </div>
                <div class="orderPT_main_center" v-for="(item2,index2) in item.cartList" :key="item2.ORDER_ID+index2">
                    <div class="orderPT_main_img">
                        <img :src="item2.INDEX_PICTURE">
                    </div>
                    <div class="orderPT_main_xx">
                        <p>{{item2.GOODS_NAME}}</p>
                        
                        <p style="font-size:.1rem;color: #7D7D7D;">{{item2.SPEC}}</p>
                        <div style="display:flex;justify-content: space-between;">
                        <p style="font-weight:bold;margin-top:.2rem;">￥{{item2.GOODS_CURRENT_PRICE |numFilter}}</p>
                        <span>x{{item2.AMOUNT}}</span>
                        </div>
                    </div>
                </div>
            </div> 
            <div id="orderPT_main" v-for="(item) in toAudit" :key="item.AREA_ID">
                <div class="orderPT_main_top">
                    <p>订单号: {{item.ORDER_ID}}</p>
                    <span>待收货</span>
                </div>
                <div class="orderPT_main_has_but" v-for="(item2,index2) in item.cartList" :key="item2.ORDER_ID+index2">
                    <div>
                        <div class="orderPT_main_img">
                            <img :src="item2.INDEX_PICTURE">
                        </div>
                        <div class="orderPT_main_xx">
                            <p>{{item2.GOODS_NAME}}</p>
                            
                            <p style="font-size:.1rem;color: #7D7D7D;">{{item2.SPEC}}</p>
                            <div style="display:flex;justify-content: space-between;">
                            <p style="font-weight:bold;margin-top:.2rem;">￥{{item2.GOODS_CURRENT_PRICE |numFilter}}</p>
                            <span>x{{item2.AMOUNT}} </span>
                            </div>
                        </div> 
                    </div>  
                </div>
                <div  class="orderPT_main_has_but_1">
                    <div>查看物流</div>
                        <div style="color:#EF0E01;border: 1px solid #EF0E01;" @click="qrOrder(item2)">确认收货</div>
                </div>
            </div> 
            <div id="orderPT_main" v-for="(item) in toAudit" :key="item.AREA_ID">
                <div class="orderPT_main_top">
                    <p>订单号: {{item.ORDER_ID}}</p>
                    <span>已收货</span>
                </div>
                <div class="orderPT_main_center" v-for="(item2,index2) in item.cartList" :key="item2.ORDER_ID+index2">
                    <div class="orderPT_main_img">
                        <img :src="item2.INDEX_PICTURE">
                    </div>
                    <div class="orderPT_main_xx">
                        <p>{{item2.GOODS_NAME}}</p>
                        
                        <p style="font-size:.1rem;color: #7D7D7D;">{{item2.SPEC}}</p>
                        <div style="display:flex;justify-content: space-between;">
                        <p style="font-weight:bold;margin-top:.2rem;">￥{{item2.GOODS_CURRENT_PRICE |numFilter}}</p>
                        <span>x{{item2.AMOUNT}} </span>
                        </div>
                    </div>
                </div>
            </div> 
            <div id="orderPT_main" v-for="(item) in toAudit" :key="item.AREA_ID">
                <div class="orderPT_main_top">
                    <p>订单号: {{item.ORDER_ID}}</p>
                    <span>已取消</span>
                </div>
                <div class="orderPT_main_center" v-for="(item2,index2) in item.cartList" :key="item2.ORDER_ID+index2">
                    <div class="orderPT_main_img">
                        <img :src="item2.INDEX_PICTURE">
                    </div>
                    <div class="orderPT_main_xx">
                        <p>{{item2.GOODS_NAME}}</p>
                        
                        <p style="font-size:.1rem;color: #7D7D7D;">{{item2.SPEC}}</p>
                        <div style="display:flex;justify-content: space-between;">
                        <p style="font-weight:bold;margin-top:.2rem;">￥{{item2.GOODS_CURRENT_PRICE |numFilter}}</p>
                        <span>x{{item2.AMOUNT}} </span>
                        </div>
                    </div>
                </div>
            </div> -->

             <div id="orderPT_main" v-for="(item,index) in orderList" :key="index">
			    <router-link :to="'orderDetail?ORDER_ID='+item.ORDER_ID">
                <div class="orderPT_main_top">
                    <p>订单号: {{item.ORDER_ID}}</p> 
                    <span>{{item.ORDER_STATUS==-1 ?'待审核':item.ORDER_STATUS==0 ?'审核中': item.ORDER_STATUS== 1 ?'待发货': item.ORDER_STATUS==2 ?'待收货': item.ORDER_STATUS==3 ?'已完成': item.ORDER_STATUS==7 ?'已取消':''}}</span>
                </div>
            </router-link>
			<router-link :to="'orderDetail?ORDER_ID='+item.ORDER_ID"><div class="orderPT_main_center" v-for="(item2,index2) in item.cartList" :key="index2">
				<div class="orderPT_main_img">
					<img :src="item2.INDEX_PICTURE">
				</div>
				<div class="orderPT_main_xx">
					<p>{{item2.GOODS_NAME}}</p>
                    
                    <p>{{item2.SPEC}}</p>
                    <div  >
                        <p>￥{{item2.GOODS_CURRENT_PRICE |numFilter}}</p>
                        <span >x {{item2.AMOUNT}}</span>
                    </div>
				</div>
			</div>
            </router-link>
			<div class="orderPT_main_bottom"> 
                <h1 v-show="item.IS_FREE=='1'">免费拿样</h1>
				<!-- <router-link :to="'orderDetail?ORDER_ID='+item.ORDER_ID">
                    <button type="button" v-show="item.ORDER_STATUS==0">现在支付</button>
                </router-link> -->
                <div v-show="item.ORDER_STATUS== -1" class="orderPT_main_has_but_1"> 
                    <div type="button"  @click="qxdd(item.ORDER_ID)">取消订单</div>
                    <div type="button"  @click="xgOrder(item.ORDER_ID)">修改</div>
                </div> 

                <div class="orderPT_main_has_but_1" >
                    <div  @click="lookWl(item)" type="button"  v-show="item.ORDER_STATUS==2">查看物流</div>
                    <div style="color:#EF0E01;border: 1px solid #EF0E01;" type="button" @click="qrsh(item.ORDER_ID)" v-show="item.ORDER_STATUS==2">确认收货</div>
                </div>
 
                
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
				{ id: '-1', name: '待审核'},
                { id: '0', name: '审核中'},
                { id: '1', name: '待发货'},
                { id: '2', name: '待收货'},
                { id: '3', name: '已完成'},
                { id: '7', name: '已取消'},
                ],
          curType:'', 
          orderList:[],
          pageNum:'',
          num: 0,
          orderStatus : null,  // 当前选中的值
       }
   },
   created() {  
        if(this.$route.query.orderStatus) {
            this.orderStatus = this.$route.query.orderStatus 
        } 
   },
   methods:{
       // 取消订单
       qxOrder(item) {
           console.log(item)
            Dialog.confirm({
            title: '',
            message: '订单取消后将无法恢复，确定要取消吗？',
            })
            .then(() => { 
                 let url ='order/Api/cancelOrder.do';
					let params = new URLSearchParams();
					params.append('token', window.userInfo.token);
					params.append('ORDER_ID',item.ORDER_ID);
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
            })
            .catch(() => {
                // on cancel
            });
       },
       // 确认收货
       qrOrder(item){
            Dialog.confirm({
            title: '',
            message: '请仔细核对订单签收物品后再确认收货',
            })
            .then(() => {
                let url ='group/Api/confirmReceive.do';
                let params = new URLSearchParams();
                params.append('token', window.userInfo.token);
                params.append('ORDER_ID',item.ORDER_ID);
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
            })
            .catch(() => {
                // on cancel
            });

                
       },
       // 修改订单
       xgOrder(ORDER_ID){
           this.$router.push({
               path: "/modifyOrder",
               query : {
                   ORDER_ID : ORDER_ID
               }
           })
       },
       // 查看物流
       lookWl(item) { 
           this.$router.push({
               path : "/logistics",
               query : {
                   ORDER_ID : item.ORDER_ID
               }
           })
       },
       getorderList(POSITION,STATUS,currentPage,title){ 
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
                    this.orderList=res.data.content.orderList 
                    this.num++
                }
                if(title== "onchange") {
                    this.getorderList(POSITION,STATUS,currentPage,"title")
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
                        this.num++
                        }
                    }
                })
       },
        qxdd(ORDER_ID){
            Dialog.confirm({
				message:'订单取消后将无法恢复，确定要取消吗？'
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
				message:'请仔细核对订单签收物品后再确认收货'
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
        },
   },
    components:{
       goBack,
       orderNav,
       
    }, 
    computed : {
        toAudit () { 
            this.num--
           let arr = this.orderList.filter((e)=>{
               return e.ORDER_STATUS == 7
           })  
           return arr
       },
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
.orderPT_main_bottom{
    position: relative;
}
.orderPT_main_bottom>h1{
    position: absolute;
    left: 2.5rem;
    top:-.04rem;
    width: .7rem;
    height: .25rem;
    color: #D52038;
    background: #f7d2d7;
    line-height: .25rem;
    text-align: center;
    border-radius: .05rem;
}
</style>