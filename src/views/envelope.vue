<template>
  <div class="envelope">
    <img
      src="https://cs.zhaolipin.net/f8d9d5ce-c852-4731-8c6f-4f4a68dcfb10.jpg"
      width="100%"
      style="display: block"
    />
    <div class="new-goods-top">
      <img
        src="https://cs.zhaolipin.net/db946346-1411-4372-84f3-abf8589c013d.png"
      />
    </div>
    <div class="new-goods">
      <div class="new-goods-chunk" @click="goDetail(79866)">
        <div class="new-chunk-inner">
          <div class="inner-top">
            <div class="inner-title">2021年纳福红包</div>
            <div class="inner-des">击凸/燙磨砂金</div>
          </div>
          <div class="inner-bottom">
            <div class="inner-bottom-txt">活动价</div>
            <div class="inner-bottom-price">
              <span class="symbol">¥</span><span class="zero">0</span>.27
            </div>
            <div class="inner-bottom-btn">立即购买</div>
          </div>
        </div>
      </div>
      <div class="new-goods-box" @click="goDetail(79892)">
        <div class="new-chunk-inner">
          <div class="inner-top">
            <div class="inner-title">2021年纳福红包</div>
            <div class="inner-des">击凸/燙红金</div>
          </div>
          <div class="inner-bottom">
            <div class="inner-bottom-txt">活动价</div>
            <div class="inner-bottom-price">
              <span class="symbol">¥</span><span class="zero">0</span>.48
            </div>
            <div class="inner-bottom-btn">立即购买</div>
          </div>
        </div>
      </div>
      <div class="new-goods-item1">
        <div class="new-goods-black" @click="goDetail(79865)">
          <div class="new-black-inner">
            <div class="inner-top">
              <div class="inner-title" style="text-align:center">2021新年利是封</div>
              <div class="inner-des" style="text-align:center">击凸立体/燙磨砂金</div>
            </div>
            <div class="inner-bottom">
              <div class="inner-bottom-txt" style="font-weight: 400;color: #540000;">活动价</div>
              <div class="inner-bottom-price">
                <span class="symbol">¥</span><span class="zero">0</span>.59
              </div>
              <div class="inner-bottom-btn">立即购买</div>
            </div>
          </div>
          <img src="https://cs.zhaolipin.net/892f7ade-de65-49f4-a7c0-d689d7ec9a0c.jpg" class="new-goods-black-img">
        </div>
      </div>
      <div class="new-goods-item2">
          <div class="new-goods-black"  @click="goDetail(79863)">
          <div class="new-black-inner2">
            <div class="inner-top">
              <div class="inner-title" style="text-align:center">2021新年利是封</div>
              <div class="inner-des" style="text-align:center">击凸/燙金</div>
            </div>
            <div class="inner-bottom">
              <div class="inner-bottom-txt" style="font-weight: 400;color: #540000;">活动价</div>
              <div class="inner-bottom-price">
                <span class="symbol">¥</span><span class="zero">0</span>.61
              </div>
              <div class="inner-bottom-btn">立即购买</div>
            </div>
          </div>
          <img src="https://cs.zhaolipin.net/892f7ade-de65-49f4-a7c0-d689d7ec9a0c.jpg" class="new-goods-black-img2">
        </div>
      </div>
    </div>
    <div class="hot-goods">
      <img
        src="https://cs.zhaolipin.net/21b62f01-3516-4d43-b2a9-318fcd6b5b58.png"
        class="hot-title"
      />
      <div class="hot-list">
        <div class="list-inner">
          <div class="hot-item" @click="goDetail(79873)">
            <div class="hot-item-top">
              <img
                src="https://cs.zhaolipin.net/c752eddb-6158-4a4f-b49f-fcf2fb0f8202.jpg"
              />
              <div class="hot-name">2021新年利是封</div>
            </div>
            <div class="hot-bottom">
                <div class="hot-bottom-price">
                <span class="symbol">¥</span><span class="zero">0</span>.54
                </div>
                <div class="hot-bottom-btn">
                    <img src="https://cs.zhaolipin.net/5d751028-8037-4401-b3e3-6194e5e7c44f.png">
                    <div>立即购买</div>
                </div>
            </div>
          </div>
          <div class="hot-item" @click="goDetail(79884)">
            <div class="hot-item-top">
              <img
                src="https://cs.zhaolipin.net/e1cf510f-6ad5-4c4e-b312-fe88829441ff.jpg"
              />
              <div class="hot-name">2021年纳福红包</div>
            </div>
            <div class="hot-bottom">
                <div class="hot-bottom-price">
                <span class="symbol">¥</span><span class="zero">0</span>.43
                </div>
                <div class="hot-bottom-btn">
                    <img src="https://cs.zhaolipin.net/5d751028-8037-4401-b3e3-6194e5e7c44f.png">
                    <div>立即购买</div>
                </div>
            </div>
          </div>
          <div class="hot-item" @click="goDetail(79871)">
            <div class="hot-item-top">
              <img
                src="https://cs.zhaolipin.net/4ce161b7-b029-4b92-b424-6e71323fce39.jpg"
              />
              <div class="hot-name">2021新年利是封</div>
            </div>
            <div class="hot-bottom">
                <div class="hot-bottom-price">
                <span class="symbol">¥</span><span class="zero">0</span>.38
                </div>
                <div class="hot-bottom-btn">
                    <img src="https://cs.zhaolipin.net/5d751028-8037-4401-b3e3-6194e5e7c44f.png">
                    <div>立即购买</div>
                </div>
            </div>
          </div>
          <div class="hot-item" @click="goDetail(79895)">
            <div class="hot-item-top">
              <img
                src="https://cs.zhaolipin.net/2ab28813-3eb7-4d25-837b-32915007667a.jpg"
              />
              <div class="hot-name">2021年纳福红包</div>
            </div>
            <div class="hot-bottom">
                <div class="hot-bottom-price">
                <span class="symbol">¥</span><span class="zero">0</span>.48
                </div>
                <div class="hot-bottom-btn">
                    <img src="https://cs.zhaolipin.net/5d751028-8037-4401-b3e3-6194e5e7c44f.png">
                    <div>立即购买</div>
                </div>
            </div>
          </div>
          <div class="hot-item" @click="goDetail(79907)">
            <div class="hot-item-top">
              <img
                src="https://cs.zhaolipin.net/938cbcf3-c5fe-4d07-92f6-4eb8c1464ebf.jpg"
              />
              <div class="hot-name">2021年纳福红包</div>
            </div>
            <div class="hot-bottom">
                <div class="hot-bottom-price">
                <span class="symbol">¥</span><span class="zero">0</span>.41
                </div>
                <div class="hot-bottom-btn">
                    <img src="https://cs.zhaolipin.net/5d751028-8037-4401-b3e3-6194e5e7c44f.png">
                    <div>立即购买</div>
                </div>
            </div>
          </div>
          <div class="hot-item" @click="goDetail(79897)">
            <div class="hot-item-top">
              <img
                src="https://cs.zhaolipin.net/fa537478-cce3-445f-9a50-5a411d8040f6.jpg"
              />
              <div class="hot-name">2021年纳福红包</div>
            </div>
            <div class="hot-bottom">
                <div class="hot-bottom-price">
                <span class="symbol">¥</span><span class="zero">0</span>.43
                </div>
                <div class="hot-bottom-btn">
                    <img src="https://cs.zhaolipin.net/5d751028-8037-4401-b3e3-6194e5e7c44f.png">
                    <div>立即购买</div>
                </div>
            </div>
          </div>
          <div class="hot-item" @click="goDetail(79870)">
            <div class="hot-item-top">
              <img
                src="https://cs.zhaolipin.net/7f548a32-8bf5-41a4-a4dd-532c6560239d.jpg"
              />
              <div class="hot-name">2021新年利是封</div>
            </div>
            <div class="hot-bottom">
                <div class="hot-bottom-price">
                <span class="symbol">¥</span><span class="zero">0</span>.54
                </div>
                <div class="hot-bottom-btn">
                    <img src="https://cs.zhaolipin.net/5d751028-8037-4401-b3e3-6194e5e7c44f.png">
                    <div>立即购买</div>
                </div>
            </div>
          </div>
          <div class="hot-item" @click="search('利是封')">
            <div class="hot-item-top">
              <div class="look-more">
                <img
                  src="https://cs.zhaolipin.net/92884417-7aef-4880-bbaa-0b5634a4f84c.jpg"
                  style="height:1.76rem"
                />
                <div class="look-more-txt">查看更多</div>
              </div>
            </div>
            <div class="hot-bottom">
                <div class="hot-bottom-btn" style="margin-left:0">
                    <img src="https://cs.zhaolipin.net/5d751028-8037-4401-b3e3-6194e5e7c44f.png">
                    <div>查看更多利是封</div>
                </div>
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
          style="width: 1.4rem;"
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
            <div style="margin-top:.16rem">400-830-9639</div>
          </div>
          <div>
            <a
              class="focus"
              href="https://weibo.com/p/1006065877133701/home?from=page_100606&mod=TAB&is_all=1#place"
            >
              <img
                src="https://cs.zhaolipin.net/bc481af9-4f18-4710-adcd-b46ba658836c.png" style="width:.16rem;height:.16rem"
              />
              <div style="margin-left: 0.02rem">@艾象商城</div>
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
</template>

<script>
export default {
  methods:{
    search(name){
      this.$router.push({
        path: "/search",
        query: {
          GOODS_NAME: name,
          isActivity:true
        },
      });
    },
    goDetail(id) {
      this.$router.push({
        path: "/detail",
        query: {
          id: id,
          isFestival:true
        },
      });
    }
  }
};
</script>

<style>
.envelope {
  font-size: 0.12rem;
}
.new-goods-top {
  width: 100%;
  height: 0.4rem;
  line-height: 0.6rem;
  text-align: center;
  background: url(https://cs.zhaolipin.net/0ebf692b-7161-4e71-8f84-0762a2b8d5b0.jpg) no-repeat;
  background-size: 100% 100%;
  padding-bottom: .1rem;
}
.new-goods-top img {
  width: 1.8rem;
}
.new-goods {
  width: 100%;
  background: url(https://cs.zhaolipin.net/88f02378-5083-4030-ac01-147d508b26c4.jpg) no-repeat;
  background-size: 100% 100%;
}
.new-goods-chunk {
  position: relative;
  width: 3.5rem;
  margin: 0 auto;
  height: 1.4rem;
  background: url(https://cs.zhaolipin.net/3bc33381-6d54-465f-935c-3dd5a855ae76.png) no-repeat;
  background-size: 100% 100%;
}
.new-chunk-inner {
  position: absolute;
  right: 0;
  top: 0;
  bottom: 0;
  width: 1.6rem;
  height: 1rem;
  margin: auto;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}
.inner-title{
font-size: .16rem;
font-weight: bold;
color: #121212;
}
.inner-des{
    margin-top: .04rem;
font-weight: 400;
color: #363636;
}
.inner-bottom {
  display: flex;
  /* align-items: center; */
  align-items: baseline;
}
.inner-bottom-txt{

font-weight: bold;
color: #E6100C;
}
.zero{
    font-size: .2rem;
}
.inner-bottom-price{
    font-weight: bold;
color: #E6100C;
margin: 0 .04rem;
}
.inner-bottom-btn{

background: #E6100C;
font-weight: 400;
color: #FFFFFF;
border-radius: .12rem;
padding: .04rem;
}
.new-goods-box {
  position: relative;
  width: 3.5rem;
  margin: 0.1rem auto 0.04rem;
  height: 1.4rem;
  background: url(https://cs.zhaolipin.net/eee4b3dc-b9e2-4b2a-9488-d40fbceed1ef.png) no-repeat;
  background-size: 100% 100%;
}
.new-goods-item1 {
  width: 100%;
  height: 1.4rem;
  background: url(https://cs.zhaolipin.net/5c7aeb88-572a-4a29-a99d-41b4bb37aeec.jpg) no-repeat;
  background-size: 100% 100%;
}
.new-goods-black {
  position: relative;
  width: 3.5rem;
  height: 1.4rem;
  margin: 0 auto;
}
.new-black-inner {
  position: absolute;
  left: 0;
  top: 0;
  bottom: 0;
  width: 1.6rem;
  height: 1rem;
  margin: auto;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}
.new-goods-black-img{
    position: absolute;
    right: 0;
    top: .05rem;
    width: 1.65rem;
    height: 1.35rem;
}
.new-black-inner2 {
  position: absolute;
  right: 0;
  top: 0;
  bottom: 0;
  width: 1.6rem;
  height: 1rem;
  margin: auto;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}
.new-goods-black-img2{
    position: absolute;
    left: 0;
    width: 1.68rem;
    height: 1.4rem;
}
.new-goods-item2 {
  width: 100%;
  height: 1.4rem;
  background: url(https://cs.zhaolipin.net/9a9e698c-ed19-46b7-96b5-dd92ad4ad864.jpg) no-repeat;
  background-size: 100% 100%;
}
.hot-goods {
  width: 100%;
  text-align: center;
  padding: .3rem 0 .1rem;
  background: url(https://cs.zhaolipin.net/038b7ab8-5958-40a1-a50c-6be57650ff10.jpg) no-repeat;
  background-size: 100% 102%;
}
.hot-title {
  width: 1.8rem;
}
.hot-list {
  width: 3.5rem;
  margin: 0 auto;
  background: rgba(69, 54, 54, 0.1);
  border-radius: 0.1rem;
}
.list-inner {
  width: 3.4rem;
  margin: 0 auto;
  padding: 0.1rem 0 0;
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
}
.hot-item {
    margin-bottom: .2rem;
}
.hot-item-top {
  padding: 0.06rem;
  background-color: #FFF1EDEF;
  margin-bottom: .08rem;
  height: 1.82rem;
}
.hot-item-top img {
  width: 1.5rem;
}
.hot-title{
text-align: center;
}
.hot-name{
    text-align: center;
    width: 100%;
    color: #141414;
    height: .36rem;
    line-height: .36rem;
    font-size: .14rem;
}
.hot-bottom{
display: flex;
align-items: center;
color: #fff;
}
.hot-bottom-txt{

}
.hot-bottom-price{
font-size: .14rem;
}
.hot-bottom-btn{
display: flex;
flex: 1;
justify-content: center;
align-items: center;
background: #FFE29A;
color: #E93B3B;
margin-left: .06rem;
padding: .06rem .04rem;
box-sizing: border-box;
}
.hot-bottom-btn img{
    width: .2rem;
    height: .2rem;
}
.look-more{
  position: relative;
}
.look-more-txt{
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  width: .7rem;
  height: .7rem;
  border-radius: 50%;
  background-color: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: auto;
}

.footer{
  background: url(https://cs.zhaolipin.net/1a4d3b44-68b9-4270-852d-1bad7bc84757.jpg) no-repeat;
  background-size: 100% 100%;
  padding: 0 0 .1rem;
}
.footer-box {
  width: 3.5rem;
  margin: 0 auto 0.3rem;
  background: #fff;
  padding: 0.1rem;
  box-sizing: border-box;
  color: #1E1A16;
  font-weight: bold;
  border: 1px solid #dcdcdc;
  border-radius: .06rem;
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
  color: #1E1A16;
}
.footer-bottom {
  text-align: center;
}
.serve {
  width: 0.54rem;
  padding: 0.02rem 0.06rem;
  background: #FFD58B;
  
}
.serve a {
    color: #fff !important;
  }
.phone {
  margin: 0.14rem 0 0.04rem;
}
</style>