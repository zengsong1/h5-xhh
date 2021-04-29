<template>
  <div class="footer">
    <div class="footer-box">
      <div class="footer-top">
        <img
          src="https://cs.zhaolipin.net/3d869355-c9a2-42f8-9382-54826477c7bc.png"
          style="width: 1.4rem; height: 0.4rem"
        />
        <div class="footer-right">
          <div class="ke">
            <div>客服</div>
            <div class="serve">
              <a
                href="http://p.qiao.baidu.com/cps/chat?siteId=11906548&userId=24700287"
              >
                在线客服
              </a>
            </div>
            <div class="phone">联系电话</div>
            <div>400-830-9639</div>
          </div>
          <div>
            <div>关注我们</div>
            <a
              class="focus"
              href="https://weibo.com/p/1006065877133701/home?from=page_100606&mod=TAB&is_all=1#place"
            >
              <img
                src="https://cs.zhaolipin.net/21e54b56-4361-4430-841e-d1abcece2225.png"
              />
              <div style="margin-left: 0.02rem">@艾象商城</div>
            </a>
            <!-- <div class="focus">
                    <img src="https://cs.zhaolipin.net/5b24a57a-b79f-4bfb-812c-5fa1afb4b09a.png">
                    <div>找礼品吧</div>
                </div> -->
            <img
              src="https://cs.zhaolipin.net/2894e990-c019-48e7-9c6e-4395c691b638.png"
              style="width: 60px; height: 60px; margin-top: 0.04rem"
            />
          </div>
        </div>
      </div>
      <div class="footer-bottom">www.zhaolipin.net</div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.footer-box {
  width: 3.5rem;
  margin: 0 auto 0.3rem;
  background: #fff;
  padding: 0.1rem;
  box-sizing: border-box;
  color: #b95850;
  font-weight: bold;
  border: 1px solid #dcdcdc;
}
.footer-top {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.footer-top .footer-right {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 1.8rem;
}
.focus {
  display: flex;
  color: #b95850;
}
.footer-bottom {
  text-align: center;
}
.serve {
  width: 0.54rem;
  padding: 0.02rem 0.06rem;
  background: #ba5850;
}
.serve a {
  color: #fff !important;
}
.phone {
  margin: 0.14rem 0 0.04rem;
}
</style>