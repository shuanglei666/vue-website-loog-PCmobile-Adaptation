<template>
  <div class="home">
    <div class="example-3d">
      <swiper class="swiper" :options="swiperOption">
        <swiper-slide>Slide 1</swiper-slide>
        <swiper-slide>Slide 2</swiper-slide>
        <swiper-slide>Slide 3</swiper-slide>
        <div class="swiper-pagination swiper-paginationsss" slot="pagination"></div>
      </swiper>
    </div>
  </div>
</template>

<script>
import { Swiper, SwiperSlide } from 'vue-awesome-swiper'
import 'swiper/css/swiper.css'
export default {
  name: 'swiper-example-3d-coverflow',
  title: '3D Coverflow effect',
  components: {
    Swiper,
    SwiperSlide
  },
  data () {
    return {
      swiperOption: {
        effect: 'coverflow',
        // grabCursor: true,
        // // centeredSlides: true,
        // slidesPerView: 'auto',
        slidesPerView: 2.2,
        spaceBetween: 30,
        centeredSlides: true,
        coverflowEffect: {
          rotate: 10,
          stretch: 0,
          depth: 10,
          modifier: 1,
          slideShadows: true
        },
        pagination: {
          el: ".swiper-paginationsss",
          clickable: true,
        },
      }
    }
  }
}
</script>

<style lang="less" scoped>
.home {
  width: 755px;
  height: 400px;
  background: #ccc;
}
.example-3d {
  width: 100%;
  height: 400px;
  // padding-top: 50px;
  // padding-bottom: 50px;
}
.swiper {
  height: 100%;
  width: 100%;
  .swiper-slide {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 300px;
    height: 300px;
    text-align: center;
    font-weight: bold;
    // font-size: $font-size-huge * 2;
    font-size: 19px;
    background-color: #2c8dfb;
    background-position: center;
    background-size: cover;
    // color: $white;
    color: pink;
  }
  .swiper-pagination {
    /deep/ .swiper-pagination-bullet.swiper-pagination-bullet-active {
      // background-color: $white;
      background-color: white;
    }
  }
}
</style>