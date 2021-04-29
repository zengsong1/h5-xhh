<template>
    <div>
        <div id="homeJT_header">
                <div class="homeJT_header_top">
                    <div class="homeJT_header_top01">
                        <img src="../img/home/login/logo3.png" style="height: .21rem;">
                    </div>
                </div>
        </div>
        <div id="dhj">
             <div class="dhkh">
				<input type="text" placeholder="请输入卡号"  v-model="khval"/>
			</div>
			<div class="dhmm">
				<input type="password" placeholder="请输入密码"  v-model="mmval"/>
			</div>
        </div>
        <div id="clicksure">
			<div class="clicksure01" @click="getCoupon">
				<span>确定</span>
			</div>
		</div>
        <div id="footer">
			<div class="footer-inner">
					<router-link to="/indexYG" v-show="khFlag"><span><i><img src="../img/home/标签栏-未选中/首页@2x.png"></i>首页</span></router-link>
					<router-link to="giftCoupons"><span class="active"><i><img src="../img/home/kjyes.png"></i>礼品卷兑换</span></router-link>
					<router-link to="shoppingcart" v-show="khFlag"><span><i><img src="../img/home/标签栏-未选中/购物车@2x.png"></i>购物车</span></router-link>
					<router-link to="myYG"><span><i><img src="../img/home/标签栏-未选中/个人中心@2x.png"></i>个人中心</span></router-link>
			</div>
		</div>
    </div>
</template>
<script>
import { mapMutations } from 'vuex';
export default {
    data(){
        return{
            khval:'',
			mmval:'',
			khFlag:true,
        }
    },
    methods:{
        ...mapMutations('address', ["giftCoupons"]),
        getCoupon(){
            var url ='group/Api/getCoupon.do';
				let params = new URLSearchParams();
				params.append('token', window.userInfo.token);
				params.append('COUPON_CARD_ID',this.khval);
				params.append('CARD_PASSWORD',this.mmval);
				this.$axios({
				method: 'post',
                url:url,
                data:params
				}).then((res=>{
				     if(res.data.status==0) {
                         this.giftCoupons(res.data.content)
                         this.$router.push('/giftGoods')
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
								localStorage.setItem("MALLS_NAME",data.mallSetting.MALLS_NAME)
							}
						}
				}))
        },
	},
	created(){
		this.indexInfor()
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
@import '../style/css/reset.css';
@import '../style/css/common.css';
@import '../style/css/home1.css';
.dhkh{
	width: 2.72rem;
	margin: 0 auto;
	border-bottom: 1.5px solid #3B3B3B;
	padding-bottom: .08rem;
	padding-left: .03rem;
	margin-bottom: .53rem;
}
.dhmm{
	width: 2.72rem;
	margin: 0 auto .85rem auto;
	border-bottom: 1.5px solid #3B3B3B;
	padding-bottom: .08rem;
	padding-left: .03rem;
	display: flex;
	justify-content: space-between
}
.dhkh input{
	font-size: .14rem;
	margin-right: .2rem;
    width: 2rem;
    background: none;
}
.dhmm input{
	font-size: .14rem;
	margin-right: .2rem;
    width: 1.5rem;
    background: none;
}
#dhj{
    margin-top: 1.5rem;
}
#clicksure{
	width:2.75rem;
	margin:0 auto;
}
#clicksure .clicksure01{
	width:2.75rem;
	height: .44rem;
	border-radius: .22rem;
	background: #f44d66;
	text-align: center;
    line-height:.44rem ;
    color: #FFFFFF;
}
</style>