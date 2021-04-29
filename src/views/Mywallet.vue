<template>
  <div>
    <goBack></goBack>
    <div id="Mxintegral_title">我的钱包</div>
    <div id="Mxintegral_header">
      <div class="Mxintegral_header_inner">
        <div>
          <p>{{currentUser.TOTAL_USE_MONEY|numFilter}}</p>
          <span>总额度（元)</span>
        </div>
        <div>
          <p>{{currentUser.USE_MONEY|numFilter}}</p>
          <span>当期可用额度（元)</span>
        </div>
        <div>
          <p>{{currentUser.CUSTOM_FREEZE|numFilter}}</p>
          <span>待付额度（元)</span>
        </div>
      </div>
    </div>
    <div id="Mxintegral_main">
      <div class="item" v-show="qbDetails" v-for="(item,index) in qbDetails" :key="index">
        <div class="item-row">
          <label>使用人</label>
          <div>{{item.FOR_USER}}</div>
        </div>
        <div class="item-row">
          <label>来源/用途</label>
          <div>{{type(item.FINANCE_TYPE)}}</div>
        </div>
        <div class="item-row">
          <label>额度变化</label>
          <div>{{add(item.FINANCE_TYPE)+item.AMOUNT}}</div>
        </div>
        <div class="item-row">
          <label>日期</label>
          <div>{{item.CREATE_DATE}}</div>
        </div>
      </div>
      <Loading v-if="currentPage!=pageNum && qbDetails"></Loading>
      <div class="Mxintegral_main02" v-show="!qbDetails">
        <p style="margin-left:1.1rem;">当前无消费记录</p>
      </div>
    </div>
  </div>
</template>
<script>
import goBack from "../components/goback.vue";
import Loading from "../components/loading";
export default {
  data() {
    return {
      jfNum: "",
      qbDetails: [],
      currentUser: {},
      currentPage: "1",
      pageNum: ""
    };
  },
  computed: {
    //0分配(减少),1获得(增加),3 订单消耗(减少),4订单退款(增加),5金额回收(增加),6金额回收(减少)
    add(){
        return function(a){
            switch (a) {
          case 0:
            return "-";
            break;
          case 1:
            return "+";
            break;
          case 3:
            return "-";
            break;
          case 4:
            return "+";
            break;
          case 5:
            return "+";
            break;
          case 6:
            return "-";
            break;
        }
        }
    },
    type() {
      return function(t) {
        switch (t) {
          case 0:
            return "分配额度";
            break;
          case 1:
            return "获得额度";
            break;
          case 3:
            return "订单消耗";
            break;
          case 4:
            return "订单退款";
            break;
          case 5:
            return "金额回收";
            break;
          case 6:
            return "金额回收";
            break;
          default:
            return "其它";
            break;
        }
      };
    }
  },
  methods: {
    getintegrationList() {
      let url = "group/Api/recordsList.do";
      let params = new URLSearchParams();
      params.append("token", window.userInfo.token);
      params.append("currentPage", 1);
      this.$axios({
        method: "post",
        url: url,
        data: params
      }).then(res => {
        if (res.data.status == 0) {
          let val = res.data.content;
          if (val.recordsList != "") {
            this.qbDetails = val.recordsList;
          } else {
            this.qbDetails = false;
          }
          this.pageNum = val.pages;
        }
      });
    },
    getintegrationListpage() {
      let url = "group/Api/recordsList.do";
      let params = new URLSearchParams();
      params.append("token", window.userInfo.token);
      params.append("currentPage", this.currentPage);
      this.$axios({
        method: "post",
        url: url,
        data: params
      }).then(res => {
        if (res.data.status == 0) {
          let val = res.data.content;
          if (this.currentPage <= res.data.content.pages) {
            this.qbDetails.push(...val.recordsList);
          }
        }
      });
    },
    getuserInfo() {
      var url = "headquarters/Api/userInfo.do";
      var params = new URLSearchParams();
      params.append("token", window.userInfo.token);
      this.$axios({
        method: "post",
        url: url,
        data: params
      }).then(res => {
        if (res.data.status == 0) {
         this.currentUser = res.data.content.currentUser;
        }
      });
    },
    goorder(item) {
      if (item.FINANCE_TYPE == 3) {
        this.$router.push({
          path: "/orderDetail",
          query: {
            ORDER_ID: item.FOR_USER
          }
        });
      }
    }
  },
  activated() {
    this.getintegrationList();
    this.getuserInfo();
  },
  updated() {
    var _this = this;
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
        if (_this.currentPage < _this.pageNum) {
          if (window.location.pathname == "/Mywallet") {
            _this.currentPage++;
            _this.getintegrationListpage();
          }
        }
      }
    };
  },
  components: {
    goBack,
    Loading
  },
  filters: {
    numFilter(value) {
      // 截取当前数据到小数点后两位
      if (value != undefined) {
        let realVal = parseFloat(value).toFixed(2);
        return realVal;
      }
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
@import "../style/css/Mxintegral.css";
#Mxintegral_header {
  height: 1.5rem;
}
.item {
  padding: 0.14rem 0.17rem 0.14rem 0.13rem;
  background: #fff;
  width: 3.46rem;
  margin: 0.14rem auto 0;
  box-sizing: border-box;
  border-radius: 3px;
}
.item-row {
  display: flex;
  margin-top: 0.07rem;
  font-size: 0.14rem;
}
.item-row label {
  height: 0.3rem;
  line-height: 0.3rem;
  width: 0.84rem;
  text-align: left;
  margin-right: 0.12rem;
}
.item-row div {
  height: 0.3rem;
  line-height: 0.3rem;
  flex: 1;
  font-family: PingFang SC;
  font-weight: 400;
  color: rgba(12, 12, 12, 1);
}
</style>