<template>
  <div class="header-back" @click="goBack"></div>
</template>
<script>
export default {
  methods: {
    goBack () {
      this.$router.go(-1);
    }
  }
}
</script>
<style>
.header-back {
  width: 0.08rem;
  height: .12rem;
  background: url(../img/home/icon/jt_right.png) no-repeat;
  background-size: contain;
  position: absolute;
  top: 0.2rem;
  left: 0.2rem;
  z-index: 100;
}
</style>
