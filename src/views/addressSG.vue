<template>
    <div>
		<goBack></goBack>
		<!-- <router-link :to="'/writeorder?'+urlparam"><div class="header-back"></div></router-link> -->
        <div id="address_title">
			收货地址
		</div>
		<div id="address_main" v-show="ressList!=''">
			<div class="address_main_01" v-for="(item,index) in ressList" :key="index" :class="{noborder: index === ressList.length-1}">
				<div  @click="go(item)">
				<span style="margin-right:.1rem;">{{item.NAME}}</span><span>{{item.PHONE_NUMBER}}</span>
				<i v-show="item.IS_DEFAULT==1"></i>
				<p>{{item.PROVINCE+item.CITY+item.AREA+item.DETAILS_ADDRESS}}</p>
				</div>
				<b @click="goaddressEdit(item.ADDRESS_ID)">编辑</b>
			</div>
		</div>
		<div class="addressNO" v-show="ressList==''"> 
            <img src="../img/home/dzqx2.png" >
            <p>你未设置收货地址</p>
			<router-link :to="'/addressEdit?'+urlparam"><span>添加收货地址</span></router-link>
        </div>
	    <div id="address_footer" v-show="ressList!=''">
			<router-link :to="'/addressEdit?'+urlparam"><div class="address_footer_inner">
			添加新地址
			</div>
			</router-link>
		</div>
    </div>
</template>
<script>
import goBack from '../components/goback.vue'
import { mapMutations } from 'vuex'
export default {
    data(){
        return{
			ressList:'',
			urlparam:''
        }
    },
    methods:{
		...mapMutations('address', ["checkDZ"]),
		go(item){
			if(this.$route.query.form=='my'){
				return false
			}else{
				this.checkDZ(item.ADDRESS_ID)
				this.$router.go(-1);
			}	
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
                    this.ressList=res.data.content.addressList
			})
		},
		goaddressEdit(item){
			this.$router.push('addressEdit?ADDRESS_ID='+item)
		},
    },
    created(){
		this.getuserAddressList(); 
		this.urlparam=window.location.href.split('?')[1]
	},
	components:{
		goBack
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
@import '../style/css/addressSG.css';
.header-back {
  width: 0.08rem;
  height: .12rem;
  background: url(../img/home/icon/jt_right.png) no-repeat;
  background-size: contain;
  position: absolute;
  top: 0.2rem;
  left: 0.2rem;
}
.noborder{
	border:none;
}
/* 没商品时 */
.addressNO img{
    display: block;
    margin: 0 auto;
    height: 1.25rem;;
    margin-top: 1.5rem;
}
.addressNO p{
    display: block;
    text-align: center;
    color: #7D7D7D;
    font-size: .16rem;
    line-height: .8rem;
}
.addressNO span{
	display: block;
	width:1.1rem;
	height:.3rem;
	font-size:.12rem;
	color: #EC2B48;
	border: 1px solid #EC2B48;
	line-height: .3rem;
	text-align: center;
	border-radius:.15rem;
	margin: 0 auto;
}
</style>