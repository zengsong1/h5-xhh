<template>
    <div>
        <!--购物车头部-->
		<div id="header_detailscart">
			<goBack></goBack>
		</div>
		<!--购物车轮播图-->
		<div id="banner_detailscart">
			<banner :bannerUrl="bannerUrl"></banner>
		</div>
		<!--商品信息-->
		<div id="message_detailscart">
			<div class="message_detailscart_inner">
				<div class="message_detailscart_inner_top">
					<h1>商品信息</h1>
					<h2 @click="addPPT">加入PPT</h2>
				</div>
				<div class="message_detailscart_inner_bottom">
					<h4>{{goodsData.goodsDetail.GOODS_NAME}}</h4><br>
					<div class="message_detailscart_inner_bottom_xx">
					<i>定制周期：{{goodsData.goodsDetail.CUSTOM_TIME+'个工作日'}}</i>
					<i>赠送积分：{{goodsData.INTEGRATION_RETURN_RATE*goodsData.goodsDetail.CURRENT_PRICE}}</i>
					<i>单位：{{goodsData.goodsDetail.GOODS_UNIT?goodsData.goodsDetail.GOODS_UNIT:'件'}}</i>
					</div>
					<h6 v-show="parameterList==''">¥{{goodsData.goodsDetail.ACTIVITY_PRICE?goodsData.goodsDetail.ACTIVITY_PRICE:goodsData.goodsDetail.CURRENT_PRICE|numFilter}}</h6>
				</div>
			</div>
			<div style="display:flex;justify-content: space-around;margin-top:-.1rem">
			<div v-for="(item,index) in parameterList" :key="index" v-show="parameterList!=''">
				<h6 style="text-align: center;font-size:.22rem;color:#EC2B48;font-weight: bold;">￥{{parseFloat(item.value)| numFilter}}</h6>
				<p style="font-size:.1rem;text-align: center;">{{item.start}}~{{item.end}}{{goodsData.goodsDetail.GOODS_UNIT?goodsData.goodsDetail.GOODS_UNIT:'件'}}</p>
			</div>
			</div>
		</div>
		<!-- 商品配置 -->
		<div id="message_pz" @click="clickSku">
				<div class="message_pz_top">
					<h6>已选规格</h6>
					<span>规格:</span><span style="color:#1C1C1C;text-indent: 1em;">{{cheeckSku.SPECVALUE_NAME?cheeckSku.SPECVALUE_NAME:'当前商品无规格类型'}}</span>
					<img src="../img/home/icon/jt_left.png"><br>
					<span>数量:</span><span style="color:#1C1C1C;text-indent: 1em;">{{cartNum}}</span><br>
					<span>单位：{{goodsData.goodsDetail.GOODS_UNIT?goodsData.goodsDetail.GOODS_UNIT:'件'}}</span>
				</div> 
		</div>
		<!-- 免费拿样 -->
		<div id="message_ny">
				<div class="message_ny_top">
						<h1>免费拿样</h1>
						<i><img src="../img/home/gth.png"/></i>
						<p @click="dialogNY">拿样规则说明</p>
				</div>
				<p>定制先拿样，更安心</p>
				<div class="message_ny_bottom">
					<p>￥ {{goodsData.goodsDetail.CURRENT_PRICE |numFilter}}<span>(1{{goodsData.goodsDetail.GOODS_UNIT?goodsData.goodsDetail.GOODS_UNIT:'件'}})</span></p>
					<router-link :to="'/writeorder?GOODS_ID='+goodsData.goodsDetail.GOODS_ID+'&GROUP_GOODS_ID='+goodsData.goodsDetail.GROUP_GOODS_ID+'&number='+'1'+'&isDirect='+'true'+'&isNayang='+'true'"><button>立即拿样</button></router-link>
				</div>
		</div>
	    <!-- 推荐 -->
	    <Recommend :typeid="goodsDetail.GOODS_TYPE_ID"></Recommend>
	    <!-- 商品详情 -->
		<div id="message_xq">
			<div class="message_xq_top">
				<h6>商品详情</h6>
			</div>
			<div class="message_xq_bottom">
				<div v-html="goodsDetail.GOODS_DETAILS"></div>
			</div>
		</div>
	    <!-- 商品操作 -->
		<div id="message_cz">
			<router-link to="shoppingcart"><div class="message_cz_cartnumber">
				<img src="../img/home/标签栏-未选中/购物车.png" >
				<p style="font-size: .12rem;">购物车</p>
				<span>{{goodsNum}}</span>
			</div>
			</router-link>
			<div class="message_cz_sc" @click="clickSC()" v-show="scimg==0" style="width:.36rem">
				<img src="../img/home/未选中-收藏@2x.png">
				<p style="font-size: .12rem;">收藏</p>
			</div>
			<div class="message_cz_sc" @click="clickSC()" v-show="scimg==1">
				<img src="../img/home/选中-收藏@2x.png">
				<p class="activecolor" style="font-size: .12rem;">已收藏</p>
			</div>
			<!-- <div class="message_cz_jr" style="background: #FF4887;" @click="clickSku">
				加入购物车
			</div> -->
			<!-- <div class="message_cz_dz" style="background: #FFA217;" @click="clickSku">
				我要定制
			</div> -->
			<div class="message_cz_gm" style="background:#EC2B48;" @click="directBuy">
				直接购买
			</div>
		</div>
		<goodsSku :isgoodsSku="isgoodsSku" :skuData="skuData" :cheeckSku="cheeckSku" :goodsDetail="goodsDetail" :parameterList="parameterList" v-on:clickSkuMB2="zidingyi" @sku-Arr="skuArr" @cart-Num="getCartNum" @cartsonNum='cartsonNum'></goodsSku>
    </div>
</template>
<script>
import banner from '../components/banner'
import goBack from '../components/goback.vue'
import goodsSku from '../components/goodsSku'
import { Toast,Dialog} from 'vant'
import Recommend from '../components/Recommend'
export default {
    data(){
        return{
			bannerUrl:[],//轮播图,
			goodsNum:'0',
            goodsData:{
                goodsDetail:{
                    GOODS_NAME:'',
                    CURRENT_PRICE:0 //初始化属性
                },
                INTEGRATION_RETURN_RATE:'',

            },//商品信息
			skuData:[],
			goodsSku:[{
				SPECVALUE_NAME:'null',
				SPECVALUE_ID:'null',
				SKU_IMAGE_URL:'',
				SKU_ID:''
			}],
			isgoodsSku:false,
			zdysj:'',
			SPECVALUE_IDson:'',
			cheeckSku:{     //已选择的sku规格数据
				SKU_IMAGE_URL:'',
				SPECVALUE_ID:'',
				SPECVALUE_NAME:'',
				GOODS_PRICE:'',
				SKU_ID:''
			},
			goodsDetail:{},
			scimg:'',
			idArr:[],
			parameterList:[],
			cartNum:'1',
        }
	},
	watch: {
      '$route':'getDetail'
	},
    methods:{
		getCartNumber(){
			if(window.userInfo){
				let url ='group/Api/getCartNumber.do';
           		let params = new URLSearchParams();
				params.append('token', window.userInfo.token);
				this.$axios({
				method: 'post',
                url:url,
                data:params
				}).then((res)=>{
					if(res.data.status==0) {
						this.goodsNum=res.data.content.cartNumber
					}
				})

			}
		},
		dialogNY(){
			Dialog.alert({
			confirmButtonText:'我已了解',
			confirmButtonColor:'#EC2B48',
			messageAlign:'left',
			title:'拿样规则说明',
			message:'1.拿样须通过【立即拿样】进行采购，只有定制产品支持免费拿样\n2.样品随机发货，不支持挑色、挑码，对买家因色、码问题提出的退换货要求，卖家有权拒绝。因此产生的投诉无效。\n3.拿样支付后15天内，首次下单定制该商品返还样品费,定制该产品必须满足最低起订量要求，确认收货后，样品费退还至付款方式。\n4.样品是否包邮由卖家设定。付邮拿样产品，不管商家如何设置，均应支付市场价的运费，否则商家有权拒绝发货。\n5.买家在拍下样品后的24小时内完成付款流程，如未完成则视为放弃，卖家有权关闭交易。\n6.拿样货品不支持开具发票。'
			})
		},
        getDetail(){
            let url ='group/Api/goodsDetail.do';
            let params = new URLSearchParams();
            if(window.userInfo){
				params.append('token', window.userInfo.token);
				params.append('GROUP_GOODS_ID',this.$route.query.id);
            }  
			//你要传给后台的参数值 key/value
				this.$axios({
				method: 'post',
                url:url,
                data:params
				}).then((res=>{
				     if(res.data.status==0) {
						let data=res.data.content
                        this.goodsData=data
						this.bannerUrl=data.goodsPictures
						this.goodsDetail=data.goodsDetail
						this.scimg=data.goodsDetail.IS_COLLECTION
						document.title=data.goodsDetail.MALLS_NAME?data.goodsDetail.MALLS_NAME:data.goodsDetail.GOODS_NAME
						if(data.goodsDetail.GOODS_POSITION==2){
							this.cartNum=data.goodsDetail.QUANTITATIVE
						}
						if(data.goodsDetail.parameterList){
							this.parameterList=data.goodsDetail.parameterList
						}	
						if(data.goodsSku && data.goodsSpecList!=''){
							this.goodsSku=data.goodsSku
							this.skuData=data.goodsSpecList
							this.cheeckSku.SPECVALUE_NAME=this.goodsSku[0].SPECVALUE_NAME //默认值
							this.cheeckSku.SKU_IMAGE_URL=this.goodsSku[0].SKU_IMAGE_URL //默认值
							this.cheeckSku.GOODS_PRICE=this.goodsSku[0].GOODS_PRICE //默认值
							this.cheeckSku.SKU_ID=this.goodsSku[0].SKU_ID //默认值
						}		
					}
				}))
		},
		addPPT(){
			if(window.userInfo){
				let url='group/Api/savePPTGoods.do';
				let params = new URLSearchParams();
			if(this.cheeckSku.SKU_ID!=''){
				params.append('SKU_ID',this.cheeckSku.SKU_ID)	
			}
				params.append('GOODS_ID',this.goodsDetail.GOODS_ID);
				params.append('GROUP_GOODS_ID',this.goodsDetail.GROUP_GOODS_ID);
				params.append('token', window.userInfo.token);
				this.$axios({
					method: 'post',
					url:url,
					data:params
					}).then((res)=>{
						if(res.data.status==0){
							Toast('加入PPT成功!查看或下载PPT请前往PC端操作');
						}else if (res.data.status==1){
							Toast('已添加PPT');
						}else{
							Toast('加入PPT失败');
						}
					})
		  				
			}else{
				this.$router.push('/login')
			}	
		},
		clickSku(){
			this.isgoodsSku=true
		},
		getCartNum(msg){
			this.cartNum=msg
		},
		directBuy(){ //定制商品直接购买
			let id = this.$route.query.id;
			this.$router.push('/detail?id='+id+'&isDirect=true')
		},
		zidingyi(){
			this.isgoodsSku=false
		},
		cartsonNum(msg){
			this.goodsNum=msg
		},
		skuArr(msg){
			this.SPECVALUE_IDson=msg.join(',')				
					this.goodsSku.forEach(val => {
						if(this.SPECVALUE_IDson==val.SPECVALUE_ID){
							this.cheeckSku=val
						}
					});	
		},
		clickSC(){
			if(window.userInfo){
				let url='group/Api/goodsCollection.do';
				let params = new URLSearchParams();
				params.append('GOODS_ID',this.goodsDetail.GOODS_ID);
				params.append('token', window.userInfo.token);
				params.append('GROUP_GOODS_ID', this.goodsDetail.GROUP_GOODS_ID);
				this.$axios({
					method: 'post',
					url:url,
					data:params
					}).then((res)=>{
						if(res.data.status==0){
							Toast(res.data.content);
							if(res.data.content=='取消成功'){
								this.scimg=0;
							}else if(res.data.content=='收藏成功'){
								this.scimg=1;		
							}
						}else{
							Toast('收藏失败');
						}
					})
			}else{
				this.$router.push('/login')	
			}

		},
    },
    mounted(){
		this.getCartNumber();
	},
	created(){
		this.getDetail();	
	},
    components:{
        banner,
        goBack,
		goodsSku,
		Recommend
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
@import '../style/css/detailscart.css';
.swiper-container{
	height: 3.8rem;
}
#message_detailscart .message_detailscart_inner_bottom i{
	position:relative;
	left: 0;
	top:-.15rem;
	color: #7D7D7D;
	font-size: .12rem;
}
#message_detailscart {
	height: 1.7rem;
}
.van-dialog__header{
	font-weight: bold;
}
</style>