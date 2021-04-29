<template>

<van-count-down :time="time">
  <template v-slot="timeData">
    <span class="item">{{ timeData.days>10?timeData.days:'0'+timeData.days}}</span>:
    <span class="item">{{ timeData.hours>10?timeData.hours:'0'+ timeData.hours}}</span>:
    <span class="item">{{ timeData.minutes>10? timeData.minutes:'0'+timeData.minutes}}</span>:
    <span class="item">{{ timeData.seconds>10? timeData.seconds:'0'+timeData.seconds}}</span>
  </template>
</van-count-down>

</template>


<script>
import Vue from 'vue';
import { CountDown } from 'vant';
Vue.use(CountDown);
export default {
  name: 'downTime',

  props: { // 接收父组件传递过来的参数,这里传了  结束时间 - 开始时间 - 结束后显示的内容
    time: {
      type: Number
    }, 
  },
  data () {
      return{

      }
  },
}
</script>

<style>


</style>