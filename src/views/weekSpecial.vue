<template>
  <div>
    <!--搜索头部-->

    <div id="header_search">
      <goBack></goBack>
      <div class="header_search_inner">
        <img src="../img/home/search.png" />
        <form @submit.prevent="formSubmit" action="javascript:return true">
          <input
            type="search"
            v-model="content"
            @keydown="search($event)"
            :placeholder="GOODS_NAME"
          />
        </form>
      </div>
    </div>
    <!-- 商品信息 -->
    <div id="main_commodity">
      <div
        class="main_commodity_inner inner-item" style="margin-top:.14rem"
        v-for="(item,index) in goodList"
        :key="index"
        @click="goDetail(item)"
      >
      <div class="title-item">{{item.SPECIAL_OFFER_NAME}}</div>
        <div class="main_commodity_inner_left ">
          <img v-lazy="item.INDEX_PICTURE" />
        </div>
        <div class="main_commodity_inner_right">
          <p>{{item.GOODS_NAME}}</p>
          <span>￥{{item.ACTIVITY_PRICE.toFixed(2)}}</span>
        </div>
      </div>
    </div>
    <img
        src="../img/home/icon/dingbu1.png"
        style=" position: fixed;right: .15rem;top: 3rem;height: .4rem;"
        v-show="isFixed"
        @click="checktop"
      />
      <Loading v-if="currentPage!=page"></Loading>
        <div class="load-more" v-show="currentPage==page">别看了,没有了</div>
  </div>
</template>

<script>
import Loading from'../components/loading'
import goBack from "../components/goback";
import {Toast} from 'vant'
export default {
  data() {
    return {
      content: "",
      GOODS_NAME: "商品名称",
      goodList: [],
      currentPage:1,
      page:1,
      isFixed:false
    };
  },
  components: {
    goBack,
    Loading
  },
  methods: {
    //返回顶部
    checktop(){
      document.documentElement.scrollTop = 0;
    },
    search(ev){
		    	if(ev.keyCode == 13) {  //键盘回车的编码是13
		            if(this.content!=''){
						this.$router.push({
							path: '/search',
							query: {
								GOODS_NAME: this.content
								}
							})
						// location.reload()
					}else{
						Toast('请输入关键字')
					}
		        }
            },
        formSubmit () { //阻止from默认提交事件
		        return false
			  },
    goDetail(item) {
       if (item.GOODS_POSITION == 0) {
        this.$router.push({
          path: "/detail",
          query: {
            id: item.GROUP_GOODS_ID
          }
        });
      } else if (item.GOODS_POSITION == 1) {
        this.$router.push({
          path: "/detail",
          query: {
            id: item.GROUP_GOODS_ID
          }
        });
      }
      else{
        this.$router.push({
          path: "/detail",
          query: {
            id: item.GROUP_GOODS_ID
          }
        });
      } 
      // else if (item.GOODS_POSITION == 2) {
      //   this.$router.push({
      //     path: "/custom_detail",
      //     query: {
      //       id: item.GROUP_GOODS_ID
      //     }
      //   });
      // }
    },
    weekSpecList(){
      var url='group/Api/weekGoodsList.do'
      let params=new URLSearchParams()
    let userInfo=JSON.parse(localStorage.getItem('userInfo'))
     params.append("TOP_ID", userInfo.TOP_ID);
      params.append("token",userInfo.token);
      params.append("currentPage", this.currentPage);
      this.$axios({
        method:'post',
        url:url,
        data:params
      }).then((res)=>{
        if(res.data.status=='0'){
          this.page = res.data.content.pages;
          this.currentPage=res.data.content.currentPage*1
          if (this.currentPage <= res.data.content.pages) {
            this.goodList.push(...res.data.content.goodsList);
          }
        }
        
      })
    },
    handleScroll () {
        let scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop
            if(scrollTop>=55){
                this.isFixed=true;
            }else{
                this.isFixed=false;    
            }
        },
  },
  mounted(){
    this.weekSpecList()
    var that=this
    window.onscroll = function() {
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
          if (scrollTop + windowHeight+90 > scrollHeight) {
            if(that.currentPage <that.page){
              that.currentPage++
              that.weekSpecList()
            }
            that.isFixed = true;
          }
        };
    window.addEventListener("scroll", this.handleScroll); //固定导航
  }
};
</script>

<style scoped>
@import "../style/css/common.css";
@import "../style/css/reset.css";
@import "../style/css/commoditypageSales.css";
.inner-item{
position: relative;
border-radius: 5px;
}
.load-more{
    text-align: center;
    font-size: .14rem;
    line-height: .6rem;
}
.title-item{
    position: absolute;
    top: 0;
    left: 0;
    color:rgba(255,255,255,1);
    background:rgba(236,43,72,1);
    font-size: .1rem;
    padding: 0 .1rem;
    height: .16rem;
    line-height: .16rem;
    border-radius:5px 0px 5px 0px;
}
</style>