<template>
    <div>
        <goBack></goBack>
        <div id="collect_title">
			<h1>我的收藏</h1>
			<p v-show="isshow" @click="isshow=false">编辑</p>
            <p v-show="!isshow" @click="isshow=true">完成</p>
		</div>
        <div class="main_cart_title" @click="show" v-show="showno">
				<span>普通商品</span>
				<img src="../img/home/icon/jt_left.png" style="width: .08rem;transition: all 1s ease;" :class="{animation:!goodsShow}">
			</div>
        <div style="max-height:100rem;overflow:hidden;transition: max-height 1s ease;" :class="{element:!goodsShow}">
	    <div id="collect_main" v-for="(item,index) in ptList" :key="index">
            <input v-show="!isshow" type="checkbox" :id="item.COLLECTION_ID" :goodsid="item.GOODS_ID" name="list" @click="checkone($event)"/>
			<label v-show="!isshow" :for="item.COLLECTION_ID"></label>
			<div class="collect_main_left">
				<img :src="item.INDEX_PICTURE">
			</div>
			<div class="collect_main_right">
				<p>{{item.GOODS_NAME}}</p>
				<span>￥{{item.CURRENT_PRICE|numFilter}}</span>
				<button @click="goDetail(item)">查看详情</button>
			</div>
		</div>

        </div>
        <!-- <div class="main_cart_title" @click="showdz" v-show="showno">
				<span>定制商品</span>
				<img src="../img/home/icon/jt_left.png" style="width: .08rem;transition: all 1s ease;" :class="{animation:!goodsShowdz}">
		</div> -->

        <!-- <div style="max-height:100rem;overflow:hidden;transition: max-height 1s ease; margin-bottom:.7rem" :class="{element:!goodsShowdz}">
	    <div id="collect_main" v-for="(item,index) in dzList" :key="index" v-show="role4">
            <input v-show="!isshow" type="checkbox" :id="item.COLLECTION_ID" :goodsid="item.GOODS_ID" name="list" @click="checkone($event)"/>
			<label v-show="!isshow" :for="item.COLLECTION_ID"></label>
			<div class="collect_main_left">
				<img :src="item.INDEX_PICTURE">
			</div>
			<div class="collect_main_right">
				<p>{{item.GOODS_NAME}}</p>
				<span>￥{{item.CURRENT_PRICE|numFilter}}</span>
				<button @click="goDetail(item)">查看详情</button>
			</div>
		</div>
        </div> -->
        <div id="checkout"  v-show="!isshow">
         	<div class="checkout_inner" >
         		<div class="checkout_inner_1">
         			<input type="checkbox" id="checkout_all" name="all" @click="checkAll($event)"/>
				    <label for="checkout_all"></label>	
				    <span>全选</span>
         		</div>
				 <div class="checkout_inner_4" @click="cancelCollection">
         			取消收藏
         		</div>
         	</div>
         </div>
		 <div class="wsc" v-show="!showno">
			 <img src="../img/home/sc.png">
			 <p>当前无收藏商品</p>
		 </div>
    </div>
</template>
<script>
import goBack from '../components/goback.vue';
import { Toast } from 'vant';
export default {
    data(){
        return{
			isshow:true,
			showno:true,
            goodsShow:true,
            goodsShowdz:true,
            ptList:[],
			dzList:[],
			role4:true
        }
    },
    methods:{
        show(){
			if(!this.goodsShow){
				this.goodsShow=true
			}else{
				this.goodsShow=false
			}
        },
        showdz(){
			if(!this.goodsShowdz){
				this.goodsShowdz=true
			}else{
				this.goodsShowdz=false
			}
        },
        getcollectionList1(){//普通商品的收藏
            var url ='group/Api/collectionList.do';
				var params = new URLSearchParams();
					params.append('token',window.userInfo.token);
					params.append('GOODS_POSITION',0);
				this.$axios({
				method: 'post',
				url:url,
				data:params
				}).then((res)=>{
                    if(res.data.status==0){
						this.ptList=res.data.content.collectionList
						// this.$nextTick(()=>{
						// 	// if(this.ptList=='' && this.dzList==''){
						// 	// 	this.showno=false
						// 	// }		
            			//  });
                    }
                })
		},
		getcollectionList2(){//定制商品的收藏
            var url ='group/Api/collectionList.do';
				var params = new URLSearchParams();
					params.append('token',window.userInfo.token);
					params.append('GOODS_POSITION',2);
				this.$axios({
				method: 'post',
				url:url,
				data:params
				}).then((res)=>{
                    if(res.data.status==0){
						this.dzList=res.data.content.collectionList
						// this.$nextTick(()=>{
						// 	if(this.ptList=='' && this.dzList==''){
						// 		this.showno=false
						// 	}		
            			//  });				
                    }
                })
        },
        goDetail(item){
			this.$router.push('/detail?id='+item.GROUP_GOODS_ID)
			// if(item.GOODS_POSITION==2){
			// 	this.$router.push('/custom_detail?id='+item.GROUP_GOODS_ID)
			// }else if(item.GOODS_POSITION==0){
			// 	this.$router.push('/detail?id='+item.GROUP_GOODS_ID)
			// }

		},
		checkAll(e){
			let check=document.getElementsByName('list')
			check.forEach(val => {
				if(e.target.checked){
					val.checked=true
				}else{
					val.checked=false
				}
			});
		},
		deleteBatchCollection(ids){
			let url ='headquarters/Api/deleteBatchCollection.do';
           		let params = new URLSearchParams();
				params.append('token', window.userInfo.token);
				params.append('ids', ids);
				this.$axios({
				method: 'post',
                url:url,
                data:params
				}).then((res)=>{
					if(res.data.status==0){
						Toast('取消收藏成功')
						this.getcollectionList1();
						this.getcollectionList2();	
					}
				})
		},
		checkone(e){
			if(!e.target.checked){				
				document.getElementsByName('all')[0].checked=false
			}
		},
		cancelCollection(){
			let check=document.getElementsByName('list')
			let str='';
			let goodsid='';
			check.forEach(val => {
				if(val.checked){
					str+=val.getAttribute("id")+','
					goodsid+=val.getAttribute("goodsid")
					localStorage.removeItem(goodsid)//删除本地储存的收藏
					return str
				}
			});
			if(str.length>0){
				str = str.substr(0,str.length - 1);
				this.deleteBatchCollection(str)
			}else{
				Toast('请选择你想要取消收藏的商品')
			}

		}
    },
    components:{
        goBack
    },
    created(){
		this.getcollectionList1();
		this.getcollectionList2();
		if(window.userInfo.role=='4'){
			this.role4=false
		}
	},
    filters: {
	numFilter (value) {
         // 截取当前数据到小数点后两位
    	let realVal = value.toFixed(2)
    	return realVal
  		}	
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
@import '../style/css/Mycollect.css';
.wsc img{
	display: block;
	width: 1.6rem;
	height: 1.2rem;
	margin: 2rem auto .2rem auto;
}
.wsc p{
	text-align: center;
	font-size: .16rem;
}
.qxsc{
    width: 100%;
    height: .5rem;
    background: #ffffff;
    position: fixed;
    left: 0;
    bottom: 0;
}
.animation{
transform:rotate(272deg) !important;
transition: all 1s ease !important;
}
.element {
max-height: 0 !important;
overflow: hidden !important;
transition: max-height 1s ease !important;
}
.main_cart_title{
    width: 3.46rem;
    left: .15rem;
    top: .1rem;

}
#checkout{
	width: 3.75rem;
	height: .7rem;
	background: #FFFFFF;
	position: fixed;
	left: 0;
	bottom:0rem;	
	border-bottom: 1px solid #f1f1f1;
}
#checkout .checkout_inner{
	display: flex;
}
#checkout .checkout_inner_1 input {
    position: relative;
    left: .2rem;
    /* 前面三行代码是为了让radio单选按钮与文字对齐 */
    appearance: none;/*清楚默认样式*/
    opacity: 0;
    outline: none;
    /* 注意不能设置为display:none*/
}
#checkout .checkout_inner_1 label {
	display: inline-block;
    position: relative;
    top:.033rem;
    z-index: 2;
    /*注意层级关系，如果不把label层级设为最低，会遮挡住input而不能单选*/
	  width: 0.16rem;
	  height: 0.16rem;
	  line-height: 0.16rem;
	  text-align: center;
	  background-color: #E6E6E6;
	  border-radius: .1rem;
	  border: 1px solid #828282;
}

#checkout .checkout_inner_1 input:checked+label {
    background: #EC2B48;
}

#checkout .checkout_inner_1 input:checked+label::after {
    content: "";
    position: absolute;
    left: .05rem;
    width: .04rem;
    height: .1rem;
    border-right: 2px solid #fff;
    border-bottom: 2px solid #fff;
    transform: rotate(45deg);
}
#checkout .checkout_inner_1{
	margin-left: .2rem;
}
#checkout .checkout_inner_1 span{
	color: #1C1C1C;
	font-size: .16rem;
	margin-top: .24rem;
	line-height: .7rem;
	margin-left: .1rem;
}
#checkout .checkout_inner_4{
	width: 1.06rem;
	height: .44rem;
	border: 1px solid #1C1C1C;
	border-radius:.22rem;
	background: #FFFFFF;
	color: #1C1C1C;
	text-align: center;
	line-height: .42rem;
	margin: .13rem 0 0 1.7rem;
	box-sizing: border-box;
}
#collect_main input {
    position: relative;
    left: .17rem;
    top:.45rem;
    /* 前面三行代码是为了让radio单选按钮与文字对齐 */
    appearance: none;/*清楚默认样式*/
    opacity: 0;
    outline: none;
    /* 注意不能设置为display:none*/
}
#collect_main label {
	display: block;
    position: relative;
    top:.42rem;
    /*注意层级关系，如果不把label层级设为最低，会遮挡住input而不能单选*/
	  width: 0.16rem;
	  height: 0.16rem;
	  line-height: 0.16rem;
	  text-align: center;
	  background-color: #E6E6E6;
	  border-radius: .1rem;
	  border: 1px solid #828282;
}
#collect_main input:checked+label {
    background: #EC2B48;
}

#collect_main input:checked+label::after {
    content: "";
    position: absolute;
    left: .05rem;
    width: .04rem;
    height: .1rem;
    border-right: 2px solid #fff;
    border-bottom: 2px solid #fff;
    transform: rotate(45deg);
}
</style>