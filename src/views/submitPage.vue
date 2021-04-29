<template>
    <div class="submit_page"  >
        <div  class="submit_page_icon">
            <div>
                 <img src="../img/提交/sug.png" alt="">
                 <!-- <img src="../img/提交/sure.png" alt=""> -->
            </div>
        </div>
        <div> 
            提交成功，正在审核中
        </div>
        <div @click="goHome()"> 
            <van-button type="default" plain >回到首页</van-button>
        </div>
        <div @click="lookOrder()">
            <van-button type="danger">查看订单</van-button> 
        </div>
    </div>
</template>
<script>
export default {
    data() {
        return {
            submitPage: null, 
            orderId: null, // 
        }
    },
    created () {
        this.orderId = this.$route.query.ORDER_ID
    },
    mounted () {
         
    },
    methods: {
        goHome() {
            this.$router.push("/")
        },
        lookOrder() {
            this.$router.push({
                path: "orderDetail",
                query: {
                    ORDER_ID : this.orderId 
                }
            }) 
        },
    }
}
</script>
<style scoped>
    .submit_page_icon {
        width: 100%;
        display: flex;
        margin-top: 0.43rem;
        justify-content: center;
        align-items: center;

    }
    .submit_page_icon>div{
        position: relative;  
        width: 0.4rem;
        height: 0.44rem;   
        display: flex;        
    }
    .submit_page_icon>div>img:nth-of-type(1){
        width: 0.4rem;
        height: 0.44rem;            
    }
    .submit_page_icon>div>img:nth-of-type(2){
        width: 0.23rem;
        height: 0.23rem; 
        position: absolute; 
        bottom: -0.1rem;          
        right: -0.1rem; 
    }
    .submit_page>div:nth-of-type(2){
        margin-top: 0.17rem;
        width: 100%;
        text-align: center;
        height: 0.24rem;
        font-size: 0.18rem;
        font-family: Microsoft YaHei;
        font-weight: bold;
        line-height: 0.24rem;
        color: #EF0E01;
    }
    .submit_page>div:nth-of-type(3),.submit_page>div:nth-of-type(4){
        width: 100%;
        display: flex;
        justify-content: center;
        margin-top: 0.4rem;
    }
    .submit_page>div:nth-of-type(4){
        margin-top: 0.14rem;
        
    }
    .submit_page>div:nth-of-type(4) span{
        color: #FFFFFF;
        font-size: 0.14rem;
font-family: Microsoft YaHei;
font-weight: 400;
    }
    .submit_page>div:nth-of-type(3) button,.submit_page>div:nth-of-type(4) button{
        width: 3.22rem;
        height: 0.36rem;
        border: 1px solid #DCDFE6; 
        opacity: 1;
         color: #606266;
        border-radius: 0rem;
        border-radius: 0.04rem;
    }
</style>