<template>
    <div>
        <div id="header_my">
			<div class="header_my_inner">
				<div class="header_my_inner_top">
					<div class="header_my_inner_top_left" @click="gomymessage">
						<p>{{userInfo.USER_NAME}}</p>
						<h6></h6>
						<span>余额:{{money}}</span>
					</div>
					<div class="header_my_inner_top_right">
						<img v-show="userInfo.HEAD_IMAGE" :src="userInfo.HEAD_IMAGE">
						<img v-show="!userInfo.HEAD_IMAGE" src="../img/home/ic_touxiang.png">
					</div>
				</div>
			</div>
		</div>
	    <div id="main_my">
	    	<div class="main_my_inner">
	    		<router-link to="normal_order?ORDER_POSITION=0" v-show="khFlag"><div class="main_my_inner_01">
	    			<div class="main_my_inner_01_01">
	    				<h5>普通订单</h5>
	    				<h6 class="jiantou"></h6>
	    			</div>
	    		</div></router-link>
	    		<router-link to="/giftorder" ><div class="main_my_inner_02">
	    			<div class="main_my_inner_02_01">
	    				<h5>礼品卷兑换单</h5>
	    				<h6 class="jiantou"></h6>
	    			</div>
	    		</div></router-link>
				<router-link to='/Mycollect' v-show="khFlag"><div class="main_my_inner_04">
	    			<div class="main_my_inner_04_01">
	    				<h5>我的收藏</h5>
	    				<h6 class="jiantou"></h6>
	    			</div>
	    		</div></router-link>
	    		<router-link to='/addressSG?form=my'><div class="main_my_inner_03">
	    			<div class="main_my_inner_03_01">
	    				<h5>地址管理</h5>
	    				<h6 class="jiantou"></h6>
	    			</div>
	    		</div></router-link>	
	    	</div>
	    </div>
	    <div id="quit_my">
	    	<div class="quit_my_inner" @click="quit">
	    		<span>退出登录</span>
	    	</div>
	    </div>
	    <!--尾部-->
		<div id="footer">
			<div class="footer-inner">
					<router-link to="indexYG" v-show="khFlag"><span ><i><img src="../img/home/标签栏-未选中/首页@2x.png"></i>首页</span></router-link>
                    <router-link :to="giftExchange.COUPON_CARD_ID?'giftGoods':'giftCoupons'"><span><i><img src="../img/home/kjno.png"></i>礼品卷兑换</span></router-link>
					<router-link to="shoppingcart" v-show="khFlag"><span><i><img src="../img/home/标签栏-未选中/购物车@2x.png"></i>购物车</span></router-link>
					<span class="active"><i><img src="../img/home/标签栏-选中/我的@2x.png"></i>个人中心</span>
			</div>
		</div>
    </div>
</template>
<script>
import { mapState} from 'vuex'
import { Dialog } from 'vant';
export default {
        data(){
            return{
				money:0,
				khFlag:true,
				userInfo:{
					USER_NAME:null,
					HEAD_IMAGE:' ',
				},
				ISUNIFY:'',//集团总账号才有积分
            }
        },
        computed:{
        ...mapState('address', ["giftExchange"]),
        },
		methods:{
			changeType(item){
			this.curType = item.id;
			},
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
						let val=res.data.content.currentUser
						this.userInfo.USER_NAME=val.NICK_NAME?val.NICK_NAME:val.UNIT_NAME?val.UNIT_NAME:val.USER_NAME?val.USER_NAME:''
						this.money=Number(val.TOTAL_MONEY)-Number(val.USED_MONEY)
						this.userInfo.HEAD_IMAGE=val.HEAD_IMAGE
						this.ISUNIFY=window.userInfo.IS_UNIFY
                    }
                })
			},
			quit(){
				Dialog.confirm({
				message:'确定要退出当前账号?'
				}).then(()=>{
					localStorage.removeItem('userInfo')
					localStorage.removeItem('MALLS_NAME')
					this.$router.push('/login')
				}).catch(()=>{

				})
			},
			gomymessage(){
				this.$router.push('/myMessage')
			}
		},
		created(){
			this.getuserInfo()
			if(window.userInfo.role==2){
				this.khFlag=false
			}else{
				this.khFlag=true
			}		
		},
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
@import '../style/css/my.css';
#main_my{
	margin: -.3rem auto 0 auto;
	border-radius: 4px;
}
</style>