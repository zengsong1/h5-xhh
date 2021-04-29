<template>
    <div>
      <goBack></goBack>
        <div id="headerlist">
            编辑地址
        </div>
        <van-address-edit
        :area-list="areaList"
        :show-delete="isshow"
        show-set-default
        show-search-result
        @save="onSave"
        @delete="onDelete"
        :address-info="addressinfo"
        ref="setAddressDetail"
        />
    </div>
</template>
<script>
import goBack from '../components/goback.vue'
import Vue from 'vue';
import { AddressEdit } from 'vant';
import { mapMutations } from 'vuex';
import { Toast,} from 'vant';
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
      urlparam:''
    }
  },
  methods: {
    ...mapMutations('address', ["deleteDZ"]),
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
    onSave(content) {
      if(this.$route.query.ADDRESS_ID){
          let url ='address/Api/editAddress.do';
           		let params = new URLSearchParams();
              params.append('token', window.userInfo.token);
              params.append('NAME', content.name);
              params.append('AREA_ID', content.areaCode);
              params.append('DETAILS_ADDRESS', content.addressDetail);
              params.append('PHONE_NUMBER', content.tel);
              params.append('ADDRESS_ID',this.$route.query.ADDRESS_ID);
              this.$axios({
              method: 'post',
                      url:url,
                      data:params
              }).then((res)=>{
                if(res.data.status==0){
                    Toast('修改地址成功');
                    if(content.isDefault){  //默认地址
                        let url ='address/Api/setDefaultAddress.do';
                        let params = new URLSearchParams();
                        params.append('token', window.userInfo.token);
                        params.append('ADDRESS_ID',this.$route.query.ADDRESS_ID);
                        this.$axios({
                        method: 'post',
                                url:url,
                                data:params
                        })
                     }
                     setTimeout(() => {
                        this.$router.go(-1);
                     }, 1000);
                }else{
                  Toast('修改地址失败');
                }
			  })
      }else{ 
          let url ='address/Api/addAddress.do';
           		let params = new URLSearchParams();
              params.append('token', window.userInfo.token);
              params.append('NAME', content.name);
              params.append('AREA_ID', content.areaCode);
              params.append('DETAILS_ADDRESS', content.addressDetail);
              params.append('PHONE_NUMBER', content.tel);
              this.$axios({
              method: 'post',
                      url:url,
                      data:params
              }).then((res)=>{
                if(res.data.status==0){
                     if(content.isDefault){  //默认地址
                        let url ='address/Api/setDefaultAddress.do';
                        let params = new URLSearchParams();
                        params.append('token', window.userInfo.token);
                        params.append('ADDRESS_ID', res.data.content.ADDRESS_ID);
                        this.$axios({
                        method: 'post',
                                url:url,
                                data:params
                        })
                     }
                     Toast('添加地址成功');
                     setTimeout(() => {
                        this.$router.go(-1);
                     }, 1000);
                }else{
                  Toast('添加地址失败');
                }
			  })
      }     
    },
    onDelete() {
      let url ='address/Api/deleteAddress.do';
              let params = new URLSearchParams();
              params.append('token', window.userInfo.token);
              params.append('ADDRESS_ID', this.$route.query.ADDRESS_ID);
              this.$axios({
              method: 'post',
                      url:url,
                      data:params
              }).then((res)=>{
                    if(res.data.status==0){
                      this.deleteDZ(this.$route.query.ADDRESS_ID)//删除vux里的地址ID
                      Toast('删除地址成功');
                      setTimeout(() => {
                        this.$router.go(-1);
                     }, 1000);
                    }else{
                      Toast('删除地址失败');
                    }
              })
    },
    getaddressDetail(){
        let url ='address/Api/addressDetail.do';
           		let params = new URLSearchParams();
              params.append('token', window.userInfo.token);
              params.append('ADDRESS_ID', this.$route.query.ADDRESS_ID);
              this.$axios({
              method: 'post',
                      url:url,
                      data:params
              }).then((res)=>{
                  let val=res.data.content.address
                  this.addressinfo.name=val.NAME
                  this.addressinfo.tel=val.PHONE_NUMBER
                  this.addressinfo.addressDetail=val.DETAILS_ADDRESS
                  this.addressinfo.areaCode=(val.AREA_ID+'') 
              })
    }
  },
  components:{
    goBack
  },
  created(){
    this.getphoneAreaList();
    this.urlparam=window.location.href.split('?')[1]
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