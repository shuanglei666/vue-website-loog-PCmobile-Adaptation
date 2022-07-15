<template>
  <!-- <div class="main" :class="navShow ? 'fixed' : 'hidden'"> -->
  <div class="main">
    <!-- PC layout -->
    <div class="main_box">
      <div class="logo">
        <img src="../../assets/images/LOOG.png">
      </div>
      <!-- <div class="list_box">
        <div v-for="(item,index) in title_list" :key="item.id" :value='item.title' @click="jump(index)" class="list1"
          :class="{list2:index == num}">
          {{item.title}}
        </div>
      </div> -->
      <div class="list_box">
        <div v-for="(item,index) in title_list" :key="item.id" :value='item.title' @click="jump(index)" class="list1"
          :class="{list2:index == num}">
          {{item.title}}
        </div>
      </div>
      <div class="iconList">
        <div class="image1">
          <img src="../../assets/images/wallet.png" alt="">
        </div>
        <div class="image2">
          <img src="../../assets/images/User.png" alt="">
        </div>
        <div class="languag">
          <div :class="flag? 'langSpan1' : 'langSpan2'" @click="getLang('zh')">{{$t('Home.Mytitle.CN')}}</div>
          <span> / </span>
          <div :class="!flag? 'langSpan1' : 'langSpan2'" @click="getLang('en')">EN</div>
        </div>

      </div>
    </div>

    <!-- mobile layout -->
    <div class="main_media_box">
      <div class="main_media">
        <div class="main_media_left">
          <!-- <img src="../../assets/images/LOOG.png"> -->
        </div>
        <div class="main_media_right">
          <div class="main_media_right_right" @click="Login">
          </div>
          <!-- <div class="main_media_right_left" @click="getShow">
          </div> -->
          <!-- 图片按钮1 -->
          <!-- <div class="main_media_right_left" @click="getShow" style="margin-right:100px">
          </div> -->

          <!-- 图片按钮2  弹窗-->
          <div @click="getshadow" class="main_media_right_left">
          </div>
        </div>
      </div>
      <!-- 目录1 -->
      <div class="main_media_catalogue" v-show="show">
        <div class="main_media_catalogue_top"></div>
        <!-- 下面目栏 -->
        <!-- <div class="main_media_catalogue_bottom">
          <div class="main_media_catalogue_list1 main_media_catalogue_lis2">
            Home
          </div>
          <div class="main_media_catalogue_list1 main_media_catalogue_lis2">
            Shop
          </div>
          <div class="main_media_catalogue_list1 main_media_catalogue_lis2">
            Pages
          </div>
          <div class="main_media_catalogue_list1 main_media_catalogue_lis2">
            Elements
          </div>
          <div class="main_media_catalogue_list1 main_media_catalogue_lis2">
            Shop
          </div>
          <div class="main_media_catalogue_list1 main_media_catalogue_lis2">
            Pages
          </div>
          <div class="main_media_catalogue_list1 main_media_catalogue_lis2">
            Elements
          </div>
        </div> -->

        <div class="main_media_catalogue_bottom">
          <div v-for="(item,index) in title_list" :key="item.id" :value='item.title' @click="jump(index)"
            class="main_media_catalogue_list1" :class="{main_media_catalogue_list2:index == num}">
            {{item.title}}
          </div>
        </div>
      </div>
    </div>

    <!-- <div class="mask" v-if="showModal" @click="showModal=false"></div> -->
    <!-- <div class="pop" v-if="showModal">
      内容区域
    </div> -->
  </div>
</template>

<script>
import $ from 'jquery'
export default {
  data () {
    return {
      top: "",
      navShow: null,
      activeStep: 0,
      title_list: [],
      num: 0,
      show: false,
      selLocale: this.$i18n.locale,
      flag: true,
      showModal: false,
    };
  },
  computed: {
    language () {
      return this.$store.state.language;
    }
  },
  methods: {
    jump (index) {
      this.num = index;
      var items = document.querySelectorAll(".scroll-item");
      for (var i = 0; i < items.length; i++) {
        if (index === i) {
          items[i].scrollIntoView({
            block: "start",//默认跳转到顶部
            behavior: "smooth"//滚动的速度
          });
        }
      }
    },
    getShow () {
      this.show = !this.show
      this.logFlag = !this.logFlag
    },
    getLang (lang) {
      this.selLocale = lang
      // console.log(lang,'lang');

      if (lang === 'zh') {
        this.flag = false
        // console.log(lang, 'lang    false');
        // localStorage.getItem('zh',lang)
      } else if (lang === 'en') {
        this.flag = true
        // console.log(lang, 'lang    true');
        // localStorage.getItem('en',lang)
      }
      localStorage.getItem("language", lang);
    },
    setMenu () {
      this.title_list = [
        { title: this.$t('Home.Mytitle.Home'), active: true },
        { title: this.$t('Home.Mytitle.Shop'), active: false },
        { title: this.$t('Home.Mytitle.Pages'), active: false },
        { title: this.$t('Home.Mytitle.Elements'), active: false },
        { title: this.$t('Home.Mytitle.Home'), active: false },
        { title: this.$t('Home.Mytitle.Shop'), active: false },
        { title: this.$t('Home.Mytitle.Pages'), active: false },
      ]
    },
    Login () { },
    getshadow (e) {
      this.showModal = true;
      this.$emit('myEven', this.showModal)

      // 禁用滚动条
      // $('body').css("overflow-y", "hidden");
      $('body,html').css('overflow', 'hidden')      // 打开滚动条
    },
  },
  mounted () {
    // console.log(this.language, 'language');
    let lang = localStorage.getItem("language");
    if (lang === 'zh') {
      this.flag = false
      // console.log(lang, 'lang false');
    } else if (lang === 'en') {
      this.flag = true
      // console.log(lang, 'lang true');
    }
    window.addEventListener("scroll", () => {
      this.top =
        document.documentElement.scrollTop ||
        document.body.scrollTop ||
        window.pageYOffset;
    });

    // console.log(this.selLocale, 'mounted')
    //debugger
    this.setMenu();
  },
  watch: {
    top (newValue, oldValue) {
      if (newValue == 0) {
        this.navShow = true;
      } else {
        this.navShow = false;
      }
    },
    selLocale: {
      handler (newValue) {
        // localStorage.setItem("language", newValue);
        this.$i18n.locale = newValue;
        if (newValue) {
          localStorage.setItem("language", newValue);
          // console.log(newValue, 'val');
          this.setMenu()
          // this.title_list = [
          //   { title: this.$t('Home.Mytitle.Home'), active: true },
          //   { title: this.$t('Home.Mytitle.Shop'), active: false },
          //   { title: this.$t('Home.Mytitle.Pages'), active: false },
          //   { title: this.$t('Home.Mytitle.Elements'), active: false },
          //   { title: this.$t('Home.Mytitle.Home'), active: false },
          //   { title: this.$t('Home.Mytitle.Shop'), active: false },
          //   { title: this.$t('Home.Mytitle.Pages'), active: false },
          // ]
        }
      },
    },
  },
};
</script>
<style lang="less" scoped>
.main {
  width: 100%;
  min-width: 100%;
  border-bottom: 1px solid #e0e0e0;
  position: fixed;
  top: 0px;
  left: 0;
  right: 0;
  transform: translateZ(0);
  background: #fff;
  z-index: 999;
}
.main_box {
  // width: 2336px;
  // width: 100%;
  // border: 1px solid red;
  height: 72px;
  margin: 0 auto;
  justify-content: space-between;
  align-items: center;
  flex-direction: row;
  display: flex;
  margin-right: 40px;
  margin-left: 40px;
  box-sizing: content-box;
}
.logo {
  width: 166px;
  height: auto;
  cursor: pointer;
}
.logo img {
  width: 100%;
  height: 100%;
}
.list_box {
  width: 1200px;
  height: 100%;
  font-family: MicrosoftYaHeiLight;
  font-size: 20px;
  font-weight: 290;
  color: #000000;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-content: center;
  padding-left: 16px;
  padding-right: 16px;
  box-sizing: content-box;
}
.list1 {
  height: 100%;
  display: flex;
  flex-direction: row-reverse;
  justify-content: space-between;
  align-content: center;
  flex-wrap: wrap;
  cursor: pointer;
  font-family: MicrosoftYaHeiLight;
  font-size: 18px;
  // line-height: 30px;
  letter-spacing: 0px;
  /* Mono/Black */
  color: #000000;

  box-sizing: border-box !important;
  // overflow: hidden;
  -webkit-backface-visibility: hidden;
  -moz-backface-visibility: hidden;
  -ms-backface-visibility: hidden;
  backface-visibility: hidden;
  position: relative;
  // display: inline-block;
  // border: 1px solid #fff;
}
// start
// 移入border
.list1:after {
  content: '';
  position: absolute;
  top: 100%;
  left: 50%;
  width: 0;
  // height: 1px;
  // background: #000;
  border-bottom: 1px solid #000;
  transition: all 0.2s;
}
.list1:hover:after {
  left: 0;
  width: 100%;
}
// end
// 选中border
.list2 {
  height: 102%; // 防止border重叠
  box-sizing: content-box;
  border-bottom: 1px solid #000;
  font-family: MicrosoftYaHei;
  font-size: 18px;
  font-weight: normal;
  line-height: 30px;
  letter-spacing: 0px;
  color: #000000;
}
.iconList {
  width: 166px;
  justify-content: space-between;
  flex-direction: row;
  align-items: center;
  display: flex;
}
.image1 {
  width: 24px;
  height: 20px;
  cursor: pointer;
  justify-content: space-between;
  flex-direction: row;
  align-items: center;
  display: flex;
  img {
    width: 100%;
    height: 100%;
  }
}
.image2 {
  width: 16px;
  height: 21px;
  cursor: pointer;
  justify-content: space-between;
  flex-direction: row;
  align-items: center;
  display: flex;
  img {
    width: 100%;
    height: 100%;
  }
}
.languag {
  width: 51px;
  height: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  font-family: MicrosoftYaHei;
  font-size: 13px;
  font-weight: normal;
  line-height: 20px;
  letter-spacing: 0px;
  /* Mono/01 */
  color: #333333;
  .langSpan1 {
    font-family: MicrosoftYaHei-Bold;
    font-size: 13px;
    // font-weight: normal;
    // line-height: 20px;
    letter-spacing: 0px;
    /* Mono/01 */
    color: #333333;
    cursor: pointer;
  }
  .langSpan2 {
    font-family: MicrosoftYaHei;
    font-size: 13px;
    font-weight: bold;
    // line-height: 20px;
    letter-spacing: 0px;
    /* Mono/01 */
    color: #333333;
    cursor: pointer;
  }
}

// 设置 小于1600内容样式
@media screen and (max-width: 1600px) {
  .main_box {
    display: none;
  }
  .main_media_box {
    // min-width: 100%;
    width: 700px;
    height: 55px;
    margin-right: auto;
    margin-left: auto;
    // border: 1px solid aqua;
    .main_media {
      // border: 1px solid red;
      width: 700px;
      height: 55px;
      // padding: 10px 0 0 0;
      // box-sizing: content-box;
      // margin-left: auto;
      // margin-right: auto;
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      align-items: center;
      // border: 1px solid red;
      .main_media_left {
        width: 123px;
        height: 35px;
        box-sizing: content-box;
        margin-right: 30px;
        background-image: url(../../assets/images/LOOG.png);
        background-size: 100% 100%;
        background-repeat: no-repeat;
      }
      .main_media_right {
        flex-direction: row;
        display: flex;
        .main_media_right_right {
          width: 24px;
          height: 20px;
          margin-right: 30px;
          // margin-right: 40px;
          background-image: url(../../assets/images/wallet.png);
          background-size: 100% 100%;
          background-repeat: no-repeat;
          // pointer-events: none;
        }
        .main_media_right_left {
          width: 28px;
          height: 18px;
          background-image: url(../../assets/images/three.png);
          background-size: 100% 100%;
          background-repeat: no-repeat;
          // border: 1px solid red;
          overflow: hidden;
        }
      }
    }
    // 目录
    .main_media_catalogue {
      // position: absolute;
      // top: 55px;
      // right: 25px;
      // border: 1px solid salmon;
      // width: 200px;
      // height: 720px;
      // background: #fafafa;
      position: fixed;
      top: 55px;
      right: 0;
      z-index: 999;
      // border: 1px solid salmon;
      width: 200px;
      height: 720px;
      background: #fafafa;
      .main_media_catalogue_top {
        height: 18px;
      }
      .main_media_catalogue_bottom {
        width: 100%;
        // height: 100%;
        height: 680px;
        display: flex;
        justify-content: space-between;
        align-items: center;
        flex-direction: column;
        box-sizing: content-box;
        .main_media_catalogue_list1 {
          height: 40px;
          // border: 1px solid red;
          border: 1px solid #fafafa;
          // padding-bottom: 14px;
          font-family: MicrosoftYaHeiLight;
          font-size: 28px;
          line-height: 30px;
          letter-spacing: 0px;
          /* Mono/Black */
          color: #000000;

          box-sizing: border-box !important;
          // overflow: hidden;
          -webkit-backface-visibility: hidden;
          -moz-backface-visibility: hidden;
          -ms-backface-visibility: hidden;
          backface-visibility: hidden;
          position: relative;
          // display: inline-block;
        }
        .main_media_catalogue_list1:after {
          content: '';
          position: absolute;
          top: 100%;
          left: 50%;
          width: 0;
          // height: 40px;
          // height: 1px;
          // background: #3c2d2d;
          border-bottom: 1px solid #000;
        }
        .main_media_catalogue_list1:hover:after {
          left: 0;
          transition: all 0.5s;
          width: 100%;
        }
        .main_media_catalogue_list2 {
          box-sizing: content-box;
          border-bottom: 1px solid #000;
          font-family: MicrosoftYaHei;
          font-size: 28px;
          font-weight: normal;
          line-height: 30px;
          letter-spacing: 0px;
          /* Mono/Black */
          color: #000000;
        }
      }
    }
  }
}

.mask {
  background-color: #000;
  opacity: 0.3;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 200;
}
.pop {
  width: 200px;
  height: 680px;
  background-color: #fff;
  position: fixed;
  top: 0px;
  right: 0px;
  z-index: 201;
  // border: 1px solid red;
}
// .btn {
//   background-color: #fff;
//   border-radius: 4px;
//   border: 1px solid blue;
//   padding: 4px 12px;
// }

// 超过1600的隐藏内容样式设置
@media screen and (min-width: 1600px) {
  .main_media_box {
    display: none;
  }
}
</style>

















