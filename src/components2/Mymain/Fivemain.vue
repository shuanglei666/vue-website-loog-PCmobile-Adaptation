<template>
  <div class="scroll-item">
    <!-- PC layout -->
    <div class="five">
      <div class="five_box">
        <!-- 左边 -->
        <div class="five_left">
          <div class="tit_border">
            <div class="five_left_tit">{{$t('Home2.Fivemain.ValuesOfDAGCreatorPlatform')}}</div>
            <div class="five_left_bdr"></div>
          </div>
          <div class="five_left_swiper">
            <div class="five_left_swiper_span">
              <div class="five_left_swiper_span_list">1. {{$t('Home2.Fivemain.Introduce')}}</div>
              <div class="five_left_swiper_span_list">2. {{$t('Home2.Fivemain.LetSupportCreators')}}</div>
              <div class="five_left_swiper_span_list">3. {{$t('Home2.Fivemain.economicModel')}}</div>
              <div class="five_left_swiper_span_list">4. {{$t('Home2.Fivemain.PlatformItself')}}</div>
            </div>
          </div>
        </div>
        <!-- 右边 -->
        <div class="five_right">
          <div class="five_right_lft">
            <div class="five_right_lft_top">
              <div class="five_right_lft_btn"></div>
            </div>
          </div>
          <div class="five_right_ctr">
            <img src="../../assets/images2/five_yuan.png" alt="">

            <!-- <div class="swiper-container swiper-no-swiping">
              <div class="swiper-wrapper">
                <div class="swiper-slide">
                  <img src="../../assets/images2/five_yuan.png" alt="">
                </div>
                <div class="swiper-slide">
                  <img src="../../assets/images2/five_yuan.png" alt="">
                </div>
                <div class="swiper-slide">
                  <img src="../../assets/images2/five_yuan.png" alt="">
                </div>
              </div>
            </div> -->
          </div>
          <div class="five_right_rgt">
            <div class="five_right_rgt_top"></div>
            <div class="five_right_rgt_btn"></div>
          </div>
        </div>
      </div>
    </div>
    <!-- mobile layout -->
    <div class="five_media">
      <div class="five_media1">
        DAG创作者平台的价值观
      </div>
      <div class="five_media_bdr"></div>
      <!-- 上面轮播图 -->
      <!-- <div class="five_media_swiperAAA">
        <swiper class="swiper" :options="swiperOption">
          <swiper-slide>
            <div class="container_img">
            </div>
            <div class="container_txt">
              <div class="container_txt_width">Trefde lacus drfefe sagittis lacus in. Amet nisl at mauris enim
                aumsiitincidunt vel. Efffeec ipsum, at quis ullamcorper eget ut., ipsum, at quis ullamcorper eget ut
                ipsum, at quis ullamcorper eget ut ipsum, at quis ullamcorper eget ut ipsum, at quis ullamcorper
                eget
                ut</div>
            </div>
          </swiper-slide>
          <swiper-slide>
            <div class="container_img">
            </div>
            <div class="container_txt">
              <div class="container_txt_width">Trefde lacus drfefe sagittis lacus in. Amet nisl at mauris enim
                aumsiitincidunt vel. Efffeec ipsum, at quis ullamcorper eget ut., ipsum, at quis ullamcorper eget ut
                ipsum, at quis ullamcorper eget ut ipsum, at quis ullamcorper eget ut ipsum, at quis ullamcorper
                eget
                ut</div>
            </div>
          </swiper-slide>
          <swiper-slide>
            <div class="container_img">
            </div>
            <div class="container_txt">
              <div class="container_txt_width">Trefde lacus drfefe sagittis lacus in. Amet nisl at mauris enim
                aumsiitincidunt vel. Efffeec ipsum, at quis ullamcorper eget ut., ipsum, at quis ullamcorper eget ut
                ipsum, at quis ullamcorper eget ut ipsum, at quis ullamcorper eget ut ipsum, at quis ullamcorper
                eget
                ut</div>
            </div>
          </swiper-slide>
          <div class="swiper-pagination" id="five_media_swiperAAA" slot="pagination"></div>
        </swiper>
      </div> -->
      <div class="five_media_box">
        <div class="five_media_box_head"></div>
        <div class="five_media_box_txt">
          <div class="five_media_box_txt_list">1.	引入数字稀缺性，恢复创作者的定价权。 </div>
          <div class="five_media_box_txt_list">2.	让支持创作者成为一种投资行为，而不仅仅是利他行为。</div>
          <div class="five_media_box_txt_list">3.	引入新的可编程经济模型，将财富分散到整个创作者领域。</div>
          <div class="five_media_box_txt_list">4.	让创作者不仅拥有自己创作的内容，还拥有平台本身。</div>
        </div>
      </div>
    </div>
  </div>
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
        // pagination: '#five_media_swiperAAA',
        paginationClickable: true,
        pagination: {
          el: '#five_media_swiperAAA',
          clickable: true, // 允许点击小圆点跳转
        }
      }
    }
  },
  mounted () {
    // this.$nextTick(() => {
    //   new Swiper('.swiper-container', {
    //     // direction: 'vertical', // 垂直切换选项
    //     loop: true, // 循环模式选项
    //     navigation: {
    //       nextEl: ".swiper-button-next",
    //       prevEl: ".swiper-button-prev",
    //     },
    //   })
    // })
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
  },
  methods: {
  }
}
</script>
<style lang="less" scoped>
.five {
  width: 100%;
  // height: 851px;
  // height: 600px;
  // height: 570px;
  // border-top: 1px solid #a7e4ff;
  justify-content: space-between;
  align-items: center;
  flex-direction: row;
  display: flex;
  .five_box {
    width: 1200px;
    // height: 100%;
    // border: 1px solid slateblue;
    // margin: 0 auto;
    justify-content: space-between;
    align-items: center;
    flex-direction: row;
    display: flex;
    background-image: url('../../assets/images2/loog_bg.png'); //
    background-size: 100% 40%;
    background-repeat: no-repeat;
    background-position: 0px 10%;
    position: relative;
    // top: 70px;
    top: 105px;
    // padding-left: 16px;
    // padding-right: 16px;
    box-sizing: content-box;
    margin-left: auto;
    margin-right: auto;
    // 左边
    .five_left {
      width: 45%;
      display: flex;
      flex-direction: column;
      .tit_border {
        width: 100%;
        height: 75px;
        // border: 1px solid red;
        display: flex;
        flex-direction: column;
        .five_left_tit {
          font-family: MicrosoftYaHei;
          font-size: 26px;
          font-weight: normal;
          // line-height: 60px;
          letter-spacing: 0px;
          color: #1a1a1a;
        }
        .five_left_bdr {
          width: 134px;
          // height: 2px;
          // min-height: 2px;
          // background: #000000;
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
      .five_left_swiper {
        width: 100%;
        margin-top: 35px;
        display: flex;
        flex-direction: column;
        .five_left_swiper_span {
          .five_left_swiper_span_list {
            padding-bottom: 15px;
            font-family: SourceHanSansCN-Regular;
            font-size: 12px;
            font-weight: normal;
            letter-spacing: 0em;
            color: #000000;
          }
        }
        // swiper高度设置
        // .swiper-container {
        //   width: 100% !important;
        //   height: 350px !important;
        //   background: none;
        // }
        // .swiper-button-next,
        // .swiper-button-prev {
        //   width: 50px;
        //   height: 50px;
        // }
        // 字体设置
        // .swiper-slide {
        //   font-family: MicrosoftYaHeiLight;
        //   font-size: 14px;
        //   line-height: 20px;
        //   letter-spacing: 0px;
        //   /* Mono/Black */
        //   color: #000000;
        //   // border: 1px solid red;
        //   top: 17px;
        //   // border: 1px solid red;
        //   word-wrap: break-all;
        //   word-break: normal;
        // }
        // .swiper-button-prev:after,
        // .swiper-container-rtl .swiper-button-next:after {
        //   content: '';
        //   width: 40px !important;
        //   height: 40px !important;
        //   z-index: 999;
        //   background: rgba(11, 10, 10, 0.5);
        //   background-image: url('../../assets/images2/left.png') !important;
        //   background-size: 40% 40%;
        //   background-position: 12px 11px;
        //   background-repeat: no-repeat;
        //   border-radius: 5px;
        // }

        // .swiper-button-next:after,
        // .swiper-container-rtl .swiper-button-prev:after {
        //   content: '';
        //   width: 40px !important;
        //   height: 40px !important;
        //   z-index: 999;
        //   background: rgba(11, 10, 10, 0.5);
        //   background-image: url('../../assets/images2/right.png') !important;
        //   background-size: 40% 40%;
        //   background-position: 12px 11px;
        //   background-repeat: no-repeat;
        //   border-radius: 5px;
        // }
        // .swiper-button-next,
        // .swiper-button-prev {
        //   position: relative;
        // }

        // 左右按钮盒子
        // .swiper_btn {
        //   width: 100%;
        //   height: 30px;
        //   display: flex;
        //   flex-direction: row;
        //   justify-content: space-between;
        //   align-items: center;
        //   // border: 1px solid red;
        //   position: relative;
        //   bottom: 15px;
        //   .swiper_lft {
        //     height: 30px;
        //     border: none;
        //     position: relative;
        //     right: 5px;
        //     .swiper-button-prev,
        //     .swiper-container-rtl .swiper-button-next {
        //       left: 0;
        //     }
        //   }
        //   .swiper_rgt {
        //     height: 30px;
        //     border: none;
        //     position: relative;
        //     left: 10px;
        //   }
        // }
      }
    }
    // 右边
    .five_right {
      height: 371px;
      flex-direction: row;
      display: flex;
      position: relative;
      top: 10px;
      //   zuo
      .five_right_lft {
        height: 100%;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        .five_right_lft_top {
          width: 57.85px;
          height: 84.74px;
          background-image: url('../../assets/images2/fiveDots.png');
          background-size: 100% 100%;
          background-repeat: no-repeat;
          position: relative;
          left: 31px;
          bottom: 23px;
          z-index: 100;
        }
        .five_right_lft_btn {
          top: 241.81px;
          width: 70.12px;
          height: 70.09px;
          /* Primary/Normal */
          background: #143a79;
          border-radius: 50%;
          position: relative;
          top: 236px;
          right: 65px;
        }
      }
      //中
      .five_right_ctr {
        width: 371.63px;
        height: 371.47px;
        background: #e9f0fb;
        box-shadow: 0px 16px 80px 0px rgba(51, 51, 51, 0.12);
        transition: all 0.5s;
        cursor: pointer;
        img {
          position: relative;
          top: 46px;
          left: 54px;
          transition: all 0.5s;
          width: 269px;
          height: 275px;
          border-radius: 50%;
          box-shadow: 0px 30px 33px 0px rgba(255, 98, 86, 0.3);
        }
        img:hover {
          transform: scale(1.1);
        }
      }
      .five_right_ctr:hover {
        // transform: translateY(-1px);
      }
      // 右边
      .five_right_rgt {
        height: 100%;
        display: flex;
        justify-content: space-between;
        flex-direction: column;
        .five_right_rgt_top {
          width: 35.06px;
          height: 35.04px;
          background: #ffd700;
          border-radius: 50%;
          position: relative;
          left: 18px;
          bottom: 30px;
        }
        .five_right_rgt_btn {
          width: 43.46px;
          height: 21.73px;
          background-image: url('../../assets/images2/fiveDots2.png');
          background-size: 100% 100%;
          background-repeat: no-repeat;
          position: relative;
          right: 8px;
        }
      }
    }
  }
  .swiper-container {
    width: 100% !important;
    height: 370px !important;
    // border: 1px solid red;
    background: none;
  }
}

// 设置 小于755内容样式
@media screen and (max-width: 1600px) {
  .five {
    display: none !important;
  }
  .five_media {
    // border: 1px solid thistle;
    // margin-top: 140px;
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
    align-items: center;
    // overflow: hidden;
    .five_media1 {
      font-family: MicrosoftYaHei;
      font-size: 26px;
      font-weight: bold;
      line-height: 60px;
      letter-spacing: 0px;
      /* Text/Primary */
      color: #1a1a1a;
      margin-top: 39px;
    }
    .five_media_bdr {
      width: 134px;
      // margin-top: 14.2px;
      // margin-top: 15px;
      border-bottom: 5px solid #000;
    }
    // 第二个
    // .five_media_swiperAAA {
    //   margin-top: 16px;
    //   width: 750px;
    //   .swiper {
    //     width: 100%;
    //     height: 100%;
    //     .container_img {
    //       width: 93px;
    //       height: 95px;
    //       background: url(../../assets/images2/six1.png) no-repeat;
    //       background-size: 100% 100%;
    //       z-index: 100;
    //       margin: 0 auto;
    //       position: relative;
    //       top: 40px;
    //     }
    //     .container_txt {
    //       width: 100%;
    //       height: 260px;
    //       padding-top: 50px;
    //       background: #fafafa;
    //       position: relative;
    //       font-family: MicrosoftYaHeiLight;
    //       font-size: 20px;
    //       line-height: 30px;
    //       letter-spacing: 0px;
    //       color: #3e3e3e;
    //       box-sizing: content-box;
    //       .container_txt_width {
    //         padding: 10px 30px 0 30px;
    //         text-align: center;
    //         font-family: MicrosoftYaHeiLight;
    //         font-size: 20px;
    //         line-height: 30px;
    //         letter-spacing: 0px;
    //         color: #3e3e3e;
    //       }
    //     }
    //     /deep/ .swiper-pagination-bullet-active {
    //       background: #000000 !important;
    //       width: 32px;
    //       height: 2px;
    //       border-radius: 0 !important;
    //     }
    //     /deep/ .swiper-pagination-bullet {
    //       width: 20px;
    //       height: 2px;
    //       background: rgba(0, 0, 0, 0.5);
    //       border-radius: 0 !important;
    //     }
    //   }
    // }
    .five_media_box {
      width: 754px;
      height: 254px;
      background: #fafafa;
      margin-top: 72px;
      .five_media_box_head {
        width: 94px;
        height: 95px;
        background-image: url('../../assets/images2/media_six2.png');
        background-size: 100% 100%;
        background-repeat: no-repeat;
        margin-left: auto;
        margin-right: auto;
        position: relative;
        bottom: 47.5px;
      }
      .five_media_box_txt {
        font-family: SourceHanSansCN-Regular;
        font-size: 20px;
        font-weight: normal;
        line-height: 30px;
        letter-spacing: 0em;
        /* Mono/Black */
        color: #000000;
        flex-direction: column;
        display: flex;
        // width: 90%;
        // margin: 0 auto;
        margin-left: 54px;
        position: relative;
        bottom: 8px;
        .five_media_box_txt_list {
          display: inline-block;
          overflow: hidden;
          white-space: nowrap;
          text-overflow: ellipsis;
        }
      }
    }
  }
}
// 超过755的隐藏内容样式设置a
@media screen and (min-width: 1600px) {
  .five_media {
    display: none !important;
  }
}
</style>