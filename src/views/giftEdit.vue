<template>
    <div>
      <goBack></goBack>
        <div id="headerlist">
            兑换地址
        </div>
        <van-address-edit
        :area-list="areaList"
        :show-delete="isshow"
        show-search-result
        @save="onSave"
        :address-info="addressinfo"
        save-button-text="兑换"
        ref="setAddressDetail"
        />
    </div>
</template>
<script>
import goBack from '../components/goback.vue'
import Vue from 'vue';
import { AddressEdit } from 'vant';
import { mapState } from 'vuex';
import { Toast } from 'vant'
Vue.use(AddressEdit);
export default {
  data() {
    return {
      isshow:false,
      areaList:{
        province_list:{},
        city_list:{},
        county_list:{}
        }
      ,
      addressinfo:{  // 默认值
        name:'',
        tel:'',
        addressDetail:'',
        areaCode:''
      },
    }
  },
  computed:{
        ...mapState('address', ["giftExchange"]),
    },
  methods: {
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
              })
    },
    getaddressDetail(){
        let url ='address/Api/userAddressList.do';
           		let params = new URLSearchParams();
              params.append('token', window.userInfo.token);
              this.$axios({
              method: 'post',
                      url:url,
                      data:params
              }).then((res)=>{
                  let val=res.data.content.addressList[0]
                  this.addressinfo.name=val.NAME
                  this.addressinfo.tel=val.PHONE_NUMBER
                  this.addressinfo.addressDetail=val.DETAILS_ADDRESS
                  this.addressinfo.areaCode=(val.AREA_ID+'')
              })
    },
    onSave(content){
       let url ='group/Api/couponExchange.do';
           		let params = new URLSearchParams();
              params.append('token', window.userInfo.token);
              params.append('couponKey', this.giftExchange.couponKey);
              params.append('GOODS_ID', this.$route.query.GOODS_ID);
              params.append('COUPON_CARD_ID', this.giftExchange.COUPON_CARD_ID);
              params.append('RECEIVER', content.name);
              params.append('AREA_ID', content.areaCode);
              params.append('DETAILS_ADDRESS', content.addressDetail);
              params.append('PHONE_NUMBER', content.tel);
              this.$axios({
              method: 'post',
                      url:url,
                      data:params
              }).then((res)=>{
                  if(res.data.status==0) {
                        Toast('兑换成功')
                        this.$router.go(-1);
				        	}
              })
    }
  },
  components:{
    goBack
  },
  created(){
    this.getphoneAreaList();
    this.getaddressDetail();
  },
  updated(){
    
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
#headerlist{
    width: 3.75rem;
    height: .5rem;
    background: #FFFFFF;
    color: #1C1C1C;
    font-size: .18rem;
    text-align: center;
    line-height: .5rem;
    font-weight: bold;
    border-bottom: 1px solid #F1F1F1;
}
</style>