<template>
    <van-tabs @click="changeType" v-model="id">
        <van-tab v-for="(item,index) in filmTypes" :key="index" :name="item.id" :title="item.name"></van-tab>
    </van-tabs>
</template>
<script>
import { Tab, Tabs } from 'vant';
export default {
    name: 'orderNav',
    props:{
        filmTypes: {
            type: Array
        },
        pageNum:{    
        },
        orderStatus : {}
    },
    data(){
        return{
           curType:'',
           id:'1',
           pageNum1:'',
           currentPage:'1'
        }
    }, 
    watch:{
        '$route'(to,from){
            if(from.path=='/my'||from.path=='/myYG'){
               if(window.location.pathname=='/normal_order' || window.location.pathname=='/custom_order' || window.location.pathname=='/integral_order'){
                    let POSITION=this.$route.query.ORDER_POSITION,
                    STATUS=this.$route.query.ORDER_STATUS
                    this.$parent.getorderList(POSITION,STATUS,this.currentPage);
                    if(STATUS){
                        this.id=STATUS
                    }else{
                        this.id=''
                    } 
                  }
               }     
        },
        pageNum: function(newVal,oldVal){
            this.pageNum1=newVal
        },
    },
    methods:{
        changeType(name,title){  
            this.currentPage='1'
            this.curType = name;  
            document.body.scrollTop = 0;
            let POSITION=this.$route.query.ORDER_POSITION;
            if(this.curType){               
                this.$parent.getorderList(POSITION,this.curType,this.currentPage,title) //调用父组件的方法
            }
            else{
                this.$parent.getorderList(POSITION,this.curType,this.currentPage,title)
            }

        }
    },
    components:{
		[Tab.name]: Tab,
		[Tabs.name]: Tabs,
    },
    created(){
        if(window.location.pathname=='/normal_order' || window.location.pathname=='/custom_order' || window.location.pathname=='/integral_order'){//初次加载watch监听不了路由
                let POSITION=this.$route.query.ORDER_POSITION,
                STATUS=this.$route.query.ORDER_STATUS
                this.$parent.getorderList(POSITION,STATUS,this.currentPage);
                if(STATUS){
                    this.id=STATUS
                }else{
                    this.id=''
                } 
        }
        if(this.orderStatus) { 
            this.id = this.orderStatus 
            this.changeType(this.id,"onchange")  
        }
    },
    activated(){
        
    },
    updated(){
        let _this = this;
        let POSITION=this.$route.query.ORDER_POSITION;
            window.onscroll = function(){
            //变量scrollTop是滚动条滚动时，距离顶部的距离
            var scrollTop = document.documentElement.scrollTop||document.body.scrollTop;
            //变量windowHeight是可视区的高度
            var windowHeight = document.documentElement.clientHeight || document.body.clientHeight;
            //变量scrollHeight是滚动条的总高度
                var scrollHeight = document.documentElement.scrollHeight||document.body.scrollHeight;
                //滚动条到底部的条件
                if(scrollTop+windowHeight==scrollHeight){
                    if(_this.currentPage<_this.pageNum){
                            if(window.location.pathname=='/normal_order' || window.location.pathname=='/custom_order'){
                                     _this.currentPage++  
                                    _this.$parent.getorderListpage(POSITION,_this.curType,_this.currentPage);     
                            }   
                        }
                }
            }
    },
}
</script>
<style>
</style>