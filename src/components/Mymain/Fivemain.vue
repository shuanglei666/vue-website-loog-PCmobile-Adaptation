<template>
  <div class="scroll-item">
    <!-- PC layout -->
    <div class="five">
      <div class="five_box">
        <!-- 左边 -->
        <div class="five_left">
          <div class="five_left_tit">{{$t('Home.Fivemain.NeedConsultations')}}</div>
          <div class="five_left_bdr"></div>
          <div class="five_left_swiper">
            <div class="swiper-container swiper-no-swiping">
              <div class="swiper-wrapper">
                <div class="swiper-slide">
                  <div class="five_left_swiper_span">
                    {{$t('Home.Fivemain.OurTeam')}}
                  </div>
                </div>
                <div class="swiper-slide">
                  2
                </div>
                <div class="swiper-slide">
                  3
                </div>
              </div>
            </div>
            <!-- 左右按钮 -->
            <div class="swiper_btn">
              <div class="swiper_lft">
                <div class="swiper-button-prev"></div>
              </div>
              <div class="swiper_rgt">
                <div class="swiper-button-next"></div>
              </div>
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
            <!-- <img src="../../assets/images/five_yuan.png" alt=""> -->
            <!-- swiper -->
            <div class="swiper-container swiper-no-swiping">
              <div class="swiper-wrapper">
                <div class="swiper-slide">
                  <img src="../../assets/images/five_yuan.png" alt="">
                </div>
                <div class="swiper-slide">
                  <img src="../../assets/images/five_yuan.png" alt="">
                </div>
                <div class="swiper-slide">
                  <img src="../../assets/images/five_yuan.png" alt="">
                </div>
              </div>
            </div>
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
      <!-- 直接隐藏没内容  -->
    </div>
  </div>
</template>
<script>
import Swiper from 'swiper'
import 'swiper/css/swiper.min.css'
export default {
  mounted () {
    this.$nextTick(() => {
      new Swiper('.swiper-container', {
        // direction: 'vertical', // 垂直切换选项
        loop: true, // 循环模式选项
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        },
      })
    })
  },
  methods: {
  }
}
</script>
<style lang="less" scoped>
.five {
  width: 100%;
  // height: 851px;
  // height: 500px;
  // border-top: 1px solid #a7e4ff;
  justify-content: space-between;
  align-items: center;
  flex-direction: row;
  display: flex;
  .five_box {
    width: 1200px;
    height: 100%;
    // border: 1px solid slateblue;
    // margin: 0 auto;
    justify-content: space-between;
    align-items: center;
    flex-direction: row;
    display: flex;
    background-image: url('../../assets/images/loog_bg.png');
    background-size: 100% 40%;
    background-repeat: no-repeat;
    background-position: 0px 145px;
    position: relative;
    top: 145px;
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
      position: relative;
      bottom: 58px;
      .five_left_tit {
        font-family: MicrosoftYaHei;
        font-size: 26px;
        font-weight: normal;
        line-height: 60px;
        letter-spacing: 0px;
        /* Text/Primary */
        color: #1a1a1a;
      }
      .five_left_bdr {
        width: 134px;
        border-bottom: 3px solid #000;
        padding-top: 24px;
      }
      .five_left_swiper {
        width: 100%;
        margin-top: 35px;
        display: flex;
        flex-direction: column;
        // swiper高度设置
        .swiper-container {
          width: 100% !important;
          height: 350px !important;
          background: none;
        }
        .swiper-button-next,
        .swiper-button-prev {
          width: 50px;
          height: 50px;
        }
        // 字体设置
        .swiper-slide {
          font-family: MicrosoftYaHeiLight;
          font-size: 14px;
          // line-height: 9px;
          line-height: 20px;
          letter-spacing: 0px;
          /* Mono/Black */
          color: #000000;
          // border: 1px solid red;
          top: 17px;
          // left: 28px;
          // border: 1px solid red;
          word-wrap: break-all;
          word-break: normal;
          overflow: hidden;
          .five_left_swiper_span {
            // padding: 0px 10px 100px 2px;
            width: 479px;
          }
        }
        .swiper-button-prev:after,
        .swiper-container-rtl .swiper-button-next:after {
          content: '';
          width: 40px !important;
          height: 40px !important;
          z-index: 999;
          background: rgba(11, 10, 10, 0.5);
          background-image: url('../../assets/images/left.png') !important;
          background-size: 40% 40%;
          background-position: 12px 11px;
          background-repeat: no-repeat;
          border-radius: 5px;
        }

        .swiper-button-next:after,
        .swiper-container-rtl .swiper-button-prev:after {
          content: '';
          width: 40px !important;
          height: 40px !important;
          z-index: 999;
          background: rgba(11, 10, 10, 0.5);
          background-image: url('../../assets/images/right.png') !important;
          background-size: 40% 40%;
          background-position: 12px 11px;
          background-repeat: no-repeat;
          border-radius: 5px;
        }
        .swiper-button-next,
        .swiper-button-prev {
          position: relative;
        }

        // 左右按钮盒子
        .swiper_btn {
          width: 100%;
          height: 30px;
          display: flex;
          flex-direction: row;
          justify-content: space-between;
          align-items: center;
          // border: 1px solid red;
          position: relative;
          bottom: 15px;
          .swiper_lft {
            height: 30px;
            border: none;
            position: relative;
            right: 5px;
            .swiper-button-prev,
            .swiper-container-rtl .swiper-button-next {
              left: 0;
            }
          }
          .swiper_rgt {
            height: 30px;
            border: none;
            position: relative;
            left: 10px;
          }
        }
      }
    }
    // 右边
    .five_right {
      height: 371px;
      flex-direction: row;
      display: flex;
      //   zuo
      .five_right_lft {
        height: 100%;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        .five_right_lft_top {
          width: 57.85px;
          height: 84.74px;
          background-image: url('../../assets/images/fiveDots.png');
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
          background-image: url('../../assets/images/fiveDots2.png');
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
    height: 350px !important;
    background: none;
  }
}

// 设置 小于755内容样式
@media screen and (max-width: 1600px) {
  .five {
    display: none !important;
  }
  .five_media {
    // width: 695px;
    box-sizing: content-box;
    margin-left: auto;
    margin-right: auto;
    // 上面之前写法
    // border: 1px solid red;
    display: flex;
    flex-direction: column;
    align-items: center;
    // margin-top: 40px;
    overflow: hidden;

    // .two_media4 {
    //   font-family: MicrosoftYaHei;
    //   font-size: 26px;
    //   font-weight: normal;
    //   line-height: 52.8px;
    //   letter-spacing: 0px;
    //   /* 外部/Black */
    //   color: #000000;
    //   margin-top: 40px;
    // }
    // .two_media_bdr {
    //   width: 134px;
    //   border-bottom: 2px solid #000;
    //   margin-top: 14px;
    // }
    // .two_media5 {
    //   font-family: MicrosoftYaHeiLight;
    //   font-size: 20px;
    //   line-height: 23px;
    //   letter-spacing: 0px;
    //   /* Black */
    //   color: #000000;
    //   text-align: center;
    //   margin-top: 16px;
    // }
  }
}
// 超过755的隐藏内容样式设置a
@media screen and (min-width: 1600px) {
  .four_media {
    display: none !important;
  }
}
</style>