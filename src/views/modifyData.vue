<template>
    <div class="account_info">
      <goBack></goBack>
      
        <div id="headerlist">
            修改资料
        </div> 
         
        <div class="account_info_box">
            <div class="account_info_box_1">
                <div class="info_inptu">
                    <div>企业名称</div>
                    <div>
                        <input v-model="myInfo.PROJECT_NAME" type="tel" placeholder="填写项目名称" class="van-field__control"> 
                    </div>  
                </div>
                <div v-if="PROJECT_NAME" class="tishi">请填写企业名称</div>
            </div>
            <div class="account_info_box_1">
                <div class="info_inptu">
                    <div>项目名称</div>
                    <div>
                        <input v-model="myInfo.PROJECT_NAME" type="tel" placeholder="填写项目名称" class="van-field__control"> 
                    </div>  
                </div>
                <div v-if="PROJECT_NAME" class="tishi">请填写项目名称</div>
            </div>
             <div class="account_info_box_1">
                <div class="info_inptu"> 
                    <div>项目经理</div>
                    <div>
                        <input  v-model="myInfo.PROJECT_MANAGER" type="tel" placeholder="填写项目经理" class="van-field__control">
                    </div>
                </div>
                <div  v-if="PROJECT_MANAGER" class="tishi">请填写项目经理</div>
            </div> 
            <div class="account_info_box_1">
                <div class="info_inptu">
                    <div>联系电话</div>
                    <div>
                        <input v-model="myInfo.PHONE_NUMBER" type="tel" placeholder="收货人电话" class="van-field__control">
                    </div>
                </div>
                <div v-if="PHONE_NUMBER" class="tishi">请填收货人电话</div>
            </div>
            <div class="account_info_box_1">
                <div class="info_inptu info_sel_address">
                    <div>项目地址</div>
                    <div class="sel_address"  @click="showAddress = true">
                        {{myAREA_ID}}
                    </div>
                    <div>
                        <van-icon name="arrow"   />
                    </div> 
                </div>
                <div  v-if="AREA_ID"  class="tishi">请填收获地址</div>
            </div>
            <div class="account_info_box_1">
                <div class="info_inptu">
                    <div>详细地址</div>
                    <div>
                        <input v-model="myInfo.DETAILS_ADDRESS" type="tel"   placeholder="填写详细地址" class="van-field__control">
                    </div>
                </div>
                <div  v-if="DETAILS_ADDRESS" class="tishi">请填详细地址</div>
            </div>
            <div class="account_info_complete" @click="infoComplete">
            保存
        </div>
        </div>
        
             <!-- <van-address-edit
            :area-list="areaList"
            :show-delete="isshow" 
            show-search-result
            @save="onSave"
            @delete="onDelete"
            :address-info="addressinfo"
            ref="setAddressDetail"
            /> -->

            <!-- 省市 -->
            <van-action-sheet v-model="showAddress" :closeable="closeable" title="请选择所在地区">
               <van-area :value="selAddress" @change="changeAddress" title="省/市/区" :area-list="areaList" @cancel="cancelSelAddress"  @confirm="srueSelAddress()" />
            </van-action-sheet>
        </div> 
</template>
<script>
import goBack from '../components/goback.vue'
import Vue from 'vue';
import { AddressEdit } from 'vant';
import { mapMutations } from 'vuex';
import { Toast } from 'vant';
Vue.use(AddressEdit);
export default {
  data() {
    return {
        myInfo : {
            NAME : "",  // 用户名
            AREA_ID : "",  // 地区ID
            DETAILS_ADDRESS : "", // 详细地址
            PHONE_NUMBER : "", // 收货人电话号码
            PROJECT_NAME : "", // 项目名称
            PROJECT_MANAGER : "", // 项目经理
        },
        NAME : false,  // 用户名
        AREA_ID : false,  // 地区ID
        DETAILS_ADDRESS : false, // 详细地址
        PHONE_NUMBER : false, // 收货人电话号码
        PROJECT_NAME : false, // 项目名称
        PROJECT_MANAGER : false, // 项目经理 
        myAREA_ID : "选择省/市/区", 
        recordAddress : {
            myAREA_ID : "选择省/市/区",
            AREA_ID : "",
            selAddress : "110101"
        },  

        closeable: false,  // 选择省市的关闭图标
        showAddress : false,  // 选择省市
        selAddress : "", // 选中的值 
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
    // 完成时操作
    infoComplete(){  
        this.PROJECT_NAME = false
        this.PROJECT_MANAGER = false
        this.NAME = false
        this.PHONE_NUMBER = false
        this.AREA_ID = false
        this.DETAILS_ADDRESS = false
        if(this.myInfo.PROJECT_NAME == "") {
            this.PROJECT_NAME = true
            return
        }
        if(this.myInfo.PROJECT_MANAGER == "") {
            this.PROJECT_MANAGER = true
            return
        }
        if(this.myInfo.NAME == "") {
            this.NAME = true
            return
        } 
        if(this.myInfo.PHONE_NUMBER == "" && (!(/([0-9]{3,4}-)?[0-9]{7,8}/.test(this.myInfo.PHONE_NUMBER)))) {
            this.PHONE_NUMBER = true
            return
        } 
        if(this.myInfo.AREA_ID == "") {
            this.AREA_ID = true
            return
        }
        if(this.myInfo.DETAILS_ADDRESS == "") {
            this.DETAILS_ADDRESS = true
            return
        }
        
        

    },
    // 取消选择城市
    cancelSelAddress() {
        this.showAddress =false
    },
    // 确认选择城市
    srueSelAddress() { 
        if(this.recordAddress.selAddress == "110101") {
            this.selAddress = "110101";
            this.myInfo.AREA_ID = "110101";
            this.myAREA_ID =   '北京市/东城区' 
        }
        else { 
            this.selAddress = this.recordAddress.AREA_ID
            this.myInfo.AREA_ID = this.recordAddress.AREA_ID
             this.myAREA_ID =  this.recordAddress.myAREA_ID  
        }
        this.showAddress =false
    },
    // 地址改变时
    changeAddress(data,address){  
        this.recordAddress.AREA_ID = address[2].code
        this.recordAddress.selAddress = address[2].code
        if(address[0].name == address[1].name) {
            this.recordAddress.myAREA_ID =  address[0].name + '/' + address[2].name
        }
        else {
            this.recordAddress.myAREA_ID =  address[0].name + '/' + address[1].name + '/' + address[2].name
        }
         console.log(this.recordAddress.AREA_ID)
        
    },
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
              params.append('NAME', content.name); // 姓名
              params.append('AREA_ID', content.areaCode);  // areaCode
              params.append('DETAILS_ADDRESS', content.addressDetail); // 详细地址
              params.append('PHONE_NUMBER', content.tel);
              params.append('ADDRESS_ID',this.$route.query.ADDRESS_ID);
              console.log(content)
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
<style  >
    .account_info{ 
         background-color: #FFFFFF;
    }
    .account_info_box{
        padding: 0.22rem; 
       padding-top: 0;
    }
    .account_info_complete{
        margin-top: 0.1rem;
        font-size: 0.18rem; 
        width: 3.45rem;
        height: 0.46rem;
        line-height: 0.46rem;
        text-align: center; 
        border-radius: 999px;
        color: white;
        opacity: 1;
        background: linear-gradient(267deg, #EF0E01 0%, #EC2B48 100%);
    }
    .account_info_box_1{
        border-bottom: 1px solid #EBEDF0;
    }
    .account_info_box_1>.tishi{
        margin-left: 0.74rem; 
        font-size: 0.14rem;
        margin-bottom: 0.1rem;
        color: red;
    }
    .info_inptu{  
        height: 0.56rem;
        display: flex;
        justify-content: center;
        align-items: center; 
    }
    .info_inptu>.tishi {
        position: absolute;
        font-size: 0.14rem;
    }
    .info_inptu >div:nth-of-type(1){ 
        width: 0.56rem;
        height: 0.19rem;
        font-size: 0.14rem;
        font-family: Microsoft YaHei;
        font-weight: 400;
        line-height: 0.19rem;
        color: #606266;
        opacity: 1;
        margin-right: 0.18rem;
    }
    .info_inptu >div:nth-of-type(2){ 
         width: calc(100% - 0.74rem);
         height: 0.19rem;
    }
    .info_inptu >div.sel_address{
        width: calc(100% - 0.94rem) ;
         height: 0.19rem;
          
    }
    .info_sel_address >div:nth-of-type(3){
        width: 0.2rem;
        height: 0.19rem;
        font-size: 0.14rem;
        color: #909399;
    }
     .info_inptu >div:nth-of-type(2)>input,.sel_address{ 
        width: 100%; 
        height: 0.19rem;
        font-size: 0.14rem;
        font-family: Microsoft YaHei;
        font-weight: 400;
        line-height: 0.19rem;
        color: #C0C4CC;
        opacity: 1;
    }
    .van-address-edit {
        padding:0;
    }
</style>
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