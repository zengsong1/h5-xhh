<template>
  <div>
    <!--搜索头部-->
    <div id="header_search">
      <goBack></goBack>
      <div class="header_search_inner">
        <img src="../img/home/search.png" />
        <!-- <form @submit.prevent="formSubmit" action="javascript:return true">
                 <input type="search" v-model="content" @keydown="search($event)" placeholder="搜索商品"/> -->
        <input
          type="search"
          v-model="content"
          placeholder="搜索商品"
          @input="debounce(handleInput, 500)"
          @blur="hadleBlur"
          @keydown="search($event)"
          @focus="handleInput"
        />
        <!-- </form> -->
      </div>
    </div>
    <!--搜索主体-->
    <div id="main_search" v-if="suggestResult.length <= 0">
      <div class="main_search_inner">
        <div class="main_search_inner_history" v-if="historyList.length > 0">
          <div class="main_search_inner_history_top">
            <p>搜索历史</p>
            <img src="../img/home/垃圾桶.png" @click="removeList" />
          </div>
          <div
            class="main_search_inner_history_bottom"
            :class="hiddle ? 'height' : ''"
            ref="element"
          >
            <div
              class="main_search_inner_history_bottom_date"
              v-for="(item, index) in historyList"
              :key="index"
              @click="gosearch(item)"
            >
              <p>{{ item }}</p>
            </div>
            <img
              src="../img/jtx.png"
              v-if="showImg1"
              class="bottom_img_x"
              @click="hadleShow"
            />
            <img
              src="../img/jts.png"
              v-if="showImg2"
              class="bottom_img_s"
              @click="hadleSh"
            />
          </div>
        </div>
        <div class="main_search_inner_hot">
          <div class="main_search_inner_hot_inner">
            <div class="main_search_inner_hot_inner_top">
              <h1>热门搜索</h1>
            </div>
            <div class="main_search_inner_hot_inner_bottom">
              <div
                class="main_search_inner_hot_bottom_date"
                v-for="(item, index) in searchList"
                :key="index"
                @click="gosearch(item.HOT_SEARCH)"
              >
                <p>{{ item.HOT_SEARCH }}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div v-else>
      <div
        v-for="(item, index) in suggestResult"
        :key="index"
        class="search-list"
        @click="handleClick(item.suggestion)"
        v-html="suggest(item.suggestion, content)"
      ></div>
    </div>
  </div>
</template>
<script>
import goBack from "../components/goback.vue";
import { Toast } from "vant";
import { Dialog } from "vant";
export default {
  data() {
    return {
      searchHistory: "",
      searchList: "",
      content: "",
      historyList: [], //历史搜索记录，存本地
      suggestResult: [],
      showImg1: false,
      showImg2: false,
      hiddle: false,
    };
  },
  methods: { 
    getElemetHeight() {
      this.$nextTick(() => {
          let height = this.$refs.element.offsetHeight;
          if (height > 86) {
            this.hiddle = true;
            this.showImg1 = true;
          } else {
            this.hiddle = false;
            this.showImg1 = false;
          }
        });
    },
    hadleShow() {
      this.showImg1 = false;
      this.showImg2 = true;
      this.hiddle = false;
    },
    hadleSh() {
      this.showImg1 = true;
      this.showImg2 = false;
      this.hiddle = true;
    },
    debounce(fn, wait) {
      if (this.fun !== null) {
        clearTimeout(this.fun);
      }
      this.fun = setTimeout(fn, wait);
    },
    suggest(value, content) {
      if (value) {
        var reg = new RegExp(content.trim(), "g");
        var val = value.replace(
          reg,
          "<span style='color:red;'>" + content + "</span>"
        );
        return val;
      }
    },
    hadleBlur() {
      setTimeout(() => {
        this.suggestResult = [];
      }, 1000);
    },
    search(ev) {
      if (ev.keyCode == 13) {
        //键盘回车的编码是13
        if (this.content.trim() != "") {
          if (!this.historyList.includes(this.content)) {
            this.historyList.unshift(this.content);
            localStorage.setItem(
              "historyList",
              JSON.stringify(this.historyList)
            );
          } else {
            //有搜索记录，删除之前的旧记录，将新搜索值重新push到数组首位
            let i = this.historyList.indexOf(this.content);
            this.historyList.splice(i, 1);
            this.historyList.unshift(this.content);
            localStorage.setItem(
              "historyList",
              JSON.stringify(this.historyList)
            );
          }
          this.$router.push({
            path: "/search",
            query: {
              GOODS_NAME: this.content,
            },
          });
        } else {
          Toast("请输入关键字");
        }
      }
    },
    handleClick(name) {
      this.content = name;
      // 没有搜索记录，把搜索值push进数组首位，存入本地
      if (!this.historyList.includes(name)) {
        this.historyList.unshift(name);
        localStorage.setItem("historyList", JSON.stringify(this.historyList));
      } else {
        //有搜索记录，删除之前的旧记录，将新搜索值重新push到数组首位
        let i = this.historyList.indexOf(name);
        this.historyList.splice(i, 1);
        this.historyList.unshift(name);
        localStorage.setItem("historyList", JSON.stringify(this.historyList));
      }
      this.$router.push({
        path: "/search",
        query: {
          GOODS_NAME: name,
        },
      });
    },
    handleInput() {
      let url = "group/Api/suggestList.do";
      let params = new URLSearchParams();
      if (window.userInfo) {
        params.append("token", window.userInfo.token);
        params.append("TOP_ID", window.userInfo.TOP_ID);
      }
      if (!this.content) {
        return;
      }
      params.append("GOODS_NAME", this.content);
      this.$axios({
        method: "post",
        url: url,
        data: params,
      }).then((res) => {
        if (res.data.status == 0) {
          if (
            res.data.content.suggestResult &&
            res.data.content.suggestResult.length > 0
          ) {
            this.suggestResult = res.data.content.suggestResult;
          }
        }
      });
    },
    getsearchList() {
      let url = "group/Api/indexSearchList.do";
      let params = new URLSearchParams();
      if (window.userInfo) {
        params.append("token", window.userInfo.token);
        params.append("TOP_ID", window.userInfo.TOP_ID);
      }

      this.$axios({
        method: "post",
        url: url,
        data: params,
      }).then((res) => {
        if (res.data.status == 0) {
          this.searchList = res.data.content.searchList;
        }
      });
    },
    gosearch(item) {
      if (item) {
        this.content = item;
        // 没有搜索记录，把搜索值push进数组首位，存入本地
        if (!this.historyList.includes(item)) {
          this.historyList.unshift(item);
          localStorage.setItem("historyList", JSON.stringify(this.historyList));
        } else {
          //有搜索记录，删除之前的旧记录，将新搜索值重新push到数组首位
          let i = this.historyList.indexOf(item);
          this.historyList.splice(i, 1);
          this.historyList.unshift(item);
          localStorage.setItem("historyList", JSON.stringify(this.historyList));
        }
        this.$router.push({
          path: "/search",
          query: {
            GOODS_NAME: item,
          },
        });
      }
    },
    removeList() {
      Dialog.confirm({
        message: "确定清空所有历史搜索?",
      })
        .then(() => {
          localStorage.removeItem("historyList");
          this.historyList = [];
        })
        .catch(() => {
          // on cancel
        });
    },
  },
  components: {
    goBack,
  },
  mounted() {
    this.getsearchList();
    this.getElemetHeight();
    //如果本地存储的数据historyList有值，直接赋值给data中的historyList
    if (JSON.parse(localStorage.getItem("historyList"))) {
      this.historyList = JSON.parse(localStorage.getItem("historyList"));
      this.content = this.historyList[0];
      if (this.historyList.length >= 15) {
        this.historyList.length = 15;
      }
    }
  },
};
//百度数字统计
var _hmt = _hmt || [];
(function () {
  var hm = document.createElement("script");
  hm.src = "https://hm.baidu.com/hm.js?1678150ae4fb32e8f156a085feb56d7d";
  var s = document.getElementsByTagName("script")[0];
  s.parentNode.insertBefore(hm, s);
})();
</script>
<style>
@import "../style/css/common.css";
@import "../style/css/reset.css";
@import "../style/css/search.css";
.bottom_img_x,
.bottom_img_s {
  width: 0.26rem;
  height: 0.26rem;
}
.height {
  height: 0.86rem;
  overflow: hidden;
}
.bottom_img_x {
  position: absolute;
  bottom: 0.14rem;
  right: 0;
}
.bottom_img_s {
  position: absolute;
  bottom: 0.14rem;
  right: 0;
}
.search-list {
  padding: 0 0.18rem;
  height: 0.36rem;
  line-height: 0.36rem;
  box-sizing: border-box;
  border-bottom: 0.01rem solid #f3f3f3;
  background-color: #fff !important;
}
</style>