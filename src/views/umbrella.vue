<template>
  <div>
    <div id="header_detailscart">
      <goback></goback>
      <div class="title-top">雨季活动</div>
    </div>
    <div class="umbrella">
      <img
        src="https://cs.zhaolipin.net/14704539-a5c6-4f74-b92c-2ff2a8633b05.jpg"
        width="100%"
        style="display: block"
      />
      <div class="wrap-one">
        <div class="tabbar tab">
          <div v-for="(item,index) in tabbar" :key="index" @click="handleClick('#top'+item.id)">{{item.txt}}</div>
        </div>
        <div v-if="isShow" class="fixed">
          <div class="tabbar">
            <div v-for="(item,index) in tabbar" :key="index" @click="handleClick('#top'+item.id)">{{item.txt}}</div>
          </div>
        </div>
        <div class="inner" id="top1" style="padding-top:.24rem">
          <div class="inner-top">
            <img
              src="https://cs.zhaolipin.net/65b91f39-4fd1-46d3-8a58-53f5e73a1da1.png"
            />
          </div>
          <div class="list">
            <img
              src="https://cs.zhaolipin.net/aa14c5d7-1306-4558-8635-a364b4e4188e.png"
              class="inner-photo"
              @click="goDetail(80755)"
            />
            <img
              src="https://cs.zhaolipin.net/8c57bd3e-85ad-400d-b535-252cf7c208ee.png"
              class="inner-photo"
              @click="goDetail(80756)"
            />
            <img
              src="https://cs.zhaolipin.net/adf0ffb8-aba4-49d5-875d-7d3f3e350f7f.png"
              class="inner-photo"
              @click="goDetail(80760)"
            />
            <img
              src="https://cs.zhaolipin.net/05561e98-1097-42fd-902b-370acb85b9d7.png"
              class="inner-photo"
              @click="goDetail(62174)"
            />
            <img
              src="https://cs.zhaolipin.net/4ea0caee-7ed9-4be0-9f7c-f9c975e68352.png"
              class="inner-photo"
              @click="goDetail(80764)"
            />
          </div>
        </div>
      </div>
      <div class="wrap-two" id="top2" style="padding-top:.24rem">
        <div class="inner">
          <div class="inner-top">
            <img
              src="https://cs.zhaolipin.net/edcdd1bb-70df-4d1e-9f66-7b3a313edafa.png"
              style="width:1.3rem;"
            />
          </div>
          <div class="inner-list">
            <div
              class="inner-item"
              v-for="(item, index) in secondFloor"
              @click="goDetail(item.id)"
              :key="index"
            >
              <img
                :src="item.url"
              />
              <div class="item-name">{{ item.name }}</div>
              <div class="item-row">
                <div class="item-price">
                  <span class="price-symbol">¥</span>
                  <span class="price-int">{{item.priceInt}}</span>
                  <span class="price-float">.{{item.priceFloat}}</span>
                </div>
                <div class="item-btn">立即购买</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="wrap-three" id="top3" style="padding-top:.24rem">
        <div class="inner">
          <div class="inner-top">
            <img
              src="https://cs.zhaolipin.net/e304f395-ce59-4dbc-af69-7447d562a5bf.png"
              style="width:1.3rem;"
            />
          </div>
          <div class="inner-list">
            <div class="inner-item" v-for="(item, index) in thirdFloor"
              @click="goDetail(item.id)"
              :key="index">
              <img
                :src="item.url"
              />
              <div class="item-name">{{item.name}}</div>
              <div class="item-row">
                <div class="item-price">
                  <span class="price-symbol">¥</span>
                  <span class="price-int">{{item.priceInt}}</span>
                  <span class="price-float">.{{item.priceFloat}}</span>
                </div>
                <div class="item-btn">立即购买</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="wrap-four" id="top4" style="padding-top:.24rem">
        <div class="inner">
          <div class="inner-top">
            <img
              src="https://cs.zhaolipin.net/f854ba06-6f17-4d52-9d75-3eddc9adbe9b.png"
            />
          </div>
          <div class="inner-list">
            <div class="inner-item" v-for="(item, index) in fourthFloor"
              @click="goDetail(item.id)"
              :key="index">
              <img
                :src="item.url"
              />
              <div class="item-name">{{item.name}}</div>
              <div class="item-row">
                <div class="item-price">
                  <span class="price-symbol">¥</span>
                  <span class="price-int">{{item.priceInt}}</span>
                  <span class="price-float">.{{item.priceFloat}}</span>
                </div>
                <div class="item-btn">立即购买</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="footer">
            <div class="footer-box">
              <div class="footer-top">
                <img
                  src="https://cs.zhaolipin.net/dc6017c0-85cf-46c6-bba8-0fec7ff46315.png"
                  style="width: 1.4rem"
                />
                <div class="footer-right">
                  <div class="ke">
                    <div class="serve">
                      <a
                        href="http://p.qiao.baidu.com/cps/chat?siteId=11906548&userId=24700287"
                      >
                        在线客服
                      </a>
                    </div>
                    <div style="margin-top: 0.16rem; font-size: 0.12rem">
                      400-830-9639
                    </div>
                  </div>
                  <div>
                    <a
                      class="focus"
                      href="https://weibo.com/p/1006065877133701/home?from=page_100606&mod=TAB&is_all=1#place"
                    >
                      <img
                        src="https://cs.zhaolipin.net/bc481af9-4f18-4710-adcd-b46ba658836c.png"
                        style="width: 0.16rem; height: 0.16rem"
                      />
                      <div style="margin-left: 0.02rem; font-size: 0.12rem">
                        @艾象商城
                      </div>
                    </a>
                    <img
                      src="https://cs.zhaolipin.net/2894e990-c019-48e7-9c6e-4395c691b638.png"
                      style="width: 60px; height: 60px; margin-top: 0.04rem"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
    </div>
  </div>
</template>

<script>
import goback from "../components/goback";
export default {
    data(){
        return{
          isShow:false,
            tabbar:[
                {
                    txt:'热销单品',
                    id:1
                },
                {
                    txt:'商务晴雨伞',
                    id:2
                },
                {
                    txt:'女士晴雨伞',
                    id:3
                },
                {
                    txt:'其他伞具',
                    id:4
                }
            ],
            secondFloor:[
                {   
                id:80752,
                url:'https://cs.zhaolipin.net/e5be0aa7-a585-4e79-aa3c-e163db5a2d15.jpg',
                name:'男士商务折叠反向伞',
                priceInt:48,
                priceFloat:'00'
            },
            {   
                id:2171,
                url:'https://cs.zhaolipin.net/241dae9f-3d96-4425-97aa-358b009e7f26.jpg',
                name:'商务长柄简约晴雨伞',
                priceInt:28,
                priceFloat:'50'
            },
            {   
                id:80763,
                url:'https://cs.zhaolipin.net/e0a7ac34-e359-4fcf-acb1-fd846d8a3ac4.jpg',
                name:'商务自动直杆伞',
                priceInt:28,
                priceFloat:'50'
            },
            {   
                id:80765,
                url:'https://cs.zhaolipin.net/7b42d19b-e0a9-4fcd-9644-dce9937cc25a.jpg',
                name:'长柄双层抗风防风伞',
                priceInt:36,
                priceFloat:'00'
            },
            {   
                id:80766,
                url:'https://cs.zhaolipin.net/8819ab10-8ade-4136-8ab0-3befb44488c8.gif',
                name:'直筒长柄双人大号雨伞',
                priceInt:29,
                priceFloat:'90'
            },
            {   
                id:80776,
                url:'https://cs.zhaolipin.net/994650ad-3e11-4e75-bdae-b0de9eadb2dc.jpg',
                name:'防晒晴雨折叠女伞',
                priceInt:18,
                priceFloat:'00'
            },
            {   
                id:80769,
                url:'https://cs.zhaolipin.net/dcbda32d-114f-437d-aff0-566aec43f90b.jpg',
                name:'小清新防紫外线晴雨伞',
                priceInt:19,
                priceFloat:'90'
            },
            {   
                id:80770,
                url:'https://cs.zhaolipin.net/17ce6abd-006b-466a-a575-7f2d17d78f94.jpg',
                name:'防紫外线遮阳商务伞',
                priceInt:33,
                priceFloat:'00'
            },
            {   
                id:80780,
                url:'https://cs.zhaolipin.net/1a67b8cc-6a8c-49f0-8160-6d565542f78c.jpg',
                name:'混色 双层反向伞',
                priceInt:26,
                priceFloat:'00'
            },
            {   
                id:80768,
                url:'https://cs.zhaolipin.net/41029e03-a070-4551-a1ae-c0bbac729956.jpg',
                name:'双层反向伞',
                priceInt:26,
                priceFloat:'00'
            }
            ],
            thirdFloor:[
                {   
                id:80757,
                url:'https://cs.zhaolipin.net/7856b8c6-3fd6-498f-8e83-d50f85638335.jpg',
                name:'防紫外线折叠晴雨女伞',
                priceInt:26,
                priceFloat:'00'
            },
            {   
                id:80758,
                url:'https://cs.zhaolipin.net/1101adf9-3399-4378-986f-61c228d5efd9.jpg',
                name:'折叠防晒晴雨女伞',
                priceInt:28,
                priceFloat:'80'
            },
            {   
                id:80759,
                url:'https://cs.zhaolipin.net/7e65c6f7-8bf9-41b1-804d-22dd260e3d6d.jpg',
                name:'折叠晴雨简约纯色伞',
                priceInt:18,
                priceFloat:'00'
            },
            {   
                id:80761,
                url:'https://cs.zhaolipin.net/a8280074-fc4c-4797-8ce2-bf2130e62a1e.jpg',
                name:'双层遮阳伞',
                priceInt:39,
                priceFloat:'00'
            },
            {   
                id:80762,
                url:'https://cs.zhaolipin.net/52eb6a09-5ac8-48fb-a8f7-84febcd1a0eb.jpg',
                name:'长柄双层雨伞',
                priceInt:26,
                priceFloat:'50'
            },
            {   
                id:80767,
                url:'https://cs.zhaolipin.net/63bf070e-76ee-4bf4-8aab-f48b1a45d5a2.jpg',
                name:'小巧便携晴雨折叠伞',
                priceInt:66,
                priceFloat:'00'
            }
            ],
            fourthFloor:[
                {   
                id:80754,
                url:'https://cs.zhaolipin.net/31e5be8a-ea71-425e-b95d-6e9a6a6bbc40.jpg',
                name:'挡风玻璃防晒隔热伞',
                priceInt:33,
                priceFloat:'00'
            },
            {   
                id:80771,
                url:'https://cs.zhaolipin.net/51fd177e-b9a5-4370-8014-c3f2e3529316.jpg',
                name:'大号户外商用伞',
                priceInt:52,
                priceFloat:'00'
            },
            {   
                id:80772,
                url:'https://cs.zhaolipin.net/7156ed4f-6a35-4cf9-88eb-28b4159995f2.jpg',
                name:'户外遮阳伞',
                priceInt:1070,
                priceFloat:'00'
            },
            {   
                id:80773,
                url:'https://cs.zhaolipin.net/ae02adc7-8949-4742-8afc-01574a94e149.jpg',
                name:'大号户外遮阳伞',
                priceInt:51,
                priceFloat:'00'
            },
            {   
                id:80774,
                url:'https://cs.zhaolipin.net/a9bff76e-9c40-4609-a33c-5d138478473f.jpg',
                name:'户外遮阳伞',
                priceInt:449,
                priceFloat:'00'
            },
            {   
                id:80775,
                url:'https://cs.zhaolipin.net/6bbf592e-6a58-41f7-82db-14819b946d99.jpg',
                name:'户外遮阳伞',
                priceInt:1134,
                priceFloat:'00'
            },
            {   
                id:80777,
                url:'https://cs.zhaolipin.net/c9de1a22-ec62-4f70-b4d2-2b6565f5b39c.jpg',
                name:'双层围裙钓鱼伞',
                priceInt:199,
                priceFloat:'00'
            },
            {   
                id:80778,
                url:'https://cs.zhaolipin.net/94858a56-bda0-45d3-aa7e-bbccf1a1f274.jpg',
                name:'双层渔具遮阳伞',
                priceInt:78,
                priceFloat:'00'
            },
            {   
                id:80779,
                url:'https://cs.zhaolipin.net/3e1e9a1a-5277-44e9-bfda-cf8837802493.jpg',
                name:'电动车挡风罩遮阳伞',
                priceInt:83,
                priceFloat:'00'
            }
            ],

        }
    },
    mounted(){
      window.addEventListener('scroll',this.handleScroll)
    },
    beforeDestroy() {
      window.removeEventListener("scroll", this.handleScroll);
    },
    methods:{
      handleScroll(e){
        var top=document.getElementsByClassName('tab')[0].offsetTop 
        var scrollTop = e.target.documentElement.scrollTop || e.target.body.scrollTop;
        if(scrollTop>top){
          this.isShow=true
        }else{
          this.isShow=false
        }
      },
        handleClick(selector){
            this.$el.querySelector(selector).scrollIntoView({behavior:'smooth'})
        },
        goDetail(id) {
      this.$router.push({
        path: "/detail",
        query: {
          id: id,
          isFestival:true
        },
      });
    },
    },
  components: {
    goback,
  },
};
</script>

<style>
.umbrella {
  font-size: 0.14rem;
}
.wrap-one {
  padding-top: 0.06rem;
  background: url("https://cs.zhaolipin.net/6cc6e0ab-1ed6-4d12-97ea-41e1c02b1431.jpg")
    no-repeat;
  background-size: 100% 101%;
}
.wrap-two {
  padding-top: 0.06rem;
  background: url("https://cs.zhaolipin.net/6b427527-c7d2-43cb-9639-e8fe087b65c9.jpg")
    no-repeat;
  background-size: 100% 101%;
}
.wrap-three {
  padding-top: 0.06rem;
  background: url("https://cs.zhaolipin.net/15c79116-439f-4b86-a6c5-48a1db936974.jpg")
    no-repeat;
  background-size: 100% 101%;
}
.wrap-four {
  padding-top: 0.06rem;
  background: url("https://cs.zhaolipin.net/15c79116-439f-4b86-a6c5-48a1db936974.jpg")
    no-repeat;
  background-size: 100% 101%;
}
.fixed{
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
}
.tabbar {
  width: 3.6rem;
  margin: auto;
  display: flex;
  justify-content: center;
  height: 0.38rem;
  line-height: 0.38rem;
  background: #2c8a8d;
  border-radius: 2px;
  color: #fff;
}
.tabbar div {
  flex: 1;
  text-align: center;
  height: 0.2rem;
  line-height: 0.2rem;
  margin: auto;
}
.tabbar div:not(:last-child) {
  border-right: 1px solid #fff;
}
.inner {
  width: 3.6rem;
  margin: auto;
}
.inner-top {
  text-align: center;
  margin-top: 0.16rem;
}
.inner-top img {
  width: 1.1rem;
  height: .21rem;
}
.inner-photo {
  margin-top: 0.12rem;
  width: 100%;
}
.inner-list {
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  margin-top: 0.1rem;
}
.inner-item {
  width: 1.73rem;
  margin-bottom: 0.2rem;
}
.inner-item > img {
  width: 100%;
  height: 1.8rem;
}
.item-name {
  font-size: 0.16rem;
  overflow:hidden;
  text-overflow:ellipsis;
  white-space:nowrap;
  padding:0 .06rem;
  box-sizing: border-box;
}
.item-row {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding:0 .06rem;
  box-sizing: border-box;
}
.item-price {
  font-weight: bold;
}
.price-symbol {
  font-size: 0.12rem;
}
.price-int {
  font-size: 0.2rem;
}
.price-float {
  font-size: 0.12rem;
}
.item-btn {
  width: 0.8rem;
  text-align: center;
  color: #fff;
  height: 0.22rem;
  line-height: 0.22rem;
  background: #f95656;
  border-radius: 0.1rem;
}

#header_detailscart {
  /* position: fixed;
  top: 0;
  left: 0; */
  width: 3.75rem;
  height: 0.5rem;
  background: #ffffff;
}
.title-top {
  width: 3.75rem;
  height: 0.5rem;
  line-height: 0.5rem;
  font-size: 0.14rem;
  text-align: center;
  font-size: 0.16rem;
}
.footer {
  width: 100%;
  padding: 0.1rem 0;
  background: url('https://cs.zhaolipin.net/c946ca53-3639-4089-8d5a-07bfcf94542b.jpg') no-repeat;
  background-size: 100% 100%;
}
.footer-box {
  width: 3.6rem;
  margin: 0 auto 0.3rem;
  background: #fff;
  padding: 0.1rem;
  box-sizing: border-box;
  color: #1e1a16;
  font-weight: bold;
  border-radius: 0.06rem;
}
.footer-top {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.footer-right {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 1.8rem;
}
.focus {
  display: flex;
  color: #1e1a16;
}
.footer-bottom {
  text-align: center;
}
.serve {
  width: 0.54rem;
  text-align: center;
  padding: 0.02rem 0.06rem;
  background: #ea3536;
  border-radius: 4px;
}
.serve a {
  color: #fff !important;
  font-size: 0.12rem;
}
.phone {
  margin: 0.14rem 0 0.04rem;
}
</style>