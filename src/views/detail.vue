<template>
    <div class="detail">
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
				<div class="message_detailscart_inner_bottom"> 
					<h6>¥{{goodsData.goodsDetail.ACTIVITY_PRICE?goodsData.goodsDetail.ACTIVITY_PRICE:goodsData.goodsDetail.CURRENT_PRICE|numFilter}}</h6>
					<h4>{{goodsData.goodsDetail.GOODS_NAME}}</h4>
					<!-- <i>赠送积分：{{goodsData.INTEGRATION_RETURN_RATE*goodsData.goodsDetail.CURRENT_PRICE}}</i> -->
				</div>
			</div>
		</div>
		<!-- 商品配置 -->
		<div id="message_pz" @click="clickSku">
				<div class="message_pz_top">
					<div>
						<h6>已选规格</h6>
						<div>
							<img class="look_num" src="../img/lookNum.png" alt="">
						</div>
					</div>
					<div>
						<span>规格</span><span>{{cheeckSku.SPECVALUE_NAME?cheeckSku.SPECVALUE_NAME:'当前商品无规格类型'}}</span>
					</div>
					 <div>
						 <span>数量</span><span>{{cartNum}}</span><br>
					 </div> 
					 <div>
						 <span>单位</span><span>{{goodsData.goodsDetail.GOODS_UNIT?goodsData.goodsDetail.GOODS_UNIT:'件'}}</span>
					 </div> 
				</div> 
		</div>
	    <!-- 推荐 -->
	    <!-- <Recommend :typeid="goodsDetail.GOODS_TYPE_ID"  ></Recommend> -->
		 
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
				<!-- <img src="../img/home/标签栏-未选中/购物车.png" > -->
				<img src="../img/home/deilCar.png" alt="">
				<p style="font-size: .12rem;" class="message_cz_sc_p">购物车</p>
				<span>{{goodsNum}}</span>
			</div>
			</router-link>
			<div class="message_cz_sc" @click="clickSC()" v-show="scimg==0" style="width:.36rem">
				<!-- <img src="../img/home/未选中-收藏@2x.png"> -->
				<img src="../img/home/deilSC.png" alt="">
				<p style="font-size: .12rem;" class="message_cz_sc_p">收藏</p>
			</div>
			<div class="message_cz_sc" @click="clickSC()" v-show="scimg==1">
				<img src="../img/home/选中-收藏@2x.png">
				<p class="activecolor message_cz_sc_p" style="font-size: .12rem;"  >已收藏</p>
			</div>
			<div class="message_cz_jr" style="background: #FF4887;" @click="clickSku">
				加入购物车
			</div>
			<!-- <div class="message_cz_gm" style="background: #EC2B48;" @click="clickSku">
				直接购买
			</div> -->
		</div>
		<goodsSku :isgoodsSku="isgoodsSku" :skuData="skuData" :cheeckSku="cheeckSku" :goodsDetail="goodsDetail" v-on:clickSkuMB2="zidingyi" @sku-Arr="skuArr" @cart-Num="getCartNum" @cartsonNum='cartsonNum' :minnum='detailObj.MINIMUM'></goodsSku>
		</div>
</template>
<script>
import banner from '../components/banner'
import goBack from '../components/goback.vue'
import goodsSku from '../components/goodsSku'
// import Recommend from '../components/Recommend' 
import { Toast } from 'vant';
export default {
	provide () {
    return {
      reload: this.reload
    	}
 	 },
    data(){
        return{
			filmTypes:[ 
				{ id: '1', name: '商品详情',content: ""},
				{ id: '2', name: '产品参数',content: ""},
				{ id: '3', name: '售后保障',content: ""}, 
			], //
			detailObj:{},
			bannerUrl:[],//轮播图,
			goodsNum:0,
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
			cartNum:'1',
			scimg:'',
			idArr:[]
		
        }
	},
	watch: {
      '$route':'getDetail'
	},
    methods:{
		// 获取购物数量
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
        	getDetail(){
            let url ='group/Api/goodsDetail.do';
            let params = new URLSearchParams();
            if(window.userInfo){
				params.append('token', window.userInfo.token);
				params.append('GROUP_GOODS_ID',this.$route.query.id);
				
			}
			if(this.$route.query.isFestival){
				params.append('isFestival',this.$route.query.isFestival);
			}
			let isDirect = this.$route.query.isDirect;
			if(isDirect){
				params.append('isDirect',isDirect);
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
						this.cartNum=data.goodsDetail.MINIMUM
						this.goodsDetail=data.goodsDetail
						this.filmTypes[0].content = data.goodsDetail.GOODS_DETAILS  // 商品详情
						this.filmTypes[1].content = data.goodsDetail.PARAMETER_VALUES
						Object.assign(this.detailObj, data.goodsDetail)
						this.scimg=data.goodsDetail.IS_COLLECTION
						document.title=data.goodsDetail.MALLS_NAME?data.goodsDetail.MALLS_NAME:data.goodsDetail.GOODS_NAME
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
		zidingyi(){
			this.isgoodsSku=false
		},
		skuArr(msg){
			this.SPECVALUE_IDson=msg.join(',')				
					this.goodsSku.forEach(val => {
						if(this.SPECVALUE_IDson==val.SPECVALUE_ID){
							this.cheeckSku=val
						}
					});	
		},
		getCartNum(msg){
			this.cartNum=msg
		},
		cartsonNum(msg){
			this.goodsNum=msg
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
@import '../style/css/detailscart.css';
.swiper-container{
	height: 3.8rem;
}
.van-tab--active{
	color: #EF0E01;
}
</style>
<style>
	 
	.detail .van-tab--active span{
		width: 0.56rem;
		height: 0.19rem;
		font-size: 0.14rem;
		font-family: Microsoft YaHei;
		font-weight: 400;
		line-height: 0.19rem;
		color: #EF0E01;
		opacity: 1;
	}
	.detail .van-tabs__wrap {
		margin-bottom: 0.04rem;
	}
</style>