<template>
    <van-loading type="spinner" />
</template>

<script>
import Vue from 'vue';
import { Loading } from 'vant';
Vue.use(Loading);
export default {
    name:'Loading'
    
}
</script>
<style scoped>
.van-loading__spinner--spinner{
    position: relative;
    left: 1.8rem;
    top: .2rem;
}
</style>