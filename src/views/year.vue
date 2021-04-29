<template>
  <div>
    <div id="header_detailscart">
      <goback></goback>
      <div class="title-top">年终特惠购</div>
    </div>
    <div class="year">
      <img
        src="https://cs.zhaolipin.net/9350dae7-cfad-4bef-a783-60b129df3c9a.jpg"
        style="width: 100%; display: block;overflow:hidden"
      />
      <div class="new-bg">
        <div class="new-inner-box">
          <img
            src="https://cs.zhaolipin.net/ced9ffb9-3c57-4695-8049-878d4410dbe3.png"
            style="width: 3.33rem; margin-top: 0.52rem;height:1.87rem;"
            @click="goDetail(76485)"
          />
          <img
            src="https://cs.zhaolipin.net/34da8002-4f58-4bb0-933a-d1685e463f7c.png"
            style="width: 3.33rem; margin-top: 0.04rem;height:1.87rem;"
            @click="goDetail(80144)"
          />
          <img
            src="https://cs.zhaolipin.net/24633147-94fa-4a2c-a5c4-d20064650d6e.png"
            style="width: 3.33rem; margin-top: 0.04rem;height:1.87rem;"
            @click="goDetail(80116)"
          />
        </div>
        <div class="new-inner-box2">
          <img
            src="https://cs.zhaolipin.net/7ec96de3-7f31-4fac-8cf1-2b65d910cf73.png"
            style="width: 1.63rem; margin-bottom: 0.07rem;height:2.10rem"
            @click="goDetail(80139)"
          />
          <img
            src="https://cs.zhaolipin.net/361462d6-6ecb-4c8b-8eab-fcd665d5f295.png"
            style="width: 1.63rem; margin-bottom: 0.07rem;height:2.10rem"
            @click="goDetail(80124)"
          />
          <img
            src="https://cs.zhaolipin.net/18ee4678-ef41-4fe6-adbb-ecb6c0deb471.png"
            style="width: 1.63rem; margin-bottom: 0.07rem;height:2.10rem"
            @click="goDetail(80123)"
          />
          <img
            src="https://cs.zhaolipin.net/67730421-ca56-4a93-8c11-dfae1a7cadff.png"
            style="width: 1.63rem; margin-bottom: 0.07rem;height:2.10rem"
            @click="goDetail(80122)"
          />
        </div>
      </div>
      <div class="hot-bg">
        <div class="hot-inner-box">
          <img
            src="https://cs.zhaolipin.net/d2560dcb-20d1-4ff6-9a14-0c689eb970fe.png"
            style="width: 1.63rem; margin-bottom: 0.07rem;height:2.10rem"
            @click="goDetail(80125)"
          />
          <img
            src="https://cs.zhaolipin.net/3e792688-fd30-4c77-9893-0680143a8036.png"
            style="width: 1.63rem; margin-bottom: 0.07rem;height:2.10rem"
            @click="goDetail(80136)"
          />
          <img
            src="https://cs.zhaolipin.net/86906922-228a-4a6c-a8f7-83129fa8ea89.png"
            style="width: 1.63rem; margin-bottom: 0.07rem;height:2.10rem"
            @click="goDetail(80138)"
          />
          <img
            src="https://cs.zhaolipin.net/00da47f5-a895-4bad-9803-77107bf20b4f.png"
            style="width: 1.63rem; margin-bottom: 0.07rem;height:2.10rem"
            @click="goDetail(80134)"
          />
        </div>
        <div class="hot-inner-box2">
          <img
            src="https://cs.zhaolipin.net/ee0520c4-d353-49bc-9ba5-e13a23ef8875.png"
            style="width: 1.63rem; margin-bottom: 0.07rem;height:2.10rem"
            @click="goDetail(80151)"
          />
          <img
            src="https://cs.zhaolipin.net/b6fe5260-6f30-4df5-8159-ced739feb6d5.png"
            style="width: 1.63rem; margin-bottom: 0.07rem;height:2.10rem"
            @click="goDetail(80152)"
          />
          <img
            src="https://cs.zhaolipin.net/be5d2e43-f76e-4833-82fc-8e05eb1ee081.png"
            style="width: 1.63rem; margin-bottom: 0.07rem;height:2.10rem"
            @click="goDetail(80121)"
          />
          <img
            src="https://cs.zhaolipin.net/c23d949b-ac6d-4058-8a38-e3c37c8c2c27.png"
            style="width: 1.63rem; margin-bottom: 0.07rem;height:2.10rem"
            @click="goDetail(80162)"
          />
          <img
            src="https://cs.zhaolipin.net/c0eacec8-d56a-4809-bb5e-b9b3c649eb12.png"
            style="width: 3.4rem;height:1.75rem;"
            @click="search('年终')"
          />
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
                <div style="margin-top: 0.16rem">400-830-9639</div>
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
  </div>
</template>

<script>
import goback from "../components/goback.vue";
export default {
  components: { goback },
  methods: {
    search(name) {
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
    },
  },
};
</script>

<style scoped>
#header_detailscart {
  position: fixed;
  top: 0;
  left: 0;
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
  font-size: .16rem;
}
.year {
  font-size: 0.12rem;
  padding-top: .5rem;
}
.new-bg {
  width: 100%;
  background: url(https://cs.zhaolipin.net/435fe83f-303d-43fc-92e7-0da3f10c43ce.jpg)
    no-repeat;
  background-size: 100% 101%;
}
.new-inner-box {
  width: 3.52rem;
  margin: 0 auto;
  text-align: center;
  background: url(https://cs.zhaolipin.net/3626c449-70a9-4d16-997f-1a892a25f163.png)
    no-repeat;
  background-size: 100% 100%;
}
.new-inner-box2 {
  width: 3.52rem;
  margin: 0 auto;
  padding:0.02rem 0.08rem 0.08rem;
  box-sizing: border-box;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  background: url(https://cs.zhaolipin.net/440a8fd7-64dc-4387-8d52-a6b6cb555f5d.png)
    no-repeat;
  background-size: 100% 100%;
}
.new-inner-box2 img {
  display: block;
}
.hot-inner-box2 img {
  display: block;
}
.hot-bg {
  width: 100%;
  background: url(https://cs.zhaolipin.net/ca6b5449-7e19-48df-8345-2fed4d2f1298.jpg)
    no-repeat;
  background-size: 100% 101%;
}
.hot-inner-box {
  width: 3.52rem;
  margin: 0 auto;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  padding: 1.08rem 0.08rem 0;
  box-sizing: border-box;
  background: url(https://cs.zhaolipin.net/adbe6d06-e90a-453b-b3f5-d9a5dbd12417.png)
    no-repeat;
  background-size: 100% 100%;
  background-position: center 0.5rem;
}
.hot-inner-box2 {
  width: 3.52rem;
  margin: 0 auto;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  padding: 0 0.08rem 0.1rem;
  box-sizing: border-box;
  background: url(https://cs.zhaolipin.net/cb280845-6507-4a13-8c52-a7385476a1f6.png)
    no-repeat;
  background-size: 100% 100%;
}

.footer {
  background: url(https://cs.zhaolipin.net/dbdbef9e-16a9-4175-a0f9-f29dad8e206d.jpg)
    no-repeat;
  background-size: 100% 100%;
  padding: 0.1rem 0;
}
.footer-box {
  width: 3.5rem;
  margin: 0 auto 0.3rem;
  background: #fff;
  padding: 0.1rem;
  box-sizing: border-box;
  color: #1e1a16;
  font-weight: bold;
  border: 1px solid #d8b38c;
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
  border-radius: 0.06rem;
}
.serve a {
  color: #fff !important;
}
.phone {
  margin: 0.14rem 0 0.04rem;
}
</style>