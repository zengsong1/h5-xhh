<template>
    <div>
         <!--搜索头部--> 
		<div id="header_search">
             <goBack></goBack>
		  <div class="header_search_inner">
			<img src="../img/home/search.png" />
            <form @submit.prevent="formSubmit" action="javascript:return true">
                 <input type="search" v-model="content" @focus="handleFocus" @keydown="search($event)" :placeholder="GOODS_NAME"/>
            </form>
			<i><img src="../img/home/icon/组 202@2x.png" v-show="isType"  @click="checkType"><img src="../img/home/icon/组 201@2x.png" v-show="!isType" @click="checkType1"></i>
		 </div>
		</div>
		<!--销售人气导航-->
	    <div id="main_nav" :class="{isFixed:isFixed}" v-show="goodListshow">
	    	<!-- <div class="main_nav_inner">
	    		<ul>
	    			<li :class="{activecolor: curType ==item.id}" v-for="(item,index) in mainNav" :key="index" @click="changeType(item)">{{item.name}}</li>
	    		</ul> 
                
	    	</div> --> 
                <van-tabs  @change="changeType" v-model="defaultTyoe" @click="clickType"> 
                    <div class="ooss" slot="nav-right"> 
                        <van-icon name="arrow-up  " :class="{activecolor:curType=='价格TOP'}"/>
                        <van-icon name="arrow-down " :class="{activecolor:curType=='价格DOWN'}"/>
                    </div>
                     
			        <van-tab v-for="(item,index) in mainNav" :key="index" :title="item.name" > 
                         
                    </van-tab>
			    </van-tabs>
	    </div>
	    <!--商品信息-->
	    <div id="main_commodity" v-show="isType" >
	    	<div  class="main_commodity_inner" v-for="(item,index) in goodList" :key="index" @click="goDetail(item)" >
	    		<div class="main_commodity_inner_left">
	    			<img v-lazy="item.INDEX_PICTURE">
	    		</div>
	    		<div class="main_commodity_inner_right">
	    			<p>{{item.GOODS_NAME}}</p>
	    			<span>￥{{item.CURRENT_PRICE|numFilter}}</span>
	    		</div>
	    	</div>
	    </div>
        <div id="main_commodity1" v-show="!isType"> <!-- 展示不同的商品列表 -->
	    	<div class="main_commodity_inner1" v-for="(item,index) in goodList" :key="index" @click="goDetail(item)">
	    		<div class="main_commodity_inner_page1">
	    			<div class="main_commodity_inner_page_top1">
	    				<img v-lazy="item.INDEX_PICTURE">
	    			</div>
	    			<div class="main_commodity_inner_page_bottom1">
	    				<p>{{item.GOODS_NAME}}</p>
	    				<span>￥{{item.CURRENT_PRICE|numFilter}}</span>
	    			</div>
	    		</div>
	        </div>
        </div>
        <div class="fuzhu">
            <router-link to="index"><img src="../img/home/icon/shouye.png" style=" position: fixed;right: .15rem;top: 5rem;height: .4rem;"/></router-link>
            <img src="../img/home/icon/dingbu1.png" style=" position: fixed;right: .15rem;top: 4.4rem;height: .4rem;" v-show="isFixed" @click="checktop"/>   
        </div>
        <div class="goodlistNO" v-show="!goodListshow"> 
            <img src="../img/home/ssqs@2x.png" >
            <p>没有找到符合条件的商品</p>
        </div>
        
        <!-- <Loading v-if="currentPage!=pageNum && goodListshow==true"></Loading> -->
        <div class='sk-circle-bounce' v-if="isLoading">
            <div class='sk-child sk-circle-1'></div>
            <div class='sk-child sk-circle-2'></div>
            <div class='sk-child sk-circle-3'></div>
            <div class='sk-child sk-circle-4'></div>
            <div class='sk-child sk-circle-5'></div>
            <div class='sk-child sk-circle-6'></div>
            <div class='sk-child sk-circle-7'></div>
            <div class='sk-child sk-circle-8'></div>
            <div class='sk-child sk-circle-9'></div>
            <div class='sk-child sk-circle-10'></div>
            <div class='sk-child sk-circle-11'></div>
            <div class='sk-child sk-circle-12'></div>
        </div>
        <div class="load-more" v-show="currentPage==pageNum">别看了,没有了</div>
    </div>
</template>
<script>
import Loading from'../components/loading'
import goBack from '../components/goback.vue'
import { Toast,Tab, Tabs,Icon } from 'vant';
// import { mapState } from 'vuex'
export default {
    data(){
        return{
            isType:true,
            defaultTyoe:'',
            content:'',
            goodList:[],
            goodListshow:true,//有商品时true
            mainNav:[
                { id: 'qb', name: '全部'},
                { id: 'xl', name: '销量'},
				{ id: 'rq', name: '人气'},
				{ id: 'sxsj', name: '上新时间'},
                { id: 'jg', name: '价格'},
            ],
            GOODS_NAME:'',
            currentPage:1,
            isFixed:false,
            curType:undefined,
            SALES_VOLUME:false,
            FAVORITE_NUMBER:false,
            CREATE_DATE:'',
            PRICE_UP_DOWN:undefined,
            pageNum:'',
            isLoading:true
        }
    },
    computed:{
        // ...mapState('detail', ["CREATEDATE"]), //新品推荐跳转
        // ...mapState('detail', ["GOODS_POSITION"]) //GOODS_POSITION为0，1，2
    },
    watch:{
        $route(to,from){ 
            if(from.path=='/initialSearch'||from.path=='/sort'||from.path=='/index'){
               if(window.location.pathname=='/search'){
                        this.getgoodsList1()
                  }
               }     
        }
    },
    methods:{
        handleFocus(){
            if(this.$route.query.GOODS_TYPE_ID||this.$route.query.isActivity){
                this.$router.replace({
                path: "/initialSearch"
            });
            }else{
                this.$router.go(-1)
            }
        },
        checkType(){
            this.isType=false
        },
        checkType1(){
            this.isType=true
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
						location.reload()
					}else{
						Toast('请输入关键字')
					}
		        }
            },
        formSubmit () { //阻止from默认提交事件
		        return false
			  },
        getgoodsList(){
            let url ='group/Api/goodsList.do';
            let GOODS_NAME = this.$route.query.GOODS_NAME;
            this.GOODS_NAME = this.$route.query.GOODS_NAME;
            let GOODS_TYPE_ID = this.$route.query.GOODS_TYPE_ID
            this.CREATE_DATE=this.$route.query.CREATE_DATE
            let TYPE_ALL = this.$route.query.TYPE_ALL
            let types=this.$route.query.types
            let GOODS_POSITION=this.$route.query.GOODS_POSITION
                let params = new URLSearchParams();
                params.append('TOP_ID', window.userInfo.TOP_ID);
                params.append('token',window.userInfo.token);
				if(GOODS_TYPE_ID){
				params.append('GOODS_TYPE_ID', GOODS_TYPE_ID);
                }
                if(types){
                params.append('types', types); 
                }
                if(TYPE_ALL!=undefined){
				params.append('TYPE_ALL', TYPE_ALL);
                }
                if(GOODS_POSITION){
				params.append('GOODS_POSITION', GOODS_POSITION);
                }
                if(GOODS_NAME){
				params.append('GOODS_NAME', GOODS_NAME);
                }
                if(this.SALES_VOLUME){
				params.append('SALES_VOLUME', this.SALES_VOLUME);
                }
                if(this.FAVORITE_NUMBER){
				params.append('FAVORITE_NUMBER', this.FAVORITE_NUMBER);
                }
                if (this.PRICE_UP_DOWN != undefined) {
                    if (this.PRICE_UP_DOWN) params.append("PRICE_UP",true)
                    else params.append("PRICE_DOWN",true)
                }
                if(this.currentPage){
				params.append('currentPage', this.currentPage);
                }
                if(this.CREATE_DATE){
				params.append('CREATE_DATE', this.CREATE_DATE);
                }
                
				this.$axios({
				method: 'post',
                url:url,
                data:params
				}).then((res)=>{
					if(res.data.status==0) {
                        this.pageNum=res.data.content.pages
                        if(this.currentPage<=res.data.content.pages){
                        this.goodList.push(...res.data.content.goodsList)
                        }
                        if(res.data.content.goodsList!=''){
                            this.goodListshow=true
                            this.isLoading=false
                        }else{
                            this.goodListshow=false
                            this.isLoading=false
                        }
					}
				})
        },
        getgoodsList1(){ //点击 销售 人气调的方法
            let url ='group/Api/goodsList.do';
            let GOODS_NAME = this.$route.query.GOODS_NAME;
            this.GOODS_NAME = this.$route.query.GOODS_NAME;
            let GOODS_TYPE_ID = this.$route.query.GOODS_TYPE_ID
            let isCustom = this.$route.query.isCustom
             let typeLevel = this.$route.query.typeLevel
            let TYPE_ALL = this.$route.query.TYPE_ALL
            let GOODS_POSITION=this.$route.query.GOODS_POSITION
            let types=this.$route.query.types

         

                let params = new URLSearchParams();
                params.append('TOP_ID', window.userInfo.TOP_ID);
                params.append('token',window.userInfo.token);
				if(GOODS_TYPE_ID){
				params.append('GOODS_TYPE_ID', GOODS_TYPE_ID);
                }
                if(isCustom){
				params.append('isCustom', isCustom);
                }
                if(typeLevel){
				params.append('typeLevel', typeLevel);
                }
                if(TYPE_ALL!=undefined){
				params.append('TYPE_ALL', TYPE_ALL);
                }
                if(GOODS_POSITION){
				params.append('GOODS_POSITION', GOODS_POSITION);
                }
                if(types){
                params.append('types', types); 
                }
                if(GOODS_NAME){
				params.append('GOODS_NAME', GOODS_NAME);
                }
                if(this.SALES_VOLUME){
				    params.append('SALES_VOLUME', this.SALES_VOLUME);
                }
                if(this.FAVORITE_NUMBER){
				params.append('FAVORITE_NUMBER', this.FAVORITE_NUMBER);
                }
                if (this.PRICE_UP_DOWN != undefined) {
                    if (this.PRICE_UP_DOWN) params.append("PRICE_UP",true)
                    else params.append("PRICE_DOWN",true)
                }
				if(this.currentPage){
                params.append('currentPage', this.currentPage);
                } 
                if(this.CREATE_DATE){
				    params.append('CREATE_DATE', this.CREATE_DATE);
                }
                
                
				this.$axios({
				method: 'post',
                url:url,
                data:params
				}).then((res)=>{
					if(res.data.status==0) {
                        let val=res.data.content.searchData
                        document.title=val.goodsName?val.goodsName:val.TYPE_NAME?val.TYPE_NAME:''
                        this.pageNum=res.data.content.pages
                        this.goodList=res.data.content.goodsList
                        if(res.data.content.goodsList!=''){
                            this.goodListshow=true
                            this.isLoading=false
                        }else{
                            this.goodListshow=false
                            this.isLoading=false
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
        clickType(index,title){
            if(title=='价格'){
                switch(this.curType) {
                    case undefined:
                        this.curType='价格TOP'
                        break;
                    case '价格TOP':
                        this.curType='价格DOWN'
                        this.SALES_VOLUME=false;
                        this.FAVORITE_NUMBER=false;
                        this.CREATE_DATE=false;
                        this.PRICE_UP_DOWN=false;
                        this.currentPage=1;
                        document.documentElement.scrollTop=0;
                        document.body.scrollTop=0;
                        this.getgoodsList1();
                        break;
                    case '价格DOWN':
                        this.curType='价格TOP'
                        this.SALES_VOLUME=false;
                        this.FAVORITE_NUMBER=false;
                        this.CREATE_DATE=false;
                        this.PRICE_UP_DOWN=true;
                        this.currentPage=1;
                        document.documentElement.scrollTop=0;
                        document.body.scrollTop=0;
                        this.getgoodsList1();
                        break;   
                }
            }else{
                this.curType=undefined
            }
        },
         changeType(index,title){
            switch(title) {
                case '全部':
                this.PRICE_UP_DOWN=undefined;
                this.CREATE_DATE=false;
                this.FAVORITE_NUMBER=false; 
                this.SALES_VOLUME=false; //点击销售this.FAVORITE_NUMBER为true; 传参
                document.documentElement.scrollTop=0;
                document.body.scrollTop=0;
                this.currentPage=1;
                this.getgoodsList1();
                break;
                case '销量':
                this.PRICE_UP_DOWN=undefined;
                this.CREATE_DATE=false;
                this.FAVORITE_NUMBER=false; 
                this.SALES_VOLUME=true; //点击销售this.FAVORITE_NUMBER为true; 传参
                document.documentElement.scrollTop=0;
                document.body.scrollTop=0;
                this.currentPage=1;
                this.getgoodsList1();
                break;
                case '人气':
                this.PRICE_UP_DOWN=undefined;
                this.CREATE_DATE=false;
                this.SALES_VOLUME=false;
                this.FAVORITE_NUMBER=true;
                this.currentPage=1;
                document.documentElement.scrollTop=0;
                document.body.scrollTop=0;
                this.getgoodsList1();
                break;
                case '上新时间':
                this.PRICE_UP_DOWN=undefined;
                this.SALES_VOLUME=false;
                this.FAVORITE_NUMBER=false; 
                this.CREATE_DATE=true;
                this.currentPage=1;
                document.documentElement.scrollTop=0;
                document.body.scrollTop=0;
                this.getgoodsList1();
                break;
                case '价格':
                this.SALES_VOLUME=false;
                this.FAVORITE_NUMBER=false;
                this.CREATE_DATE=false;
                this.PRICE_UP_DOWN=true;
                this.currentPage=1;
                document.documentElement.scrollTop=0;
                document.body.scrollTop=0;
				this.getgoodsList1();
                break;
            }			
        },
        checktop(){
            document.documentElement.scrollTop = 0;
        },
        goDetail(item){
			if(item.GOODS_POSITION==0){
				this.$router.push({
				path: '/detail',
				query: {
					id: item.GROUP_GOODS_ID
					}
				})
			}else if(item.GOODS_POSITION==1){
				this.$router.push({
				path: '/detail',
				query: {
					id: item.GROUP_GOODS_ID
					}
				})
			}
            else {
                this.$router.push({
				path: '/detail',
				query: {
					id: item.GROUP_GOODS_ID
					}
				})
            }
            // else if(item.GOODS_POSITION==2){
			// 	this.$router.push({
			// 	path: '/custom_detail',
			// 	query: {
			// 		id: item.GROUP_GOODS_ID
			// 		}
			// 	})
			// }
		}
    },
    created(){
        if(this.$route.query.CREATE_DATE) {
             this.CREATE_DATE = this.$route.query.CREATE_DATE
             this.defaultTyoe = 3
         }
         if(this.$route.query.SALES_VOLUME) {
             this.SALES_VOLUME = this.$route.query.SALES_VOLUME
              this.defaultTyoe = 1
         } 
          
         this.getgoodsList1()   
    },
    beforeRouteEnter(to,from,next){
        
        // 从首页过来的不做缓存
        if(from.path == "/index") {
            to.meta.keepAlive = false
        }
        else {
            to.meta.keepAlive = true
        } 
        next()
    },
    beforeRouteLeave(to, from, next) { 
        if(to.path == "/index") {
            from.meta.keepAlive = false
        }
        else {
            from.meta.keepAlive = true
        } 
        next();
    },
    activated(){
        let _this = this;
        window.onscroll = function(){
        //变量scrollTop是滚动条滚动时，距离顶部的距离
        var scrollTop = document.documentElement.scrollTop||document.body.scrollTop;
            //变量windowHeight是可视区的高度
            var windowHeight = document.documentElement.clientHeight || document.body.clientHeight;
            //变量scrollHeight是滚动条的总高度
        var scrollHeight = document.documentElement.scrollHeight||document.body.scrollHeight;
        //滚动条到底部的条件
        if(scrollTop+windowHeight+90>scrollHeight){
            if(_this.currentPage<_this.pageNum){                 
                if(window.location.pathname=='/search'){
                    _this.currentPage++
                    _this.getgoodsList()
                    }
                }
            }
        }                       
        window.addEventListener('scroll', this.handleScroll) //固定导航 
    },
    deactivated(){
        this.currentPage='1'
    },
    filters: {
	numFilter (value) {
         // 截取当前数据到小数点后两位
         if(value!= undefined){
    	let realVal = parseFloat(value).toFixed(2)
    	return realVal
          }
        }	
    },
    components:{
        Loading,
        goBack,
        [Tab.name]: Tab,
        [Tabs.name]: Tabs,
        [Icon.name]: Icon,
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
@import '../style/css/common.css';
@import '../style/css/reset.css';
@import '../style/css/commoditypageSales.css';
#main_nav >>> .van-icon-arrow-up{  
    display: inline-block; 
    color: #646566;
}

#main_nav >>> .van-icon-arrow-down{ 
     color: #646566;
      
}
#main_nav{
    position: relative;
    height: 100%;
}
.ooss{
    position: absolute; 
    right: 0.1rem;
    top: 0;   
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 44px;
}
.ooss i {
    font-size: 0.12rem;
}
.isFixed{
    position:fixed;
    left: 0;
    top:0;
    z-index:999;
  }
/*商品信息*/
#main_commodity1{
	width: 3.42rem;
	margin: .16rem auto 0 auto;
	display: flex;
    justify-content: space-between;
        flex-wrap: wrap;
}
#main_commodity1 .main_commodity_inner1{
	display: flex;
	justify-content: space-between;
	flex-wrap: wrap;
}
#main_commodity1 .main_commodity_inner_page1{
	width: 1.64rem;
	height: 2.07rem;
	border-radius:.03rem;
	background: #FFFFFF;
	margin-bottom: .14rem;
}
#main_commodity1 .main_commodity_inner_page_top1{
	width: 1.64rem;
	height: 1.45rem;
}
#main_commodity1 .main_commodity_inner_page_top1 img{
    width: 1.64rem;
    height: 1.45rem;
    margin: 0 auto;
    display: block;
}
#main_commodity1 .main_commodity_inner_page_bottom1{
	height: .62rem;
	display:flex;
	flex-direction: column;
	width: 1.42rem;
	margin: 0 auto;
}
#main_commodity1 .main_commodity_inner_page_bottom1 p{
	width:1.42rem;
	font-size:.12rem;
    color:#242424;
    overflow: hidden;
    -webkit-line-clamp: 2;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    line-height: .2rem;
}
#main_commodity1 .main_commodity_inner_page_bottom1 span{
	width:.49rem;
	height:.22rem;
	font-size:.16rem;
	font-weight:bold;
	color:#EC2B48;

}
#main_commodity1 .main_commodity_inner_page_bottom1 i{
	position: relative;
	left:1.2rem;
	top:-.2rem;
	width:.2rem;
	height:.2rem;
	background:#EC2B48;
	border-radius:50%;
	text-align: center;
	color: #FFFFFF;
	font-size: .16rem;
    line-height: .2rem;
}
/* 没商品时 */
.goodlistNO img{
    display: block;
    margin: 0 auto;
    height: 1.25rem;;
    margin-top: 1.5rem;
}
.goodlistNO p{
    display: block;
    text-align: center;
    color: #7D7D7D;
    font-size: .16rem;
    line-height: .8rem;
}
.load-more{
    text-align: center;
    font-size: .14rem;
    line-height: .6rem;
}
</style>