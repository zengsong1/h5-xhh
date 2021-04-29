<template>
    <div>
        <goBack></goBack>
        <div id="myMessage_title">
			个人信息
		</div>
        <div id="main_mymes">
	    	<div class="main_mymes_inner">
	    		<router-link :to="'myData?USER_NAME='+currentUser.USER_NAME+'&UNIT_NAME='+currentUser.UNIT_NAME+'&ADDRESS='+currentUser.ADDRESS">
                    <div class="main_mymes_inner_01">
	    			<div class="main_mymes_inner_01_01">
	    				<h5>个人资料</h5>
	    				<h6 class="jiantou"></h6>
	    			</div>
	    		</div></router-link>
	    		<router-link :to="'/resetPassword?phone='+currentUser.PHONE"><div class="main_mymes_inner_02">
	    			<div class="main_mymes_inner_02_01">
	    				<h5>修改密码</h5>
	    				<h6 class="jiantou"></h6>
	    			</div>
	    		</div></router-link>
	    		<router-link :to="'/changePhone?phone='+currentUser.PHONE"><div class="main_mymes_inner_03">
	    			<div class="main_mymes_inner_03_01">
	    				<h5>修改手机号</h5>
	    				<h6 class="jiantou"></h6>
	    			</div>
	    		</div></router-link>
	    	</div>
	    </div>
    </div>
</template>
<script>
import goBack from '../components/goback.vue'
import { ActionSheet } from 'vant';
export default {
    data(){
        return{
            currentUser:''
        }
    },
    methods:{
        getuserInfo(){
				var url ='group/Api/userInfo.do';
				var params = new URLSearchParams();
           	 	params.append('token',window.userInfo.token);
				this.$axios({
				method: 'post',
				url:url,
				data:params
				}).then((res)=>{
                    if(res.data.status==0){
                        let val=res.data.content.currentUser
                        this.currentUser=val
                    }
                })
			}
    },
    components:{
        goBack
    },
    activated(){
        this.getuserInfo()
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
#myMessage_title{
    width: 3.75rem;
    height: .5rem;
    background: #FFFFFF;
    color: #1C1C1C;
    font-size: .18rem;
    text-align: center;
    line-height: .5rem;
    font-weight: bold;
    position: fixed;
    left: 0;
    top: 0;
    z-index: 1;
}
#main_mymes{
	width: 3.46rem;
	/* height: 2.2rem; */
	margin: .7rem auto 0 auto;
    background: #FFFFFF;
    border-radius: 4px;
}
#main_mymes h5{
    text-indent: -2.5em;
}
#main_mymes .main_mymes_inner_01 .main_mymes_inner_01_01{
	box-sizing: border-box;
	margin-left: .31rem;
	width: 3.14rem;
	height: .52rem;
	border-bottom: .01rem solid #D5D5D5;
	display: flex;
	justify-content: space-between;
	padding: 0 .1rem 0 .2rem;
}
#main_mymes .main_mymes_inner_01 .main_mymes_inner_01_01 h5{
	line-height:.52rem ;
	color: #1C1C1C;
}
#main_mymes .main_mymes_inner_01 .main_mymes_inner_01_01 h6{
	margin: auto 0;
}
/*---------------*/
#main_mymes .main_mymes_inner_02 .main_mymes_inner_02_01{
	box-sizing: border-box;
	margin-left: .31rem;
	width: 3.14rem;
	height: .52rem;
	border-bottom: .01rem solid #D5D5D5;
	display: flex;
	justify-content: space-between;
	padding: 0 .1rem 0 .2rem;
}
#main_mymes .main_mymes_inner_02 .main_mymes_inner_02_01 h5{
	line-height:.52rem ;
	color: #1C1C1C;
}
#main_mymes .main_mymes_inner_02 .main_mymes_inner_02_01 h6{
	margin: auto 0;
}
/*------------*/
#main_mymes .main_mymes_inner_03 .main_mymes_inner_03_01{
	box-sizing: border-box;
	margin-left: .31rem;
	width: 3.14rem;
	height: .52rem;
	display: flex;
	justify-content: space-between;
	padding: 0 .1rem 0 .2rem;
}
#main_mymes .main_mymes_inner_03 .main_mymes_inner_03_01 h5{
	line-height:.52rem ;
	color: #1C1C1C;
}
#main_mymes .main_mymes_inner_03 .main_mymes_inner_03_01 h6{
	margin: auto 0;
}
</style>