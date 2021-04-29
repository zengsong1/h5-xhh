<template>
  <div>
    <goBack></goBack>
    <div id="mydata_title">个人资料</div>
    <!-- <div class="item">
      <div class="item-row">
        <label>单位名称</label>
        <div>深圳农村商业银行前海湾支行宝成</div>
      </div>
      <div class="item-row">
        <label>昵称</label>
        <div>55000.00</div>
      </div>
      <div class="item-row">
        <label>岗位名称</label>
        <div>55000.00</div>
      </div>
      <div class="item-row">
        <label>所属单位</label>
        <div>55000.00</div>
      </div>
      <div class="item-row">
        <label>注册时间</label>
        <div>55000.00</div>
      </div>
    </div> -->
    <div id="main_mymes">
      <div class="main_mymes_inner">
        <div class="main_mymes_inner_01">
          <div class="main_mymes_inner_01_01">
            <h5>用户名</h5>
            <p>{{USER_NAME}}</p>
          </div>
        </div>
        <div class="main_mymes_inner_02">
          <div class="main_mymes_inner_02_01">
            <h5>所属单位</h5>
            <p>{{UNIT_NAME}}</p>
          </div>
        </div>
        <div class="main_mymes_inner_03">
          <div class="main_mymes_inner_03_01">
            <h5>单位地址</h5>
            <p>{{ADDRESS}}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import goBack from "../components/goback.vue";
export default {
  data() {
    return {
      USER_NAME: "",
      UNIT_NAME: "",
      ADDRESS: ""
    };
  },
  components: {
    goBack
  },
  activated() {
    if (this.$route.query.USER_NAME) {
      this.USER_NAME = this.$route.query.USER_NAME;
    }
    if (this.$route.query.UNIT_NAME) {
      this.UNIT_NAME = this.$route.query.UNIT_NAME;
    }
    if (this.$route.query.ADDRESS) {
      this.ADDRESS = this.$route.query.ADDRESS;
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
.item-row input {
  background: rgba(255, 255, 255, 1);
  border: 1px solid rgba(112, 112, 112, 1);
  padding: 0.04rem 0.08rem;
  box-sizing: border-box;
  height: 0.3rem;
  line-height: 0.3rem;
}
.item-row div {
  height: 0.3rem;
  line-height: 0.3rem;
  flex: 1;
  font-family: PingFang SC;
  font-weight: 400;
  color: rgba(12, 12, 12, 1);
}
#mydata_title {
  width: 3.75rem;
  height: 0.5rem;
  background: #ffffff;
  color: #1c1c1c;
  font-size: 0.18rem;
  text-align: center;
  line-height: 0.5rem;
  font-weight: bold;
  z-index: 1;
}
#main_mymes {
  width: 3.46rem;
  /* height: 2.2rem; */
  margin: 0.7rem auto 0 auto;
  background: #ffffff;
  border-radius: 4px;
}
#main_mymes p {
  max-width: 2.5rem;
  margin-top: 0.15rem;
  /* line-height: .52rem;
    font-size: .14rem; */
}
#main_mymes h5 {
  text-indent: -2.5em;
}
#main_mymes .main_mymes_inner_01 .main_mymes_inner_01_01 {
  box-sizing: border-box;
  margin-left: 0.31rem;
  width: 3.14rem;
  border-bottom: 0.01rem solid #d5d5d5;
  display: flex;
  justify-content: space-between;
  padding: 0 0.1rem 0 0.2rem;
}
#main_mymes .main_mymes_inner_01 .main_mymes_inner_01_01 h5 {
  line-height: 0.52rem;
  color: #1c1c1c;
}
#main_mymes .main_mymes_inner_01 .main_mymes_inner_01_01 h6 {
  margin: auto 0;
}
/*---------------*/
#main_mymes .main_mymes_inner_02 .main_mymes_inner_02_01 {
  box-sizing: border-box;
  margin-left: 0.31rem;
  width: 3.14rem;
  border-bottom: 0.01rem solid #d5d5d5;
  display: flex;
  justify-content: space-between;
  padding: 0 0.1rem 0 0.2rem;
}
#main_mymes .main_mymes_inner_02 .main_mymes_inner_02_01 h5 {
  line-height: 0.52rem;
  color: #1c1c1c;
}
#main_mymes .main_mymes_inner_02 .main_mymes_inner_02_01 h6 {
  margin: auto 0;
}
/*------------*/
#main_mymes .main_mymes_inner_03 .main_mymes_inner_03_01 {
  box-sizing: border-box;
  margin-left: 0.31rem;
  width: 3.14rem;
  display: flex;
  justify-content: space-between;
  padding: 0 0.1rem 0 0.2rem;
}
#main_mymes .main_mymes_inner_03 .main_mymes_inner_03_01 h5 {
  line-height: 0.52rem;
  color: #1c1c1c;
}
#main_mymes .main_mymes_inner_03 .main_mymes_inner_03_01 h6 {
  margin: auto 0;
}
</style>