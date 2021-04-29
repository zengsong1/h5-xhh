<template>
    <div>
        <goBack></goBack>
		<div id="message_fp_title">
			发票信息
		</div>
		<!-- 发票信息 -->
        <div id="message_fp_top">
            <h6>开具发票</h6>
            <!-- <span :class="{active :!isshow}" @click="isshow=false,checkFP(false)">不开发票</span> -->
            <span class="active">开具发票</span>
        </div>
		<div id="message_fp_main">
			<div class="message_fp_main_01">
				<span>发票类型</span>
				<i>纸质发票</i>
			</div>
			<div class="message_fp_main_01">
				<span>发票抬头</span>
				<i>单位</i>
			</div>
			<div class="message_fp_main_01">
				<span>单位名称</span>
				<input type="text" v-model="dwmc" placeholder="请输入单位名称"/>
			</div>
			<div class="message_fp_main_01">
				<span style="margin: 0;">纳税人识别码</span>
				<input type="text" v-model="nsr" placeholder="请输入纳税人识别码"/>
			</div>
			<div class="message_fp_main_01">
				<span>注册地址</span>
				<input type="text"  v-model="zcdz" placeholder="请输入注册地址"/>
			</div>
			<div class="message_fp_main_01">
				<span>注册电话</span>
				<input type="text"  v-model="zcdh" placeholder="请输入注册电话"/>
			</div>
			<div class="message_fp_main_01">
				<span>开户银行</span>
				<input type="text" v-model="khyh"  placeholder="请输入开户银行"/>
			</div>
			<div class="message_fp_main_01">
				<span>银行账号</span>
				<input type="text" v-model="yhzh" placeholder="请输入银行账号"/>
			</div>
			<div class="message_fp_main_01">
				<span style="margin-right:.42rem">收票人</span>
				<input type="text" v-model="spr" placeholder="请输入收票人"/>
			</div>
			<div class="message_fp_main_01">
				<span>联系方式</span>
				<input type="text" v-model="lxfs" placeholder="请输入联系方式"/>
			</div>
			<div class="message_fp_main_01" @click="show">
				<span style="margin-right:.14rem">收票人地区</span>
				<input type="text" :value="defaDZ?defaDZ:''" placeholder="请选择收票人地区"/>
				
			</div>
			
			<div class="message_fp_main_01" style="border:none">
				<span >详细地址</span>
				<input type="text"  v-model="xxdz" placeholder="请输入详细地址"/>
			</div>
		</div>
		<!-- 发票保存 -->
		<div id="message_fp_footer" @click="clicksure">
			确定
		</div>
		<div id="menban" v-show="dzShow" @click="dzShow=false">
		</div>
		<van-area :area-list="areaList" :class="{animation:dzShow}" value="110102" @confirm="sure" @cancel="cancel"/>
		
	</div>
</template>
<script>
import goBack from '../components/goback.vue'
import { mapState } from 'vuex'
import Vue from 'vue';
import { Area } from 'vant';
import { Toast } from 'vant';
import { mapMutations } from 'vuex'
Vue.use(Area);
export default {
    data(){
        return{
			dwmc:'',
			nsr:'',
			zcdz:'',
			zcdh:'',
			yhzh:'',
			khyh:'',
			spr:'',
			lxfs:'',
			xxdz:'',
			isreg:false,
			isshow:false,
			dzShow:false,
			areaList:{
				province_list:{},
				city_list:{},
				county_list:{}
				},
			defaDZ:'',
			defaDZcode:''
        }
    },
    computed:{
        ...mapState('address', ["FPmessage"]),
	},
	methods:{
		...mapMutations('address', ["checkFP"]),
		getphoneAreaList(){
   			  let url ='address/Api/phoneAreaList.do';
              let params = new URLSearchParams();
              this.$axios({
              method: 'post',
                      url:url,
                      data:params
              }).then((res)=>{
                  let province_list={} ,county_list={},city_list={};
                  for (let i in res.data.content.province_list) {
                    Object.assign(province_list,res.data.content.province_list[i])
                  }
                  for (let i in res.data.content.county_list) {
                    Object.assign(county_list,res.data.content.county_list[i])
                  }
                  for (let i in res.data.content.city_list) {
                    Object.assign(city_list,res.data.content.city_list[i])
                  }
                    this.areaList.province_list=province_list;
                    this.areaList.county_list=county_list;
                    this.areaList.city_list=city_list;
                  if(this.$route.query.ADDRESS_ID){
                      this.getaddressDetail();
                      this.isshow=true;
                    } 
              })
		},
		sure(columnsNum){
			this.defaDZ=columnsNum[0].name+columnsNum[1].name+columnsNum[2].name
			this.dzShow=false;
			this.defaDZcode=columnsNum[2].code
		},
		cancel(){
			this.dzShow=false;
		},
		show(){
			this.dzShow=true
		},
		clicksure(){
			if(!this.dwmc){
				Toast('请输入有效的单位名称')
				return
			}
			if(!this.nsr){
				Toast('请输入有效的纳税人识别码')
				return
			}
			if(!(/(^[ a-zA-Z0-9]{15}$)|(^[ a-zA-Z0-9]{18}$)/).test(this.nsr)){
				Toast('请输入正确的纳税人识别码')
				return
			}
			if(!this.zcdz){
				Toast('请输入有效的注册地址')
				return
			}
			if(!this.zcdh){
				Toast('请输入有效的注册电话')
				return
			}
			if(!(/([0-9]{3,4}-)?[0-9]{7,8}/.test(this.zcdh))){
				Toast('请输入正确的注册电话')
				return
			} 
			if(!this.yhzh){
				Toast('请输入有效的银行账户')
				return
			}
			if(!(/^[0-9]+.?[0-9]*$/.test(this.yhzh))){
				Toast('请输入正确的银行账户')
				return
			} 
			if(!this.khyh){
				Toast('请输入有效的开户银行')
				return
			}
			if(!this.spr){
				Toast('请输入有效的收票人信息')
				return
			}
			if(!this.lxfs){
				Toast('请输入有效的联系方式')
				return
			}
			if(!(/^(\+?0?86-?)?1[345789]\d{9}$/.test(this.lxfs))){
				Toast('请输入正确的联系方式')
				return
			} 
			if(!this.xxdz){
				Toast('请输入有效的详细地址')
				return
			}
			let url ='headquarters/Api/editInvoice.do';
			let params = new URLSearchParams();
			params.append('token',window.userInfo.token);
			params.append('UNIT_NAME',this.dwmc);
			params.append('TAXPAYER_CODE',this.nsr);
			params.append('REGISTERED_ADDRESS',this.zcdz);
			params.append('REGISTERED_CALL',this.zcdh);
			params.append('BANK',this.khyh);
			params.append('BANK_ACCOUNT',this.yhzh);
			params.append('RECEIVE',this.spr);
			params.append('CONTACT',this.lxfs);
			params.append('AREA_ID',this.defaDZcode);
			params.append('DETAILS_ADDRESS',this.xxdz);
			this.$axios({
			method: 'post',
					url:url,
					data:params
			}).then((res)=>{
				if(res.data.status==0){
					Toast('操作成功')
					this.checkFP(true)
					setTimeout(() => {
						this.$router.go(-1)
					}, 1000);
				}else if(res.data.status==1){
					Toast('操作失败')
				}
			})
			
		}
	},
    mounted(){
		this.dwmc=this.FPmessage.UNIT_NAME //vuex 取得的发票默认值
		this.nsr=this.FPmessage.TAXPAYER_CODE
		this.zcdz=this.FPmessage.REGISTERED_ADDRESS
		this.zcdh=this.FPmessage.REGISTERED_CALL
		this.khyh=this.FPmessage.BANK
		this.yhzh=this.FPmessage.BANK_ACCOUNT
		this.spr=this.FPmessage.RECEIVE
		this.lxfs=this.FPmessage.CONTACT
		this.defaDZ=this.FPmessage.PROVINCE+this.FPmessage.CITY+this.FPmessage.AREA
		this.defaDZcode=this.FPmessage.AREA_ID
		this.xxdz=this.FPmessage.DETAILS_ADDRESS
    },
    components:{
        goBack
	},
	activated(){
		this.getphoneAreaList()
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
@import '../style/css/messageFP.css';
.active{
	background: #FEE1E5 !important;
	color: #EC2B48 !important;
	border: 1px solid #EC2B48 !important;
}
#menban{
	position: fixed;
	left: 0;
	top: 0;
	width:100%;
	height:100%;
	background-color: rgba(0,0,0,.7);
	z-index: 2019;
}
.van-picker{
	position: fixed;
	left: 0;
	bottom: 0;
	width: 100%;
	z-index: 2100;
	height: 0;
}
.animation{
	height:2.64rem !important;
	transition: all .5s  !important;
}
.noref{
	color: #EC2B48 ;
}
</style>