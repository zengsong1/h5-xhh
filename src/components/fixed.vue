<template>
  <div class="fixed">
    <router-link to="index">
      <img src="../img/home/icon/shouye.png" style="height: 0.4rem" />
    </router-link>
    <img
      src="../festival/cart.png"
      style="margin-top: 0.2rem; height: 0.4rem; border-radius: 50%"
      @click="goShopCart"
    />
    <img
      src="../img/home/icon/dingbu1.png"
      style="margin-top: 0.2rem; height: 0.4rem"
      v-show="isFixed"
      @click="checktop"
    />
  </div>
</template>

<script>
export default {
  data() {
    return {
      isFixed: false,
    };
  },
  mounted() {
    window.onscroll = function () {
      //变量scrollTop是滚动条滚动时，距离顶部的距离
      var scrollTop =
        document.documentElement.scrollTop || document.body.scrollTop;
      //变量windowHeight是可视区的高度
      var windowHeight =
        document.documentElement.clientHeight || document.body.clientHeight;
      //变量scrollHeight是滚动条的总高度
      var scrollHeight =
        document.documentElement.scrollHeight || document.body.scrollHeight;
      //滚动条到底部的条件
      if (scrollTop + windowHeight == scrollHeight) {
        this.isFixed = true;
      }
    };
    window.addEventListener("scroll", this.handleScroll); //固定导航
  },
  methods:{
      handleScroll() {
      let scrollTop =
        window.pageYOffset ||
        document.documentElement.scrollTop ||
        document.body.scrollTop;
      if (scrollTop >= 100) {
        this.isFixed = true;
      } else {
        this.isFixed = false;
      }
    },
    checktop() {
      window.pageYOffset = 0;
      document.documentElement.scrollTop = 0;
      document.body.scrollTop = 0;
    },
    goShopCart() {
      this.$router.push({
        path: "/shoppingcart",
      });
    },
  }
};
</script>

<style scoped>
.fixed {
  width: 0.4rem;
  height: 1.5rem;
  position: fixed;
  right: 0.1rem;
  top: 50%;
  transform: translateY(-50%);
  
}
.fixed img {
    display: block;
  }
</style>