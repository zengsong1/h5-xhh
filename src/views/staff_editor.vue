<template>
  <div>
    <goBack></goBack>
    <div id="Mxintegral_title">员工管理</div>
    <div class="item">
       <div class="item-row">
        <label>员工编号</label>
        <input type="txt" placeholder="请输入员工编号" v-model="num" />
      </div>
      <div class="item-row">
        <label>手机号码</label>
        <input type="tel" placeholder="请输入手机号码" v-model="tel" />
      </div>
      <div class="item-row">
        <label>姓名</label>
        <input type="text" placeholder="请输入姓名" v-model="name" />
      </div>
      <div class="item-row">
        <label>岗位</label>
        <input placeholder="请输入岗位" v-model="job" />
      </div>
      <div class="item-row">
        <label>余额</label>
        <input placeholder="请输入余额" v-model="restMoney" />
      </div>
      <div class="item-row">
        <label>生日</label>
        <input placeholder="请输入生日" v-model="birthday" />
      </div>
      <div class="item-row">
        <label>居住地址</label>
        <input placeholder="请输入居住地址" v-model="addres" />
      </div>
      <div class="item-row">
        <label>账号状态</label>
        <van-radio-group v-model="radio" direction="horizontal">
          <van-radio name="1">正常</van-radio>
          <van-radio name="2">冻结</van-radio>
        </van-radio-group>
      </div>
    </div>
    <div class="save-btn">保存</div>
  </div>
</template>

<script>
import goBack from "../components/goback.vue";
export default {
  data() {
    return {
      num:'',
      tel: "",
      name: "",
      job: "",
      restMoney: "",
      birthday: "",
      addres: "",
      radio: "1"
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
.save-btn {
  width: 3.47rem;
  height: 0.44rem;
  line-height: 0.44rem;
  margin: 0.52rem auto;
  text-align: center;
  background: linear-gradient(
    90deg,
    rgba(246, 83, 107, 1) 0%,
    rgba(236, 43, 72, 1) 100%
  );
  border-radius: 3px;
  font-size: 0.14rem;
  font-family: PingFang SC;
  font-weight: 400;
  color: rgba(255, 255, 255, 1);
}
.van-radio-group {
  display: flex;
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
.item-row input {
  background: rgba(255, 255, 255, 1);
  border: 1px solid rgba(112, 112, 112, 1);
  padding: 0.04rem 0.08rem;
  box-sizing: border-box;
  height: 0.3rem;
  line-height: 0.3rem;
}
</style>