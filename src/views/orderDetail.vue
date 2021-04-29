<template>
   <div>
	   <goBack></goBack>
        <div id="address_xq_title">
			订单详情
		</div>
		<div id="address_xq_main">
			<img src="../img/home/ddfk01.png">
			<span>{{order.ORDER_STATUS==-1 ?'待审核': order.ORDER_STATUS== 0 ?'审核中':order.ORDER_STATUS== 1 ?'待发货': order.ORDER_STATUS==2 ?'待收货': order.ORDER_STATUS==3 ?'已完成': order.ORDER_STATUS== 7 ?'已取消': ''}}</span>
			<span style="font-size:.1rem;">{{order.PAY_WAY==5&&order.SURE_RECEIVE==0?'(待确认线下转账)':order.PAY_WAY==5&&order.SURE_RECEIVE==1?'(线下转账已确认)':order.PAY_WAY==5&&order.SURE_RECEIVE==2?'(待确认线下转账付尾款)':order.PAY_WAY==5&&order.SURE_RECEIVE==3?'(线下转账已确认)':''}}</span>
		</div>
	    <!-- 收货信息 -->
		<div id="order_dz">
	    	<div class="order_dz_top">
	    		<h6 class="h6tilte">收货信息</h6>
	    	</div>
	    	<div class="order_dz_bottom1">
	    		<div class="order_dz_left">
	    			<img src="../img/home/order_dz.png" style="height: .42rem;">
	    		</div>
	    		<div class="order_dz_center1">
	    			<span>{{order.RECEIVER}}</span><span>{{order.PHONE_NUMBER}}</span><br>
	    			<span style="font-size: .12rem;">{{order.PROVINCE+order.CITY+order.AREA+order.DETAILS_ADDRESS}}</span>
	    		</div>
	    		<!-- <div class="order_dz_right">
	    			<img src="../img/home/icon/jt_left.png" style="width: .08rem;">
	    		</div> -->
	    	</div>
	    </div>
		<!-- 支付信息 -->
		<!-- <div id="order_zf" v-show="order.ORDER_STATUS==0||order.ORDER_STATUS==6">
			<div class="order_zf_top">
				<h6 class="h6tilte">支付方式</h6>
			</div>
			<div class="order_zf_bottom">
				<div class="order_zf_zz">
					<div class="order-left">
						<div class="order_zf_zz_left">
							<img src="../img/home/order_zf_zz022.png">
						</div>
						<div class="order_zf_zz_center">
							<span>额度支付</span>
							<img src="https://cs.zhaolipin.net/82881686-c599-4ae6-af52-557dc13a298e.png" width="17" height="17" style="margin-left:.1rem" @click="handleGold">
						</div>
					</div>
					<div class="order_zf_zz_right">
						<input type="radio" id="cart_check1" name="zf" checked/>
						<label for="cart_check1"></label>
					</div>
					<span>当前可用余额:¥{{currentUser.USE_MONEY | numFilter}}</span>
				</div>
			</div>
		</div> -->
	    <!-- 商品信息 -->
		<div id="order_xx">
			<div class="looksj" @click="godesign" v-show="order.CUSTOM_STATUS!=0 && order.ORDER_POSITION==2">
				查看设计稿、成品图片
			</div>
			<div class="order_xx_top">
				<h6 class="h6tilte">商品信息</h6>
			</div>
			<div class="order_xx_bottom" v-for="(item,index) in cartList" :key="index" @click="goDetail(item)">
				<div class="order_xx_bottom_left">
					<img :src="item.INDEX_PICTURE">
				</div>
				<div class="order_xx_bottom_right" style="margin-left:.1rem">
					<div class="order_xx_bottom_right_01">
						<p>{{item.GOODS_NAME}}</p>
						<p>{{item.SPEC}}</p>
						<div style="display:flex;justify-content:space-between;width:2.1rem;font-size:.14rem;margin-top:.3rem">
						<p>¥ {{item.GOODS_CURRENT_PRICE |numFilter}}</p>
						<p>x{{item.AMOUNT}}{{item.GOODS_UNIT?item.GOODS_UNIT:'件'}}</p>
						</div>
					</div>
				</div>
			</div>
		    <div class="order_xx_hj">
				<p>总计:</p>
				<p>¥{{order.TOTAL_AMOUNT |numFilter}}<span>(邮费:{{order.FREIGHT_AMOUNT=='0'?'包邮':'￥'+order.FREIGHT_AMOUNT}})</span></p>
			</div>
		</div>
	    <!-- 发票信息 -->
		<!-- <div id="order_fp1">
			<div class="order_fp_top">
				<h6 class="h6tilte">订单信息</h6>
			</div>
			<div class="order_fp_bottom">
				<div class="order_fp_bottom_01">
					<span>订单编号:</span><span>{{order.ORDER_ID}}</span><br>
					<span>下单时间:</span><span>{{order.CREATE_DATE}}</span>
				</div>
				 
			</div>
		</div>
	    <div id="order_zf1">
			<div class="order_zfdd" v-show="order.ORDER_STATUS==0" @click="ljzf">
				立即支付
			</div>
			<div class="order_zfdd" v-show="order.ORDER_STATUS==6" @click="zfwk">			 
				支付尾款
			</div>
			<div class="order_qxdd" @click="qxdd" v-show="order.ORDER_STATUS==0" style="	border: 1px solid #1C1C1C;background: #FFFFFF;color: #000000;margin-bottom:.1rem; ;">
				取消订单
			</div>
			<div class="order_qxdd" @click="zkwl" v-show="order.ORDER_STATUS==3 ||order.ORDER_STATUS==2 " style="	border: 1px solid #1C1C1C;background: #FFFFFF;color: #000000;margin-bottom:.1rem; ;">
				物流跟踪
			</div>
			<div class="order_qxdd" @click="qrsh" v-show="order.ORDER_STATUS==2 " style="	border: 1px solid #1C1C1C;background: #FFFFFF;color: #000000;margin-bottom:.1rem; ;">
				确认收货
			</div>
		</div>
		<van-popup v-model="iSshow">
			<div class="gold">
				<div class="gold-row">
				<div>总金额</div>
				<div style="color: #3B3B3B;">{{currentUser.TOTAL_USE_MONEY}}</div>
				</div>
				<div class="gold-row">
				<div>待付金额</div>
				<div style="color: #3B3B3B;">{{currentUser.CUSTOM_FREEZE}}</div>
				</div>
				<div class="gold-row">
				<div>当前可用金额</div>
				<div style="color: #3B3B3B;">{{currentUser.USE_MONEY}}</div>
				</div>
				<div class="kanow" @click="handleKnow">我知道了</div>
			</div>
		</van-popup> -->
   </div>
</template>
<script>
import { Dialog } from 'vant';
import { Toast } from 'vant';
import goBack from '../components/goback.vue'
export default {
    data(){
        return{
			iSshow:false,
			Postage:'',
			AMOUNT:'',
            order:{}, //订单信息
            orderInvoice:{},//订单发票信息
			cartList:[],
			currentUser:{},
			update:false
        }
    },
    computed:{
		// GOODSAMOUNT(){//计算商品总价
		// 	var AMOUNT=[];
		// 	for (let i = 0; i < this.cartList.length; i++) {
		// 		AMOUNT.push(this.cartList[i].GOODS_AMOUNT)
		// 	}
		// 	if(AMOUNT!=''){
		// 		var val =eval(AMOUNT.join('+')).toFixed(2);
		// 	}
		// 	return	val
		// }	
    },
    activated(){
		this.getorderDetail()
		this.getuserInfo()
    },
    methods:{
		handleGold(){
			this.iSshow=true
		},
		handleKnow(){
			this.iSshow=false
		},
        getorderDetail(){
            var url ='order/Api/orderDetail.do';
			var params = new URLSearchParams();
            params.append('token',window.userInfo.token);
            params.append('ORDER_ID',this.$route.query.ORDER_ID);
				this.$axios({
				method: 'post',
				url:url,
				data:params
				}).then((res)=>{
                    if(res.data.status==0){
                        let val=res.data.content;
						this.order=val.order
						this.cartList=val.cartList
                        if(val.orderInvoice){
                            this.orderInvoice=val.orderInvoice
                        }else{
							this.orderInvoice=''
						}
                    }
                })
		},
		getuserInfo(){
				var url ='group/Api/orderMoneyJudge.do';
				var params = new URLSearchParams();
           	 	params.append('token',window.userInfo.token);
           	 	params.append('ORDER_ID',this.$route.query.ORDER_ID);
				this.$axios({
				method: 'post',
				url:url,
				data:params
				}).then((res)=>{
                    if(res.data.status==0){
						this.currentUser=res.data.content.orderMoney
                    }
                })
			},
		godesign(){
			this.$router.push('/design?ORDER_STATUS='+this.order.ORDER_STATUS+'&&CUSTOM_STATUS='+this.order.CUSTOM_STATUS+'&&ORDER_ID='+this.$route.query.ORDER_ID)
		},
		payOrder(val){//订单支付
			let url ='group/Api/payOrder.do';
           		let params = new URLSearchParams();
				params.append('token', window.userInfo.token);
				params.append('ORDER_ID', val);
				this.$axios({
				method: 'post',
                url:url,
                data:params
				}).then((res)=>{
					if(res.data.status==0){
						Toast('支付成功')
						setTimeout(() => {
							this.$router.go(0)
						}, 1000);
					}
				})
		},
		ljzf(){
			Dialog.confirm({
					confirmButtonText:'支付',
					message:this.order.PREPAID_AMOUNT?'需支付定金金额：￥' +this.order.PREPAID_AMOUNT.toFixed(2):'需支付金额：￥'+ this.order.REAL_PAY_AMOUNT.toFixed(2)
					}).then(()=>{
					this.payOrder(this.order.ORDER_ID)
					}).catch(()=>{
					})
		},
		zfwk(){
			Dialog.confirm({
				confirmButtonText:'支付',
				message:'需支付尾款金额：￥'+(this.order.FINAL_AMOUNT).toFixed(2)
			}).then(()=>{
				this.payOrder(this.order.ORDER_ID)
			}).catch(()=>{

			})
		},
		zkwl(){
			this.$router.push('/logistics?ORDER_ID='+this.$route.query.ORDER_ID)
		},
		goDetail(item){
			if(window.userInfo.role=='4'){
				this.$router.push({
				path: '/detail',
				query: {
					id: item.GROUP_GOODS_ID,
					isDirect:true
					}
				})
			}else if(item.GOODS_POSITION==0){
					this.$router.push({
					path: '/detail',
					query: {
						id: item.GROUP_GOODS_ID
						}
					})           
			}else if(item.GOODS_POSITION==1){
				this.$router.push({
				path: '/detail',
				query: {
					id: item.GROUP_GOODS_ID
					}
                })
			}
			else{
				this.$router.push({
				path: '/detail',
				query: {
					id: item.GROUP_GOODS_ID
					}
                })
			} 
			// else if(item.GOODS_POSITION==2){
			// 	this.$router.push({
			// 	path: '/custom_detail',
			// 	query: {
			// 		id: item.GROUP_GOODS_ID
			// 		}
            //     })
			// }
		},
		qrsh(){
			Dialog.confirm({
				message:'确认收货?'
			}).then(()=>{
				let url ='group/Api/confirmReceive.do';
					let params = new URLSearchParams();
					params.append('token', window.userInfo.token);
					params.append('ORDER_ID',this.$route.query.ORDER_ID);
					this.$axios({
					method: 'post',
					url:url,
					data:params
					}).then((res)=>{
						if(res.data.status==0){
							this.$router.go(0)
						}
					})
			}).catch(()=>{

			})
		},
		qxdd(){
			Dialog.confirm({
				message:'确定要取消订单吗?'
			}).then(()=>{
				let url ='order/Api/cancelOrder.do';
					let params = new URLSearchParams();
					params.append('token', window.userInfo.token);
					params.append('ORDER_ID', this.$route.query.ORDER_ID);
					this.$axios({
					method: 'post',
					url:url,
					data:params
					}).then((res)=>{
						if(res.data.status==0){
							Toast('取消订单成功')
							setTimeout(() => {
								this.$router.go(0)
							}, 1000);
						}else{
							Toast('取消订单失败')
						}
					})
			}).catch(()=>{

			})
		}
	},
	components:{
		goBack
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
@import '../style/css/reset.css';
@import '../style/css/common.css';
@import '../style/css/addressXQ.css';
#order_dz {
	margin: -.14rem auto .14rem auto;
}
.looksj{
	border: 1px solid #F62644;
	background: #FFFFFF;color: #000000;
	width: 1.6rem;
	text-align: center;
	border-radius: .1rem;
	color: #F62644;
	position: absolute;
	left: 1.7rem;
	font-weight: bold;
	line-height: .2rem;
}
.order_zf_bottom{
	margin-top: .13rem;
}
.order_zf_zz_right input {
    position: relative;
    /* 前面三行代码是为了让radio单选按钮与文字对齐 */
    appearance: none;/*清楚默认样式*/
    opacity: 0;
    outline: none;
    /* 注意不能设置为display:none*/
}
.order_zf_zz_right label {
	display: block;
    position: relative;
	top:-.16rem;
    /*注意层级关系，如果不把label层级设为最低，会遮挡住input而不能单选*/
	  width: 0.16rem;
	  height: 0.16rem;
	  line-height: 0.16rem;
	  text-align: center;
	  background-color: #E6E6E6;
	  border-radius: .1rem;
	  border: 1px solid #828282;
}

.order_zf_zz_right input:checked+label {
    background: #EC2B48;
}

.order_zf_zz_right input:checked+label::after {
    content: "";
    position: absolute;
    left: .05rem;
    width: .04rem;
    height: .1rem;
    border-right: 2px solid #fff;
    border-bottom: 2px solid #fff;
    transform: rotate(45deg);
}
#order_zf{
	width: 3.47rem;
	margin: .14rem auto;
	padding: .11rem;
	background:#FFFFFF;
	box-sizing: border-box;
	border-radius: 3px;
}
.order_zf_zz{
	display: flex;
	justify-content: space-between;
	position: relative;
}
.order-left{
	display: flex;
	align-items: center;
	margin:0 0rem .21rem .04rem;
}
.order_zf_zz > span{
	position: absolute;
	bottom: 0;
    left: .4rem;
	font-size: .12rem;
}
.order_zf_zz_left img{
	width: .23rem;
}
.order_zf_zz_center{
	display: flex;
	align-items: center;
	margin-left: .1rem;
	line-height: .23rem;
	color: #1C1C1C;
	font-size: .14rem;
}
#order_zf1{
	position:fixed;
	left: 0;
	bottom: 0;
	background: #FFFFFF;
	width: 100%;

}
</style>