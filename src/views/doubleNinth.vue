<template>
  <div class="double-ninth">
    <img src="https://cs.zhaolipin.net/2829f709-3970-4945-a339-0e4f8446bac0.jpg" style="width:100%" />
    <div class="brand">
      <div class="bg1">
        <img
          src="https://cs.zhaolipin.net/c00d8d2e-172e-4f25-a19a-433519e1bf64.png"
          style="width:1.67rem;margin-top:.2rem"
        />
        <div class="goods-top">
          <div class="goods-item" @click="goDetail(78203)">
            <img src="https://cs.zhaolipin.net/7054e46e-f435-448b-81c5-75c5ba787270.jpg" />
            <div class="item-name">刀唛花生油5L</div>
            <div class="item-row">
              <div class="item-btn">
                <div>¥ 159.00</div>
                <div class="line">|</div>
                <div>立即购买</div>
              </div>
            </div>
          </div>
          <div class="goods-item" style=" margin-top: .08rem;" @click="goDetail(76616)">
            <img src="https://cs.zhaolipin.net/bcfeecaf-b829-424b-b408-9e5dfb696e6c.jpg" />
            <div class="item-name">乔府大院五常大米5kg</div>
            <div class="item-row">
              <div class="item-btn">
                <div>¥ 87.00</div>
                <div class="line">|</div>
                <div>立即购买</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="bg2">
        <div class="item-box">
          <div class="item" @click="goDetail(79137)">
            <img src="https://cs.zhaolipin.net/d849e52c-9b4d-4f5f-9c85-c7b0539dd18a.jpg" />
            <div class="item-name">干白花菇150g</div>
            <div class="item-des">肉质肥厚 外形饱满</div>
            <div class="item-price">¥ 22.00</div>
            <div class="item-row">
              <div class="item-btn">立即购买</div>
            </div>
          </div>
          <div class="item" @click="goDetail(79140)">
            <img src="https://cs.zhaolipin.net/65c6a3a8-513b-4236-be3b-05cbb372c31b.jpg" />
            <div class="item-name">金龙鱼纯正花生油900ml</div>
            <div class="item-des">纯正压榨一级花生油</div>
            <div class="item-price">¥ 28.30</div>
            <div class="item-row">
              <div class="item-btn">立即购买</div>
            </div>
          </div>
          <div class="item" @click="goDetail(79151)">
            <img src="https://cs.zhaolipin.net/2de20108-a697-40f6-81ac-5d400d24d141.jpg" />
            <div class="item-name">伊利欣活中老年奶粉</div>
            <div class="item-des">400g袋装</div>
            <div class="item-price">¥ 31.80</div>
            <div class="item-row">
              <div class="item-btn">立即购买</div>
            </div>
          </div>
          <div class="item" @click="goDetail(79143)">
            <img src="https://cs.zhaolipin.net/2c8d1a82-33b2-4bb1-b460-35d4d157b73e.jpg" />
            <div class="item-name">智力即食中老年复合燕麦片</div>
            <div class="item-des">700g</div>
            <div class="item-price">¥ 25.70</div>
            <div class="item-row">
              <div class="item-btn">立即购买</div>
            </div>
          </div>
          <div class="item" @click="goDetail(79138)">
            <img src="https://cs.zhaolipin.net/6c9a8415-d2bd-4352-a1b5-2bf9043a72ca.jpg" />
            <div class="item-name">高老头无蔗糖黑芝麻糊</div>
            <div class="item-des">700g</div>
            <div class="item-price">¥ 19.80</div>
            <div class="item-row">
              <div class="item-btn">立即购买</div>
            </div>
          </div>
          <div class="item" @click="goDetail(79149)">
            <img src="https://cs.zhaolipin.net/ed2382e6-5f8f-4cde-b136-b3c81b4dde36.jpg" />
            <div class="item-name">唐人福红豆薏米坚果沙琪玛</div>
            <div class="item-des">无添加蔗糖</div>
            <div class="item-price">¥ 29.90</div>
            <div class="item-row">
              <div class="item-btn">立即购买</div>
            </div>
          </div>
          <div class="item" @click="goDetail(79133)">
            <img src="https://cs.zhaolipin.net/3b2d4755-b950-4f3c-b4a9-479d00925000.jpg" />
            <div class="item-name">西麦燕麦片1kg</div>
            <div class="item-des">澳洲进口燕麦 无添加蔗糖</div>
            <div class="item-price">¥ 15.90</div>
            <div class="item-row">
              <div class="item-btn">立即购买</div>
            </div>
          </div>
          <div class="item" @click="goDetail(79142)">
            <img src="https://cs.zhaolipin.net/dd3ef2e2-30a5-4390-b63a-7d29180a2836.jpg" />
            <div class="item-name">鲁花花生油900ml</div>
            <div class="item-des">5S物理压榨</div>
            <div class="item-price">¥ 34.60</div>
            <div class="item-row">
              <div class="item-btn">立即购买</div>
            </div>
          </div>
          <div class="item" @click="goDetail(79128)">
            <img src="https://cs.zhaolipin.net/a8a79d79-3392-4768-9e53-ca3f4547de13.jpg" />
            <div class="item-name">乔府大院长粒香米5kg</div>
            <div class="item-des">粒粒饱满 香甜软糯</div>
            <div class="item-price">¥ 99.00</div>
            <div class="item-row">
              <div class="item-btn">立即购买</div>
            </div>
          </div>
          <div class="item" @click="goDetail(79134)">
            <img src="https://cs.zhaolipin.net/e49b64ce-00a6-411a-b570-803f8b889050.jpg" />
            <div class="item-name">贝氏即食燕麦片1000g</div>
            <div class="item-des">优选原料 粒粒金黄</div>
            <div class="item-price">¥ 19.90</div>
            <div class="item-row">
              <div class="item-btn">立即购买</div>
            </div>
          </div>
          <div class="item" @click="goDetail(79148)">
            <img src="https://cs.zhaolipin.net/3087ca97-2e54-41e4-abf3-1a5d1b8bcabf.jpg" />
            <div class="item-name">唐人福苦荞山药坚果沙琪玛</div>
            <div class="item-des">无添加蔗糖</div>
            <div class="item-price">¥ 25.70</div>
            <div class="item-row">
              <div class="item-btn">立即购买</div>
            </div>
          </div>
          <div class="item" @click="goDetail(79144)">
            <img src="https://cs.zhaolipin.net/960c0b36-7890-4f6d-8110-1265ad453d0e.jpg" />
            <div class="item-name">智力罐装燕麦片1kg</div>
            <div class="item-des">选用进口澳洲燕麦</div>
            <div class="item-price">¥ 29.90</div>
            <div class="item-row">
              <div class="item-btn">立即购买</div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="brand">
      <div class="bg1">
        <img
          src="https://cs.zhaolipin.net/f5f0ff25-4079-4f9d-bbce-3ff8018266fe.png"
          style="width:1.67rem;margin-top:.2rem"
        />
        <div class="goods-top">
          <div class="goods-item" @click="goDetail(79152)">
            <img
              src="https://cs.zhaolipin.net/3a082a1d-8e6d-47aa-9ba0-9b325eb8ce59.png"
              style="transform: translateY(-.1rem);"
            />
            <div class="item-name" style="transform: translateY(-.06rem);">伊利欣活中老年奶粉罐装900g</div>
            <div class="item-des">均膳益方 让父母全心享受生活</div>
            <div class="item-row">
              <div class="item-btn">
                <div>¥ 79.80</div>
                <div class="line">|</div>
                <div>立即购买</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="bg2">
        <div class="item-box">
          <div class="item" @click="goDetail(79135)">
            <img src="https://cs.zhaolipin.net/9b564ea3-fba8-4016-9f18-0c64753c5b12.jpg" />
            <div class="item-name">家家麦纯燕麦片1000g</div>
            <div class="item-des">澳洲燕麦粒</div>
            <div class="item-price">¥ 21.60</div>
            <div class="item-row">
              <div class="item-btn">立即购买</div>
            </div>
          </div>
          <div class="item" @click="goDetail(79127)">
            <img src="https://cs.zhaolipin.net/08cb5160-e9e6-40e0-b223-09c2e33f5ae1.jpg" />
            <div class="item-name">乔府大院五优香米5kg</div>
            <div class="item-des">米粒晶莹饱满 米饭口感弹糯</div>
            <div class="item-price">¥ 56.00</div>
            <div class="item-row">
              <div class="item-btn">立即购买</div>
            </div>
          </div>
          <div class="item" @click="goDetail(79150)">
            <img src="https://cs.zhaolipin.net/370390d0-83e1-431d-aab0-692312bbde80.jpg" />
            <div class="item-name">唐人福黑苦荞坚果沙琪玛</div>
            <div class="item-des">无添加蔗糖</div>
            <div class="item-price">¥ 27.60</div>
            <div class="item-row">
              <div class="item-btn">立即购买</div>
            </div>
          </div>
          <div class="item" @click="goDetail(79132)">
            <img src="https://cs.zhaolipin.net/fafc030e-918f-419c-9d4f-d737fab62057.jpg" />
            <div class="item-name">西麦燕麦片1000g</div>
            <div class="item-des">澳洲进口原料 无添加蔗糖</div>
            <div class="item-price">¥ 25.30</div>
            <div class="item-row">
              <div class="item-btn">立即购买</div>
            </div>
          </div>
          <div class="item" @click="goDetail(79126)">
            <img src="https://cs.zhaolipin.net/ce815ae2-84ff-4e37-8c59-6b62f904a90f.jpg" />
            <div class="item-name">南山中老年牛奶粉 900g</div>
            <div class="item-des">高钙高蛋白</div>
            <div class="item-price">¥ 113.00</div>
            <div class="item-row">
              <div class="item-btn">立即购买</div>
            </div>
          </div>
          <div class="item" @click="goDetail(79147)">
            <img src="https://cs.zhaolipin.net/6f37daa4-265e-4e93-87a3-329ede45f994.jpg" />
            <div class="item-name">唐人福藜麦坚果沙琪玛</div>
            <div class="item-des">无添加蔗糖</div>
            <div class="item-price">¥ 25.70</div>
            <div class="item-row">
              <div class="item-btn">立即购买</div>
            </div>
          </div>
          <div class="item" @click="goDetail(79146)">
            <img src="https://cs.zhaolipin.net/6a1f4a36-1b07-47fa-97c4-941b8c96bcb6.jpg" />
            <div class="item-name">智力手磨黑芝麻糊700g</div>
            <div class="item-des">无添加白砂糖</div>
            <div class="item-price">¥ 23.80</div>
            <div class="item-row">
              <div class="item-btn">立即购买</div>
            </div>
          </div>
          <div class="item" @click="goDetail(79141)">
            <img src="https://cs.zhaolipin.net/4189d3d9-8f18-4391-8580-dd8c7f7aa48f.jpg" />
            <div class="item-name">福临门花生油900ml</div>
            <div class="item-des">传承土榨 压榨一级</div>
            <div class="item-price">¥ 27.60</div>
            <div class="item-row">
              <div class="item-btn">立即购买</div>
            </div>
          </div>
          <div class="item" @click="goDetail(79136)">
            <img src="https://cs.zhaolipin.net/d1be9346-803f-497b-88b7-b961a8756439.jpg" />
            <div class="item-name">古田天白花菇250g</div>
            <div class="item-des">圆润饱满 质嫩肉厚</div>
            <div class="item-price">¥ 33.50</div>
            <div class="item-row">
              <div class="item-btn">立即购买</div>
            </div>
          </div>
          <div class="item" @click="goDetail(79139)">
            <img src="https://cs.zhaolipin.net/64a38c56-c0c4-4d68-b9dc-93b0ee89c1bd.jpg" />
            <div class="item-name">刀唛花生油900ml</div>
            <div class="item-des">地道醇香 原汁原味</div>
            <div class="item-price">¥ 32.50</div>
            <div class="item-row">
              <div class="item-btn">立即购买</div>
            </div>
          </div>
          <div class="item" @click="goDetail(79145)">
            <img src="https://cs.zhaolipin.net/2e606332-2844-4064-b3b0-2beb8a7bf0fb.jpg" />
            <div class="item-name">智力进口澳洲燕麦片1.5kg</div>
            <div class="item-des">选用进口澳洲燕麦</div>
            <div class="item-price">¥ 26.80</div>
            <div class="item-row">
              <div class="item-btn">立即购买</div>
            </div>
          </div>
          <div class="item" @click="goDetail(70902)">
            <img src="https://cs.zhaolipin.net/2916ea24-3492-4d63-ac02-c0bf602fd662.jpg" />
            <div class="item-name">刀唛玉米油 5L</div>
            <div class="item-des">物理压榨 非转基因</div>
            <div class="item-price">¥ 98.00</div>
            <div class="item-row">
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
            src="https://cs.zhaolipin.net/3d869355-c9a2-42f8-9382-54826477c7bc.png"
            style="width: 1.2rem;height: 0.31rem;"
          />
          <div class="footer-right">
            <div class="footer-txt">
              <div class="txt-phone">联系我们 400-830-9639</div>
              <div class="txt-kf">
                <a href="http://p.qiao.baidu.com/cps/chat?siteId=11906548&userId=24700287">
                  <img src="https://cs.zhaolipin.net/570445a0-d640-4cc2-95cc-5a0fd190f13e.png" />
                  <span style="margin-left:.06rem;font-weight: bold;">在线客服</span>
                </a>
              </div>
            </div>
            <img
              src="https://cs.zhaolipin.net/2894e990-c019-48e7-9c6e-4395c691b638.png"
              style="width: 0.46rem;height: 0.46rem;"
            />
          </div>
        </div>
        <div class="footer-bottom">大集团采购商城&nbsp;&nbsp; 一站式企业礼品定制平台</div>
      </div>
    </div>
    <div class="fixed">
      <router-link to="index">
        <img src="../img/home/icon/shouye.png" style=" height: .4rem;" />
      </router-link>
      <img
        src="../festival/cart.png"
        style=" margin-top:.2rem;height: .4rem;border-radius: 50%;"
        @click="goShopCart"
      />
      <img
        src="../img/home/icon/dingbu1.png"
        style=" margin-top:.2rem; height: .4rem;"
        v-show="isFixed"
        @click="checktop"
      />
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isFixed: false,
    };
  },
  mounted() {
    window.onscroll = function () {
      //变量scrollTop是滚动条滚动时，距离顶部的距离
      var scrollTop =
        document.documentElement.scrollTop || document.body.scrollTop;
      //变量windowHeight是可视区的高度
      var windowHeight =
        document.documentElement.clientHeight || document.body.clientHeight;
      //变量scrollHeight是滚动条的总高度
      var scrollHeight =
        document.documentElement.scrollHeight || document.body.scrollHeight;
      //滚动条到底部的条件
      if (scrollTop + windowHeight == scrollHeight) {
        this.isFixed = true;
      }
    };
    window.addEventListener("scroll", this.handleScroll); //固定导航
  },
  methods: {
    goDetail(id) {
      this.$router.push({
        path: "/detail",
        query: {
          id: id,
          isFestival:true
        },
      });
    },
    handleScroll() {
      let scrollTop =
        window.pageYOffset ||
        document.documentElement.scrollTop ||
        document.body.scrollTop;
      if (scrollTop >= 100) {
        this.isFixed = true;
      } else {
        this.isFixed = false;
      }
    },
    checktop() {
      window.pageYOffset = 0;
      document.documentElement.scrollTop = 0;
      document.body.scrollTop = 0;
    },
    goShopCart() {
      this.$router.push({
        path: "/shoppingcart",
      });
    },
  },
};
</script>

<style  scoped>
.fixed {
  width: 0.4rem;
  height: 1.5rem;
  position: fixed;
  right: 0.1rem;
  top: 50%;
  transform: translatey(-50%);
}
.fixed img {
  display: block;
}
.double-ninth {
  font-size: 0.14rem;
}
.brand {
  text-align: center;
}
.bg1 {
  background: url("https://cs.zhaolipin.net/3eb30cb1-e94f-4161-92db-7f6ea36b4896.jpg") no-repeat;
  background-size: 100% 100%;
}
.bg2 {
  background: url("https://cs.zhaolipin.net/7ec836f5-9366-4d25-90b4-11221de76a3d.jpg") no-repeat;
  background-size: 100% 100%;
}
.goods-top {
  width: 3.53rem;
  margin: auto;
  background: #a10003;
  padding: 0.09rem 0.09rem 0;
  box-sizing: border-box;
}
.goods-top .goods-item {
  background: #fff;
  padding: 0.07rem;
  box-sizing: border-box;
}
.goods-top .goods-item img {
  width: 3.21rem;
}
.goods-top .goods-item .item-name {
  font-size: 0.15rem;
  font-weight: bold;
  color: #191919;
}
.goods-top .goods-item .item-row {
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 0.04rem;
}
.goods-top .goods-item .item-row .item-btn {
  display: flex;
  justify-content: center;
  align-items: center;
  background: #fc6643;
  color: #fff;
  padding: 0.04rem 0.12rem;
  box-sizing: border-box;
  border-radius: 0.14rem;
}
.goods-top .goods-item .item-row .item-btn .line {
  width: 0.2rem;
  text-align: center;
}
.item-box {
  width: 3.53rem;
  margin: auto;
  background: #a10003;
  padding: 0 0.09rem 0.09rem;
  box-sizing: border-box;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
}
.item-box .item {
  flex: 0 1 1.63rem;
  background: #fff;
  padding-bottom: 0.1rem;
  margin-top: 0.09rem;
}
.item-box .item img {
  width: 1.63rem;
  height: 1.63rem;
}
.item-box .item .item-name {
  font-size: 0.13rem;
  font-weight: bold;
  color: #191919;
  white-space: nowrap;
}
.item-box .item .item-price {
  font-weight: bold;
  color: #fc6643;
}
.item-box .item .item-row {
  display: flex;
  justify-content: center;
  align-items: center;
}
.item-box .item .item-row .item-btn {
  display: flex;
  justify-content: center;
  align-items: center;
  background: #fc6643;
  color: #fff;
  padding: 0.04rem 0.16rem;
  box-sizing: border-box;
  border-radius: 0.14rem;
}
.item-des {
  font-size: 0.12rem;
  color: #191919;
}
.footer {
  background: url("https://cs.zhaolipin.net/8613f5f9-40ef-4322-9587-d6dad3c3d98b.jpg") no-repeat;
  padding: 0.14rem 0 0.26rem;
  background-size: 100% 100%;
}
.footer-box {
  width: 3.52rem;
  margin: auto;
  border: 0.01rem solid #7f7f7f;
  border-top: .02rem solid #7f7f7f;
}
.footer-top {
  display: flex;
  align-items: center;
  padding: 0.12rem 0.09rem 0.07rem 0.12rem;
  box-sizing: border-box;
  background: #fff;
}
.footer-right {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.footer-txt {
  margin: 0 0.16rem;
}
.txt-phone {
  white-space: nowrap;
  font-size: 0.12rem;
  color: #191919;
  font-weight: bold;
}
.txt-kf a {
  display: block;
  width: .8rem;
  text-align: center;
  font-size: 0.12rem;
  color: #db281e;
  border: 0.01rem solid #db281e;
  margin-top: 0.08rem;
  padding: .02rem 0;
}
.txt-kf a img {
  vertical-align: middle;
  width: 0.13rem;
  height: 0.12rem;
}
.footer-bottom {
  color: rgba(28, 28, 28, 0.7);
  background-color: #ccc;
  text-align: center;
  height: .24rem;
  line-height: .24rem;
  font-size: .12rem;
}
</style>