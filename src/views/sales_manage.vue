<template>
  <div>
    <goBack></goBack>
    <div id="Mxintegral_title" class="title">
      <div>销售管理</div>
      <div class="add-new" @click="add">+新增</div>
    </div>
    <div class="money">所有订单总额：￥190800.00</div>
    <div class="unit-top">
      <div class="unit-search">
        <van-search v-model="value" placeholder="请输入关键词" />
      </div>
      <div class="unit-time">
        <div class="unit-start">
          <input placeholder="开始时间" class="start" @focus="showStartPopup" />
        </div>
        <span class="line">-</span>
        <div class="unit-end">
          <input placeholder="结束时间" class="end" @focus="showEndPopup" />
        </div>
      </div>
    </div>
    <div class="unit-item">
      <div class="unit-row">
        <label>销售人员</label>
        <div>125600.00</div>
      </div>
      <div class="unit-row">
        <label>发展客户数量</label>
        <div>125600.00</div>
      </div>
      <div class="unit-row">
        <label>客户订单总额</label>
        <div>125600.00</div>
      </div>
      <div class="unit-btn">
        <div class="unit-item-btn" @click="move(1)">迁移</div>
        <div class="unit-item-btn" @click="freeze(1)">冻结</div>
        <div class="unit-item-btn" @click="delet(1)">删除</div>
        <div class="unit-item-btn" @click="modify(1)">修改</div>
      </div>
    </div>
    <van-popup v-model="show" class="pop">
      <div class="pop-up">
        <div class="pop-item">
          <label>销售人员</label>
          <input />
        </div>
        <div class="pop-item">
          <label>账号</label>
          <input />
        </div>
        <div class="pop-item pop-status">
          <label>密码</label>
          <input type="password" />
        </div>
        <div class="pop-item pop-btn">
          <div class="btn-sure" @click="confirm">确认</div>
          <div class="btn-cancer" @click="cancer">取消</div>
        </div>
      </div>
    </van-popup>
    <van-popup v-model="showStart">
      <van-datetime-picker
        v-model="currentDate"
        type="date"
        title="选择年月日"
        :min-date="minDate"
        :max-date="maxDate"
      />
    </van-popup>
    <van-popup v-model="showEnd">
      <van-datetime-picker
        v-model="currentDate"
        type="date"
        title="选择年月日"
        :min-date="minDate"
        :max-date="maxDate"
      />
    </van-popup>
  </div>
</template>

<script>
import goBack from "../components/goback.vue";
import { Dialog } from "vant";
export default {
  data() {
    return {
      value: "",
      show:false,
      showStart: false,
      showEnd: false,
      minDate: new Date(2016, 0, 1),
      maxDate: new Date(2025, 10, 1),
      currentDate: new Date()
    };
  },
  methods: {
    confirm(){

    },
    cancer(){
        this.show=false
    },
    add() {
        this.show=true
    },
    move() {
        this.$router.push('/move')
    },
    freeze() {
      Dialog.confirm({
        message: "您是否要冻结"
      })
        .then(() => {
          // on confirm
        })
        .catch(() => {
          // on cancel
        });
    },
    delet() {
      Dialog.confirm({
        message: "您是否要删除"
      })
        .then(() => {
          // on confirm
        })
        .catch(() => {
          // on cancel
        });
    },
    modify() {
         this.show=true
    },
    showStartPopup() {
      this.showStart = true;
      this.showEnd = false;
    },
    showEndPopup() {
      this.showStart = false;
      this.showEnd = true;
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
.van-popup {
  position: absolute;
  width: 100%;
}
.line {
  height: 0.39rem;
  line-height: 0.39rem;
  width: 0.16rem;
  text-align: center;
}
.money {
  font-size: 0.16rem;
  font-family: Microsoft YaHei;
  font-weight: 400;
  color: rgba(72, 72, 72, 1);
  padding: 0.15rem 0.17rem 0;
}
.title {
  position: relative;
}
.add-new {
  position: absolute;
  top: 0.12rem;
  right: 0.12rem;
  height: 0.3rem;
  line-height: 0.3rem;
  border: 1px solid rgba(236, 43, 72, 1);
  padding: 0 0.12rem;
  border-radius: 3px;
  color: rgba(236, 43, 72, 1);
}
.van-search {
  border-radius: 0.18rem;
  padding: 0.04rem;
  box-sizing: border-box;
  margin-right: 0.08rem;
}
.unit-top {
  display: flex;
  width: 3.46rem;
  margin: 0.1rem auto 0;
}
.unit-time {
  display: flex;
}
.start,
.end {
  border-radius: 0.1rem;
  text-align: center;
  width: 0.95rem;
  padding: 0.1rem;
  box-sizing: border-box;
}
.unit-item {
  margin-top: 0.14rem;
  background: rgba(255, 255, 255, 1);
  border-radius: 3px;
  padding: 0.07rem 0.27rem 0.14rem 0.13rem;
  box-sizing: border-box;
  width: 3.46rem;
  margin: 0.14rem auto;
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
  margin-left: 0.14rem;
}
.unit-row {
  display: flex;
  margin-top: 0.07rem;
}
.unit-btn {
  flex-direction: row-reverse;
  display: flex;
  margin-top: 0.07rem;
  justify-items: self-start;
}
.unit-row label {
  font-size: 0.14rem;
  width: 0.84rem;
  text-align: left;
  margin-right: 0.12rem;
}
.unit-row div {
  flex: 1;
  font-size: 0.14rem;
  font-family: PingFang SC;
  font-weight: 400;
  color: rgba(12, 12, 12, 1);
}
.pop {
  width: 3.46rem;
  padding: 0.4rem 0.24rem 0.18rem 0.14rem;
  box-sizing: border-box;
  background: #fff;
}
.pop-item {
  margin-top: 0.14rem;
}
.pop-item label {
  display: inline-block;
  width: 0.84rem;
  text-align: right;
  color: rgba(28, 28, 28, 1);
  margin-right: 0.11rem;
}
.pop-item input {
  background: rgba(255, 255, 255, 1);
  border: 1px solid rgba(112, 112, 112, 1);
  border-radius: 3px;
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