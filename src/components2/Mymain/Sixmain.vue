<template>
  <div class="scroll-item">
    <!-- PC layout -->
    <div class="six">
      <div class="six_box">
        <!-- 上 -->
        <div class="six_box_top">
          <div class="six_box_top_tit">
            <!-- {{$t('Home2.Sixmain.CreateWonderfulStoriesTogether')}} -->
            一起创造精彩的故事。
          </div>
          <div class="six_box_top_bdr"></div>
        </div>
        <!-- 下面 -->
        <div class="six_box_bottom">
          <!-- (1)上面 -->
          <div class="six_box_bottom_top">
            <div class="six_box_bottom_list">
              <div class="six_box_bottom_list_img">
                <img src="../../assets/images2/six_box_bottom1.png" alt="">
              </div>
              <div class="six_box_bottom_list_tit">
                <!-- {{$t('Home2.Sixmain.coCreated')}} -->
                我们相信伟大的故事是共同创造的。
              </div>
              <div class="six_box_bottom_list_subtit">
                <!-- {{$t('Home2.Sixmain.ecosystem')}} -->
                我们是一个由社区、创作者和建设者组成的生态系统，我们一起把我们的梦想变成故事，然后把这些故事变成现实。
              </div>
            </div>
            <div class="six_box_bottom_list">
              <div class="six_box_bottom_list_img">
                <img src="../../assets/images2/six_box_bottom2.png" alt="">
              </div>
              <div class="six_box_bottom_list_tit">
                <!-- {{$t('Home2.Sixmain.development')}} -->
                我们相信故事是社区发展的支柱。
              </div>
              <div class="six_box_bottom_list_subtit">
                <!-- {{$t('Home2.Sixmain.decentralizedFuture')}} -->
                我们共同培育一个能够相互支持，相互反馈和共享技术的网络，以在分散的未来为社区提供支持。
              </div>
            </div>
          </div>
          <!-- (2)下面 -->
          <div class="six_box_bottom_btm">
            <div class="six_box_bottom_list">
              <div class="six_box_bottom_list_img">
                <img src="../../assets/images2/six_box_bottom3.png" alt="">
              </div>
              <div class="six_box_bottom_list_tit">
                <!-- {{$t('Home2.Sixmain.together')}} -->
                我们相信我们可以一起走得又快又远。
              </div>
              <div class="six_box_bottom_list_subtit">
                <!-- {{$t('Home2.Sixmain.talents')}} -->
                我们共同代表来自世界各地和各行各业的社区。我们的社区突出了我们思想和才能的多样性。
              </div>
            </div>
            <div class="six_box_bottom_list">
              <div class="six_box_bottom_list_img">
                <img src="../../assets/images2/six_box_bottom4.png" alt="">
              </div>
              <div class="six_box_bottom_list_tit">
                <!-- {{$t('Home2.Sixmain.technology')}} -->
                我们相信，通过web3技术，创新会更加多样化。
              </div>
              <div class="six_box_bottom_list_subtit">
                <!-- {{$t('Home2.Sixmain.worksOfArt')}} -->
                我们就犹如工匠。我们将我们的激情，好奇心和梦想变为现实，创造出优质的艺术品。
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- mobile layout -->
    <div class="six_media">
      <div class="six_media_tit">一起创造精彩的故事
      </div>
      <div class="six_media_bdr"></div>
      <div class="six_media_box">
        <div class="six_media_box_list">
          <div class="six_media_box_list_img1">
            <img src="../../assets/images2/six_media1.png" alt="">
          </div>
          <div class="six_media_box_list_tit">我们相信伟大的故事是共同创造的。
          </div>
          <div class="six_media_box_list_txt">
            我们是一个由社区、创作者和建设者组成的生态系统，我们一起把我们的梦想变成故事，然后把这些故事变成现实。
          </div>
        </div>
        <div class="six_media_box_list">
          <div class="six_media_box_list_img2">
            <img src="../../assets/images2/six_media2.png" alt="">
          </div>
          <div class="six_media_box_list_tit">我们相信故事是社区发展的支柱。
          </div>
          <div class="six_media_box_list_txt">我们共同培育一个能够相互支持，相互反馈和共享技术的网络，以在分散的未来为社区提供支持。</div>
        </div>
        <div class="six_media_box_list">
          <div class="six_media_box_list_img3">
            <img src="../../assets/images2/six_media3.png" alt="">
          </div>
          <div class="six_media_box_list_tit">我们相信我们可以一起走得又快又远。
          </div>
          <div class="six_media_box_list_txt">我们共同代表来自世界各地和各行各业的社区。我们的社区突出了我们思想和才能的多样性。
          </div>
        </div>
        <div class="six_media_box_list">
          <div class="six_media_box_list_img4">
            <img src="../../assets/images2/six_media4.png" alt="">
          </div>
          <div class="six_media_box_list_tit">我们相信，通过web3技术，创新会更加多样化。
          </div>
          <div class="six_media_box_list_txt">
            我们就犹如工匠。我们将我们的激情，好奇心和梦想变为现实，创造出优质的艺术品。
          </div>
        </div>
      </div>
    </div>
  </div>
  <!-- </section> -->
</template>

<script>
import { Swiper, SwiperSlide } from 'vue-awesome-swiper'
import 'swiper/css/swiper.css'

// import Swiper from 'swiper'
// import 'swiper/css/swiper.min.css'
export default {
  components: {
    Swiper,
    SwiperSlide
  },
  data () {
    return {
      swiperOption: {
        observer: true,
        observeParents: true,
        loop: true,
        centeredSlides: true,
        grabCursor: true,
        // pagination: '#six_media_swiperAAA',
        paginationClickable: true,
        pagination: {
          el: '#six_media_swiperAAA',
          clickable: true, // 允许点击小圆点跳转 
        }
      }
    }
  },
  mounted () {
    setTimeout(() => {
      new Swiper('#Sixmain1', {
        loop: true, // 循环模式选项
        grabCursor: true,// 手指开关
        clickable: true,
        // 如果需要分页器
        pagination: {
          el: '#Sixmain1_swiper_pagination',
        },
      })
    }, 10)
    // setTimeout(() => {
    //   new Swiper("#Sixmain2", {
    //     direction: "vertical",
    //     slidesPerView: "auto",
    //     freeMode: true,
    //     scrollbar: {
    //       el: ".swiper-scrollbar",
    //     },
    //     mousewheel: true,
    //   });
    // }, 10)
  }
}
</script>
<style lang="less" scoped>
.six {
  width: 100%;
  // height: 915px;
  // height: 750px;
  // border-top: 1px solid #a7e4ff;
  // border: 1px solid orangered;
  .six_box {
    width: 1200px;
    // margin: 0 auto;
    // border: 1px solid orangered;
    // height: 100%;
    flex-direction: column;
    display: flex;
    background-image: url('../../assets/images2/loog_bg.png'); //
    background-size: 100% 40%;
    background-repeat: no-repeat;
    background-position: 0px 3%;
    position: relative;
    top: 85px;
    // margin-top: 216px;
    // padding-left: 16px;
    // padding-right: 16px;
    box-sizing: content-box;
    margin-left: auto;
    margin-right: auto;
    // 上
    .six_box_top {
      width: 100%;
      height: 70px;
      display: flex;
      flex-direction: column;
      box-sizing: content-box;
      .six_box_top_tit {
        font-family: MicrosoftYaHei;
        font-size: 26px;
        font-weight: normal;
        // line-height: 52.8px;
        letter-spacing: 0px;
        /* 外部/Black */
        color: #000000;
      }
      .six_box_top_bdr {
        width: 134px;
        // height: 2px;
        // min-height: 2px;
        // display: inline-block;
        flex-shrink: 0;
        border-bottom: 3px solid #000;
        object-fit: cover;
        display: inline-block;
        flex-shrink: 0;
        box-sizing: content-box;
        position: relative;
        top: 23px;
      }
    }
    // 下面
    .six_box_bottom {
      width: 100%;
      // margin-top: 153px;
      margin-top: 98px;
      // border: 1px solid #000;
      flex-direction: column;
      display: flex;
      // 上面
      .six_box_bottom_top {
        width: 100%;
        flex-direction: row;
        justify-content: space-between;
        display: flex;
        .six_box_bottom_list {
          width: 46%;
          .six_box_bottom_list_img {
            width: 58px;
            padding-bottom: 15px;
            // height: 60px;
            img {
              width: 100%;
              height: 100%;
            }
          }
          .six_box_bottom_list_tit {
            font-family: MicrosoftYaHei;
            font-size: 18px;
            // font-weight: normal;
            font-weight: 600;
            // line-height: 52.8px;
            letter-spacing: 0px;
            /* 外部/Black */
            color: #000000;
          }
          .six_box_bottom_list_subtit {
            margin-top: 10px;
            font-family: MicrosoftYaHeiLight;
            font-size: 14px;
            line-height: 21px;
            letter-spacing: 0px;
            /* Mono/Black */
            color: #000000;
          }
        }
      }
      // 下面
      .six_box_bottom_btm {
        margin-top: 130px;
        width: 100%;
        flex-direction: row;
        justify-content: space-between;
        display: flex;
        .six_box_bottom_list {
          width: 46%;
          .six_box_bottom_list_img {
            width: 58px;
            // height: 60px;
            padding-bottom: 15px;
            img {
              width: 100%;
              height: 100%;
            }
          }
          .six_box_bottom_list_tit {
            font-family: MicrosoftYaHei;
            font-size: 18px;
            font-weight: 600;
            // line-height: 52.8px;
            letter-spacing: 0px;
            /* 外部/Black */
            color: #000000;
          }
          .six_box_bottom_list_subtit {
            margin-top: 10px;
            font-family: MicrosoftYaHeiLight;
            font-size: 14px;
            line-height: 21px;
            letter-spacing: 0px;
            /* Mono/Black */
            color: #000000;
          }
        }
      }
    }
  }
}

// 设置 小于755内容样式
@media screen and (max-width: 1600px) {
  .six {
    display: none !important;
  }
  .six_media {
    margin-top: 10px;
    // border: 1px solid thistle;
    // margin-top: 140px;
    // margin-top: 39px;
    // margin-top: 39px;
    width: 700px;
    // border: 1px solid tan;
    // width: 755px;
    box-sizing: content-box;
    margin-left: auto;
    margin-right: auto;
    // 上面之前写法
    // border: 1px solid red;
    display: flex;
    flex-direction: column;
    // align-items: center;
    margin-top: 42px;
    .six_media_tit {
      font-family: MicrosoftYaHei;
      font-size: 26px;
      font-weight: bold;
      line-height: 52.8px;
      letter-spacing: 0px;
      /* 外部/Black */
      color: #000000;
      margin-left: auto;
      margin-right: auto;
    }
    .six_media_bdr {
      width: 134px;
      border-bottom: 5px solid #000;
      margin-left: auto;
      margin-right: auto;
    }
    .six_media_box {
      display: flex;
      flex-direction: column;
      margin-top: 12px;
      box-sizing: content-box;
      .six_media_box_list {
        padding-bottom: 28px;
        .six_media_box_list_img1 {
          width: 58px;
          height: 60px;
          img {
            width: 100%;
            height: 100%;
          }
        }
        .six_media_box_list_img2 {
          width: 55px;
          height: 57px;
          img {
            width: 100%;
            height: 100%;
          }
        }
        .six_media_box_list_img3 {
          width: 53px;
          height: 54px;
          img {
            width: 100%;
            height: 100%;
          }
        }
        .six_media_box_list_img4 {
          width: 57px;
          height: 59px;
          img {
            width: 100%;
            height: 100%;
          }
        }
        .six_media_box_list_tit {
          margin-top: 25px;
          font-family: MicrosoftYaHei;
          font-size: 22px;
          font-weight: bold;
          line-height: 33px;
          letter-spacing: 0px;
          /* 外部/Black */
          color: #000000;
        }
        .six_media_box_list_txt {
          font-family: MicrosoftYaHeiLight;
          font-size: 20px;
          line-height: 30px;
          letter-spacing: 0px;
          /* Mono/Black */
          color: #000000;
          padding-top: 5px;
        }
      }
    }
  }
}
// 超过755的隐藏内容样式设置a
@media screen and (min-width: 1600px) {
  .six_media {
    display: none !important;
  }
}
</style>