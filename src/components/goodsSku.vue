<template>
  <div id="sku" v-show="isgoodsSku">
    <div class="mask" v-show="isgoodsSku" @click="clickSkuMB"></div>
    <transition name="slide">
      <div class="popup-content" v-show="isgoodsSku">
        <img
          src="../img/home/icon/xx.png"
          style="height: 0.2rem"
          v-show="isgoodsSku"
          @click="clickSkuMB"
        />
        <div class="suk01">
          <img
            :src="
              cheeckSku.SKU_IMAGE_URL
                ? cheeckSku.SKU_IMAGE_URL
                : goodsDetail.INDEX_PICTURE
            "
            @click="
              getimg(
                cheeckSku.SKU_IMAGE_URL
                  ? cheeckSku.SKU_IMAGE_URL
                  : goodsDetail.INDEX_PICTURE
              )
            "
          />
          <!-- <i style="font-size:.14rem">单购价:</i> -->
          <span
            >¥{{
              parameterVal
                ? parameterVal
                : cheeckSku.GOODS_PRICE
                ? cheeckSku.GOODS_PRICE
                : goodsDetail.ACTIVITY_PRICE
                ? goodsDetail.ACTIVITY_PRICE
                : goodsDetail.CURRENT_PRICE | numFilter
            }}</span
          >
        </div>
        <div class="sku02_fate" v-show="skuSpecname1 != ''">
          <div class="suk02">
            <h6>{{ skuSpecname1 }}</h6>
            <span
              :class="{ skuactive: curType == index }"
              v-for="(item, index) in skuSpeclist1"
              :key="index"
              :skuID="item.SPECVALUE_ID"
              @click="changeType(index, item)"
              >{{ item.SPEC_VALUE }}</span
            >
          </div>
          <div class="suk02" style="margin-top: 0.2rem">
            <h6>{{ skuSpecname2 }}</h6>
            <span
              :class="{ skuactive: curType2 == index }"
              :skuID="item.SPECVALUE_ID"
              @click="changeType2(index, item)"
              v-for="(item, index) in skuSpeclist2"
              :key="index"
              >{{ item.SPEC_VALUE }}</span
            >
          </div>
        </div>
        <div class="suk03">
          <div class="suk03_left">数量</div>
          <div class="suk03_right">
            <div class="left" @click="jian">-</div>
            <div class="center">
              <input type="number" v-model="goodsDetail.MINIMUM" />
            </div>
            <div class="right" @click="jia">+</div>
          </div>
        </div>
        <div class="suk04">
          <div class="suk04_left">
            <button @click="shoppingcart">加入购物车</button>
          </div>
          <div class="suk04_right">
            <!-- <button
              @click="buyNow"
              v-if="GOODSPOSITION == 2 && !this.$route.query.isDirect"
            >
              定制购买
            </button> -->
            <!-- <button @click="buyNow" v-else>立即购买</button> -->
          </div>
        </div>
      </div>
    </transition>
  </div>
</template>
<script>
import { Toast } from "vant";
import { ImagePreview } from "vant";
// import { mapActions } from 'vuex'
export default {
  props: {
    // 接收父组件传递过来的参数,这里传了  结束时间 - 开始时间 - 结束后显示的内容
    isgoodsSku: {
      type: Boolean,
    },
    skuData: {
      default: () => {
        return {};
      },
    },
    parameterList: {
      type: Array,
    },
    cheeckSku: {
      type: Object,
      default: () => {
        return {};
      },
    },
    goodsDetail: {
      type: Object,
    },
    minnum: {
      type: Number,
    },
  },
  data() {
    return {
      chiildrenisgoodsSku: false,
      curType: "0",
      curType2: "0",
      SPECVALUE_ID: [],
      cartNum: "",

      QUANTITATIVE: "",
      GOODSPOSITION: "", //普通商品还是定制商品
      goodsID: "",
      groupgoodsID: "",
      skuSpecname1: "", //SKU规格
      skuSpecname2: "",
      skuSpeclist1: "",
      skuSpeclist2: "",
      skulenght: "", //规格的数量
      cheeckSkuID: "", //已选的sukID 通过父组件匹配传
      parameterObj: "",
      parameterVal: "", //起订量价钱
    };
  },
  watch: {
    $route: function () {
      window.location.reload();
    },
    goodsDetail: function (newVal, oldVal) {
      this.goodsID = newVal.GOODS_ID; //newVal即是chartData
      this.groupgoodsID = newVal.GROUP_GOODS_ID;
      if (newVal.GOODS_POSITION == 2) {
        this.GOODSPOSITION = newVal.GOODS_POSITION;
        if (newVal.QUANTITATIVE && !this.$route.query.isDirect) {
          //定制商品最低起订量
          this.QUANTITATIVE = newVal.QUANTITATIVE;
          this.goodsDetail.MINIMUM = newVal.QUANTITATIVE;
        }
      }
      if (newVal.GOODS_POSITION == 0) {
        this.GOODSPOSITION = newVal.GOODS_POSITION;
        if (newVal.MINIMUM) {
          //定制商品最低起订量
          this.QUANTITATIVE = newVal.MINIMUM;
          this.goodsDetail.MINIMUM = newVal.MINIMUM;
        }
      }
    },
    parameterList: function (newVal, oldVal) {
      if (newVal != "") {
        this.parameterObj = newVal;
        this.parameterVal = newVal[0].value;
      }
    },
    skuData: function (newVal, oldVal) {
      this.skulenght = newVal.length;
      this.skuSpecname1 = newVal[0].spec_name;
      this.skuSpeclist1 = newVal[0].spec_list;
      this.SPECVALUE_ID.splice(0, 1, newVal[0].spec_list[0].SPECVALUE_ID);
      if (newVal[1]) {
        this.skuSpecname2 = newVal[1].spec_name;
        this.skuSpeclist2 = newVal[1].spec_list;
        this.SPECVALUE_ID.splice(1, 2, newVal[1].spec_list[0].SPECVALUE_ID);
      }
      if (this.SPECVALUE_ID.length >= 1) {
        this.$emit("sku-Arr", this.SPECVALUE_ID); // 将改变通知父组件(保证父子组件数据一致)
      }
    },
    cheeckSku: function (newVal, oldVal) {
      this.cheeckSkuID = newVal.SKU_ID;
    },
  },
  methods: {
    //  ...mapActions('detail', ["addAction"]), //商品数量
    // 购物车数量
    getCartNumber() {
      if (window.userInfo) {
        let url = "group/Api/getCartNumber.do";
        let params = new URLSearchParams();
        params.append("token", window.userInfo.token);
        this.$axios({
          method: "post",
          url: url,
          data: params,
        }).then((res) => {
          if (res.data.status == 0) {
            let cartsonNum = res.data.content.cartNumber;
            this.$emit("cartsonNum", cartsonNum); // 将改变通知父组件(保证父子组件数据一致)
          }
        });
      }
    },
    clickSkuMB() {
      this.chiildrenisgoodsSku = false;
      this.$emit("clickSkuMB2", this.chiildrenisgoodsSku); // 将改变通知父组件(保证父子组件数据一致)
    },
    changeType(index, item) {
      this.curType = index;
      this.SPECVALUE_ID.splice(0, 1, item.SPECVALUE_ID);
      if (this.SPECVALUE_ID.length >= 1) {
        this.$emit("sku-Arr", this.SPECVALUE_ID); // 将改变通知父组件(保证父子组件数据一致)
      }
    },
    changeType2(index, item) {
      this.curType2 = index;
      this.SPECVALUE_ID.splice(1, 2, item.SPECVALUE_ID);
      if (this.SPECVALUE_ID.length >= 1) {
        this.$emit("sku-Arr", this.SPECVALUE_ID); // 将改变通知父组件(保证父子组件数据一致)
      }
    },
    shoppingcart() {
      //加入购物车
      if (this.skuSpecname1 || this.skuSpecname2 != "") {
        //有规格
        if (this.SPECVALUE_ID.length == this.skulenght) {
          if (window.userInfo) {
            if (
              this.GOODSPOSITION == 2 &&
              this.goodsDetail.MINIMUM < this.QUANTITATIVE
            ) {
              Toast("请确认是否满足起订量");
              this.goodsDetail.MINIMUM = this.QUANTITATIVE;
            } else {
              let url = "group/Api/addCart.do";
              let params = new URLSearchParams();
              if (window.userInfo.token) {
                params.append("token", window.userInfo.token);
              }
              params.append("GOODS_ID", this.goodsID);
              params.append("GROUP_GOODS_ID", this.groupgoodsID);
              params.append("number", this.goodsDetail.MINIMUM);
              params.append("SKU_ID", this.cheeckSkuID);
              // if (this.$route.query.isDirect) {
              //   params.append("isDirect", this.$route.query.isDirect);
              // }
              this.$axios({
                method: "post",
                url: url,
                data: params,
              }).then((res) => {
                if (res.data.status == 0) {
                  this.getCartNumber();
                  this.chiildrenisgoodsSku = false;
                  this.$emit("clickSkuMB2", this.chiildrenisgoodsSku); // 将改变通知父组件(保证父子组件数据一致)
                  this.$emit("cart-Num", this.goodsDetail.MINIMUM);
                  Toast("加入购物车成功");
                } else {
                  Toast("加入购物车失败");
                }
              });
            }
          } else {
            this.$router.push("/login");
          }
        } else {
          Toast("请选择规格");
        }
      } else {
        //无规格
        if (window.userInfo) {
          if (
            this.GOODSPOSITION == 2 &&
            this.goodsDetail.MINIMUM < this.QUANTITATIVE
          ) {
            Toast("请确认是否满足起订量");
            this.goodsDetail.MINIMUM = this.QUANTITATIVE;
          } else {
            let url = "group/Api/addCart.do";
            let params = new URLSearchParams();
            if (window.userInfo.token) {
              params.append("token", window.userInfo.token);
            }
            params.append("GOODS_ID", this.goodsID);
            params.append("GROUP_GOODS_ID", this.groupgoodsID);
            params.append("number", this.goodsDetail.MINIMUM); 
            // if (this.$route.query.isDirect) {
            //   params.append("isDirect", this.$route.query.isDirect);
            // }
            this.$axios({
              method: "post",
              url: url,
              data: params,
            }).then((res) => {
              if (res.data.status == 0) {
                this.getCartNumber();
                this.chiildrenisgoodsSku = false;
                this.$emit("clickSkuMB2", this.chiildrenisgoodsSku); // 将改变通知父组件(保证父子组件数据一致)
                this.$emit("cart-Num", this.goodsDetail.MINIMUM);
                Toast("加入购物车成功");
              } else {
                Toast("加入购物车失败");
              }
            });
          }
        } else {
          this.$router.push("/login");
        }
      }
    },
    jian() {
      if (this.GOODSPOSITION == 2 && !this.$route.query.isDirect) {
        if (this.goodsDetail.MINIMUM > this.QUANTITATIVE) {
          this.goodsDetail.MINIMUM--;
          this.$emit("cart-Num", this.goodsDetail.MINIMUM); // 将改变通知父组件(保证父子组件数据一致)
          for (let i in this.parameterObj) {
            if (
              this.goodsDetail.MINIMUM <= this.parameterObj[i].end &&
              this.goodsDetail.MINIMUM > this.parameterObj[i].start
            ) {
              this.parameterVal = this.parameterObj[i].value;
            }
          }
        }else {
          this.goodsDetail.MINIMUM = this.QUANTITATIVE;
          Toast("此商品最低起订量为" + this.QUANTITATIVE);
          this.$emit("cart-Num", this.goodsDetail.MINIMUM); // 将改变通知父组件(保证父子组件数据一致)
        }
      } else if(this.GOODSPOSITION == 2){
        if(this.goodsDetail.MINIMUM <=this.minnum){
          this.goodsDetail.MINIMUM =this.minnum
          Toast("此商品最低起订量为" + this.goodsDetail.MINIMUM);
          this.$emit("cart-Num", this.goodsDetail.MINIMUM); // 将改变通知父组件(保证父子组件数据一致)
        }else{
          this.goodsDetail.MINIMUM--
          this.$emit("cart-Num", this.goodsDetail.MINIMUM);
        }
      }else if (this.goodsDetail.MINIMUM > 1) {
        this.goodsDetail.MINIMUM--;
        this.$emit("cart-Num", this.goodsDetail.MINIMUM); // 将改变通知父组件(保证父子组件数据一致)
      }else {
        this.goodsDetail.MINIMUM = 1;
        this.$emit("cart-Num", this.goodsDetail.MINIMUM); // 将改变通知父组件(保证父子组件数据一致)
      } 
    },
    jia() {
      this.goodsDetail.MINIMUM++;
      this.$emit("cart-Num", this.goodsDetail.MINIMUM); // 将改变通知父组件(保证父子组件数据一致)
      for (let i in this.parameterObj) {
        if (
          this.goodsDetail.MINIMUM <= this.parameterObj[i].end &&
          this.goodsDetail.MINIMUM > this.parameterObj[i].start
        ) {
          this.parameterVal = this.parameterObj[i].value;
        }
      }
    },
    buyNow() {
      if (this.skuSpecname1 || this.skuSpecname2 != "") {
        //有规格
        if (this.SPECVALUE_ID.length == this.skulenght) {
          if (window.userInfo) {
            if (
              this.GOODSPOSITION == 2 &&
              this.goodsDetail.MINIMUM < this.QUANTITATIVE
            ) {
              Toast("请确认是否满足起订量");
              this.goodsDetail.MINIMUM = this.QUANTITATIVE;
            } else {
              this.$router.push(
                "/writeorder?GOODS_ID=" +
                  this.goodsID +
                  "&GROUP_GOODS_ID=" +
                  this.groupgoodsID +
                  "&number=" +
                  this.goodsDetail.MINIMUM +
                  (this.cheeckSkuID ? "&SKU_ID=" + this.cheeckSkuID : "") +
                  (this.$route.query.isDirect
                    ? "&isDirect=" + this.$route.query.isDirect
                    : "")
              );
            }
          } else {
            this.$router.push("/login");
          }
        } else {
          Toast("请选择规格");
        }
      } else {
        //无规格
        if (window.userInfo) {
          if (
            this.GOODSPOSITION == 2 &&
            this.goodsDetail.MINIMUM < this.QUANTITATIVE
          ) {
            Toast("请确认是否满足起订量");
            this.goodsDetail.MINIMUM = this.QUANTITATIVE;
          } else {
            this.$router.push(
              "/writeorder?GOODS_ID=" +
                this.goodsID +
                "&GROUP_GOODS_ID=" +
                this.groupgoodsID +
                "&number=" +
                this.goodsDetail.MINIMUM +
                (this.cheeckSkuID ? "&SKU_ID=" + this.cheeckSkuID : "") +
                (this.$route.query.isDirect
                  ? "&isDirect=" + this.$route.query.isDirect
                  : "")
            );
          }
        } else {
          this.$router.push("/login");
        }
      }
    },
    getimg(images) {
      ImagePreview([images]);
    },
  },
  filters: {
    numFilter(value) {
      // 截取当前数据到小数点后两位
      if (value != undefined) {
        let realVal = parseFloat(value).toFixed(2);
        return realVal;
      }
    },
  },
};
</script>
<style scoped>
#sku {
  position: fixed;
  left: 0;
  bottom: 0;
  z-index: 100;
}
.mask {
  position: fixed;
  width: 100%;
  left: 0;
  top: 0;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.4);
}
.popup-content {
  position: fixed;
  width: 100%;
  bottom: 0;
  left: 0;
  width: 3.75rem;
  background: #ffffff;
  z-index: 9999;
}
.slide-enter-active {
  animation-name: slideInUp;
  animation-duration: 0.5s;
  animation-fill-mode: both;
}

@keyframes slideInUp {
  0% {
    transform: translate3d(0, 100%, 0);
    visibility: visible;
  }

  to {
    transform: translateZ(0);
  }
}
/*  */
.popup-content > img {
  position: relative;
  height: 0.2rem;
  left: 3.47rem;
  margin-right: 0.1rem;
  margin-top: 0.1rem;
}
.suk01 {
  position: relative;
  top: 0.1rem;
  left: 0.49rem;
}
.sku02_fate {
  max-height: 2.5rem;
  overflow-y: auto;
  position: relative;
  top: 0.25rem;
  left: 0.2rem;
  width: 3.55rem;
}
.suk01 > img {
  height: 0.8rem;
  width: 0.8rem;
}
.suk01 span {
  margin-left: 0.1rem;
  font-size: 0.2rem;
  color: #ec2b48;
  font-weight: 800;
}
.suk02 h6 {
  color: #1c1c1c;
  font-size: 0.15rem;
  font-weight: bold;
  margin-left: 0.2rem;
}
.suk02 span {
  display: inline-block;
  margin-top: 0.1rem;
  margin-right: 0.2rem;
  color: #1c1c1c;
  font-size: 0.14rem;
  padding: 0.06rem 0.22rem;
  background: #f1f1f1ff;
  border-radius: 0.16rem;
  border: 1px solid #f1f1f1ff;
}
.skuactive {
  background: #fee1e5 !important;
  color: #ec2b48 !important;
  border: 1px solid #ec2b48ff !important;
  box-sizing: border-box;
}
.suk03 {
  position: relative;
  top: 0.3rem;
  left: 0.49rem;
  margin-top: 0.3rem;
  display: flex;
  width: 3rem;
  justify-content: space-between;
}
.suk03 .suk03_left {
  color: #1c1c1c;
  font-size: 0.14rem;
  font-weight: bold;
}
.suk03 .suk03_right {
  display: flex;
}
.suk03 .left {
  width: 0.23rem;
  height: 0.2rem;
  background: #d2d2d2;
  color: #ffffff;
  font-size: 0.12rem;
  text-align: center;
  line-height: 0.16rem;
  border-radius: 2px 0px 0px 2px;
}
.suk03 .center input {
  color: #3b3b3b;
  text-align: center;
  width: 0.5rem;
  line-height: 0.2rem;
}
.suk03 .right {
  width: 0.23rem;
  height: 0.2rem;
  background: #959494ff;
  color: #ffffff;
  font-size: 0.12rem;
  text-align: center;
  line-height: 0.16rem;
  border-radius: 0px 2px 2px 0px;
}
.suk04 {
  margin-top: 0.6rem;
  display: flex;
  justify-content: space-around;
  margin-bottom: 0.3rem;
}
.suk04 .suk04_left button {
  width: 3.45rem;
  height: 0.38rem;
  background: linear-gradient(267deg, #EF0E01 0%, #EC2B48 100%);
  opacity: 1;
  border-radius: 0.22rem;
  font-size: 0.14rem;
  font-family: Microsoft YaHei;
  font-weight: bold;
  color: #ffffff;
  border: none;
}
.suk04 .suk04_right button {
  border: none;
  width: 0.99rem;
  height: 0.38rem;
  background: #ec2b48;
  border-radius: 0.19rem;
  color: #ffffff;
  font-size: 0.14rem;
  text-align: center;
}
</style>