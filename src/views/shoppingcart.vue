<template>
  <div>
    <!--购物车头部-->
    <div id="header_cart">
      <div class="header_cart_inner">
        <p>购物车</p>
      </div>
      <span v-show="isShow" @click="isShow = false">编辑</span>
      <span v-show="!isShow" @click="isShow = true">完成</span>
    </div>
    <!--购物车商品-->
    <div id="nav_cart">
      <p
        :class="{ activebig: curType === item.id }"
        v-for="(item, index) in mainNav"
        :key="index"
        @click="changeType(item)"
      >
        <!-- {{ item.name }} -->
      </p>
    </div>
    <div v-show="curType === 'pt'">
      <div id="main_cart" style="margin-bottom: 1.7rem" v-show="noList">
        <!-- <div class="main_cart_title" @click="show">
				<span>普通商品</span>
				<img src="../img/home/icon/jt_left.png" style="width: .08rem;transition: all 1s ease;" :class="{animation:!goodsShow}">
			</div> -->
        <!-- <div style="max-height:100rem;overflow:hidden;transition: max-height 1s ease;margin-bottom:1.65rem;" :class="{element:!goodsShow}"> -->
        <div
          class="main_cart_inner"
          v-for="(item, index) in PTlist"
          :key="index"
        >
          <div class="main_cart_inner_left">
            <input
              type="checkbox"
              ref="isCheck"
              :id="item.CART_ID"
              :cartID="item.CART_ID"
              :goodsAMOUNT="item.GOODS_AMOUNT"
              @click="isCheck($event, index)"
              name="cb"
            />
            <label :for="item.CART_ID"></label>
            <img :src="item.INDEX_PICTURE" @click="goDetail(item)" />
          </div>
          <div class="main_cart_inner_right">
            <div class="main_cart_inner_right_top">
              <h5 @click="goDetail(item)">{{ item.GOODS_NAME }}</h5>
              <h6>{{ item.SPEC }}</h6>
            </div>
            <div class="main_cart_inner_right_bottom">
              <div class="main_cart_inner_right_bottom_left">
                <span>￥{{ item.GOODS_CURRENT_PRICE | numFilter }}</span>
              </div>
              <div class="main_cart_inner_right_bottom_right">
                <div
                  class="main_cart_inner_right_bottom_right_1"
                  @click="jian(index, item)"
                >
                  <p>-</p>
                </div>
                <div class="main_cart_inner_right_bottom_right_2">
                  <input
                    type="number"
                    ref="inputVal"
                    @blur="changeCount(index, item)"
                    style="
                      display: block;
                      color: #3b3b3b;
                      text-align: center;
                      width: 0.5rem;
                      line-height: 0.2rem;
                    "
                    :value="item.AMOUNT"
                  />
                </div>
                <div
                  class="main_cart_inner_right_bottom_right_3"
                  @click="jia(index, item)"
                >
                  <p>+</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!--定制商品-->
    <!-- <div v-show="curType === 'dz'">
      <div id="main_cart" style="margin-bottom: 1.7rem" v-show="noList">
        <div
          class="main_cart_inner"
          v-for="(item, index) in DZlist"
          :key="index"
        >
          <div class="main_cart_inner_left">
            <input
              type="checkbox"
              ref="isCheckdz"
              :id="item.CART_ID"
              :cartID="item.CART_ID"
              :goodsAMOUNT="item.GOODS_AMOUNT"
              @click="isCheckdz($event, index)"
              name="dz"
            />
            <label :for="item.CART_ID"></label>
            <img :src="item.INDEX_PICTURE" @click="goDetail(item)" />
          </div>
          <div class="main_cart_inner_right">
            <div class="main_cart_inner_right_top">
              <h5 @click="goDetail(item)">{{ item.GOODS_NAME }}</h5>
              <h6>{{ item.SPEC }}</h6>
            </div>
            <div class="main_cart_inner_right_bottom">
              <div class="main_cart_inner_right_bottom_left">
                <span>￥{{ item.GOODS_CURRENT_PRICE | numFilter }}</span>
              </div>
              <div class="main_cart_inner_right_bottom_right">
                <div
                  class="main_cart_inner_right_bottom_right_1"
                  @click="jian2(index, item)"
                >
                  <p>-</p>
                </div>
                <div class="main_cart_inner_right_bottom_right_2">
                  <input
                    type="number"
                    ref="inputVal2"
                    @blur="changeCount2(index, item)"
                    style="
                      display: block;
                      color: #3b3b3b;
                      text-align: center;
                      width: 0.5rem;
                      line-height: 0.2rem;
                    "
                    :value="item.AMOUNT"
                  />
                </div>
                <div
                  class="main_cart_inner_right_bottom_right_3"
                  @click="jia2(index, item)"
                >
                  <p>+</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div> -->
    <!--购物车结算-->
    <div id="checkout" v-show="noList && curType == 'pt'">
      <div class="checkout_inner">
        <div class="checkout_inner_1">
          <input
            type="checkbox"
            id="checkout_all"
            @click="checkALL($event)"
            name="all"
          />
          <label for="checkout_all"></label>
          <span>全选</span>
        </div>
        <div class="checkout_inner_2" v-show="isShow">
          <div class="checkout_inner_2_inner">
            <h5>合计:</h5>
            <span>￥{{ sum }}</span>
          </div>
          <h6>应付总额不含运费</h6>
        </div>
        <div class="checkout_inner_3" v-show="isShow" @click="goSureOrder">
          去结算
        </div>
        <div class="checkout_inner_4" @click="clickdelete" v-show="!isShow">
          删除
        </div>
      </div>
    </div>
    <div id="checkout" v-show="noList && curType == 'dz'">
      <div class="checkout_inner">
        <div class="checkout_inner_1">
          <input
            type="checkbox"
            id="checkout_alldz"
            @click="checkALLdz($event)"
            name="alldz"
          />
          <label for="checkout_alldz"></label>
          <span>全选</span>
        </div>
        <div class="checkout_inner_2" v-show="isShow">
          <div class="checkout_inner_2_inner">
            <h5>合计:</h5>
            <span>￥{{ sumdz }}</span>
          </div>
          <h6>应付总额不含运费</h6>
        </div>
        <div class="checkout_inner_3" v-show="isShow" @click="goSureOrderdz">
          去结算
        </div>
        <div class="checkout_inner_4" @click="clickdeletedz" v-show="!isShow">
          删除
        </div>
      </div>
    </div>
    <!-- 无商品时显示 -->
    <div id="noList" v-show="!noList">
      <img src="../img/home/gwcqs2x.png" />
      <router-link to="sort"><p>马上去逛逛</p></router-link>
    </div>
    <!--尾部-->
    <div id="footer">
      <div class="footer-inner" v-if="khFlag">
        <router-link to="/"
          ><span
            ><i><img src="../img/home/标签栏-未选中/首页@2x.png" /></i
            >首页</span
          ></router-link
        >
        <router-link to="sort"
          ><span
            ><i><img src="../img/home/标签栏-未选中/分类@2x.png" /></i
            >分类</span
          ></router-link
        >
        <!-- <span><i><img src="../img/home/标签栏-未选中/商城2.png"></i>集团商城</span> -->
        <span class="active"
          ><i><img src="../img/home/标签栏-选中/购物车@2x.png" /></i
          >购物车</span
        >
        <router-link to="my"
          ><span
            ><i><img src="../img/home/标签栏-未选中/个人中心@2x.png" /></i
            >我的</span
          ></router-link
        >
      </div>
      <div class="footer-inner" v-else>
        <router-link to="/indexYG"
          ><span
            ><i><img src="../img/home/标签栏-未选中/首页@2x.png" /></i
            >首页</span
          ></router-link
        >
        <router-link
          :to="giftExchange.COUPON_CARD_ID ? 'giftGoods' : 'giftCoupons'"
          ><span
            ><i><img src="../img/home/kjno.png" /></i>礼品卷兑换</span
          ></router-link
        >
        <span class="active"
          ><i><img src="../img/home/标签栏-选中/购物车@2x.png" /></i
          >购物车</span
        >
        <router-link to="myYG"
          ><span
            ><i><img src="../img/home/标签栏-未选中/个人中心@2x.png" /></i
            >个人中心</span
          ></router-link
        >
      </div>
    </div>
  </div>
</template>
<script>
import { Toast } from "vant";
import { Dialog } from "vant";
import { mapState } from "vuex";
export default {
  data() {
    return {
      mainNav: [
        { id: "pt", name: "普通商品" }, 
      ],
      curType: "pt",
      goodsShow: true, //显示隐藏普通商品
      goodsShowDZ: true, //显示隐藏定制商品
      noList: false,
      DZlist: [], //商品列表
      PTlist: [],
      duidi: "",
      isShow: true,
      deleteCartID: [],
      ALLprice: [],
      ALLpricedz: [],
      indexNum: "",
      indexNum2: "",
      ALLindex: "",
      khFlag: true,
    };
  },
  computed: {
    ...mapState("address", ["giftExchange"]),
    sum() {
      let _this = this; 
      for (let i = 0; i < this.indexNum; i++) {
        //默认赋值0， undefined会报错 
        if (this.ALLprice[i] == undefined) {
          _this.ALLprice[i] = 0;
        } else {  
          return eval(this.ALLprice.join("+")).toFixed(2); //计算数组里的值 的综合
        }
      }
      return "0.00";
    },
    sumdz() {
      let _this = this;
      for (let i = 0; i < this.indexNum2; i++) {
        //默认赋值0， undefined会报错
        if (this.ALLpricedz[i] == undefined) {
          _this.ALLpricedz[i] = 0;
        } else {
          return eval(this.ALLpricedz.join("+")).toFixed(2); //计算数组里的值 的综合
        }
      }
      return "0.00";
    },
  },
  methods: {
    changeType(item) {
      this.curType = item.id;
    },
    show() {
      if (!this.goodsShow) {
        this.goodsShow = true;
      } else {
        this.goodsShow = false;
      }
    },
    showDZ() {
      if (!this.goodsShowDZ) {
        this.goodsShowDZ = true;
      } else {
        this.goodsShowDZ = false;
      }
    },
    getcartNum(CART_ID, AMOUNT) {
      let url = "group/Api/editCartNumber.do";
      let params = new URLSearchParams();
      params.append("token", window.userInfo.token);
      params.append("CART_ID", CART_ID);
      params.append("AMOUNT", AMOUNT);
      this.$axios({
        method: "post",
        url: url,
        data: params,
      }).then((res) => {
        if (res.data.status == 0) {
          this.getcartList();
        }
        if (res.data.status == 6) {
          this.duidi = res.data.content.QUANTITATIVE;
          Toast("该商品为定制商品最低起订量为" + res.data.content.QUANTITATIVE);
        }
      });
    },
    getcartList() {
      let url = "group/Api/cartList.do";
      let params = new URLSearchParams();
      params.append("token", window.userInfo.token);
      this.$axios({
        method: "post",
        url: url,
        data: params,
      }).then((res) => {
        if (res.data.status == 0) {
          let val = res.data.content;
          this.indexNum = val.nomalList.length;
          this.indexNum2 = val.customList.length;
          this.ALLindex = this.indexNum + this.indexNum2;
          if (val.customList != "" || val.nomalList != "") {
            this.DZlist = val.customList;
            this.PTlist = val.nomalList;
            this.noList = true;
          } else {
            this.noList = false;
          }
        }
      });
    },
    jian(index, item) {
      if (item.CART_GOODS_POSITION == 0) {
        let CART_ID = item.CART_ID;
        let AMOUNT = this.$refs.inputVal[index].value;
        if (AMOUNT <= 1) {
          AMOUNT = 1;
          this.getcartNum(CART_ID, AMOUNT);
        } else {
          AMOUNT--;
          this.getcartNum(CART_ID, AMOUNT);
        }
        setTimeout(() => {
          let checkll = document.getElementsByName("cb")[index];
          this.isCheck(checkll, index);
        }, 100);
      }
    },
    jian2(index, item) {
      if (item.CART_GOODS_POSITION == 2) {
        let CART_ID = item.CART_ID;
        let AMOUNT = this.$refs.inputVal2[index].value;
        AMOUNT--;
        this.getcartNum(CART_ID, AMOUNT);
        setTimeout(() => {
          let checkll = document.getElementsByName("dz")[index];
          this.isCheckdz(checkll, index);
        }, 100);
      }
    },
    jia(index, item) {
      if (item.CART_GOODS_POSITION == 0) {
        let CART_ID = item.CART_ID;
        let AMOUNT = this.$refs.inputVal[index].value;
        if (AMOUNT < 1) {
          AMOUNT = 1;
          this.getcartNum(CART_ID, AMOUNT);
        } else {
          AMOUNT++;
          this.getcartNum(CART_ID, AMOUNT);
        }
        setTimeout(() => {
          let checkll = document.getElementsByName("cb")[index];
          this.isCheck(checkll, index);
        }, 100);
      }
    },
    jia2(index, item) {
      if (item.CART_GOODS_POSITION == 2) {
        let CART_ID = item.CART_ID;
        let AMOUNT = this.$refs.inputVal2[index].value;
        AMOUNT++;
        this.getcartNum(CART_ID, AMOUNT);
        setTimeout(() => {
          let checkll = document.getElementsByName("dz")[index];
          this.isCheckdz(checkll, index);
        }, 100);
      }
    },
    changeCount(index, item) {
      if (item.CART_GOODS_POSITION == 0) {
        let CART_ID = item.CART_ID;
        let AMOUNT = this.$refs.inputVal[index].value;
        if (AMOUNT < 1) {
          Toast("商品数量输入有误");
          AMOUNT = 1;
          this.getcartNum(CART_ID, AMOUNT);
          setTimeout(() => {
            let checkll = document.getElementsByName("cb")[index];
            this.isCheck(checkll, index);
          }, 100);
        } else {
          this.getcartNum(CART_ID, AMOUNT);
          setTimeout(() => {
            let checkll = document.getElementsByName("cb")[index];
            this.isCheck(checkll, index);
          }, 100);
        }
      }
    },
    changeCount2(index, item) {
      if (item.CART_GOODS_POSITION == 2) {
        let CART_ID = item.CART_ID;
        let AMOUNT = this.$refs.inputVal2[index].value;
        this.getcartNum(CART_ID, AMOUNT);
        setTimeout(() => {
          let checkll = document.getElementsByName("dz")[index];
          this.isCheckdz(checkll, index);
        }, 100);
      }
    },
    clickdelete() {
      //删除普通所选商品
      Dialog.confirm({
        message: "确定要删除所选的商品吗？",
      })
        .then(() => {
          for (let i = 0; i < this.$refs.isCheck.length; i++) {
            if (this.$refs.isCheck[i].checked) {
              let checktrue = this.$refs.isCheck[i].attributes.cartid.value;
              let url = "group/Api/deleteCart.do";
              let params = new URLSearchParams();
              params.append("token", window.userInfo.token);
              params.append("CART_ID", checktrue);
              this.$axios({
                method: "post",
                url: url,
                data: params,
              }).then((res) => {
                if (res.data.status == 0) {
                  Toast("删除成功");
                  this.$refs.isCheck[i].checked = false;
                  this.getcartList();
                } else {
                  Toast("删除失败");
                }
              });
            }
          }
        })
        .catch(() => {});
    },
    clickdeletedz() {
      //删除定制所选商品
      Dialog.confirm({
        message: "确定要删除所选的商品吗？",
      })
        .then(() => {
          for (let i = 0; i < this.$refs.isCheckdz.length; i++) {
            if (this.$refs.isCheckdz[i].checked) {
              let checktrue = this.$refs.isCheckdz[i].attributes.cartid.value;
              let url = "group/Api/deleteCart.do";
              let params = new URLSearchParams();
              params.append("token", window.userInfo.token);
              params.append("CART_ID", checktrue);
              this.$axios({
                method: "post",
                url: url,
                data: params,
              }).then((res) => {
                if (res.data.status == 0) {
                  Toast("删除成功");
                  this.$refs.isCheckdz[i].checked = false;
                  this.getcartList();
                } else {
                  Toast("删除失败");
                }
              });
            }
          }
        })
        .catch(() => {});
    },
    checkALL(e) {
      if (this.$refs.isCheck != undefined) {
        this.$refs.isCheck.forEach((val) => {
          if (e.target.checked) {
            val.checked = true;
            for (let i = 0; i < this.indexNum; i++) {
              this.$set(
                this.ALLprice,
                i,
                this.$refs.isCheck[i].attributes.goodsamount.value
              );
            }
          } else if (!e.target.checked) {
            val.checked = false;
            for (let i = 0; i < this.indexNum; i++) {
              this.$set(this.ALLprice, i, 0);
            }
          }
        });
      } else {
        e.target.checked = false;
        Toast("当前无商品选择");
      }
    },
    checkALLdz(e) {
      if (this.$refs.isCheckdz != undefined) {
        this.$refs.isCheckdz.forEach((val) => {
          if (e.target.checked) {
            val.checked = true;
            for (let i = 0; i < this.indexNum2; i++) {
              this.$set(
                this.ALLpricedz,
                i,
                this.$refs.isCheckdz[i].attributes.goodsamount.value
              );
            }
          } else if (!e.target.checked) {
            val.checked = false;
            for (let i = 0; i < this.indexNum2; i++) {
              this.$set(this.ALLpricedz, i, 0);
            }
          }
        });
      } else {
        e.target.checked = false;
        Toast("当前无商品选择");
      }
    },
    isCheck(e, index) {
      // this.ids+=this.$refs.isCheck[index].attributes.cartid.value
      // console.log(this.ids)
      if (e.target == undefined) {
        if (e.checked) {
          this.$set(
            this.ALLprice,
            index,
            this.$refs.isCheck[index].attributes.goodsamount.value
          );
        } else {
          this.$set(this.ALLprice, index, 0);
          document.getElementsByName("all")[0].checked = false;
        }
      } else {
        if (e.target.checked) {
          this.$set(
            this.ALLprice,
            index,
            this.$refs.isCheck[index].attributes.goodsamount.value
          );
        } else {
          this.$set(this.ALLprice, index, 0);
          document.getElementsByName("all")[0].checked = false;
        }
      }
    },
    isCheckdz(e, index) {
      // this.ids+=this.$refs.isCheck[index].attributes.cartid.value
      // console.log(this.ids)
      if (e.target == undefined) {
        if (e.checked) {
          this.$set(
            this.ALLpricedz,
            index,
            this.$refs.isCheckdz[index].attributes.goodsamount.value
          );
        } else {
          this.$set(this.ALLpricedz, index, 0);
          document.getElementsByName("alldz")[0].checked = false;
        }
      } else {
        if (e.target.checked) {
          this.$set(
            this.ALLpricedz,
            index,
            this.$refs.isCheckdz[index].attributes.goodsamount.value
          );
        } else {
          this.$set(this.ALLpricedz, index, 0);
          document.getElementsByName("alldz")[0].checked = false;
        }
      }
    },
    goDetail(item) {
      if (window.userInfo.role == "4") {
        this.$router.push(
          "/detail?id=" + item.GROUP_GOODS_ID + "&isDirect=true"
        );
      }
      // else if(item.GOODS_POSITION==2){
      // 	this.$router.push('/custom_detail?id='+item.GROUP_GOODS_ID)
      // }
      else if (item.GOODS_POSITION == 0) {
        this.$router.push("/detail?id=" + item.GROUP_GOODS_ID);
      } else {
        this.$router.push("/detail?id=" + item.GROUP_GOODS_ID);
      }
    },
    goSureOrder() {
      let str = "";
      document.getElementsByName("cb").forEach((val) => {
        if (val.checked) {
          str += val.getAttribute("cartid") + ",";
          return str;
        }
      });
      if (str.length > 0) {
        str = str.substr(0, str.length - 1);
        // let url = "group/Api/cartSureOrder.do";
        let url = "auditGroup/Api/cartSureOrder.do"
        let params = new URLSearchParams();
        params.append("token", window.userInfo.token);
        params.append("ids", str);
        this.$axios({
          method: "post",
          url: url,
          data: params,
        }).then((res) => {
          if (res.data.status == 0) {
            this.$router.push("/writeorder?ids=" + str);
          }
        });
      } else {
        Toast("请选择商品");
      }
    },
    goSureOrderdz() {
      let str = "";
      document.getElementsByName("dz").forEach((val) => {
        if (val.checked) {
          str += val.getAttribute("cartid") + ",";
          return str;
        }
      });
      if (str.length > 0) {
        str = str.substr(0, str.length - 1);
        // let url = "group/Api/cartSureOrder.do";
        let url = "auditGroup/Api/cartSureOrder.do"
        let params = new URLSearchParams();
        params.append("token", window.userInfo.token);
        params.append("ids", str);
        this.$axios({
          method: "post",
          url: url,
          data: params,
        }).then((res) => {
          if (res.data.status == 0) {
            this.$router.push("/writeorder?ids=" + str);
          }
        });
      } else {
        Toast("请选择商品");
      }
    },
  },
  created() {
    this.getcartList();
    if (window.userInfo.role == 4) {
      this.khFlag = false;
    } else {
      this.khFlag = true;
    }
  },
  updated() {},
  filters: {
    numFilter(value) {
      // 截取当前数据到小数点后两位
      let realVal = value.toFixed(2);
      return realVal;
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
@import "../style/css/common.css";
@import "../style/css/reset.css";
@import "../style/css/shoppingcart.css";
/* .animation{
transform:rotate(272deg) !important;
transition: all 1s ease !important;
}
.element {
max-height: 0 !important;
overflow: hidden !important;
transition: max-height 1s ease !important;
} */
</style>