<template>
  <div>
    <goBack></goBack>
    <div id="Mxintegral_title" class="title">
      <div>员工管理</div>
      <div class="add-new" @click="add">新增</div>
    </div>
      <van-search v-model="value" placeholder="请输入关键词" background="#F1F1F1" />
      <div class="item" >
        <div class="item-row">
          <label>员工编号</label>
          <div>axkjcx01</div>
        </div>
        <div class="item-row">
          <label>手机号码</label>
          <div>深圳农村商业银行前海湾支行宝成</div>
        </div>
        <div class="item-row">
          <label>姓名</label>
          <div>55000.00</div>
        </div>
        <div class="item-row">
          <label>岗位</label>
          <div>55000.00</div>
        </div>
        <div class="item-row">
          <label>余额</label>
          <div>55000.00</div>
        </div>
        <div class="item-row">
          <label>生日</label>
          <div>55000.00</div>
        </div>
        <div class="item-row">
          <label>居住地址</label>
          <div>55000.00</div>
        </div>
        <div class="item-row">
          <label>账号状态</label>
          <div>正常</div>
        </div>
        <div class="item-btn">
          <div @click="editor(1)">编辑</div>
        </div>
      </div>
  </div>
</template>

<script>
import goBack from "../components/goback.vue";
export default {
  data() {
    return {
      value: "",
     
    };
  },
  methods: {
    editor(item) {
       this.$router.push('/staffEditor') 
    },
    add(){
         this.$router.push('/staffEditor') 
    }
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

.title {
  position: relative;
}
.add-new {
  position: absolute;
  top: 0.12rem;
  right: 0.12rem;
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
    height: .3rem;
    line-height: .3rem;
  width: 0.84rem;
  text-align: left;
  margin-right: 0.12rem;
}
.item-row input{
    background:rgba(255,255,255,1);
border:1px solid rgba(112,112,112,1);
padding: .04rem .08rem;
box-sizing: border-box;
 height: .3rem;
    line-height: .3rem;
}
.item-row div {
     height: .3rem;
    line-height: .3rem;
  flex: 1;
  font-family: PingFang SC;
  font-weight: 400;
  color: rgba(12, 12, 12, 1);
}
.item-btn {
  display: flex;
  flex-direction: row-reverse;
  justify-items: self-start;
}
.item-btn div {
  margin-top: 0.14rem;
  border: 1px solid rgba(236, 43, 72, 1);
  border-radius: 3px;
  font-size: 0.14rem;
  font-family: PingFang SC;
  font-weight: bold;
  color: rgba(236, 43, 72, 1);
  height: 0.3rem;
  line-height: 0.3rem;
  padding: 0 0.13rem;
}
.item-btn div:nth-of-type(2) {
  margin-right: 0.12rem;
}
</style>