<template>
  <div>
    <div v-show="myOrder">
      <goBack></goBack>
      <div id="order_title">提交订单</div>
      <div id="order_dz" class="order_dz_1" @click="goaddressSG">
        <div class="order_dz_bottom">
          <div class="order_dz_center">
            <span>{{ DZlist.RECEIVER ? DZlist.RECEIVER : "" }}</span
            ><span>{{ DZlist.PHONE_NUMBER }}</span
            ><span class="moren" style="font-size: 0.1rem">默认</span> <br />
            <!-- <span style="font-size: .12rem; max-width: 1.8rem;">{{DZlist.PROVINCE+DZlist.CITY+DZlist.AREA+DZlist.DETAILS_ADDRESS}}</span> -->
            <div>
              {{
                DZlist.PROVINCE +
                DZlist.CITY +
                DZlist.AREA +
                DZlist.DETAILS_ADDRESS
              }}
            </div>
          </div>
        </div>
      </div>

      <!-- 商品信息 -->
      <div id="order_xx">
        <div class="order_xx_top">
          <h3>商品信息</h3>
        </div>
        <div
          class="order_xx_bottom"
          v-for="(item, index) in cartList"
          :key="index"
        >
          <div v-if="index + 1 <= showNum">
            <div class="order_xx_bottom_left">
              <img :src="item.INDEX_PICTURE" />
            </div>
            <div class="order_xxbottom_right">
              <div class="order_xxbottom_right_01">
                <p>{{ item.GOODS_NAME }}</p>
                <p>{{ item.SPEC ? item.SPEC : item.SPECVALUE_NAME }}</p>
                <div class="order_xxbottom_right_01_inner">
                  <p>¥{{ item.GOODS_CURRENT_PRICE }}</p>
                  <!-- <span>x{{item.AMOUNT?item.AMOUNT:item.number}}</span> -->

                  <div class="order_xx_right_add">
                    <div class="left" @click="minusOrder(item)">-</div>
                    <div class="center">
                      <input type="number" v-model="item.AMOUNT" />
                    </div>
                    <div class="right" @click="addOrder(item)">+</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div v-show="cartList.length > 2 && showMore" class="order_ly_show">
          <div
            @click="
              showNum = cartList.length;
              showMore = false;
            "
          >
            <div>
              <van-icon name="arrow-down" />
              <div>展开</div>
            </div>
          </div>
        </div>
        <div v-show="cartList.length > 2 && !showMore" class="order_ly_show">
          <div
            @click="
              showNum = 2;
              showMore = true;
            "
          >
            <div>
              <van-icon name="arrow-up" />
              <div>收起</div>
            </div>
          </div>
        </div>
      </div>
      <!-- 发票信息 -->
      <!-- <router-link to="/messageFP"><div id="order_fp" v-show="FPshow">
				<h6 class="h6tilte">发票信息</h6>
				<span style="position: absolute;left: 1rem;top: .13rem;font-size: .1rem;">必填</span>
				<img src="../img/home/icon/jt_left.png" style="width: .08rem;float: right;">
				<p v-show="!FPflag">无发票信息</p>
				<p v-show="FPflag">纸质发票·{{FPsure}}</p>
			</div>
			</router-link> -->

      <!-- 买家留言 -->
      <div id="order_ly">
        <div class="order_ly_top">
          <div>
            <p class="order_ly_top_title">留言</p>
            <textarea type="text" v-model="Sellermessage" />
          </div>
          <div>
            <div class="order_ly_top_title">订单总额</div>
            <div class="momey">¥{{ orderTotalAmount }}</div>
          </div>
          <div>
            <div class="order_ly_top_title">运费</div>
            <div class="momey">
              {{ postage == "0.00" ? "包邮" : "¥" + postage }}
            </div>
          </div>
          <!-- <img src="../img/home/icon/jt_left.png" style="width:.08rem;height:.135rem;"> -->
        </div>
      </div>
      <div class="order_ly_add">
        <div>应付:</div>
        <div>¥{{ amountPayable }}</div>
      </div>
      <!-- 提交订单 -->
      <div id="order_footer">
        <div class="order_footer_num">
          共
          <span style="color: #ec2b48; font-size: 0.16rem; font-weight: 800">{{
            cartList.length
          }}</span>
          件
        </div>
        <div>
          <div class="order_footer_left">
            <!-- <p>{{frontMoney?'预付定金:':'应付金额:'}}</p> -->
            <p>应付金额:</p>
            <p>¥{{ amountPayable }}</p>
          </div>
          <div class="order_footer_right" @click="editOrder">提交订单</div>
        </div>
      </div>
      <van-popup v-model="iSshow">
        <div class="gold">
          <div class="gold-row">
            <div>总金额</div>
            <div style="color: #3b3b3b">{{ currentUser.TOTAL_USE_MONEY }}</div>
          </div>
          <div class="gold-row">
            <div>待付金额</div>
            <div style="color: #3b3b3b">{{ currentUser.CUSTOM_FREEZE }}</div>
          </div>
          <div class="gold-row">
            <div>当前可用金额</div>
            <div style="color: #3b3b3b">{{ currentUser.USE_MONEY }}</div>
          </div>
          <div class="kanow" @click="handleKnow">我知道了</div>
        </div>
      </van-popup>
    </div>
    <div v-show="!myOrder"> 
      <div class="account_info">
        <div>
          <div class="header-back" @click="myOrder = !myOrder"></div>

          <div id="headerlist">
             编辑收货地址
          </div>

          <div class="account_info_box"> 
            <div class="account_info_box_1">
              <div class="info_inptu info_sel_address">
                <div>收货人</div>
                <div>
                  <input
                    v-model="myInfo.PROJECT_MANAGER"
                    type="tel"
                    placeholder="填写收获人"
                    class="van-field__control"
                  />
                </div>
                <div>
                  <img
                    v-show="myInfo.PROJECT_MANAGER != ''"
                    @click="intInfo('PROJECT_MANAGER')"
                    src="../img/home/登录/close.png"
                    alt=""
                  />
                </div>
              </div>
              <div v-if="PROJECT_MANAGER" class="tishi">请填写收货人</div>
            </div>
            <div class="account_info_box_1">
              <div class="info_inptu info_sel_address">
                <div>联系电话</div>
                <div>
                  <input
                    v-model="myInfo.PHONE_NUMBER"
                    type="tel"
                    placeholder="请填写联系电话"
                    class="van-field__control"
                  />
                </div>
                <div>
                  <img
                    v-show="myInfo.PHONE_NUMBER != ''"
                    @click="intInfo('PHONE_NUMBER')"
                    src="../img/home/登录/close.png"
                    alt=""
                  />
                </div>
              </div>
              <div v-if="PHONE_NUMBER" class="tishi">请输入正确的手机号</div>
            </div>
            <div class="account_info_box_1">
              <div class="info_inptu info_sel_address">
                <div>地址</div>
                <div
                  class="sel_address"
                  :class="{ sel_address_1: myAREA_ID == '选择省/市/区' }"
                  @click="showAddress = true"
                >
                  {{ myAREA_ID }}
                </div>
                <div>
                  <van-icon name="arrow" />
                </div>
              </div>
              <div v-if="AREA_ID" class="tishi">请填写地址</div>
            </div>
            <div class="account_info_box_1">
              <div class="info_inptu info_sel_address">
                <div>详细地址</div>
                <div>
                  <input
                    v-model="myInfo.DETAILS_ADDRESS"
                    type="tel"
                    placeholder="填写详细地址"
                    class="van-field__control"
                  />
                </div>
                <div>
                  <img
                    v-show="myInfo.DETAILS_ADDRESS != ''"
                    @click="intInfo('DETAILS_ADDRESS')"
                    src="../img/home/登录/close.png"
                    alt=""
                  />
                </div>
              </div>
              <div v-if="DETAILS_ADDRESS" class="tishi">请填写详细地址</div>
            </div>
          </div>

          <!-- 省市 -->
          <van-action-sheet
            v-model="showAddress"
            :closeable="closeable"
            title="请选择所在地区"
          >
            <van-area
              :value="selAddress"
              @change="changeAddress"
              title="省/市/区"
              :area-list="areaList"
              @cancel="cancelSelAddress"
              @confirm="srueSelAddress()"
            />
          </van-action-sheet>
        </div>
        <div class="account_info_complete">
          <div @click="infoComplete">确认修改</div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import Vue from "vue";
import { mapState, mapMutations } from "vuex";
import goBack from "../components/goback.vue";
import { Toast, Dialog, AddressEdit } from "vant";
Vue.use(AddressEdit);
export default {
  data() {
    return {
      showMore: true, // 显示更多
      showNum: 2,
      iSshow: false,
      orderTotalAmount: "",
      postage: "",
      DZlist: {
        //收货信息地址
      },
      isshow: false,
      show: false,
      cartList: {
        GOODS_AMOUNT: "1",
      },
      FPsure: "",
      Sellermessage: "",
      FPshow: true,
      frontMoney: "", //预付定金
      amountPayable: 0, // 应付金额
      currentUser: {},
      orderId: null, // 订单id
      myAreaId: null, // 地区id
      myDetailedAddress: null, // 详细地址
      myReceiver: null, // 收货人
      myPhoneNumber: null, // 联系电话
      myOrder: true, // 订单页面
      areaList: {
        province_list: {},
        city_list: {},
        county_list: {},
      }, // 地址

      addressinfo: {
        // 地址默认值
        name: "",
        tel: "",
        addressDetail: "",
        areaCode: "",
      }, 
	  	myInfo : { 
            AREA_ID : "",  // 地区ID
            DETAILS_ADDRESS : "", // 详细地址
            PHONE_NUMBER : "", // 收货人电话号码 
            PROJECT_MANAGER : "", // 项目经理
        }, 
        AREA_ID : false,  // 地区ID
        DETAILS_ADDRESS : false, // 详细地址
        PHONE_NUMBER : false, // 收货人电话号码
        PROJECT_MANAGER : false, // 项目名称 

        myAREA_ID : "选择省/市/区",
		myAREA_ID_1 : "",   // 不管是否是直辖市还是省份
        recordAddress : {
            myAREA_ID : "选择省/市/区",
            AREA_ID : "",
            selAddress : "110101",
			myAREA_ID_1: ""
        },  

        closeable: false,  // 选择省市的关闭图标
        showAddress : false,  // 选择省市
        selAddress : "", // 选中的值








    };
  },
  computed: {
    ...mapState("address", ["checkaddress"]),
    ...mapState("address", ["defaultaddress"]),
    ...mapState("address", ["FPflag"]),
    ...mapState("address", ["FPmessage"]),
    // GOODSAMOUNT(){//计算商品总价
    // 	var AMOUNT=[];
    // 	for (let i = 0; i < this.cartList.length; i++) {
    // 		AMOUNT.push(this.cartList[i].GOODS_AMOUNT)
    // 	}
    // 	if(AMOUNT!=''){
    // 		var val =eval(AMOUNT.join('+')).toFixed(2);
    // 	}
    // 	return	val
    // }
  },
  created() {
    this.orderId = this.$route.query.ORDER_ID;
    this.getuserAddressList();
    this.getphoneAreaList();
  },
  methods: {
    ...mapMutations("address", ["checkFP"]),
    ...mapMutations("address", ["deleteDZ"]),
    ...mapMutations("address", ["defaultDZ"]),
    ...mapMutations("address", ["defaultFP"]),
	
	// 输入数据时触发
    intInfo(item) {
        this.myInfo[item] = ""
    },
    // 完成时操作
    infoComplete(){   
        this.PROJECT_MANAGER = false 
        this.PHONE_NUMBER = false
        this.AREA_ID = false
        this.DETAILS_ADDRESS = false 
        if(this.myInfo.PROJECT_MANAGER == "") {
            this.PROJECT_MANAGER = true
            return
        } 
        if(this.myInfo.PHONE_NUMBER == "") {
            this.PHONE_NUMBER = true
            return
        }
        if(this.myInfo.PHONE_NUMBER != "") {
            let reg = /^1(3|4|5|7|8)\d{9}$/
            if(!reg.test(this.myInfo.PHONE_NUMBER)) {
                this.PHONE_NUMBER = true
                return
            }
        } 
        if(this.myInfo.AREA_ID == "") {
            this.AREA_ID = true
            return
        }
        if(this.myInfo.DETAILS_ADDRESS == "") {
            this.DETAILS_ADDRESS = true
            return
        } 
		console.log(this.myInfo) 
		if(this.myAREA_ID_1) {
			this.DZlist.PROVINCE  = this.myAREA_ID_1.split("/")[0]
			this.DZlist.CITY  = this.myAREA_ID_1.split("/")[1]
			this.DZlist.AREA  = this.myAREA_ID_1.split("/")[2]
		} 
		this.myAreaId = this.myInfo.AREA_ID 
		this.myDetailedAddress = this.DZlist.DETAILS_ADDRESS = this.myInfo.DETAILS_ADDRESS
		this.myReceiver = this.DZlist.RECEIVER  = this.myInfo.PROJECT_MANAGER
		this.myPhoneNumber =this.DZlist.PHONE_NUMBER =  this.myInfo.PHONE_NUMBER 
		this.myOrder = !this.myOrder
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
			this.myAREA_ID_1 = '北京市/北京市/东城区' 
        }
        else { 
            this.selAddress = this.recordAddress.AREA_ID
            this.myInfo.AREA_ID = this.recordAddress.AREA_ID
             this.myAREA_ID =  this.recordAddress.myAREA_ID  
			 this.myAREA_ID_1 = this.recordAddress.myAREA_ID_1
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
		this.recordAddress.myAREA_ID_1 =  address[0].name + '/' + address[1].name + '/' + address[2].name
    },


 

    handleGold() {
      this.iSshow = true;
    },
    handleKnow() {
      this.iSshow = false;
    },
    goaddressSG() { 
        (this.addressinfo.name = this.myInfo.PROJECT_MANAGER =  this.DZlist.RECEIVER),
        (this.addressinfo.tel = this.myInfo.PHONE_NUMBER = this.DZlist.PHONE_NUMBER),
        (this.addressinfo.addressDetail = this.myInfo.DETAILS_ADDRESS = this.DZlist.DETAILS_ADDRESS),
        (this.addressinfo.areaCode =this.myInfo.AREA_ID = this.selAddress= this.DZlist.AREA_ID.toString());
		this.myAREA_ID =  this.myAREA_ID_1 =  this.DZlist.PROVINCE + '/' + this.DZlist.CITY + '/' + this.DZlist.AREA  
        this.myOrder = false; 
    },
    // 获取地址
    getphoneAreaList() {
      let url = "address/Api/phoneAreaList.do";
      let params = new URLSearchParams();
      this.$axios({
        method: "post",
        url: url,
        data: params,
      }).then((res) => {
        let province_list = {},
          county_list = {},
          city_list = {};
        for (let i in res.data.content.province_list) {
          Object.assign(province_list, res.data.content.province_list[i]);
        }
        for (let i in res.data.content.county_list) {
          Object.assign(county_list, res.data.content.county_list[i]);
        }
        for (let i in res.data.content.city_list) {
          Object.assign(city_list, res.data.content.city_list[i]);
        }
        this.areaList.province_list = province_list;
        this.areaList.county_list = county_list;
        this.areaList.city_list = city_list;
      });
    },
    // 保存地址
    onSave(content) {  
      this.DZlist.RECEIVER = this.myReceiver = content.name;  // 收货人
      this.DZlist.PHONE_NUMBER = this.myPhoneNumber = content.tel; // PHONE_NUMBER 联系方式
      this.DZlist.PROVINCE = content.province;	//  市
      this.DZlist.CITY = content.city;			// CITY城市
      this.DZlist.AREA = content.county;		//  最后一个区域
      this.DZlist.DETAILS_ADDRESS = this.myDetailedAddress = content.addressDetail;   // DETAILS_ADDRESS 	详细地址
      this.DZlist.CITY_ID = this.myAreaId = content.areaCode;   // AREA_ID 地区id

      this.myOrder = !this.myOrder;
    },
    // 获取用户信息
    getuserInfo() {
      var url = "headquarters/Api/userInfo.do";
      var params = new URLSearchParams();
      params.append("token", window.userInfo.token);
      this.$axios({
        method: "post",
        url: url,
        data: params,
      }).then((res) => {
        if (res.data.status == 0) {
          this.currentUser = res.data.content.currentUser;
        }
      });
    },
    getcartOrder() {
      let url = "group/Api/cartSureOrder.do";
      let params = new URLSearchParams();
      params.append("token", window.userInfo.token);
      if (this.$route.query.ids) {
        params.append("ids", this.$route.query.ids);
      }
      this.$axios({
        method: "post",
        url: url,
        data: params,
      }).then((res) => {
        if (res.data.status == 0) {
          let val = res.data.content;
          this.postage = val.orderFreightAmount;
          this.orderTotalAmount = val.orderTotalAmount;
          this.cartList = val.cartList;
          this.frontMoney = val.PREPAID_AMOUNT;
          // this.defaultFP(val.userInvoice)//默认发票信息
        }
      });
    },
    getsureOrder() {
      let url = "group/Api/sureOrder.do";
      let params = new URLSearchParams();
      params.append("token", window.userInfo.token);
      if (this.$route.query.GOODS_ID) {
        params.append("GOODS_ID", this.$route.query.GOODS_ID);
      }
      if (this.$route.query.GROUP_GOODS_ID) {
        params.append("GROUP_GOODS_ID", this.$route.query.GROUP_GOODS_ID);
      }
      if (this.$route.query.SKU_ID) {
        params.append("SKU_ID", this.$route.query.SKU_ID);
      }
      if (this.$route.query.number) {
        params.append("number", this.$route.query.number);
      }
      if (this.$route.query.isDirect) {
        params.append("isDirect", this.$route.query.isDirect);
      }
      this.$axios({
        method: "post",
        url: url,
        data: params,
      }).then((res) => {
        if (res.data.status == 0) {
          let val = res.data.content;
          this.postage = val.orderFreightAmount;
          this.orderTotalAmount = val.orderTotalAmount;
          this.cartList = val.cartList;
          this.frontMoney = val.cartList[0].PREPAID_AMOUNT;
          // this.defaultFP(val.userInvoice)//默认发票信息
        }
      });
    },
    getInvoice() {
      let url = "headquarters/Api/getInvoice.do";
      let params = new URLSearchParams();
      params.append("token", window.userInfo.token);
      this.$axios({
        method: "post",
        url: url,
        data: params,
      }).then((res) => {
        if (res.data.status == 0) {
          let val = res.data.content;
          if (val.userInvoice) {
            this.FPsure = val.userInvoice.UNIT_NAME;
          }
          this.defaultFP(val.userInvoice); //默认发票信息
        }
      });
    },
    // 获取订单信息
    getuserAddressList() {
      let url = "auditGroup/Api/orderDetail.do";
      let params = new URLSearchParams();
      params.append("token", window.userInfo.token);
      params.append("ORDER_ID", this.orderId);
      this.$axios({
        method: "post",
        url: url,
        data: params,
      }).then((res) => {
        if (res.data.status == 0) {
          this.DZlist = res.data.content.order;
          this.amountPayable = res.data.content.order.REAL_PAY_AMOUNT;
          this.cartList = res.data.content.cartList;
          // this.frontMoney=res.data.content.PREPAID_AMOUNT        // 应付金额
          this.Sellermessage = res.data.content.order.LEAVE_MESSAGE; // 留言
          this.orderTotalAmount = res.data.content.order.TOTAL_AMOUNT; // 订单总金额
          this.postage = res.data.content.order.FREIGHT_AMOUNT; // 运费 邮费
          this.myAreaId = res.data.content.order.AREA_ID; // 地区id
          this.myDetailedAddress = res.data.content.order.DETAILS_ADDRESS; //收货地址
          this.myReceiver = res.data.content.order.RECEIVER; // 收货人
          this.myPhoneNumber = res.data.content.order.PHONE_NUMBER;
        }
      });
    },
    addNum(num1, num2) {
      var sq1, sq2, m;
      try {
        sq1 = num1.toString().split(".")[1].length;
      } catch (e) {
        sq1 = 0;
      }
      try {
        sq2 = num2.toString().split(".")[1].length;
      } catch (e) {
        sq2 = 0;
      }
      m = Math.pow(10, Math.max(sq1, sq2));
      return (num1 * m + num2 * m) / m;
    },
    accMul(arg1, arg2) {
      var m = 0,
        s1 = arg1.toString(),
        s2 = arg2.toString();
      try {
        m += s1.split(".")[1].length;
      } catch (e) {}
      try {
        m += s2.split(".")[1].length;
      } catch (e) {}
      return (
        (Number(s1.replace(".", "")) * Number(s2.replace(".", ""))) /
        Math.pow(10, m)
      );
    },
    // 减少数量
    minusOrder(item) {
      if (item.AMOUNT == 1) {
        return;
      } else {
        item.AMOUNT--;
      }
      this.orderTotalAmount = 0;
      this.cartList.forEach((e) => {
        console.log(
          (Number(e.GOODS_CURRENT_PRICE) * Number(e.AMOUNT)).toFixed(2)
        );
        this.orderTotalAmount = this.addNum(
          this.orderTotalAmount,
          this.accMul(e.GOODS_CURRENT_PRICE, e.AMOUNT)
        );
      });
      this.orderTotalAmount = this.orderTotalAmount.toFixed(2); // 订单总额
      this.amountPayable = this.addNum(
        this.postage,
        this.orderTotalAmount
      ).toFixed(2); // 应付金额
    },
    addOrder(item) {
      item.AMOUNT++;
      this.orderTotalAmount = 0;
      this.cartList.forEach((e) => {
        this.orderTotalAmount = this.addNum(
          this.orderTotalAmount,
          this.accMul(e.GOODS_CURRENT_PRICE, e.AMOUNT)
        );
      });
      this.orderTotalAmount = this.orderTotalAmount.toFixed(2); // 订单总额
      this.amountPayable = this.addNum(
        this.postage,
        this.orderTotalAmount
      ).toFixed(2);
    },
    // 修改订单
    editOrder() {
      let url = "auditGroup/Api/editOrder.do";
      let params = new URLSearchParams();
      let myIds = "";
      let myNum = "";
      this.cartList.forEach((e, i) => {
        if (i == 0) {
          myIds += e.CART_ID;
          myNum += e.AMOUNT;
        } else {
          myIds += "," + e.CART_ID;
          myNum += "," + e.AMOUNT;
        }
      });
      params.append("token", window.userInfo.token);
      params.append("ORDER_ID", this.DZlist.ORDER_ID); // 订单编号
      params.append("ids", myIds);
      params.append("amounts", myNum); // 购物对象数量 以”,”分割（例如：20,21,30）
      params.append("AREA_ID", this.myAreaId); // AREA_ID 地区id
      params.append("DETAILS_ADDRESS", this.myDetailedAddress); // DETAILS_ADDRESS 	详细地址
      params.append("RECEIVER", this.myReceiver); // RECEIVER   收货人
      params.append("PHONE_NUMBER", this.myPhoneNumber); // PHONE_NUMBER 联系方式
      this.$axios({
        method: "post",
        url: url,
        data: params,
      }).then((res) => {
        if (res.data.status == 0) {
          this.$router.push({
            path: "/submitPage",
            query: {
              ORDER_ID: this.DZlist.ORDER_ID,
            },
          });
        }
      });
    },
    getaddressDetail() {
      if (this.checkaddress) {
        let url = "address/Api/addressDetail.do";
        let params = new URLSearchParams();
        params.append("token", window.userInfo.token);
        params.append("ADDRESS_ID", this.checkaddress);
        this.$axios({
          method: "post",
          url: url,
          data: params,
        }).then((res) => {
          if (res.data.status == 0) {
            this.isshow = true;
            this.DZlist = res.data.content.address;
          }
        });
      } else if (!this.checkaddress && this.defaultaddress) {
        let url = "address/Api/addressDetail.do";
        let params = new URLSearchParams();
        params.append("token", window.userInfo.token);
        params.append("ADDRESS_ID", this.defaultaddress);
        this.$axios({
          method: "post",
          url: url,
          data: params,
        }).then((res) => {
          if (res.data.status == 0) {
            this.isshow = true;
            this.DZlist = res.data.content.address;
          }
        });
      } else {
        this.isshow = false;
      }
    },
    payOrder(val) {
      //订单支付
      let url = "group/Api/payOrder.do";
      let params = new URLSearchParams();
      params.append("token", window.userInfo.token);
      params.append("ORDER_ID", val);
      this.$axios({
        method: "post",
        url: url,
        data: params,
      }).then((res) => {
        if (res.data.status == 0) {
          Toast("支付成功");
          setTimeout(() => {
            this.$router.push({
              path: "/orderDetail",
              query: {
                ORDER_ID: val,
              },
            });
          }, 1000);
        }
      });
    },
    submit() {
      let flag = false; //支付方式
      for (let i = 0; i < document.getElementsByName("zf").length; i++) {
        if (document.getElementsByName("zf")[i].checked == true) {
          flag = true;
        }
      }
      if (!this.isshow) {
        Toast("请选择收货地址");
      }
      // else if(!flag){
      // 	Toast('请选择支付方式')
      // }
      else if (this.$route.query.ids) {
        //购物车提交订单
        let url = "auditGroup/Api/cartSubmitOrder.do";
        let params = new URLSearchParams();
        params.append("token", window.userInfo.token);
        params.append("ids", this.$route.query.ids);
        params.append("ADDRESS_ID", this.DZlist.ADDRESS_ID);
        params.append("LEAVE_MESSAGE", this.Sellermessage);
      } else {
        let url = "group/Api/submitOrder.do";
        let params = new URLSearchParams();
        params.append("token", window.userInfo.token);
        params.append("GOODS_ID", this.$route.query.GOODS_ID);
        params.append("GROUP_GOODS_ID", this.$route.query.GROUP_GOODS_ID);
        if (this.$route.query.SKU_ID) {
          params.append("SKU_ID", this.$route.query.SKU_ID);
        }
        params.append("number", this.$route.query.number);
        params.append("ADDRESS_ID", this.DZlist.ADDRESS_ID);
        params.append("LEAVE_MESSAGE", this.Sellermessage);
        if (this.$route.query.isDirect) {
          params.append("isDirect", this.$route.query.isDirect);
        }
        if (this.$route.query.isNayang) {
          params.append("type", "free");
        }
        if (
          (this.FPflag && window.userInfo.role == 4) ||
          this.$route.query.isNayang
        ) {
          this.$axios({
            method: "post",
            url: url,
            data: params,
          }).then((res) => {
            if (res.data.status == 0) {
              let val = res.data.content;
              if (document.getElementsByName("zf")[0].checked) {
                Dialog.confirm({
                  title: "订单提交成功",
                  confirmButtonText: "支付",
                  message: this.frontMoney
                    ? "需支付定金：￥" + this.frontMoney
                    : "需支付金额：￥" + this.orderTotalAmount,
                })
                  .then(() => {
                    this.payOrder(val.ORDER_ID);
                  })
                  .catch(() => {
                    this.$router.push({
                      path: "/orderDetail",
                      query: {
                        ORDER_ID: val.ORDER_ID,
                      },
                    });
                  });
                // this.$router.push('/payUnder?GOODS_POSITION='+val.GOODS_POSITION+'&&ORDER_ID='+val.ORDER_ID+'&&REAL_PAY='+val.REAL_PAY)
              }
            }
          });
        } else if (this.FPflag) {
          //需要开发票
          params.append("UNIT_NAME", this.FPmessage.UNIT_NAME);
          params.append("TAXPAYER_CODE", this.FPmessage.TAXPAYER_CODE);
          params.append(
            "REGISTERED_ADDRESS",
            this.FPmessage.REGISTERED_ADDRESS
          );
          params.append("REGISTERED_CALL", this.FPmessage.REGISTERED_CALL);
          params.append("BANK", this.FPmessage.BANK);
          params.append("BANK_ACCOUNT", this.FPmessage.BANK_ACCOUNT);
          params.append("RECEIVE", this.FPmessage.RECEIVE);
          params.append("CONTACT", this.FPmessage.CONTACT);
          params.append("AREA_ID", this.FPmessage.AREA_ID);
          params.append("DETAILS_ADDRESS", this.FPmessage.DETAILS_ADDRESS);
          this.$axios({
            method: "post",
            url: url,
            data: params,
          }).then((res) => {
            if (res.data.status == 0) {
              let val = res.data.content;
              if (document.getElementsByName("zf")[0].checked) {
                Dialog.confirm({
                  title: "订单提交成功",
                  confirmButtonText: "支付",
                  message: this.frontMoney
                    ? "需支付定金：￥" + this.frontMoney
                    : "需支付金额：￥" + this.orderTotalAmount,
                })
                  .then(() => {
                    this.payOrder(val.ORDER_ID);
                  })
                  .catch(() => {
                    this.$router.push({
                      path: "/orderDetail",
                      query: {
                        ORDER_ID: val.ORDER_ID,
                      },
                    });
                  });
                // this.$router.push('/payUnder?GOODS_POSITION='+val.GOODS_POSITION+'&&ORDER_ID='+val.ORDER_ID+'&&REAL_PAY='+val.REAL_PAY)
              }
            }
          });
        } else {
          Toast("请填写发票信息");
        }
      }
    },
  },
  components: {
    goBack,
  },
  activated() {
    this.getuserInfo();
    this.Sellermessage = "";
    if (this.$route.query.ids) {
      this.getcartOrder();
    } else {
      this.getsureOrder();
    }
    this.getuserAddressList();
    this.getInvoice();
    if (window.userInfo.role == 4 || this.$route.query.isNayang) {
      this.FPshow = false;
      this.checkFP(true);
    } else {
      this.FPshow = true;
    }
  },
  filters: {
    numFilter(value) {
      // 截取当前数据到小数点后两位
      if (value != undefined) {
        let realVal = value.toFixed(2);
        return realVal;
      }
    },
  },
};
//百度数字统计
var _hmt = _hmt || [];
(function () {
  var hm = document.createElement("script");
  hm.src = "https://hm.baidu.com/hm.js?1678150ae4fb32e8f156a085feb56d7d";
  var s = document.getElementsByTagName("script")[0];
  s.parentNode.insertBefore(hm, s);
})();
</script>
<style scoped>
.order_dz_1 {
  
  height: auto !important; 
  padding: 0.11rem 0.12rem !important; 
  box-sizing: border-box !important; 
  padding-bottom: 0.19rem !important;
}
 .header-back {
    width: 0.08rem;
    height: .12rem;
    background: url(../img/home/icon/jt_right.png) no-repeat;
    background-size: contain;
    position: absolute;
    top: 0.2rem;
    left: 0.2rem;
    z-index: 100;
    }
	#headerlist {
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
.account_info>div:nth-of-type(1){ 
         background-color: #FFFFFF;
    }
    .account_info .van-action-sheet__header{
        color: #303133;
        font-weight: bold;
        font-size: 0.16rem;
        font-family: Microsoft YaHei; 
    }
    .account_info .van-picker__confirm{
        color: #EF0E01;
    }
    .account_info_box{
        padding: 0 0.22rem; 
        padding-top: 0;
       margin-bottom: 0.4rem;
    }
    .account_info_complete{
         display: flex;
         justify-content: center;
         align-items: center; 
    }
    .account_info_complete>div{
        width: 3.45rem;
        height: 0.38rem;
        background: linear-gradient(267deg, #EF0E01 0%, #EC2B48 100%);
        opacity: 1;
        border-radius: 0rem;
        line-height: 0.38rem;
        font-size: 0.14rem;         
        font-weight: 400;
        color: #FFFFFF;
        text-align: center;
        border-radius: 0.22rem;
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
    .info_inptu > .sel_address_1{
        color: #C0C4CC; 
    }
    .info_inptu >div:nth-of-type(2){ 
         width: calc(100% - 0.94rem);
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
      .info_sel_address >div:nth-of-type(3)>img{
        width: 0.1rem;
        height: 0.1rem; 
        margin-top: 0.05rem;
    }
     .info_inptu >div:nth-of-type(2)>input,.sel_address{ 
        width: 100%; 
        height: 0.19rem;
        font-size: 0.14rem;
        font-family: Microsoft YaHei;
        font-weight: 400;
        line-height: 0.19rem; 
        opacity: 1;
    }
    .info_inptu >div:nth-of-type(2)>input::-webkit-input-placeholder {  
        color: #C0C4CC; 
    } 
    .info_inptu >div:nth-of-type(2)>input:-moz-placeholder {  
        color: #C0C4CC; 
    } 
    .info_inptu >div:nth-of-type(2)>input::-moz-placeholder {  
        color: #C0C4CC; 
    } 
    .info_inptu >div:nth-of-type(2)>input:-ms-input-placeholder {  
        color: #C0C4CC; 
    }
    .van-address-edit {
        padding:0;
    }
</style>
<style>
@import "../style/css/reset.css";
@import "../style/css/common.css";
@import "../style/css/writeorder.css";

.order_xx_right_add {
  display: flex;
  justify-content: center;
  align-items: center;
}
.order_xx_right_add .left {
  width: 0.2rem;
  height: 0.2rem;
  background: #f1f1f1;
  color: #ababab;
  font-size: 0.12rem;
  text-align: center;
  line-height: 0.16rem;
  border-radius: 2px 0px 0px 2px;
}
.order_xx_right_add .center input {
  color: #3b3b3b;
  text-align: center;
  width: 0.5rem;
  line-height: 0.2rem;
}
.order_xx_right_add .right {
  width: 0.2rem;
  height: 0.2rem;
  background: #f1f1f1;
  color: #ababab;
  font-size: 0.12rem;
  text-align: center;
  line-height: 0.16rem;
  border-radius: 0px 2px 2px 0px;
}
</style>