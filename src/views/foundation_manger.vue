<template>
  <div>
    <goBack></goBack>
    <div id="Mxintegral_title">资金管理</div>
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
    <div class="item">
      <div class="item-row">
        <label>发展单位名称</label>
        <div>深圳农村商业银行前海湾支行宝成</div>
      </div>
      <div class="item-row">
        <label>联系方式</label>
        <div>55000.00</div>
      </div>
      <div class="item-row">
        <label>分配额度</label>
        <div>55000.00</div>
      </div>
      <div class="item-row">
        <label>可用额度</label>
        <div>55000.00</div>
      </div>
      <div class="item-row">
        <label>订单总额</label>
        <div>55000.00</div>
      </div>
      <div class="item-btn">
          <div @click="orderDetail(1)">查看订单详情</div>
        <div @click="recycle(1)">资金回收</div>
        <div @click="distribution(1)">资金分配</div>
        
      </div>
    </div>
    <van-popup v-model="show" class="pop">
      <div class="pop-up">
        <div class="pop-item">
          <label>发展单位名称</label>
          <div>深圳农村商业银行前海湾支行宝成</div>
          <div class="triangle"></div>
        </div>
        <div class="pop-item">
          <label>分配额度</label>
          <input />
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
import { Dialog } from "vant";
import goBack from "../components/goback.vue";
export default {
  data() {
    return {
      show: false,
      value: "",
      showStart: false,
      showEnd: false,
      minDate: new Date(2016, 0, 1),
      maxDate: new Date(2025, 10, 1),
      currentDate: new Date()
    };
  },
  methods: {
    orderDetail(item) {
        this.$router.push('/jtOrderDetail')
    },
    cancer() {
      this.show = false;
    },
    confirm() {},
    recycle(item) {
      Dialog.confirm({
        message: "您是否要回收资金"
      })
        .then(() => {
          // on confirm
        })
        .catch(() => {
          // on cancel
        });
    },
    distribution(item) {
      this.show = true;
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
  position: relative;
}
#Mxintegral_header {
  height: 1.5rem;
}
.line {
  height: 0.39rem;
  line-height: 0.39rem;
  width: 0.16rem;
  text-align: center;
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
  margin: 0.14rem auto 0;
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
/* 绘制三角形开始 */
.triangle {
  width: 0;
  height: 0;
  border: 0.04rem solid transparent;
  border-top-color: black;
  margin-top: 0.08rem;
}
/* 绘制三角形结束 */
/* 资金分配弹框开始 */
.pop {
  width: 3.46rem;
  padding: 0.4rem 0.14rem 0.18rem 0.14rem;
  box-sizing: border-box;
  background: #fff;
}
.pop-item {
  margin-top: 0.14rem;
  display: flex;
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
.pop-status,
.van-radio-group {
  display: flex;
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
/* 资金分配弹框结束 */
/* 资金管理项开始 */
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
  width: 0.84rem;
  text-align: left;
  margin-right: 0.12rem;
}
.item-row div {
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
  margin-left: 0.12rem;
}
/* 资金管理项结束 */
</style>