<template>
  <div class="home_jt">
    <!--头部-->
    <div id="homeJT_header">
      <img  src="../img/home/首页/gongsi@3x.png" style="width:0.35rem;height: .29rem;" />
      <router-link to="initialSearch" tag="div" class="homeJT_header_bottom">
          <img src="../img/home/search.png" style="height: .29rem;" />
          <input type="text" placeholder="搜索商品" />
      </router-link>
      <router-link to="sort" tag="div" class="header_right">
        <div class="homeJT_header_top02">
          <div class="a1"></div>
          <div class="a2"></div>
          <div class="a3"></div>
        </div>
      </router-link>
    </div>
    <!--轮播图-->
    <div id="banner">
      <banner :bannerUrl="bannerUrl"></banner>
    </div>
    <div class="nav">
        <div class="nav_inner">
          <ul>
            <li v-for="(item,index) in myStripes" :key="index" @click="goPoster(item.id)">
              <i>
                <img v-lazy="item.url"/>
              </i>
              <div>
                {{item.title}}
              </div>
              
            </li>
          </ul>
        </div>
      </div>
    <!--主体内容-->
    <div id="main">
      <!--导航-->
      <!-- <div class="nav">
        <div class="nav_inner">
          <ul>
            <li v-for="item in navDZ" :key="item.id">
              <i>
                <img v-lazy="item.PICTURE" />
              </i>
              {{item.AD_NAME}}
            </li>
          </ul>
        </div>
      </div>-->
      <div class="item-big-out">
        <div class="item-big-out-top">
          <div>
            <!-- <img src="../img/yhq.png" style="width:.19rem;height:.2rem;vertical-align: middle;" /> -->
            <span>每周特价</span>
          </div>
          <div style="text-align: left;border:1px solid #EF0E01;border-radius: 0.15rem;">
            <div class="time-row">
              <span class="time">倒计时</span>
              <CountDown :time="content.countDown" format="DD 天 HH 时 mm 分 ss 秒"></CountDown>
            </div>
          </div>
          <!-- <div
            style="text-align: right;font-size:.12rem;height:.2rem;line-height:.2rem"
            @click="goWeek"
          >往期特价</div> -->
        </div>
        <div class="item-img" @click="goDetail(content.firstGoods)" v-if="content.firstGoods">
          <img v-lazy="content.firstGoods.ACTIVITY_PICTURE" />
        </div>
      </div>

      <div id="main_commodity" v-if="content.goodsList">
        <div class="main_commodity_inner" v-for="(item,index) in content.goodsList" :key="index">
          <div class="main_commodity_inner_left" @click="goDetail(item)">
            <img v-lazy="item.INDEX_PICTURE" />
          </div>
          <div class="main_commodity_inner_right">
            <div @click="goDetail(item)">
              <p style="font-weight:bold;">{{item.GOODS_NAME}}</p>
              <span style="font-size:.14rem; top: .4rem;">￥{{item.ACTIVITY_PRICE.toFixed(2)}}</span>
              <span style="font-weight: 400;" class="old-price">￥{{item.CURRENT_PRICE.toFixed(2)}}</span>
            </div>
            <div class="buyNow" @click="goDetail(item)">立即购买</div>
          </div>
        </div>
      </div>
      
      <!-- <div class="fxhh-box">
        <div class="fxhh-img">
          <img src="https://cs.zhaolipin.net/9c49223f-5bea-4dda-9c84-06961a4b4d0e.jpg" />
          <img src="https://cs.zhaolipin.net/9c49223f-5bea-4dda-9c84-06961a4b4d0e.jpg" />
        </div>
        <div class="fxhh-box-item">
          <div class="fxhh-item one">
            <div class="fxhh-des">
              <div>办公用品</div>
              <div>品质好货</div>
            </div>
            <div class="fxhh-goods-list">
              <div class="fxhh-goods">
                <img src="https://cs.zhaolipin.net/9c49223f-5bea-4dda-9c84-06961a4b4d0e.jpg" />
                <div class="goods-price">￥56.00</div>
              </div>
              <div class="fxhh-goods">
                <img src="https://cs.zhaolipin.net/9c49223f-5bea-4dda-9c84-06961a4b4d0e.jpg" />
                <div class="goods-price">￥56.00</div>
              </div>
            </div>
          </div>
          <div class="fxhh-item two">
            <div class="fxhh-des">
              <div>家居用品</div>
              <div>舒适好物</div>
            </div>
            <div class="fxhh-goods-list">
              <div class="fxhh-goods">
                <img src="https://cs.zhaolipin.net/9c49223f-5bea-4dda-9c84-06961a4b4d0e.jpg" />
                <div class="goods-price">￥56.00</div>
              </div>
              <div class="fxhh-goods">
                <img src="https://cs.zhaolipin.net/9c49223f-5bea-4dda-9c84-06961a4b4d0e.jpg" />
                <div class="goods-price">￥56.00</div>
              </div>
            </div>
          </div>
          <div class="fxhh-item three">
            <div class="fxhh-des">
              <div>家用电器</div>
              <div>科技好物</div>
            </div>
            <div class="fxhh-goods-list">
              <div class="fxhh-goods">
                <img src="https://cs.zhaolipin.net/9c49223f-5bea-4dda-9c84-06961a4b4d0e.jpg" />
                <div class="goods-price">￥56.00</div>
              </div>
              <div class="fxhh-goods">
                <img src="https://cs.zhaolipin.net/9c49223f-5bea-4dda-9c84-06961a4b4d0e.jpg" />
                <div class="goods-price">￥56.00</div>
              </div>
            </div>
          </div>
          <div class="fxhh-item four">
            <div class="fxhh-des">
              <div>粮油水果</div>
              <div>新鲜品质</div>
            </div>
            <div class="fxhh-goods-list">
              <div class="fxhh-goods">
                <img src="https://cs.zhaolipin.net/9c49223f-5bea-4dda-9c84-06961a4b4d0e.jpg" />
                <div class="goods-price">￥56.00</div>
              </div>
              <div class="fxhh-goods">
                <img src="https://cs.zhaolipin.net/9c49223f-5bea-4dda-9c84-06961a4b4d0e.jpg" />
                <div class="goods-price">￥56.00</div>
              </div>
            </div>
          </div>
        </div>
      </div> -->
      <!--新品上架-->
      <div class="custom">
        <div class="custom_inner">
          <div class="custom_top"> 
            <h1>新品推荐</h1>
            <P @click="gosearchGOODS_POSITION(2)">查看更多</P>
            <span class="arrows"></span>
          </div>
           
          <div class="custom_bottom_parent">
            <div
              class="custom_bottom"
              v-for="(item,index ) in goodsNew"
              :key="index"
              @click="goDetail(item)"
              v-show="index<6"
            >
              <div>
                <img v-lazy="item.INDEX_PICTURE" />
              </div>
              <h4>{{item.GOODS_NAME}}</h4>
              <h6>￥{{item.CURRENT_PRICE |numFilter}}</h6>
            </div>
          </div>
        </div>
      </div>
      <!--人气推荐-->
      <div class="custom">
        <div class="custom_inner">
          <div class="custom_top"> 
            <h1>热销产品</h1>
            <router-link :to="'search?SALES_VOLUME=true'">
              <P>查看更多</P>
            </router-link>
            <span class="arrows"></span>
          </div>
          
          <div class="custom_bottom_parent">
            <div
              class="custom_bottom"
              v-for="(item,index) in mySellHotList"
              :key="index"
              v-show="index<6"
              @click="goDetail(item)"
            >
              <div>
                <img v-lazy="item.INDEX_PICTURE" />
              </div>
              <h4>{{item.GOODS_NAME}}</h4>
              <h6>￥{{item.CURRENT_PRICE |numFilter}}</h6>
            </div>
          </div>
        </div>
      </div>
      <!-- 猜你喜欢开始 -->
      <!-- <div class="gust-you-like">
        <div class="gust-you-like-top">
          <img src="../assets/like.png" />
          <div>猜你喜欢</div>
        </div>
        <div class="gust-you-main">
          <div class="gust-you-item">
            <div class="item-top">
              <img src="https://cs.zhaolipin.net/9c49223f-5bea-4dda-9c84-06961a4b4d0e.jpg" />
            </div>
            <div class="item-title">维刻定制笔记本</div>
            <div class="item-price">¥ 12.5</div>
          </div>
        </div>
      </div> -->
      <!-- 猜你喜欢结束 -->
      <!--分类-->
      <!--尾部-->
      <div id="footer">
        <div class="footer-inner">
          <router-link to="/">
            <span class="active">
              <i>
                <img src="../img/home/标签栏-选中/首页@2x.png" />
              </i>首页
            </span>
          </router-link>
          <router-link to="sort">
            <span>
              <i>
                <img src="../img/home/标签栏-未选中/分类@2x.png" />
              </i>分类
            </span>
          </router-link>
          <router-link to="shoppingcart">
            <span>
              <i>
                <img src="../img/home/标签栏-未选中/购物车@2x.png" />
              </i>购物车
            </span>
          </router-link>
          <router-link to="my">
            <span>
              <i>
                <img src="../img/home/标签栏-未选中/个人中心@2x.png" />
              </i>我的
            </span>
          </router-link>
        </div>
      </div>
    </div>
    <!-- 填补信息 -->
    <van-overlay :show="showInfo" >
        <div class="home_info_img" @click="closeInfo">
            <img @click="goInfo" src="../img/home/首页/buchong.png" alt="">
        </div>
    </van-overlay>
  </div>
</template>
<script>
import banner from "../components/banner";
import { Tab, Tabs, CountDown } from "vant";
export default {
  data() {
    return {
      showInfo : false, // 填补信息
      islogin: true,
      bannerUrl: [], //轮播图
      navDZ: [
        {
          id: 1,
          PICTURE:
            "http://media-cdn.tripadvisor.com/media/photo-s/07/96/af/8a/tup-island.jpg",
          AD_NAME: "dgfsda"
        }
      ],
      findgoods: "", //发现好物
      goodsNew: [], //新品上架
      recommendContent: [], //人气列表,
      logoUrl: "",
      content: {},
      myStripes : [
        {
          id : 1,
          title: "家用电器",
          url : require("../img/home/首页/xj.png")
        },
        {
          id : 2,
          title: "应急防疫物资",
          url : require("../img/home/首页/kz.png")
        },
        {
          id : 3,
          title: "办公设备",
          url : require("../img/home/首页/zj.png")
        },
        {
          id : 4,
          title: "保洁用品",
          url : require("../img/home/首页/pw.png")
        },
        {
          id : 5,
          title: "办公家具",
          url : require("../img/home/首页/dn.png")
        }
      ], //横条 
      mySellHotList: [], // 人气推荐 
    };
  },
  methods: {
    //立即购买
    // buyNow(item){
    //   this.$router.push('/writeorder?GOODS_ID='+item.GOODS_ID+'&GROUP_GOODS_ID='+item.GROUP_GOODS_ID+'&number=1'+(this.cheeckSkuID?'&SKU_ID='+this.cheeckSkuID:'')+(this.$route.query.isDirect?'&isDirect='+this.$route.query.isDirect:''))
    // },
    // top 五个nav的跳转
    goPoster(id) {
//       search.html?GOODS_TYPE_ID=2&TYPE_ALL=0
// search.html?GOODS_TYPE_ID=4&TYPE_ALL=0
// search.html?
// search.html?
// search.html? 
      let GOODS_TYPE_ID = 2;
      let TYPE_ALL = 0; 
      if(id==1) { 
         GOODS_TYPE_ID = 2;
         TYPE_ALL = 0
      }
      else if(id==2) { 
          GOODS_TYPE_ID = 4;
         TYPE_ALL = 0
      }
      else if(id==3) { 
          GOODS_TYPE_ID = 5;
         TYPE_ALL = 0
      }
      else if(id==4) { 
         GOODS_TYPE_ID = 6;
         TYPE_ALL = 0
      }
      else{ 
         GOODS_TYPE_ID = 1026;
         TYPE_ALL = 0
      }
      this.$router.push({
          path : "/search",
          query : {
            GOODS_TYPE_ID : GOODS_TYPE_ID,
            TYPE_ALL : TYPE_ALL
          }
      })
    },
    goWeek() {
      this.$router.push({
        path: "/weekSpecial"
      });
    },
    // 填写信息
    goInfo() {
      this.$router.push({
        path : "/accountInfo"
      })
    },
    // 关闭蒙层
    closeInfo() {
      this.showInfo = false
    },
    //每周特价
    weekSpec() {
      var url = "group/Api/indexWeekGoods.do";
      let params = new URLSearchParams();
      params.append("TOP_ID", window.userInfo.TOP_ID);
      params.append("token", window.userInfo.token);

      this.$axios({
        method: "post",
        url: url,
        data: params
      }).then(res => {
        if (res.data.status == "0") {
          this.content = res.data.content;
        }
      });
    },
    indexShop() {
      var url = "auditGroup/Api/mobileIndexShop.do";
      let params = new URLSearchParams();
      params.append("TOP_ID", window.userInfo.TOP_ID);
      params.append("token", window.userInfo.token);
      this.$axios({
        method: "post",
        url: url,
        data: params
      }).then(res => {
        if (res.data.status == 0) {
          let data = res.data.content;
          this.indexShow = data;
          this.bannerUrl = data.topShuffling;
          // this.findgoods = data.recommendFourGoods;
          
          // this.goodsDZ = data.customContent.customGoods;
          // 用于新品上架
          this.goodsNew = data.recommendContent.recommendGoods;
        }
      });
    },
    //人气推荐
    sellHotList(){
        var url = "auditGroup/Api/sellHotList.do";
        let params = new URLSearchParams();
        params.append("TOP_ID", window.userInfo.TOP_ID);
        params.append("token", window.userInfo.token);
        this.$axios({
          method: "post",
          url: url,
          data: params
        }).then(res => {
          if (res.data.status == 0) {
             this.mySellHotList = res.data.content.listDetailTop
          }
        });
    },
    indexInfor() {
      var url = "group/Api/indexInformation.do";
      let params = new URLSearchParams();
      params.append("TOP_ID", window.userInfo.TOP_ID);
      this.$axios({
        method: "post",
        url: url,
        data: params
      }).then(res => {
        if (res.data.status == 0) {
          let data = res.data.content;
          if (data.mallSetting) {
            this.logoUrl = data.mallSetting.MALLS_LOGO;
            document.title = data.mallSetting.MALLS_NAME;
            localStorage.setItem("MALLS_NAME", data.mallSetting.MALLS_NAME);
          }
        }
      });
    },
    gosearchGOODS_POSITION(num) {
      this.$router.push({
        path: "/search",
        query: {
          CREATE_DATE: true
        }
      });
    },
    goDetail(item) {
      this.$router.push({
          path: "/detail",
          query: {
            id: item.GROUP_GOODS_ID
          }
        });
      // if (item.GOODS_POSITION == 0) {
      //   this.$router.push({
      //     path: "/detail",
      //     query: {
      //       id: item.GROUP_GOODS_ID
      //     }
      //   });
      // }
      // else if (item.GOODS_POSITION == 1) {
      //   this.$router.push({
      //     path: "/detail",
      //     query: {
      //       id: item.GROUP_GOODS_ID
      //     }
      //   });
      // }  
    },
    gorecommend(item) {
      let url = item.AD_URL.split("?")[1];
      this.$router.push("detail?" + url);
    }
  },
  activated() {
      let myUserInfo = JSON.parse(localStorage.getItem("userInfo")) 
      if(myUserInfo && myUserInfo.state == 0) {
        this.showInfo = true
      }
      else {
        this.showInfo = false
      }   

    // 轮播
    this.indexShop();
    // 每周特价
    this.weekSpec();
    // 人气推荐
    this.sellHotList()
    // this.indexInfor();
    if (localStorage.getItem("userInfo")) {
      this.islogin = false;
    } else {
      this.islogin = true;
    }
  },
  components: {
    banner,
    CountDown
  },
  filters: {
    numFilter(value) {
      // 截取当前数据到小数点后两位
      let realVal = value.toFixed(2);
      return realVal;
    }
  }
};
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
@import "../style/css/reset.css";
@import "../style/css/common.css";
@import "../style/css/home1.css";
@import "../style/css/commoditypageSales.css";

.home_jt /deep/ .home_info_img {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center; 
}
 
 .home_jt /deep/ .home_info_img >img{
    width: 3.1rem;
    height: 2.07rem;
    margin-top: 2.39rem;
 }
.home_jt .van-overlay{
      
     z-index: 200;
}
/* 发现好货开始 */
.one{
  border-right: 1px solid rgba(235,235,235,1);
}
.three{
border-right: 1px solid rgba(235,235,235,1);
border-top: 1px solid rgba(235,235,235,1);
}
.four{
  border-top: 1px solid rgba(235,235,235,1);
}
.fxhh-box-item {
  background: rgba(255, 255, 255, 1);
  border-radius: 3px;
  margin: 0.11rem 0;
  display: flex;
  flex-wrap: wrap;
}
.fxhh-item {
  padding: 0.11rem 0.12rem 0.05rem;
  width: 1.74rem;
  box-sizing: border-box;
}
.fxhh-des {
  display: flex;
  justify-content: space-between;
}
.fxhh-des div:nth-of-type(1) {
  font-size: 0.16rem;
  font-family: PingFang SC;
  font-weight: bold;
  color: rgba(39, 39, 39, 1);
  height: 0.2rem;
  line-height: 0.2rem;
}
.fxhh-des div:nth-of-type(2) {
  font-size: 0.12rem;
  border: 1px solid rgba(48, 213, 0, 1);
  border-radius: 3px;
  font-weight: 400;
  height: 0.17rem;
  line-height: 0.17rem;
  padding: 0 0.03rem;
  color: rgba(48, 213, 0, 1);
}
.fxhh-goods-list {
  display: flex;
  justify-content: space-between;
}
.fxhh-goods {
}
.fxhh-goods img {
  width: 0.7rem;
  height: 0.7rem;
}
.goods-price {
  font-weight: bold;
  color: rgba(233, 61, 61, 1);
}
.fxhh-box {
  width: 3.48rem;
  margin: 0 auto;
}
.fxhh-img {
  display: flex;
  justify-content: space-between;
}
.fxhh-img img {
  height: 2.02rem;
  width: 1.65rem;
}
.time-row >>> .van-count-down {
  font-size: 0.12rem;
  padding-right: 0.04rem;
}
/* 猜你喜欢开始 */
.gust-you-like {
  width: 3.48rem;
  margin: 0.23rem auto;
}
.gust-you-like-top {
  display: flex;
}
.gust-you-like-top img {
  margin-right: 0.06rem;
}
.gust-you-main {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
}
.gust-you-item {
  padding: 0.09rem 0.14rem 0.21rem;
  background: rgba(255, 255, 255, 1);
  border-radius: 3px;
  box-sizing: border-box;
  width: 1.67rem;
  margin-top: 0.14rem;
}
.gust-you-item .item-title {
  font-size: 0.14rem;
  font-family: PingFang SC;
  font-weight: bold;
  color: rgba(28, 28, 28, 1);
  margin-top: 0.22rem;
}
.gust-you-item .item-price {
  font-size: 0.14rem;
  font-family: PingFang SC;
  font-weight: 800;
  color: rgba(236, 43, 72, 1);
}
.item-top {
  height: 1rem;
  text-align: center;
}
.item-top img {
  width: 1.18rem;
  height: 100%;
}
/* 猜你喜欢结束 */
/*nav*/
.nav {
  margin-top: 0.12rem;
  padding: 0 0.1rem;
}
.nav .nav_inner ul {
  display: flex;
  justify-content: space-around;
}
.nav .nav_inner ul li {
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  text-align: center;
  font-size: 0.12rem;
}
.nav .nav_inner ul li img {
  height: 0.46rem;
}
.nav .nav_inner ul li div {
  margin-top: 0.06rem;
}
</style>