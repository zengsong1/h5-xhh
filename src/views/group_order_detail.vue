<template>
  <div>
      <goBack></goBack>
    <div id="Mxintegral_title">查看订单详情</div>
    <div class="order-detail">
        <div>订单总数：89</div>
        <div>总金额：￥159600.00</div>
    </div>
    <div class="item">
      <div class="item-row">
        <label>联系人</label>
        <div>深圳农村商业银行前海湾支行宝成</div>
      </div>
      <div class="item-row">
        <label>手机号码</label>
        <div>都都 15888000365</div>
      </div>
      <div class="item-row">
        <label>分配额度</label>
        <div>深圳农村商业银行前海湾支行宝成</div>
      </div>
      <div class="item-row">
        <label>可用额度</label>
        <div>都都 15888000365</div>
      </div>
      <div class="item-row">
        <label>订单数</label>
        <div>深圳农村商业银行前海湾支行宝成</div>
      </div>
      <div class="item-row">
        <label>总金额</label>
        <div>都都 15888000365</div>
      </div>
    </div>
  </div>
</template>

<script>
import goBack from "../components/goback.vue";
export default {
components: {
    goBack
  }
}
</script>

<style scoped>
@import "../style/css/reset.css";
@import "../style/css/common.css";
@import "../style/css/Mxintegral.css";
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
.order-detail{
    display: flex;
    padding: .17rem .13rem 0;
    box-sizing: border-box;
    justify-content: space-around;
    font-size:.16rem;
    color:rgba(72,72,72,1);
}
</style>