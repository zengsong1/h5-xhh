<template>
  <div class="mid-autumn">
    <img src="https://cs.zhaolipin.net/4a7a3f94-95ce-4c2f-af37-bdcbe5492074.jpg" />
    <div class="zqjp">
      <div class="photo">
        <img src="https://cs.zhaolipin.net/83d578a1-bf83-409b-baab-3a689dbfa73f.png" />
      </div>
      <div class="item it1" @click="goDetail(78399)">
        <div class="item-photo">
          <img src="https://cs.zhaolipin.net/89708b18-a28b-48b0-a630-c569c52444b1.jpg" />
        </div>
        <div class="item-box">
          <div>
            <h3 style="font-size:.13rem;margin:.04rem 0;">美心双黄白莲蓉月饼礼盒</h3>
            <p style="font-size:.11rem;margin:.04rem 0;">莲蓉浓滑细腻，巧配咸蛋黄，圆满中秋味道。</p>
          </div>
          <div>
            <div class="price-old">原价：¥318.00</div>
            <div class="price-current">
              优惠价：
              <span>¥</span>
              <b>219.00</b>
            </div>
            <div class="item-btn">
              <div>立即抢购</div>
            </div>
          </div>
        </div>
      </div>
      <div class="item it2" @click="goDetail(78402)">
        <div class="item-box">
          <div>
            <h3 style="font-size:.13rem;margin:.04rem 0;">美心双黄豆沙月饼礼盒</h3>
            <p style="font-size:.11rem;margin:.04rem 0;">选用幼滑味美豆沙，配以甘香 咸蛋黄，香甜滋味，分外诱人。</p>
          </div>
          <div>
            <div class="price-old">原价：¥318.00</div>
            <div class="price-current">
              优惠价：
              <span>¥</span>
              <b>246.00</b>
            </div>
            <div class="item-btn">
              <div>立即抢购</div>
            </div>
          </div>
        </div>
        <div class="item-photo">
          <img src="https://cs.zhaolipin.net/3f0c7159-c9f0-4d3e-ae07-b4cea86ad22e.jpg" />
        </div>
      </div>
      <div class="item it1" @click="goDetail(78401)">
        <div class="item-photo">
          <img src="https://cs.zhaolipin.net/f0c7513a-0005-4caf-93bf-e6ec48ae11d8.jpg" />
        </div>
        <div class="item-box">
          <div>
            <h3 style="font-size:.13rem;margin:.04rem 0;">美心陈皮豆沙月饼礼盒</h3>
            <p style="font-size:.11rem;margin:.04rem 0;">十年新会陈皮片，揉合甜蜜红 豆蓉，层次丰富，清香回甘， 耐人寻味。</p>
          </div>
          <div>
            <div class="price-old">原价：¥318.00</div>
            <div class="price-current">
              优惠价：
              <span>¥</span>
              <b>246.00</b>
            </div>
            <div class="item-btn">
              <div>立即抢购</div>
            </div>
          </div>
        </div>
      </div>
      <div class="item it2" @click="goDetail(78396)">
        <div class="item-box">
          <div>
            <h3 style="font-size:.13rem;margin:.04rem 0;">美心四式流心奶黄月饼</h3>
            <p style="font-size:.11rem;margin:.04rem 0;">回味的流心奶黄，馥郁的流巧 克力，醇香的流心焦糖咖啡及 新登场的流心芝士。</p>
          </div>
          <div>
            <div class="price-old">原价：¥348.00</div>
            <div class="price-current">
              优惠价：
              <span>¥</span>
              <b>238.00</b>
            </div>
            <div class="item-btn">
              <div>立即抢购</div>
            </div>
          </div>
        </div>
        <div class="item-photo">
          <img src="https://cs.zhaolipin.net/b26b08f6-99f6-4106-9ad9-423b8a2ca7e9.jpg" />
        </div>
      </div>
      <div class="item it1" @click="goDetail(78400)">
        <div class="item-photo">
          <img src="https://cs.zhaolipin.net/d2904812-d2e9-4332-9a51-c166ab2c0947.jpg" />
        </div>
        <div class="item-box">
          <div>
            <h3 style="font-size:.13rem;margin:.04rem 0;">美心双黄莲蓉月饼礼盒</h3>
            <p style="font-size:.11rem;margin:.04rem 0;">莲蓉浓滑细腻，巧配咸蛋黄，圆满中秋味道。</p>
          </div>
          <div>
            <div class="price-old">原价：¥318.00</div>
            <div class="price-current">
              优惠价：
              <span>¥</span>
              <b>219.00</b>
            </div>
            <div class="item-btn">
              <div>立即抢购</div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="jhhl">
      <div class="photo">
        <img src="https://cs.zhaolipin.net/5b461d62-d33d-47c7-8d67-ceacad19c18c.png" />
      </div>
      <div class="jhhl-box" @click="goDetail(78398)">
        <div class="inner">
          <div class="jhhl-photo">
            <img src="https://cs.zhaolipin.net/bb04f860-311d-48cf-afc1-ff412c9b665c.jpg" />
          </div>
          <div class="jhhl-t">
            <div>
              <h3 style="font-size:.13rem;margin:.04rem 0;">美心流心芝士月饼礼盒</h3>
              <p style="font-size:.11rem;margin:.04rem 0;">北欧高打芝士，口感醇厚微 咸，味道浓厚带果仁及果香味</p>
            </div>
            <div>
              <div class="price-old">原价：¥328.00</div>
              <div class="current">
                <span>¥</span>
                <b>245.00</b>
              </div>
              <div class="btn">
                <div>立即抢购</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="jhhl-box" @click="goDetail(78403)">
        <div class="inner">
          <div class="jhhl-photo">
            <img src="https://cs.zhaolipin.net/0cadf921-0bc8-472c-b5d6-723d7ec4535a.jpg" />
          </div>
          <div class="jhhl-t">
            <div>
              <h3 style="font-size:.13rem;margin:.04rem 0;">元朗荣华流心奶黄月饼</h3>
              <p style="font-size:.11rem;margin:.04rem 0;">十余种原料精心配比</p>
            </div>
            <div>
              <div class="price-old">原价：¥238.00</div>
              <div class="current">
                <span>¥</span>
                <b>178.00</b>
              </div>
              <div class="btn">
                <div>立即抢购</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="jhhl-list">
        <div class="j-item" @click="goDetail(78407)">
          <div class="j-photo">
            <img src="https://cs.zhaolipin.net/3e77aad1-15a3-43a2-9901-8f9b219a956a.jpg" />
          </div>
          <div class="j-name">徐福记中秋月饼礼盒300g</div>
          <div class="j-price">
            <div class="old">¥ 158.00</div>
            <div class="current">
              <span>¥</span>
              <b>125.00</b>
            </div>
          </div>
          <div class="j-btn">
            <div>立即抢购</div>
          </div>
        </div>
        <div class="j-item" @click="goDetail(78408)">
          <div class="j-photo">
            <img src="https://cs.zhaolipin.net/c388423d-682a-4198-b8f5-8ae787f0a68a.jpg" />
          </div>
          <div class="j-name">徐福记中秋月饼礼盒400g</div>
          <div class="j-price">
            <div class="old">¥ 218.00</div>
            <div class="current">
              <span>¥</span>
              <b>136.00</b>
            </div>
          </div>
          <div class="j-btn">
            <div>立即抢购</div>
          </div>
        </div>
        <div class="j-item" @click="goDetail(78409)">
          <div class="j-photo">
            <img src="https://cs.zhaolipin.net/26749964-c02c-4984-a47e-32f03199d1ac.jpg" />
          </div>
          <div class="j-name">徐福记中秋月饼礼盒500g</div>
          <div class="j-price">
            <div class="old">¥ 268.00</div>
            <div class="current">
              <span>¥</span>
              <b>163.00</b>
            </div>
          </div>
          <div class="j-btn">
            <div>立即抢购</div>
          </div>
        </div>
        <div class="j-item" @click="goDetail(78406)">
          <div class="j-photo">
            <img src="https://cs.zhaolipin.net/91f767db-ee83-44bb-82ce-60b14fd8fcf1.jpg" />
          </div>
          <div class="j-name">元朗荣华月饼礼盒</div>
          <div class="j-price">
            <div class="old">¥ 188.00</div>
            <div class="current">
              <span>¥</span>
              <b>128.00</b>
            </div>
          </div>
          <div class="j-btn">
            <div>立即抢购</div>
          </div>
        </div>
        <div class="j-item" @click="goDetail(78404)">
          <div class="j-photo">
            <img src="https://cs.zhaolipin.net/d862b242-125e-4d50-96a0-b2af7b673576.jpg" />
          </div>
          <div class="j-name">元朗荣华月饼礼盒(流心翡翠)</div>
          <div class="j-price">
            <div class="old">¥ 228.00</div>
            <div class="current">
              <span>¥</span>
              <b>160.00</b>
            </div>
          </div>
          <div class="j-btn">
            <div>立即抢购</div>
          </div>
        </div>
        <div class="j-item" @click="goDetail(78405)">
          <div class="j-photo">
            <img src="https://cs.zhaolipin.net/ce16338c-f1d0-46b3-b693-c848b5cb414a.jpg" />
          </div>
          <div class="j-name">元朗荣华月饼礼盒(流心低糖)</div>
          <div class="j-price">
            <div class="old">¥ 248.00</div>
            <div class="current">
              <span>¥</span>
              <b>159.00</b>
            </div>
          </div>
          <div class="j-btn">
            <div>立即抢购</div>
          </div>
        </div>
      </div>
    </div>
    <div class="mid-footer">
      <div class="footer">
        <img src="https://cs.zhaolipin.net/c40ce628-1039-4a26-8835-77ed0b401e8a.png" style="width:100%" />
        <a href="http://p.qiao.baidu.com/cps/chat?siteId=11906548&userId=24700287">
          <img src="https://cs.zhaolipin.net/366398cf-5626-4be0-8716-f3e996c1b602.png" />
        </a>
        <img src="https://cs.zhaolipin.net/33d4f1f0-53f0-404d-9a4f-f93ec3c43f3c.png" />
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
.mid-autumn {
  background: linear-gradient(0deg, #3c91ff, #d7f0fe);
}
.mid-autumn img {
  width: 100%;
}
.photo {
  position: relative;
  height: 0.3rem;
  margin-top: 0.1rem;
}
.photo img {
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  width: 1.66rem;
  margin: auto;
}
.it2 {
  background: url("https://cs.zhaolipin.net/5cdccd49-6ce1-4e57-98ae-b015299501ed.jpg") no-repeat;
}
.it1 {
  background: url("https://cs.zhaolipin.net/fa5b298e-0693-492c-a85c-d60897cbf02d.jpg") no-repeat;
}
.item {
  width: 3.55rem;
  height: 1.84rem;
  background-size: 100% 100%;
  display: flex;
  justify-content: space-between;
  padding: 0.07rem;
  box-sizing: border-box;
  margin: 0.2rem auto;
}
.item .item-photo {
  width: 1.7rem;
  height: 1.7rem;
  display: flex;
  justify-content: center;
  align-items: center;
}
.item .item-photo img {
  width: 100%;
  height: 100%;
}
.item .item-box {
  width: 1.64rem;
  padding: 0.14rem 0.08rem;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}
.item .price-old {
  text-decoration: line-through;
  color: #ccc;
  font-size: 0.12rem;
}
.item .price-current {
  font-size: 0.12rem;
  color: #151515;
  font-weight: bold;
}
.item .price-current span {
  font-size: 0.14rem;
  color: #d52038;
}
.item .price-current b {
  font-size: 0.18rem;
  color: #d52038;
  font-weight: bold;
}
.item .item-btn {
  font-size: 0.12rem;
  display: flex;
  justify-items: center;
}
.item .item-btn div {
  color: #fff;
  font-weight: bold;
  background: url("../mid-autumn/jt.png") no-repeat;
  background-color: #d52038;
  background-origin: content-box;
  background-position: right;
  width: 0.7rem;
  padding: 0.04rem;
  border-radius: 0.04rem;
}
.jhhl {
  margin-top: .6rem;
}
.jhhl-box {
  width: 3.55rem;
  background: #fef2e2;
  border-radius: 0.06rem;
  margin: 0.2rem auto;
  padding: 0.1rem;
  box-sizing: border-box;
}
.inner {
  display: flex;
  justify-content: space-between;
  border: 1px solid #e4bc94;
  padding-left: 0.2rem;
  box-sizing: border-box;
}
.inner .jhhl-photo {
  width: 1.4rem;
  height: 1.4rem;
}
.inner .jhhl-photo img {
  width: 100%;
  height: 100%;
  transform: rotate(-14deg);
  box-shadow: 2px 2px 6px 1px rgba(0, 0, 0, 0.2);
  padding: 0.02rem;
  background: #fff;
}
.inner .jhhl-t {
  width: 1.4rem;
  padding: 0 0 0.06rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}
.inner .jhhl-t .price-old {
  text-decoration: line-through;
  color: #ccc;
  font-size: 0.12rem;
}
.inner .jhhl-t .current {
  font-size: 0.12rem;
  font-weight: bold;
}
.inner .jhhl-t .current span {
  font-size: 0.14rem;
  color: #d52038;
}
.inner .jhhl-t .current b {
  font-size: 0.18rem;
  color: #d52038;
  font-weight: bold;
}
.inner .jhhl-t .btn {
  font-size: 0.12rem;
  display: flex;
  justify-items: center;
}
.inner .jhhl-t .btn div {
  color: #fff;
  font-weight: bold;
  background-color: #d52038;
  width: 0.7rem;
  text-align: center;
  padding: 0.04rem;
  border-radius: 0.04rem;
}
.jhhl-list {
  margin: 0.2rem auto;
  width: 3.55rem;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  font-size: 0.12rem;
}
.jhhl-list .j-item {
  flex: 0 1 1.73rem;
  margin-top: 0.08rem;
  background-color: #fff;
  text-align: center;
  padding: 0.08rem;
  box-sizing: border-box;
  border-radius: 0.06rem;
}
.jhhl-list .j-item .j-photo img {
  width: 1.59rem;
  height: 1.28rem;
}
.jhhl-list .j-item .j-name {
  font-weight: 800;
  color: #151515;
}
.jhhl-list .j-item .j-price {
  display: flex;
  justify-content: center;
  align-items: center;
}
.jhhl-list .j-item .j-price .old {
  margin-right: 0.1rem;
  text-decoration: line-through;
  color: #ccc;
}
.jhhl-list .j-item .j-price .current {
  font-weight: bold;
  color: #d52038;
}
.jhhl-list .j-item .j-price .current b {
  font-size: 0.18rem;
  font-weight: bold;
}
.jhhl-list .j-item .j-btn {
  display: flex;
  justify-content: center;
}
.jhhl-list .j-item .j-btn div {
  color: #fff;
  font-weight: bold;
  background-color: #d52038;
  width: 0.7rem;
  text-align: center;
  padding: 0.04rem;
  border-radius: 0.04rem;
}
.mid-footer {
  background: url("https://cs.zhaolipin.net/8797cccf-f9d8-4113-b1dd-6b5515a9fa90.jpg") no-repeat;
  background-size: 100% 100%;
}
.mid-footer .footer {
  width: 3.55rem;
  margin: auto;
  position: relative;
}
.mid-footer .footer a img {
  position: absolute;
  top: 0.4rem;
  right: 0.85rem;
  width: 0.64rem !important;
  height: 0.17rem;
}
.mid-footer .footer img:nth-of-type(2) {
  position: absolute;
  top: 0.18rem;
  right: 0.15rem;
  width: 0.39rem;
  height: 0.39rem;
}
</style>