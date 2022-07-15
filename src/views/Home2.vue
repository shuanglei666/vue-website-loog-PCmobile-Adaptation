<template>
  <div class="max">
    <div class="box">
      <div class="header">
        <!-- <div class="header_top">
        <Myhead></Myhead>
      </div>
      <div class="header_bottom">
        <Mytitle></Mytitle>
      </div> -->
        <Mytitle @myEven="getNum"></Mytitle>
      </div>
      <div class="content">
        <Onemain></Onemain>
        <Twomain></Twomain>
        <mycircularright class="mycircularright"></mycircularright>
        <Theremain></Theremain>
        <mycircularleft class="mycircularleft"></mycircularleft>
        <Fourmain></Fourmain>
        <mycircularright class="mycircularright"></mycircularright>
        <Fivemain></Fivemain>
        <mycircularleft class="mycircularleft"></mycircularleft>
        <Sixmain></Sixmain>
        <mycircularright class="mycircularright"></mycircularright>
        <Sevenmain></Sevenmain>
        <mycircularleft class="mycircularleft"></mycircularleft>
      </div>
      <div class="footer">
        <Myfooter></Myfooter>
      </div>
    </div>

    <!-- 移动端弹窗 -->
    <!-- <div class="box_show" v-if="showModal" @click="showModal=false"></div> -->
    <div class="box_show" v-if="showModal" @click="getClose"></div>
    <div class="pop" v-if="showModal">
      <div class="main_media_catalogue_top"></div>
      <div class="main_media_catalogue_bottom">
        <div v-for="(item,index) in title_list" :key="item.id" :value='item.title' @click="jump(index)"
          class="main_media_catalogue_list1" :class="{main_media_catalogue_list2:index == num}">
          {{item.title}}
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import $ from 'jquery'
import Myhead from "../components/Myhead/Myhead.vue";
import Mytitle from "../components/title/Mytitle.vue";
import Onemain from "../components/Mymain/Onemain.vue";
import Twomain from "../components/Mymain/Twomain.vue";
import mycircularright from "../components/MYcircular/mycircularright.vue";
import Theremain from "../components/Mymain/Theremain.vue";
import mycircularleft from "../components/MYcircular/mycircularleft.vue";
import Fourmain from "../components/Mymain/Fourmain.vue";
import Fivemain from "../components/Mymain/Fivemain.vue";
import Sixmain from "../components/Mymain/Sixmain.vue";
import Sevenmain from "../components/Mymain/Sevenmain.vue";
import Myfooter from "../components/Myfooter/Myfooter.vue"
export default {
  name: "Home",
  data () {
    return {
      showModal: null,
      title_list: [],
      num: 0,
    }
  },
  components: {
    Myhead,
    Mytitle,
    Onemain,
    Twomain,
    mycircularright,
    Theremain,
    mycircularleft,
    Fourmain,
    Fivemain,
    Sixmain,
    Sevenmain,
    Myfooter
  },
  methods: {
    jump (index) {
      // console.log(index, 'index');
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
    getNum (showModal) {
      this.showModal = showModal;
      //  this.showModal = this.$refs.MytitleShowModal.showModal
      // this.showModal = this.$children[0].showModal
      // console.log(1,'11');
    },
    getClose () {
      this.showModal = false
      $('body,html').css('overflow', 'auto')    // 打开滚动条
    },
    setMenu () {
      this.title_list = [
        // { title: this.$t('Home2.Mytitle.Home'), active: true },
        // { title: this.$t('Home2.Mytitle.Shop'), active: false },
        // { title: this.$t('Home2.Mytitle.Pages'), active: false },
        // { title: this.$t('Home2.Mytitle.Elements'), active: false },
        // { title: this.$t('Home2.Mytitle.senseOforth'), active: false },
        // { title: this.$t('Home2.Mytitle.mission'), active: false },
        // { title: this.$t('Home2.Mytitle.team'), active: false },
      ]
    },
  },
  mounted () {
    this.setMenu();
  },
  watch: {
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
.box {
  position: absolute;
  min-width: 100%;
  min-height: 100%;
  z-index: -1;
  flex-direction: column;
  display: flex;
  // overflow-y: auto;
  // overflow-x: hidden;
  overflow: hidden;
  .header {
    width: 100%;
    // height: 165px;
    // border: 1px solid red;
    flex-direction: column;
    display: flex;
  }
  .content {
    display: flex;
    flex-direction: column;
  }
}

// 下面弹窗阴影
.box_show {
  width: 100%;
  height: 9000px;
  position: absolute;
  background-color: #000;
  opacity: 0.3;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 200;
}
.pop {
  width: 200px;
  // height: 680px;
  background-color: #fafafa;
  position: fixed;
  top: 55px;
  right: 0px;
  z-index: 201;
  // border: 1px solid red;
  // .main_media_catalogue_top {
  //   height: 18px;
  // }
  .main_media_catalogue_bottom {
    width: 100%;
    // height: 660px;
    height: 430px;
    display: flex;
    // justify-content: space-between;
    align-items: center;
    flex-direction: column;
    box-sizing: content-box;
    .main_media_catalogue_list1 {
      // padding-bottom: 20px;
      // height: 40px;
      // border: 1px solid red;
      border: 1px solid #fafafa;
      // padding-bottom: 14px;
      padding: 20px 0 5px 0;
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
.btn {
  background-color: #fff;
  border-radius: 4px;
  border: 1px solid blue;
  padding: 4px 12px;
}

// 设置 小于755内容样式
@media screen and (max-width: 1600px) {
  .mycircularright {
    display: none !important;
  }
  .mycircularleft {
    display: none !important;
  }
}
</style>