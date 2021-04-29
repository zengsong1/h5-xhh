<template>
  <div class="festival">
    <div class="zxsg-row">
      <div class="zxsg-item" v-for="(item,index) in festivalGoodsOne" :key="index">
        <div class="zxsg-top" @click="goDetail(item.GROUP_GOODS_ID)">
          <div class="zxsg-img">
            <img :src="item.INDEX_PICTURE" style="width: 1rem;height: 1rem;" />
          </div>
          <div class="title">{{title(item.GOODS_NAME)}}</div>
          <div class="item-price">
            <div class="zxsg-price">￥{{item.CURRENT_PRICE.toFixed(2)}}</div>
            <div class="origi-price">￥{{item.ORIGINAL_PRICE.toFixed(2)}}</div>
          </div>
        </div>
        <div class="zxsg-footer">
          <div class="car" @click="addCar(item.GOODS_ID,item.GROUP_GOODS_ID)">加入购物车</div>
          <div class="buy" @click="buy(item.GOODS_ID,item.GROUP_GOODS_ID)">立即购买</div>
        </div>
      </div>
    </div>
    <div class="zxsg-row">
      <div class="zxsg-item" v-for="(item,index) in festivalGoodsTwo" :key="index">
        <div class="zxsg-top" @click="goDetail(item.GROUP_GOODS_ID)">
          <div class="zxsg-img">
            <img :src="item.INDEX_PICTURE" style="width: 1rem;height: 1rem;" />
          </div>
          <div class="title">{{title(item.GOODS_NAME)}}</div>
          <div class="item-price">
            <div class="zxsg-price">￥{{item.CURRENT_PRICE.toFixed(2)}}</div>
            <div class="origi-price">￥{{item.ORIGINAL_PRICE.toFixed(2)}}</div>
          </div>
        </div>
        <div class="zxsg-footer">
          <div class="car" @click="addCar(item.GOODS_ID,item.GROUP_GOODS_ID)">加入购物车</div>
          <div class="buy" @click="buy(item.GOODS_ID,item.GROUP_GOODS_ID)">立即购买</div>
        </div>
      </div>
    </div>
    <div class="zxsg-row">
      <div class="zxsg-item" v-for="(item,index) in festivalGoodsThree" :key="index">
        <div class="zxsg-top" @click="goDetail(item.GROUP_GOODS_ID)">
          <div class="zxsg-img">
            <img :src="item.INDEX_PICTURE" style="width: 1rem;height: 1rem;" />
          </div>
          <div class="title">{{title(item.GOODS_NAME)}}</div>
          <div class="item-price">
            <div class="zxsg-price">￥{{item.CURRENT_PRICE.toFixed(2)}}</div>
            <div class="origi-price">￥{{item.ORIGINAL_PRICE.toFixed(2)}}</div>
          </div>
        </div>
        <div class="zxsg-footer">
          <div class="car" @click="addCar(item.GOODS_ID,item.GROUP_GOODS_ID)">加入购物车</div>
          <div class="buy" @click="buy(item.GOODS_ID,item.GROUP_GOODS_ID)">立即购买</div>
        </div>
      </div>
    </div>
    <div class="zxsg-row">
      <div class="zxsg-item" v-for="(item,index) in festivalGoodsFour" :key="index">
        <div class="zxsg-top" @click="goDetail(item.GROUP_GOODS_ID)">
          <div class="zxsg-img">
            <img :src="item.INDEX_PICTURE" style="width: 1rem;height: 1rem;" />
          </div>
          <div class="title">{{title(item.GOODS_NAME)}}</div>
          <div class="item-price">
            <div class="zxsg-price">￥{{item.CURRENT_PRICE.toFixed(2)}}</div>
            <div class="origi-price">￥{{item.ORIGINAL_PRICE.toFixed(2)}}</div>
          </div>
        </div>
        <div class="zxsg-footer">
          <div class="car" @click="addCar(item.GOODS_ID,item.GROUP_GOODS_ID)">加入购物车</div>
          <div class="buy" @click="buy(item.GOODS_ID,item.GROUP_GOODS_ID)">立即购买</div>
        </div>
      </div>
    </div>

    <div class="foot">
      <img src="../festival/dt.jpg" />
      <a href="http://p.qiao.baidu.com/cps/chat?siteId=11906548&userId=24700287">
        <img src="../festival/service.jpg" class="service" />
      </a>
    </div>
    <div class="fuzhu">
      <router-link to="index">
        <img
          src="../img/home/icon/shouye.png"
          style=" position: fixed;right: .15rem;top: 3.8rem;height: .4rem;"
        />
      </router-link>
      <img
        src="../festival/cart.png"
        style=" position: fixed;right: .15rem;top: 4.4rem;height: .4rem;border-radius: 50%;"
        @click="goShopCart"
      />
      <img
        src="../img/home/icon/dingbu1.png"
        style=" position: fixed;right: .15rem;top: 5rem;height: .4rem;"
        v-show="isFixed"
        @click="checktop"
      />
    </div>
  </div>
</template>
<script>
import { Toast } from "vant";
export default {
  data() {
    return {
      isFixed: false,
      festivalGoodsOne: [],
      festivalGoodsTwo: [],
      festivalGoodsThree: [],
      festivalGoodsFour: []
    };
  },
  computed: {
    title() {
      return function(name) {
        if (name.length > 24) {
          return name.substr(0, 24) + "...";
        } else {
          return name;
        }
      };
    }
  },
  mounted() {
    this.getFestivalList(5);
    window.onscroll = function() {
      //变量scrollTop是滚动条滚动时，距离顶部的距离
      var scrollTop =
        document.documentElement.scrollTop || document.body.scrollTop;
      //变量windowHeight是可视区的高度
      var windowHeight =
        document.documentElement.clientHeight || document.body.clientHeight;
      //变量scrollHeight是滚动条的总高度
      var scrollHeight =
        document.documentElement.scrollHeight || document.body.scrollHeight;
      //滚动条到底部的条件
      if (scrollTop + windowHeight == scrollHeight) {
        this.isFixed = true;
      }
    };
    window.addEventListener("scroll", this.handleScroll); //固定导航
  },
  methods: {
    goShopCart() {
      this.$router.push({
        path: "/shoppingcart"
      });
    },
    getFestivalList(festivalId) {
      let userInfo = JSON.parse(localStorage.getItem("userInfo"));
      let url = "group/Api/festivalGoodsList.do";
      let params = new URLSearchParams();
      if (userInfo && userInfo.TOP_ID) {
        params.append("TOP_ID", userInfo.TOP_ID.toString());
      } else {
        this.$router.push({
          path: "/login"
        });
        return false;
      }
      if (userInfo && userInfo.token) {
        params.append("token", userInfo.token);
      } else {
        this.$router.push({
          path: "/login"
        });
        return false;
      }

      params.append("FESTIVAL_ID", festivalId);
      this.$axios({
        method: "post",
        url: url,
        data: params
      }).then(res => {
        if (res.data.status == 0) {
          this.festivalGoodsOne =
            res.data.content.festivalGoods.festivalGoodsOne;
          this.festivalGoodsTwo =
            res.data.content.festivalGoods.festivalGoodsTwo;
          this.festivalGoodsThree =
            res.data.content.festivalGoods.festivalGoodsThree;
          this.festivalGoodsFour =
            res.data.content.festivalGoods.festivalGoodsFour;
        } else {
          Toast("加载失败");
        }
      });
    },
    goDetail(id) {
      this.$router.push({
        path: "/detail",
        query: {
          id: id
        }
      });
    },
    addCar(goods_id, group_goods_id) {
      let url = "group/Api/addCart.do";
      let params = new URLSearchParams();
      let userInfo = JSON.parse(localStorage.getItem("userInfo"));
      if (userInfo) {
        if (userInfo.token) {
          params.append("token", userInfo.token);
        }
      } else {
        this.$router.push("/login");
      }
      params.append("GOODS_ID", goods_id);
      params.append("GROUP_GOODS_ID", group_goods_id);
      params.append("number", 1);
      this.$axios({
        method: "post",
        url: url,
        data: params
      }).then(res => {
        console.log(res.data);
        if (res.data.status == "0") {
          Toast("加入购物车成功");
        }
      });
    },
    buy(goods_id, group_goods_id) {
      let url = "group/Api/sureOrder.do";
      let params = new URLSearchParams();
      let userInfo = JSON.parse(localStorage.getItem("userInfo"));
      if (userInfo) {
        if (userInfo.token) {
          params.append("token", userInfo.token);
        }
      } else {
        this.$router.push(
          "/login?redirect=" + encodeURIComponent(this.$route.fullPath)
        );
      }
      params.append("GOODS_ID", goods_id);
      params.append("GROUP_GOODS_ID", group_goods_id);
      params.append("number", 1);
      this.$axios({
        method: "post",
        url: url,
        data: params
      }).then(res => {
        if (res.data.status == "0") {
          this.$router.push({
            path: "/writeorder",
            query: {
              GOODS_ID: goods_id,
              GROUP_GOODS_ID: group_goods_id,
              number: 1
            }
          });
        }
      });
    },
    checktop() {
      window.pageYOffset = 0;
      document.documentElement.scrollTop = 0;
      document.body.scrollTop = 0;
    },
    handleScroll() {
      let scrollTop =
        window.pageYOffset ||
        document.documentElement.scrollTop ||
        document.body.scrollTop;
      if (scrollTop >= 100) {
        this.isFixed = true;
      } else {
        this.isFixed = false;
      }
    }
  }
};
</script>
<style scoped>
html,
body {
  height: 44.36rem;
  width: 100%;
  overflow: hidden;
  font-size: 1rem;
}
.zymm {
  position: absolute;
  top: 2.24rem;
  width: 3.46rem;
  left: 0;
  right: 0;
  margin: 0 auto;
}
.zymm-img {
  width: 3.46rem;
  height: 0.36rem;
  text-align: center;
}
.zymm-img img {
  width: 3.21rem;
  height: 100%;
}
.festival {
  width: 3.46rem;
  background: rgba(255, 255, 255, 1);
  opacity: 0.9;
  overflow: hidden;
  margin: 0.1rem auto 0;
}
.zymm-item {
  margin: 0.06rem 0.05rem 0.06rem 0.06rem;
  padding: 0.08rem 0.07rem 0.17rem 0.14rem;
  width: 3.35rem;
  border: solid 0.01rem #ffc600;
  box-sizing: border-box;
  display: flex;
}
.zymm-left {
  width: 1.15rem;
  height: 1.07rem;
  position: relative;
}
.zymm-left img {
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  margin: auto;
  display: block;
}
.zymm-right {
  padding: 0.06rem 0.1rem 0.17rem 0.1rem;
  position: relative;
  box-sizing: border-box;
}
.txt {
  position: absolute;
  top: 0.26rem;
  width: 1.92rem;
}
.t {
  width: 0.98rem;
}
.t1 {
  width: 1.89rem;
}
.t2 {
  width: 1.43rem;
}
.zymm-right-top {
  height: 1rem;
}
.name {
  height: 0.12rem;
  font-family: MicrosoftYaHei-Bold;
  font-size: 0.11rem;
  font-weight: bold;
  font-stretch: normal;
  letter-spacing: 0.01rem;
  color: #ee2c43;
}
.price {
  position: absolute;
  top: 0.72rem;
  font-family: MicrosoftYaHei-Bold;
  font-size: 0.12rem;
  font-weight: bold;
  font-stretch: normal;
  letter-spacing: 0.01rem;
  color: #db3030;
}
.p1 {
  top: 0.9rem;
}
.p2 {
  top: 0.82rem;
}
.zymm-right-footer {
  display: flex;
  position: relative;
  top: 0.72rem;
}
.box1 {
  height: 1.52rem;
}
.box2 {
  height: 1.14rem;
}
.f1 {
  top: 0.9rem;
}
.f2 {
  top: 0.8rem;
}
.car {
  padding: 0.04rem 0.08rem;
  background-color: #e8223b;
  border-radius: 0.02rem;
  font-family: OPPOSans-M;
  font-size: 0.11rem;
  font-weight: normal;
  font-stretch: normal;
  letter-spacing: 0rem;
  color: #e8e8e8;
}
.buy {
  padding: 0.04rem 0.08rem;
  font-family: OPPOSans-M;
  font-size: 0.11rem;
  font-weight: normal;
  font-stretch: normal;
  letter-spacing: 0rem;
  color: #cb1d33;
  margin-left: 0.14rem;
  border-radius: 0.02rem;
  border: 0.01rem solid #cb1d33;
}
.next {
  margin-top: 0.1rem;
}
.item {
  padding: 0.12rem 0.14rem 0.17rem 0.07rem;
}

/* zxsg */
.zymm-box {
}
.zxsg-row {
  display: flex;
  flex-wrap: wrap;
  width: 100%;
}
.zxsg-item {
  flex: 1;
  padding: 0.1rem 0.06rem 0.05rem;
}
.last {
  margin-bottom: 0.22rem;
}
.zxsg-top {
}
.zxsg-img {
  width: 1.54rem;
  height: 1.1rem;
  text-align: center;
  margin-bottom: 0.14rem;
}
.zxsg-img img {
  height: 100%;
}
.title {
  font-family: MicrosoftYaHei-Bold;
  font-size: 0.11rem;
  font-weight: bold;
  font-stretch: normal;
  letter-spacing: 0rem;
  color: #000;
}
.des {
  font-family: FZQKBYSJW--GB1-0;
  font-size: 0.09rem;
  font-weight: normal;
  font-stretch: normal;
  letter-spacing: 0.01rem;
  margin: 0.02rem 0;
}
.item-price {
  display: flex;
}
.zxsg-price {
  font-family: MicrosoftYaHei-Bold;
  font-size: 0.13rem;
  font-weight: bold;
  font-stretch: normal;
  letter-spacing: 0rem;
  color: #db3030;
}
.origi-price {
  color: #666;
  margin-left: 0.1rem;
  font-size: 0.12rem;
  text-decoration: line-through;
}

.zxsg-footer {
  display: flex;
}

.foot {
  position: relative;
  margin: 0.12rem 0 0.1rem;
  width: 3.46rem;
  height: 0.78rem;
}
.foot img {
  position: absolute;
  width: 100%;
}
.service {
  position: absolute;
  top: 0.36rem;
  right: 0.19rem;
  width: 0.7rem !important;
  height: 0.16rem;
}
</style>