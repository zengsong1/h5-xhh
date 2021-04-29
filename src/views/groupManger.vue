<template>
  <div>
    <goBack></goBack>
    <div id="Mxintegral_title">集团管理</div>
    <div class="item-list">
      <router-link to="/client" class="item" tag="div">
          <div>拓客管理</div>
          <div class="jiantou"></div>
      </router-link>
      <router-link to="/staff" class="item" tag="div">
          <div>员工管理</div>
          <div class="jiantou"></div>
      </router-link>
     <router-link to="/foundationManage" class="item" tag="div">
          <div>资金管理</div>
          <div class="jiantou"></div>
      </router-link>
    </div>
  </div>
</template>

<script>
import goBack from "../components/goback.vue";
export default {
  components: {
    goBack
  }
};
</script>

<style scoped>
@import "../style/css/reset.css";
@import "../style/css/common.css";
@import "../style/css/Mxintegral.css";

.item-list {
  width: 3.46rem;
  background: rgba(255, 255, 255, 1);
  border-radius: 3px;
  margin: .12rem auto 0;
}
.item{
    display: flex;
    justify-content: space-between;
    padding: .16rem .12rem;
}
.jiantou{
	width:.08rem;
	height:.08rem;
	border-top:.02rem solid #7D7D7D;
	border-right:.02rem solid #7D7D7D;
	transform:rotate(45deg);
	border-radius: 3px;
	
}
</style>