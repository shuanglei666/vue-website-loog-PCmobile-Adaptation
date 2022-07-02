<template>
  <div class="home">
    <!-- 这个单独的组件 -->
    <div class="box">
      <div class="four_media_swiper">
        <div class="swiper-container" id="container-Fourmain">
          <div class="swiper-wrapper">
            <div class="swiper-slide">Slide 1</div>
            <div class="swiper-slide">Slide 2</div>
            <div class="swiper-slide">Slide 3</div>
          </div>
        </div>
      </div>
    </div>

    <div class="underline"></div>

    <div id="box">
      <ul>
        <li>网站制作</li>
        <li>前端分享</li>
        <li>seo优化</li>
        <li>搜索引擎优化</li>
      </ul>
    </div>
  </div>
</template>

<script>
import Swiper from 'swiper'
export default {
  mounted () {
    setTimeout(() => {
      new Swiper('#container-Fourmain', {
        slidesPerView: 2,
        spaceBetween: 30,
        centeredSlides: true,
        loop: true,
        watchSlidesVisibility: true,
        pagination: {
          el: '#pagination-Fourmain',
          clickable: true,
        },
      });
    }, 10)
  },
  // computed: {
  //   swiper () {
  //     return this.$refs.mySwiper.swiper
  //   }
  // },
}
</script>

<style scoped>
.box {
  width: 755px;
  height: 301px;
  border: 1px solid red;
  background: #ccc;
  margin: 0 auto;
}
.swiper-container {
  width: 100%;
  height: 100%;
}
.swiper-slide {
  height: 290px !important;
  text-align: center;
  font-size: 18px;
  background: #fff;
  /* Center slide text vertically */
  display: -webkit-box;
  display: -ms-flexbox;
  display: -webkit-flex;
  display: flex;
  -webkit-box-pack: center;
  -ms-flex-pack: center;
  -webkit-justify-content: center;
  justify-content: center;
  -webkit-box-align: center;
  -ms-flex-align: center;
  -webkit-align-items: center;
  align-items: center;
  transition: 300ms;
  transform: scale(0.8);
}
.swiper-slide-active,
.swiper-slide-duplicate-active {
  transform: scale(1);
}

/* 第一个 */

.underline {
  width: 200px;
  height: 50px;
  background: red;
  margin: 20px;
  position: relative;
}
.underline:after {
  content: '';
  width: 0;
  height: 5px;
  background: blue;
  position: absolute;
  top: 100%;
  left: 50%;
  transition: all 0.8s;
}

.underline:hover:after {
  left: 0%;
  width: 100%;
}

/* 第二个 */
#box {
  margin-top: 50px;
}
#box ul {
  /* background: #d62f2f; */
  text-align: center;
  box-shadow: 0 0 19px 0px #a0a0a0;
}
#box ul li {
  position: relative;
  padding: 20px;
  display: inline-block;
  cursor: pointer;
  color: rgb(24, 23, 23);
}
#box ul li:after {
  content: '';
  position: absolute;
  top: 100%;
  left: 50%;
  width: 0;
  height: 2px;
  background: #3c2d2d;
}
#box ul li:hover:after {
  left: 0;
  transition: all 1s;
  width: 100%;
}
</style>
