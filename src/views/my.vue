<template>
  <div>
    <div v-if="!isUpdate">
        <div id="header_my">
          <div class="header_my_inner">
            <div class="header_my_inner_top">
              <div class="header_my_inner_top_right">  
                <img   src="../img/home/ic_touxiang.png" />
              </div>
              <div class="my-top-left">
                <div class="name">{{projectName}}</div>
                <div class="my-top-item">
                  <div>
                    <div @click="editUserInfo()">编辑个人资料</div>
                    <div><van-icon name="arrow"   /></div>
                  </div> 
                </div>
              </div>
            </div> 
          </div>
        </div>
        <!-- 普通订单 -->
        <div class="regular_orders">
          <div>
            <div>
              <div>普通订单</div>
              <div>
                <div @click="allOrders()">查看全部</div>
                <div><van-icon name="arrow"/></div>
              </div>
            </div>
            
          </div>
          <div>
            <div  v-for="(item,index) in ordersState" :key="index" @click="myOrderState(item)">
              <div>
                <img :src="item.url" alt="">
              </div>
              <div>{{item.name}}</div>
            </div> 
          </div>
          
        </div>
        <div class="service_center">
            <div>
                服务中心
            </div> 
            <div>
                <div v-for="(item,index) in serviceCenter" :key="index" @click="fuwu(item)">
                    <div>
                      <img :src="item.url" alt="">
                    </div>
                    <div>{{item.name}}</div>
                </div>
            </div>
          </div>
        <div id="quit_my">
          <div class="quit_my_inner" @click="quit">
            <span>退出登录</span>
          </div>
        </div>
        <!--尾部-->
        <div id="footer">
          <div class="footer-inner">
            <router-link to="/">
              <span>
                <i>
                  <img src="../img/home/标签栏-未选中/首页@2x.png" />
                </i>首页
              </span>
            </router-link>
            <router-link to="sort">
              <span>
                <i>
                  <img src="../img/home/标签栏-未选中/分类@2x.png" />
                </i>分类
              </span>
            </router-link>
            <!-- <span><i><img src="../img/home/标签栏-未选中/商城2.png"></i>集团商城</span> -->
            <router-link to="shoppingcart">
              <span>
                <i>
                  <img src="../img/home/标签栏-未选中/购物车@2x.png" />
                </i>购物车
              </span>
            </router-link>
            <router-link to="my">
              <span class="active">
                <i>
                  <img src="../img/home/标签栏-选中/我的@2x.png" />
                </i>我的
              </span>
            </router-link>
          </div>
        </div>
    </div>
    <div v-if="isUpdate">
       <accountInfo :myUpdatedInfo ="myUpdatedInfo" @updateSuccessful="updateSuccessful" @closeUpdate="closeUpdate"></accountInfo>
    </div>
	  <!-- <van-popup v-model="show" class="pop">
      <div class="pop-up">
		  <div class="code">推荐码</div>
        <div class="pop-item">
          <div class="txt">APTX6529</div>
        </div>
        <div class="pop-item pop-btn">
          <div class="btn-sure" @click="reload">刷新推荐码</div>
          <div class="btn-cancer" @click="share">分享</div>
        </div>
      </div>
    </van-popup> -->
  </div>
</template>
<script>
import { Dialog } from "vant"; 
import accountInfo from '../views/accountInfo.vue'
export default {
  components : {
    accountInfo
  },
  data() {
    return {
      isUpdate : false, // 是否是修改资料
      myUpdatedInfo : "1",
      projectName : "", 
		  show:false,
      userInfo: {
        NICK_NAME: null,
        INTEGRATION: "0",
        HEAD_IMAGE: " "
      },
      filmTypes: [
        { id: "pt", name: "普通订单" },
        { id: "dz", name: "定制订单" }
        // { id: 'jf', name: '积分订单'},
      ],
      curType: "pt",
      ISUNIFY: "", //集团总账号才有积分
      currentUser: {},
      ordersState: [
        {
          id: -1,
          name : "待审核",
          url : require("../img/my/shenhe.png")
        },
        {
          id: 0,
          name : "审核中",
          url : require("../img/my/shenhezhong.png")
        },
        {
          id: 1,
          name : "待发货",
          url : require("../img/my/fahuo.png")
        },
        {
          id: 2,
          name : "待收货",
          url : require("../img/my/shouhuo.png")
        }
      ], // 普通订单
      serviceCenter : [
        {
          id: 1,
          name : "地址管理",
          url : require("../img/my/dizhi.png")
        },
        {
          id: 2,
          name : "我的收藏",
          url : require("../img/my/shoucang.png")
        },
        {
          id: 3,
          name : "常见问题",
          url : require("../img/my/wenti.png")
        }
      ]
    };
  },
  methods: {
    // 服务中心里的点击
    fuwu(item) { 
      if(item.id == 1){
        this.$router.push({
          path: "/addressSG",
          query : {
            form : "my"
          }
        })
      }
      else if(item.id == 2) {
        this.$router.push({
          path: "/Mycollect"
        })
      }
      else {
        this.$router.push({
          path: "/customerFW"
        })
      }
    },
    // 订单状态的点击
    myOrderState(item){ 
      this.$router.push({
        path: "/normal_order",
        query: {
          ORDER_POSITION : 0,
          orderStatus : item.id 
        }
      })
    },
	  share(){

	  },
	  reload(){

	  },
    editUserInfo(){
      this.isUpdate = true;
      // this.$router.push({
      //   path: "/accountInfo",
      //   query : {
      //       updatedInfo : "1"
      //   }
      // })
    },
    // 获取资料信息 
    getMeansInfo () {
      // auditGroup/Api/projectInfo.do
      var url = "auditGroup/Api/projectInfo.do";
      var params = new URLSearchParams();
      params.append("token", window.userInfo.token);
      this.$axios({
        method: "post",
        url: url,
        data: params
      }).then(res => {
        if (res.data.status == 0) { 
           this.myUpdatedInfo = res.data.content.projectPd
           this.projectName = res.data.content.projectPd.PROJECT_NAME 
           console.log(this.myUpdatedInfo)
        }
      });
    }, 
    getInfo() {
      var url = "headquarters/Api/userInfo.do";
      var params = new URLSearchParams();
      params.append("token", window.userInfo.token);
      this.$axios({
        method: "post",
        url: url,
        data: params
      }).then(res => {
        if (res.data.status == 0) {
          let val = res.data.content.currentUser;
          this.currentUser = val; 
        }
      });
    },
    changeType(item) {
      this.curType = item.id;
    },
    // 获取用户信息
    getuserInfo() {
      var url = "group/Api/userInfo.do";
      var params = new URLSearchParams();
      params.append("token", window.userInfo.token);
      this.$axios({
        method: "post",
        url: url,
        data: params
      }).then(res => {
        if (res.data.status == 0) { 
          let val = res.data.content.currentUser;
          this.userInfo.NICK_NAME = val.NICK_NAME
            ? val.NICK_NAME
            : val.UNIT_NAME
            ? val.UNIT_NAME
            : val.USER_NAME
            ? val.USER_NAME
            : "";
          this.userInfo.INTEGRATION = val.INTEGRATION ? val.INTEGRATION : "0";
          this.userInfo.HEAD_IMAGE = val.HEAD_IMAGE; 
          this.ISUNIFY = window.userInfo.IS_UNIFY;
        }
      });
    },
    // 子类调用父类方法
    updateSuccessful() {
      this.isUpdate = false
      this.getMeansInfo()
      this.getuserInfo();
    },
    //子类调用父类方法 closeUpdate
    closeUpdate()  {
      this.isUpdate = false
    },
    quit() {
      Dialog.confirm({
        message: "确定要退出当前账号?"
      })
        .then(() => {
          localStorage.removeItem("userInfo");
          localStorage.removeItem("MALLS_NAME");
          this.$router.push("/login");
        })
        .catch(() => {});
    },
    allOrders(){
      this.$router.push({
        path: "/normal_order",
        query : {
          ORDER_POSITION : 0
        }
      })
    }

  },
  activated() {
    // 用这个接口  group/Api/userInfo.do
    this.isUpdate = false
    this.getMeansInfo()
    this.getuserInfo();
    
    // this.getInfo();
  }
};
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
@import "../style/css/common.css";
@import "../style/css/reset.css";
@import "../style/css/my.css";
.van-popup {
  position: absolute;
  width: 100%;
}
.pop {
  width: 3.46rem;
  padding: 0.4rem 0.24rem 0.18rem 0.14rem;
  box-sizing: border-box;
  background: #fff;
}
.code{
font-size:14px;
font-family:PingFang SC;
font-weight:bold;
color:rgba(28,28,28,1);
}
.pop-up{
	text-align: center;
}
.pop-item {
  margin-top: 0.14rem;
}
.txt{
	height:.44rem;
font-size:.31rem;
font-family:PingFang SC;
font-weight:bold;
line-height:.44rem;
color:rgba(28,28,28,1);
}
.pop-btn {
  display: flex;
  justify-content: space-around;
}
.btn-sure {
  width: 0.83rem;
  height: 0.3rem;
  line-height: 0.3rem;
  text-align: center;
  background: rgba(236, 43, 72, 1);
  border-radius: 3px;
  font-weight: bold;
  color: #fff;
}
.btn-cancer {
  width: 0.83rem;
  height: 0.3rem;
  line-height: 0.3rem;
  text-align: center;
  border: 1px solid rgba(236, 43, 72, 1);
  border-radius: 3px;
  font-weight: bold;
  color: rgba(236, 43, 72, 1);
}
.my-top-left{
	flex-direction: column;
display: flex;
justify-content: center;
align-content: center;
}
.my-top-item{
	margin-top: .08rem;
	display: flex;
	justify-content: space-between;
	font-size:.12rem;
  font-family:PingFang SC;
  font-weight:bold;
  color:rgb(255, 255, 255);
}
.my-top-item div{
	height:.21rem;
	line-height: .21rem; 
  border-radius:11px;
  display: flex;
  align-items: center;
}
.name{
	font-size:.16rem;
font-family:PingFang SC;
font-weight:bold;
color:rgba(255,255,255,1);
}
.my-top-item div:nth-of-type(1){
margin-right: .08rem;
}
</style>