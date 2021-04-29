<template>
     <div>
         <div class="err">
             <img src="../img/home/err404.png">
             <p>亲，您所访问的页面不存在！</p>
             <router-link to="index"><p>返回首页</p></router-link>
         </div>
     </div>
</template>
<script>
export default {
    
}
</script>
<style scoped>
@import '../style/css/reset.css';
@import '../style/css/common.css';
.err{
    width: 3.75rem;
    text-align: center;
}
.err img{
    width: 3.75rem;
}
.err p{
    line-height: .8rem;
    font-size: .20rem;  
    font-weight: bold;
}
</style>