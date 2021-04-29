<template>
  <div>
    <goBack></goBack>
    <div id="Mxintegral_title">拓客管理</div>
    <div class="money">订单总额度：￥190800.00</div>
    <van-search v-model="value" placeholder="请输入关键词" background="#F1F1F1" />
    <div class="item">
      <div class="item-row">
        <label>发展单位名称</label>
        <div>深圳农村商业银行前海湾支行宝成</div>
      </div>
      <div class="item-row">
        <label>手机号码</label>
        <div>55000.00</div>
      </div>
      <div class="item-row">
        <label>推荐码</label>
        <div>55000.00</div>
      </div>
      <div class="item-row">
        <label>注册时间</label>
        <div>55000.00</div>
      </div>
    </div>
  </div>
</template>

<script>
import goBack from "../components/goback.vue";
export default {
  data() {
    return {
      value: ""
    };
  },
  components: {
    goBack
  }
};
</script>

<style scoped>
@import "../style/css/reset.css";
@import "../style/css/common.css";
@import "../style/css/Mxintegral.css";
.money {
  font-size: 0.16rem;
  font-family: Microsoft YaHei;
  font-weight: 400;
  color: rgba(72, 72, 72, 1);
  padding: 0.15rem 0.17rem 0;
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