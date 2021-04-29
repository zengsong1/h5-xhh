<template>
<van-swipe :autoplay="3000" >
  <van-swipe-item  v-for="(item, index) in bannerUrl" :key="index" @click="go(item)">
    <img :src="item.PICTURE?item.PICTURE:item.URL" @click="getimg(index)"/>
  </van-swipe-item>
</van-swipe>
</template>
<script>
import { Swipe, SwipeItem } from 'vant';
import { ImagePreview } from 'vant';
export default {
    props: {
    bannerUrl: {
      type: Array
    }
  },
  data(){
    return{
      imgUrl:[]
    }
  },
  watch:{
      bannerUrl: function(newVal,oldVal){
      this.imgUrl=[]
      newVal.forEach( item=> {
        this.imgUrl.push(item.URL)
      });
        return this.imgUrl  
      }
  },
  methods:{
    getimg(index){
      if(this.imgUrl!=''&&this.$route.path!='/index'){
        ImagePreview({
          images:this.imgUrl,
          showIndex:true,
          loop:false,
          startPosition:index
        })
      }
    },
    go(item){
      if(item.AD_URL){ 
         let urlType=(item.AD_URL).split('/')[1].split('.')[0] 
      let urlparameter=(item.AD_URL).split('?')[1] 
      if(urlType == 'active-2021dw'){
        this.$router.push({
          path: "/active-2021dw"
        })
      }
      if(urlType == 'gift_custom'){ //banner 图 跳转
          this.$router.push({
							path: '/search',
							query: {
								GOODS_POSITION:2
								}
					})
      }
      if(urlType == 'jt_shop'){ //banner 图 跳转
          this.$router.push('/search?GOODS_TYPE_ID=983')
      }
      if(urlType == 'search'){ //banner 图 跳转
          this.$router.push('/search?'+urlparameter)
      }
      if(urlType == 'gift_topic'){ //banner 图 跳转
          this.$router.push('/festival')
      }
      if(urlType == 'start_school'){ //banner 图 跳转
          this.$router.push('/startSchool')
      }
      if(urlType == 'national'){ //banner 图 跳转
        this.$router.push('/national')
      }
      if(urlType == 'mid-autumn'){ //banner 图 跳转
        this.$router.push('/midAutumn')
      }
      if(urlType == 'doubleNinth'){ //banner 图 跳转
        this.$router.push('/doubleNinth')
      }
      if(urlType == 'calendar'){ //banner 图 跳转
        this.$router.push('/calendar')
      }
      if(urlType == 'envelope'){ //banner 图 跳转
        this.$router.push('/envelope')
      }
      if(urlType == 'year'){ //banner 图 跳转
        this.$router.push('/year')
      }
      if(urlType == 'umbrella'){ //banner 图 跳转
        this.$router.push('/umbrella')
      }
       if(urlType == 'custom_detail'){ //banner 图 跳转
          this.$router.push('/custom_detail?'+urlparameter)
      }
      if(urlType == 'detail'){ //banner 图 跳转
          this.$router.push('/detail?'+urlparameter)
      }
    }
   }
  },
  components:{
    [Swipe.name]:Swipe,
    [SwipeItem.name]:SwipeItem
  }

}
</script>
<style>
.van-swipe__indicator--active{
  background: #ca435a;
}
</style>