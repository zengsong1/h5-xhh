<template>
        <div id="design">
            <goBack></goBack>
            <div class="design_header">
                <p>设计稿、成品照片</p>
            </div>
            <div class="design_dd">
            </div>
            <div class="design_main">
                <h6 class="h6tilte" style="width:1rem;">礼品设计稿</h6>
                <div class="design_inner"  v-for="(item,index) in designList" :key="index">
                    <p>备注:{{item.picture_explain}}</p>
                    <img v-for="(item1,index1) in item.picture_list" :key="index1" :src="item1" @click="getimg(item1)" style="width: 1.04rem; height:1.04rem;border: 1px solid #7D7D7D">
                </div>
                <div class="design_sure" @click="sureDesignList" v-show="designListshow">
                    确认设计
                </div>
            </div>
            <div class="design_main">
                <h6 class="h6tilte" style="width:1rem;">成品图片</h6>
                <div class="design_inner" v-for="(item,index) in finishList" :key="index">
                    <p>备注:{{item.picture_explain}}</p>
                    <img v-for="(item1,index1) in item.picture_list" :key="index1" :src="item1" @click="getimg(item1)" style="width: 1.04rem; height:1.04rem;border: 1px solid #7D7D7D">
                </div>
                <div class="design_sure" v-show="finishListshow" @click="sureFinishList">
                    确认设计
                </div>
            </div>
        </div>
</template>
<script>
import { Dialog,Toast,ImagePreview} from 'vant';
import goBack from '../components/goback.vue'
export default {
    data(){
        return{
            designList:[],
            finishList:[],
            designListshow:false,
            finishListshow:false,
        }
    },
    methods:{
        getviewPicture(){
            var url ='order/Api/viewPicture.do';
			var params = new URLSearchParams();
            params.append('token',window.userInfo.token);
            params.append('ORDER_ID',this.$route.query.ORDER_ID);
				this.$axios({
				method: 'post',
				url:url,
				data:params
				}).then((res)=>{
                    if(res.data.status==0){
                       let val=res.data.content
                       this.designList=val.designList
                       this.finishList=val.finishList
                    }
                })
        },
        sureDesignList(){
            Dialog.confirm({
				message:'确定要确认设计图？'
				}).then(()=>{
                    var url ='order/Api/sureDesign.do';
                    var params = new URLSearchParams();
                    params.append('token',window.userInfo.token);
                    params.append('ORDER_ID',this.$route.query.ORDER_ID);
                    this.$axios({
                    method: 'post',
                    url:url,
                    data:params
                    }).then((res)=>{
                        if(res.data.status==0){
                            Toast('确认成功')
                            this.designListshow=false;
                        }
                    })
                })
        },
        sureFinishList(){
            Dialog.confirm({
				message:'确定要确认成品图？'
				}).then(()=>{
                    var url ='order/Api/sureFinished.do';
                    var params = new URLSearchParams();
                    params.append('token',window.userInfo.token);
                    params.append('ORDER_ID',this.$route.query.ORDER_ID);
                    this.$axios({
                    method: 'post',
                    url:url,
                    data:params
                    }).then((res)=>{
                        if(res.data.status==0){
                            Toast('确认成功')
                            this.finishListshow=false;
                        }
                    })
                })
        },
        getimg(images){
        ImagePreview([
              images
            ])
        },
        
    },
    activated(){
        this.getviewPicture();
        if(this.$route.query.ORDER_STATUS==4 && this.$route.query.CUSTOM_STATUS==1){
            this.designListshow=true;
        }
        if(this.$route.query.ORDER_STATUS==5 && this.$route.query.CUSTOM_STATUS==2){
            this.finishListshow=true;
        }
    },
    components:{
        goBack
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
.design_header{
    width: 3.75rem;
    height: .5rem;
    background: #ffffff;

}
.design_header p{
    color: #1C1C1C;
    font-size: .18rem;
    font-weight:bold;
    text-align: center;
    line-height: .5rem;
}
.design_dd{
    width:3.75rem;
    height:.78rem;
    background:#F6536B;
    z-index: -1;
    position: absolute;
    left: 0;
    top:.5rem;
}
.design_main{
    width: 3.47rem;
    min-height: 1.5rem;
    margin: 0 auto;
    background: #ffffff;
    margin-top: .14rem;
    padding: .11rem .1rem;
    box-sizing: border-box;
}
.design_inner{
    margin-top:  .1rem;
}
.design_inner img{
    margin-right: .03rem;
}
.design_sure{
    width:.78rem;
    height:.24rem;
    border:1px solid rgba(236,43,72,1);
    border-radius:.12rem;
    text-align: center;
    line-height: .24rem;
    font-size: .14rem;
    color: #EC2B48;
    position: relative;
    left: 2.4rem;
    margin-top: .2rem;
}
</style>