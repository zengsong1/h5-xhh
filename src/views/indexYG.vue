<template>
    <div>
        <!--头部-->
		<div id="homeJT_header">
			<div class="homeJT_header_top">
				<div class="homeJT_header_top01">
					<img :src="logoUrl?logoUrl:''" style="height: .21rem;">
				</div>
			</div>
			<router-link to="initialSearch"><div class="homeJT_header_bottom">
				 <img src="../img/home/search.png" style="height: .29rem;">
				 <input type="text" placeholder="搜索商品"/>
                 <div class="header_right">
					<router-link to="login"><span v-show="islogin">登录</span></router-link>
					<router-link to="myYG"><img v-show="!islogin" style="height:.27rem;vertical-align: middle;" src="../img/home/logined.png"/></router-link>
			    </div>
			</div></router-link>     
		</div>
		<!--主体内容-->
		<div id="main">
		<!--人气推荐-->
		<div class="hot">
		  <div class="hot_inner">
		      <div class="hot_top">
					<i><img src="../img/home/首页/hg@2x.png"></i>
					<h1>员工福利</h1>
			  </div>
			  	<div class="hot_bottom_parent">
			  	<div class="hot_bottom" v-for="(item,index) in goodslist" :key="index" @click="goDetail(item)">
			  	<i><img v-lazy="item.INDEX_PICTURE"></i>
			  	<h4>{{item.GOODS_NAME}}</h4>
			  	<h6>￥{{item.CURRENT_PRICE |numFilter}}</h6>
			  </div>
			  </div>
		     </div>
		    </div>		
		<!--分类-->	
		<!--尾部-->
		<div id="footer">
			<div class="footer-inner">
					<router-link to="indexYG"><span class="active"><i><img src="../img/home/标签栏-选中/首页@2x.png"></i>首页</span></router-link>
					<router-link :to="giftExchange.COUPON_CARD_ID?'giftGoods':'giftCoupons'"><span><i><img src="../img/home/kjno.png"></i>礼品卷兑换</span></router-link>
					<router-link to="shoppingcart"><span><i><img src="../img/home/标签栏-未选中/购物车@2x.png"></i>购物车</span></router-link>
					<router-link to="myYG"><span><i><img src="../img/home/标签栏-未选中/个人中心@2x.png"></i>个人中心</span></router-link>
			</div>
		</div>
    </div>
</div>
</template>
<script>
import downTime from '../components/downTime'
import { Tab, Tabs } from 'vant';
import { mapState} from 'vuex'
export default {
    data(){
        return{
            islogin:true,
			goodslist:'',
			logoUrl:''
        }
	},
	computed:{
        ...mapState('address', ["giftExchange"]),
    },
    methods:{
            indexShop (){
            var url ='group/Api/goodsList.do';
				let params = new URLSearchParams();
                params.append('TOP_ID', window.userInfo.TOP_ID);
				params.append('token', window.userInfo.token);
				params.append('types', 'welfare');
				params.append('currentPage',1);
				this.$axios({
				method: 'post',
                url:url,
                data:params
				}).then((res=>{
				     if(res.data.status==0) {
						let data=res.data.content
						this.goodslist=data.goodsList;
					}
				}))
		},
		indexInfor(){
            var url ='group/Api/indexInformation.do';
                let params = new URLSearchParams();
                params.append('TOP_ID', window.userInfo.TOP_ID);
				this.$axios({
				method: 'post',
                url:url,
                data:params
				}).then((res=>{
				     if(res.data.status==0) {
						let data=res.data.content
						if(data.mallSetting){
								document.title=data.mallSetting.MALLS_NAME
								this.logoUrl=data.mallSetting.MALLS_LOGO
								localStorage.setItem("MALLS_NAME",data.mallSetting.MALLS_NAME)
							}	
					}
				}))
        },
        gosearchGOODS_POSITION(num){
			this.$router.push({
				path: '/search',
				query: {
				GOODS_POSITION:num
				}
			})
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
			else {
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
			// 	})
			// }
		}
    },
    mounted(){
		if(localStorage.getItem('userInfo')){
				this.islogin=false
			}else{
				this.islogin=true
		}
	},
    created(){
		this.indexShop()
		this.indexInfor()
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
@import '../style/css/home1.css';
#main{
	margin-top: 0;
}
</style>