<template>
    <div>
		<goBack></goBack>
        <div id="order_title">
			提交订单
		</div>
		<div id="order_dz" @click="goaddressSG">
			<!-- <div class="order_dz_top">
				<h6 class="h6tilte">收货信息</h6>
			</div> -->
			<div class="order_dz_bottom">
				<!-- <div class="order_dz_left">
					<img src="../img/home/order_dz.png" style="height: .42rem;">
				</div> -->
				<div class="order_dz_center" v-if="isshow">
					<span>{{DZlist.NAME?DZlist.NAME:''}}</span><span>{{DZlist.PHONE_NUMBER}}</span><span class="moren" v-show="DZlist.IS_DEFAULT==1" style="font-size: .10rem;">默认</span><br>
					<!-- <span style="font-size: .12rem; max-width: 1.8rem;">{{DZlist.PROVINCE+DZlist.CITY+DZlist.AREA+DZlist.DETAILS_ADDRESS}}</span> -->
					<div>{{DZlist.PROVINCE+DZlist.CITY+DZlist.AREA+DZlist.DETAILS_ADDRESS}}</div>

				</div>
				<div class="order_dz_center" v-else>
					<P>+ 请添加收货地址</P>
				</div>
				<div class="order_dz_right" style="display:flex;align-items: center;">
					<van-icon name="arrow"  color="#BFBFBF"/>
					<!-- <img src="../img/home/icon/jt_left.png" style="width: .08rem;"> -->
				</div>
			</div>
		</div>
		
	    <!-- 支付方式 -->
		<!-- <div id="order_zf">
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
			<div class="order_xx_top">
				<h3>商品信息</h3>
			</div>
			<div class="order_xx_bottom" v-for="(item,index) in cartList" :key="index">
				<div v-if="(index+1) <= showNum">
					<div class="order_xx_bottom_left">
					<img :src="item.INDEX_PICTURE">
					</div>
					<div class="order_xxbottom_right">
						<div class="order_xxbottom_right_01">
							<p>{{item.GOODS_NAME}}</p>
							<p>{{item.SPEC?item.SPEC:item.SPECVALUE_NAME}}</p>
							<div class="order_xxbottom_right_01_inner">
							<p>¥{{item.GOODS_CURRENT_PRICE}}</p>
							<!-- <span>x{{item.AMOUNT?item.AMOUNT:item.number}}{{item.GOODS_UNIT?item.GOODS_UNIT:'件'}}</span> -->
							<span>x {{item.AMOUNT?item.AMOUNT:item.number}}</span>
							</div>
						</div>
					</div> 
				</div>  
			</div>  
			<div v-show="cartList.length>2  && showMore" class="order_ly_show">
				<div @click="showNum = cartList.length;showMore = false">
					<div>
						<van-icon name="arrow-down" />
						<div>展开</div>
					</div>
					
				</div> 
			</div>
			<div v-show="cartList.length > 2 && !showMore" class="order_ly_show">
				<div @click="showNum = 2;showMore = true">
					<div>
						<van-icon name="arrow-up" />
						<div>收起</div>
					</div> 
				</div> 
			</div>
		</div>
	    <!-- 发票信息 -->
		<!-- <router-link to="/messageFP"><div id="order_fp" v-show="FPshow">
			<h6 class="h6tilte">发票信息</h6>
			<span style="position: absolute;left: 1rem;top: .13rem;font-size: .1rem;">必填</span>
			<img src="../img/home/icon/jt_left.png" style="width: .08rem;float: right;">
            <p v-show="!FPflag">无发票信息</p>
			<p v-show="FPflag">纸质发票·{{FPsure}}</p>
		</div>
		</router-link> -->
		
	    <!-- 买家留言 -->
		<div id="order_ly">
			<div class="order_ly_top">
				<div>
					<p class="order_ly_top_title">留言</p>
					<textarea type="text" v-model="Sellermessage"/>
				</div>
				<div>
					<div class="order_ly_top_title">订单总额</div>
					<div class="momey">¥{{(orderTotalAmount - postage).toFixed(2)}}</div>
				</div>
				<div>
					<div class="order_ly_top_title">运费</div>
					<div  class="momey">{{postage=='0.00'?'包邮':'¥'+postage}}</div>
				</div> 
				<!-- <img src="../img/home/icon/jt_left.png" style="width:.08rem;height:.135rem;"> --> 
			</div> 
			
		</div>
		<div class="order_ly_add">
			<div>应付:</div>
			<div>¥{{orderTotalAmount}}</div>
		</div>
	    <!-- 提交订单 -->
		<div id="order_footer">
			<div class="order_footer_num">
				共 <span style="color:#EC2B48;font-size: .16rem;font-weight: 800;">{{cartList.length}}</span> 件
			</div>
			<div>
				<div class="order_footer_left">
					<p>{{frontMoney?'预付定金:':'应付金额:'}}</p>
					<p>¥{{frontMoney?frontMoney:orderTotalAmount}}</p>
				</div>
				<div class="order_footer_right" @click="submit">
					提交审核
				</div>
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
		</van-popup>
    </div>
</template>
<script>
import { mapState,mapMutations } from 'vuex'
import goBack from '../components/goback.vue'
import { Toast,Dialog } from 'vant'
export default {
	data(){
		return{
			showMore : true, // 显示更多
			showNum : 2, 
			iSshow:false,
			orderTotalAmount:'',
			postage:'',
			DZlist:{//收货信息地址
			}, 
			isshow:false,
			show:false,
			cartList:{
				GOODS_AMOUNT:'1'
			},
			FPsure:'',
			Sellermessage:'',
			FPshow:true,
			frontMoney:'',//预付定金
			currentUser:{},
		}
	},
	computed:{
        ...mapState('address', ["checkaddress"]), 
		...mapState('address', ["defaultaddress"]),
		...mapState('address', ["FPflag"]),
		...mapState('address', ["FPmessage"]),
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
	methods:{
		...mapMutations('address', ["checkFP"]),
		...mapMutations('address', ["deleteDZ"]),
		...mapMutations('address', ["defaultDZ"]),
		...mapMutations('address', ["defaultFP"]),
		handleGold(){
			this.iSshow=true
		},
		handleKnow(){
			this.iSshow=false
		},
		goaddressSG(){
			let param=window.location.href.split('?')[1]
			this.$router.push('addressSG?'+param)
		},
		// 获取用户信息
		getuserInfo(){
				var url ='headquarters/Api/userInfo.do';
				var params = new URLSearchParams();
           	 	params.append('token',window.userInfo.token);
				this.$axios({
				method: 'post',
				url:url,
				data:params
				}).then((res)=>{
                    if(res.data.status==0){
						this.currentUser=res.data.content.currentUser
                    }
                })
			},
		getcartOrder(){
			// let url ='group/Api/cartSureOrder.do'; 
			let url = "auditGroup/Api/cartSureOrder.do"
           		let params = new URLSearchParams();
				params.append('token', window.userInfo.token);
				if(this.$route.query.ids){
                params.append('ids', this.$route.query.ids);
				}
				this.$axios({
				method: 'post',
                url:url,
                data:params
				}).then((res)=>{
					if(res.data.status==0){
						let val=res.data.content
						this.postage=val.orderFreightAmount
						this.orderTotalAmount=val.orderTotalAmount
						this.cartList=val.cartList
						this.frontMoney=val.PREPAID_AMOUNT
						// this.defaultFP(val.userInvoice)//默认发票信息			
					}
			})
		},
		getsureOrder(){
			let url ='group/Api/sureOrder.do';
           		let params = new URLSearchParams();
				params.append('token', window.userInfo.token);
				if(this.$route.query.GOODS_ID){
                params.append('GOODS_ID', this.$route.query.GOODS_ID);
				}
				if(this.$route.query.GROUP_GOODS_ID){
                params.append('GROUP_GOODS_ID',this.$route.query.GROUP_GOODS_ID);
				}
				if(this.$route.query.SKU_ID){
                params.append('SKU_ID', this.$route.query.SKU_ID);
				}
				if(this.$route.query.number){
                params.append('number',this.$route.query.number);
				}
				if(this.$route.query.isDirect){
                params.append('isDirect', this.$route.query.isDirect);
                }
				this.$axios({
				method: 'post',
                url:url,
                data:params
				}).then((res)=>{
					if(res.data.status==0){
						let val=res.data.content
						this.postage=val.orderFreightAmount
						this.orderTotalAmount=val.orderTotalAmount
						this.cartList=val.cartList
						this.frontMoney=val.cartList[0].PREPAID_AMOUNT
						// this.defaultFP(val.userInvoice)//默认发票信息
					}
			})
		},
		getInvoice(){
			let url ='headquarters/Api/getInvoice.do';
           		let params = new URLSearchParams();
				params.append('token', window.userInfo.token);
				this.$axios({
				method: 'post',
                url:url,
                data:params
				}).then((res)=>{
					if(res.data.status==0){
						let val=res.data.content
						if(val.userInvoice){
							this.FPsure=val.userInvoice.UNIT_NAME
						}
						this.defaultFP(val.userInvoice)//默认发票信息
					}    
			})
		},
		getuserAddressList(){
            let url ='address/Api/userAddressList.do';
           		let params = new URLSearchParams();
				params.append('token', window.userInfo.token);
				this.$axios({
				method: 'post',
                url:url,
                data:params
				}).then((res)=>{
					if(res.data.status==0){ 
						if(res.data.content.addressList!=''){
							res.data.content.addressList.forEach(val => {
								if(val.IS_DEFAULT==1){
								this.defaultDZ(val.ADDRESS_ID)	
								}
							});
						}else{
							this.deleteDZ(0)
						}
						this.getaddressDetail();
					}    
			})
		},
		getaddressDetail(){ 
		 if(this.checkaddress){
				let url ='address/Api/addressDetail.do';
           		let params = new URLSearchParams();
				params.append('token', window.userInfo.token);
				params.append('ADDRESS_ID', this.checkaddress);
				this.$axios({
				method: 'post',
                url:url,
                data:params
				}).then((res)=>{ 
					if(res.data.status==0){
						this.isshow=true
						this.DZlist=res.data.content.address	
					}  
				})
			}else if(!this.checkaddress && this.defaultaddress){
				let url ='address/Api/addressDetail.do';
           		let params = new URLSearchParams();
				params.append('token', window.userInfo.token);
				params.append('ADDRESS_ID', this.defaultaddress);
				this.$axios({
				method: 'post',
                url:url,
                data:params
				}).then((res)=>{
					if(res.data.status==0){
						this.isshow=true
						this.DZlist=res.data.content.address		
					}  
				})
			}else{
				this.isshow=false
			}
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
							this.$router.push({
							path: '/orderDetail',
							query: {
								ORDER_ID: val
								}
							})
						}, 1000);
					}
				})
		},
		submit(){
			let flag=false //支付方式
			for (let i = 0; i < document.getElementsByName('zf').length; i++) {
				if(document.getElementsByName('zf')[i].checked==true){
					flag=true	
				}
			}
			if(!this.isshow){
				Toast('请选择收货地址')
			}
			// else if(!flag){
			// 	Toast('请选择支付方式')
			// }
			else if(this.$route.query.ids){ //购物车提交订单
				let url ='auditGroup/Api/cartSubmitOrder.do';
				let params = new URLSearchParams();
				params.append('token', window.userInfo.token);
				params.append('ids', this.$route.query.ids);
				params.append('ADDRESS_ID', this.DZlist.ADDRESS_ID);
				params.append('LEAVE_MESSAGE', this.Sellermessage);
				this.$axios({
						method: 'post',
						url:url,
						data:params
						}).then((res)=>{
							if(res.data.status==0){
								this.$router.push({
									path: "/submitPage",
									query : {
										ORDER_ID: res.data.content.ORDER_ID
									} 
								})  
							}  
						})
			} 
		}
	},
	components:{
		goBack
	},
	activated(){
		this.getuserInfo()
		this.Sellermessage=''
		if(this.$route.query.ids){
			this.getcartOrder()
		}else{
			this.getsureOrder()
		} 

		this.getuserAddressList()
		this.getInvoice()
		if(window.userInfo.role==4 ||this.$route.query.isNayang){
			this.FPshow=false;
			this.checkFP(true);
		}else{
			this.FPshow=true;
		}
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
<style>
@import '../style/css/reset.css';
@import '../style/css/common.css';
@import '../style/css/writeorder.css';
</style>