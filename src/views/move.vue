<template>
  <div>
    <goBack></goBack>
    <div id="Mxintegral_title">迁移</div>
    <van-search v-model="value" placeholder="请输入关键词" background="#F1F1F1" />
    <div class="item">
      <div class="item-row">
        <label>客户名称</label>
        <div>深圳农村商业银行前海湾支行宝成</div>
      </div>
      <div class="item-row">
        <label>联系方式</label>
        <div>都都 15888000365</div>
      </div>
      <div class="unit-btn">
        <div class="unit-item-btn" @click="move(1)">迁移至</div>
      </div>
    </div>
    <van-popup v-model="show" class="pop">
      <div class="pop-up">
        <div class="pop-item">
          <label>迁移至</label>
          <select>
              <option>a</option>
              <option>b</option>
          </select>
        </div>
        <div class="pop-item pop-btn">
          <div class="btn-sure" @click="confirm">确认</div>
          <div class="btn-cancer" @click="cancer">取消</div>
        </div>
      </div>
    </van-popup>
  </div>
</template>

<script>
import goBack from "../components/goback.vue";
export default {
  data() {
    return {
      value: "",
      show:false,
    };
  },
  methods:{
      move(){
          this.show=true
      },
      confirm(){

      },
      cancer(){
          this.show=false
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
select{
flex: 1;
margin-left: .19rem;
height: .3rem;
line-height: .3rem;
}
.unit-btn {
  flex-direction: row-reverse;
  display: flex;
  margin-top: 0.07rem;
  justify-items: self-start;
}
.unit-item-btn {
  height: 0.3rem;
  line-height: 0.3rem;
  width: 0.5rem;
  border: 1px solid rgba(236, 43, 72, 1);
  opacity: 1;
  border-radius: 3px;
  text-align: center;
  color: rgba(236, 43, 72, 1);
}
.pop {
  width: 3.46rem;
  padding: 0.4rem 0.24rem 0.18rem 0.14rem;
  box-sizing: border-box;
  background: #fff;
  
}
.pop-item {
  margin-top: 0.14rem;
  display: flex;
}
.pop-item label{
    font-size:.14rem;
font-family:PingFang SC;
font-weight:bold;
height: .3rem;
line-height: .3rem;
color:rgba(28,28,28,1);
}
.pop-btn {
  display: flex;
  justify-content: space-around;
}
.btn-sure {
  width: 0.83rem;
  height: 0.3rem;
  line-height: 0.3rem;
  text-align: center;
  background: rgba(236, 43, 72, 1);
  border-radius: 3px;
  font-weight: bold;
  color: #fff;
}
.btn-cancer {
  width: 0.83rem;
  height: 0.3rem;
  line-height: 0.3rem;
  text-align: center;
  border: 1px solid rgba(236, 43, 72, 1);
  border-radius: 3px;
  font-weight: bold;
  color: rgba(236, 43, 72, 1);
}
</style>