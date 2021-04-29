<template>
    <div>
        <!--头部搜索-->
		<div id="header_search1">
			<router-link to="initialSearch"><div class="header_search_inner">
				<img src="../img/home/search.png">
				<input type="text" placeholder="搜索商品"/>
			</div></router-link>
		</div>
		<!--侧边导航-->
		<div style="display: flex;">
		<div id="side_nav" :style="{height:scrollerHeight}">
			<ul>
				<li v-for="(item,index) in typeList" :key="index" :class="{activenav: curType === index}" @click="changeType(index)">{{item.TYPE_NAME |ellipsis}}</li>
				
			</ul>
		</div>
		<!--商品分类-->
		<div id="category" :style="{height:scrollerHeight}">
			<div class="category_inner" v-for="(item,index) in sonTypeList.subGoodsType" :key="index">
				<h1>{{item.TYPE_NAME}}</h1>
				<div class="category_inner_0">
				<div class="category_inner_1" v-for="(item2,index2) in item.subGoodsType" :key="index2" @click="gosearch(item2)">
					<div class="category_inner_1_details" >
						<img v-lazy="item2.TYPE_IMAGE">							
				    </div>
					<p>{{item2.TYPE_NAME |ellipsis2}}</p>
				</div>
				</div>
			</div>
		</div>
		</div>
		<!--尾部-->
		<div id="footer">
			<div class="footer-inner">
					<router-link to="/"><span><i><img src="../img/home/标签栏-未选中/首页@2x.png"></i>首页</span></router-link>
					<span class="active"><i><img src="../img/home/标签栏-选中/分类@2x.png"></i>分类</span>
					<!-- <span><i><img src="../img/home/标签栏-未选中/商城2.png"></i>集团商城</span> -->
					<router-link to="shoppingcart"><span><i><img src="../img/home/标签栏-未选中/购物车@2x.png"></i>购物车</span></router-link>
					<router-link to="my"><span><i><img src="../img/home/标签栏-未选中/个人中心@2x.png"></i>我的</span></router-link>
			</div>
		</div>
    </div>
</template>
<script>
export default {
    data(){
        return{
            typeList:[],
            curType:0,
            subGoodsType:{},
            sonTypeList:[]
        }
	},
	computed:{
		scrollerHeight: function() {
     		 return ((window.clientHeight || document.documentElement.clientHeight || document.body.clientHeight)*0.82).toFixed(2)+ 'px';
   		 }
	},
    methods:{
        getData(){ 
			var url ='auditGroup/Api/typeList.do';
			let params = new URLSearchParams();
                params.append('TOP_ID', window.userInfo.TOP_ID);
				this.$axios({
				method: 'post',
				url:url,
				data:params
				}).then((res=>{
				    if(res.data.status==0) {
                        let data=res.data.content
                        this.typeList=data.typeList
                        this.sonTypeList=this.typeList[0] 
					}
				}))
        },
        changeType(index){
            this.curType = index;
            this.sonTypeList=this.typeList[index];
            window.scroll(0, 0);      
		},
		gosearch(item){
			if(item!=''){
					if(item.isCustom=='true' &&item.typeLevel=='3'){
					this.$router.push({
						path: '/search',
						query: {
						GOODS_TYPE_ID: item.GOODS_TYPE_ID,
						isCustom:true,
						typeLevel:item.typeLevel
						}
					})
				}else{
					this.$router.push({
						path: '/search',
						query: {
						GOODS_TYPE_ID: item.GOODS_TYPE_ID
						}
					})
				}
			}
		},
    },
    created(){
		this.getData();
	},
    filters: {
    ellipsis (value) {
      if (!value) return ''
      if (value.length > 7) {
        return value.slice(0,7) + '.. '
      }
      return value
        },
    ellipsis2 (value) {
      if (!value) return ''
      if (value.length > 4) {
        return value.slice(0,4) + '.. '
      }
      return value
		},
	}
}
//百度数字统计
var _hmt = _hmt || [];
(function() {
  var hm = document.createElement("script");
  hm.src = "https://hm.baidu.com/hm.js?1678150ae4fb32e8f156a085feb56d7d";
  var s = document.getElementsByTagName("script")[0]; 
  s.parentNode.insertBefore(hm, s);
})();
</script>
<style scoped>
@import '../style/css/reset.css';
@import '../style/css/common.css';
@import '../style/css/sort.css';
</style>