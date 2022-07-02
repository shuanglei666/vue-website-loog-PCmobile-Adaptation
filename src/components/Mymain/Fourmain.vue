<template>
  <div class="scroll-item">
    <!-- PC layout -->
    <div class="four">
      <div class="four_box">
        <div class="four_tit">
          <div class="four_tit_lft">
            {{$t('Home.Fourmain.ThePrgtyred')}}
            <div class="four_tit_lft_bdr"></div>
          </div>
          <div class="four_tit_rgt">
            {{$t('Home.Fourmain.TrefdeLacus')}}
          </div>
        </div>
        <div class="four_content">
          <!-- 第一个 -->
          <div class="four_count">
            <div class="four_list">
              <div class="four_list_top">
                <div class="four_list_img">
                  <img src="../../assets/images/four.png" alt="">
                </div>
                <div class="four_list_ctr">
                  {{$t('Home.Fourmain.CrossPlatform')}}
                </div>
                <div class="four_list_btn">
                  {{$t('Home.Fourmain.ElitEsse')}}
                </div>
              </div>
              <div class="four_list_bottom">
                <img src="../../assets/images/four_right.png" alt="" class="img_arrow">
              </div>
            </div>
          </div>
          <!-- 第二个 -->
          <div class="four_count">
            <div class="four_list">
              <div class="four_list_top">
                <div class="four_list_img">
                  <img src="../../assets/images/four2.png" alt="">
                </div>
                <div class="four_list_ctr">
                  {{$t('Home.Fourmain.CloudServer')}}

                </div>
                <div class="four_list_btn">
                  {{$t('Home.Fourmain.ElitEsse')}}
                </div>
              </div>
              <div class="four_list_bottom">
                <img src="../../assets/images/four_right.png" alt="" class="img_arrow">
              </div>
            </div>
          </div>
          <!-- 第三个 -->
          <div class="four_count">
            <div class="four_list">
              <div class="four_list_top">
                <div class="four_list_img">
                  <img src="../../assets/images/four3.png" alt="">
                </div>
                <div class="four_list_ctr">
                  {{$t('Home.Fourmain.PureJavascript')}}
                </div>
                <div class="four_list_btn">
                  {{$t('Home.Fourmain.ElitEsse')}}
                </div>
              </div>
              <div class="four_list_bottom">
                <img src="../../assets/images/four_right.png" alt="" class="img_arrow">
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- mobile layout -->
    <div class="four_media">
      <div class="four_media_box">
        <div class="four_media_tit">Sergtrfx we provide</div>
        <div class="four_media_bdr"></div>
        <div class="four_media_subtit">Trefde lacus drfefe sagittis lacus in. Amet nisl at mauris enim aumsiitincidunt
          vel. Efffeec ipsum, at quis ullamcorper eget ut.</div>
        <!-- 轮播图-->
      </div>
      <div class="four_media_swiper">
        <!-- <div class="swiper-container swiperAAA" id="container-FourmgainAAAAAAAA">
          <div class="swiper-wrapper">
            <div class="swiper-slide">Slide 1</div>
            <div class="swiper-slide">Slide 2</div>
            <div class="swiper-slide">Slide 3</div>
          </div>
        </div> -->
        <!-- Swiper -->
        <div class="swiper" id="mySwiperFourmain">
          <div class="swiper-wrapper">
            <!-- 第一个 -->
            <div class="swiper-slide">
              <div class="swiper-slide">
                <div class="four_count">
                  <div class="four_list">
                    <div class="four_list_top">
                      <div class="four_list_img">
                        <img src="../../assets/images/Fourmain1.png" alt="">
                      </div>
                      <div class="four_list_ctr">
                        {{$t('Home.Fourmain.CrossPlatform')}}

                      </div>
                      <div class="four_list_btn">
                        {{$t('Home.Fourmain.ElitEsse')}}
                      </div>
                    </div>
                    <div class="four_list_bottom">
                      <img src="../../assets/images/four_right.png" alt="" class="img_arrow">
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <!-- 第二个 -->
            <div class="swiper-slide">
              <div class="swiper-slide">
                <div class="four_count">
                  <div class="four_list">
                    <div class="four_list_top">
                      <div class="four_list_img">
                        <img src="../../assets/images/Fourmain2.png" alt="">
                      </div>
                      <div class="four_list_ctr">
                        {{$t('Home.Fourmain.CloudServer')}}

                      </div>
                      <div class="four_list_btn">
                        {{$t('Home.Fourmain.ElitEsse')}}
                      </div>
                    </div>
                    <div class="four_list_bottom">
                      <img src="../../assets/images/four_right.png" alt="" class="img_arrow">
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <!-- 第三个 -->
            <div class="swiper-slide">
              <div class="swiper-slide">
                <div class="four_count">
                  <div class="four_list">
                    <div class="four_list_top">
                      <div class="four_list_img">
                        <img src="../../assets/images/Fourmain2.png" alt="">
                      </div>
                      <div class="four_list_ctr">
                        {{$t('Home.Fourmain.PureJavascript')}}
                      </div>
                      <div class="four_list_btn">
                        {{$t('Home.Fourmain.ElitEsse')}}
                      </div>
                    </div>
                    <div class="four_list_bottom">
                      <img src="../../assets/images/four_right.png" alt="" class="img_arrow">
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <!-- <div class="swiper-pagination mySwiperFourmain-pagination" id="mySwiperFourmain-pagination">啊啊啊啊啊啊啊</div> -->
          <div id="mySwiperFourmain-pagination"></div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import Swiper from 'swiper'
export default {
  mounted () {
    this.getInfor();
  },
  methods: {
    getInfor () {
      this.$nextTick(() => {
        // setTimeout(() => {
        new Swiper("#mySwiperFourmain", {
          // slidesPerView: 2.2,
          // spaceBetween: 20,
          slidesPerView: 2.1,
          spaceBetween: 10,
          centeredSlides: true,
          grabCursor: true,
          //无限循环
          loop: true,
          pagination: {
            el: "#mySwiperFourmain-pagination",
            clickable: true,
          },
        });
        // }, 10)
      })
    },
  }
};
</script>
<style lang="less" scoped>
// PC
.four {
  width: 100%;
  height: 851px;
  // border-top: 1px solid #a7e4ff;
  white-space: normal;
  flex-direction: column;
  display: flex;
  justify-content: center;
  align-items: center;
  .four_box {
    width: 1200px;
    height: 100%;
    // border: 1px solid goldenrod;
    // margin: 0 auto;
    flex-direction: column;
    display: flex;
    background-image: url('../../assets/images/loog_bg.png');
    background-size: 100% 40%;
    background-repeat: no-repeat;
    position: relative;
    top: 160px;
    // padding-left: 16px;
    // padding-right: 16px;
    box-sizing: content-box;
    margin-left: auto;
    margin-right: auto;
    .four_tit {
      width: 100%;
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      .four_tit_lft {
        font-family: MicrosoftYaHei;
        font-size: 26px;
        font-weight: normal;
        line-height: 96px;
        letter-spacing: 0px;

        /* Dark */
        color: #292830;
        .four_tit_lft_bdr {
          border-bottom: 2px solid #000000;
          width: 134px;
          padding-top: 29px;
        }
      }
      .four_tit_rgt {
        width: 30%;
        font-family: MicrosoftYaHeiLight;
        font-size: 16px;
        font-weight: 290;
        line-height: 34px;
        letter-spacing: 0px;
        color: #3e3e3e;
      }
    }
    // 三个盒子
    .four_content {
      width: 100%;
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      margin-top: 145px;
      .four_list {
        width: 378.38px;
        height: 350px;
        border-radius: 12px;
        background: #ffffff;
        /* border: 1px solid #000000; */
        margin: 0 auto;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        box-shadow: 0px 16px 80px 0px rgba(51, 51, 51, 0.12);
        transition: all 0.5s;
        .four_list_img {
          width: 70px;
          height: 70px;
          background: #ffbd74;
          border-radius: 50px;
          background: rgba(255, 189, 116, 0.05);
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
        }
        .four_list_ctr {
          margin-top: 24px;
          font-family: MicrosoftYaHeiLight;
          font-size: 30px;
          font-weight: 290;
          line-height: 30px;
          letter-spacing: 0px;

          /* Dark */
          color: #292830;
        }
        .four_list_btn {
          font-family: MicrosoftYaHeiLight;
          font-size: 14px;
          font-weight: 290;
          line-height: 20px;
          letter-spacing: 0px;
          /* Light */
          color: #bdbdbd;
          margin-top: 12px;
        }
        .four_list_bottom {
          margin-top: 215px;
          margin-right: 355px;
          cursor: pointer;
          position: absolute;
          overflow: hidden;
        }
        .img_arrow {
          margin-left: -19px;
        }
      }
      .four_count:hover .four_list {
        transform: translate(0px, -20px);
      }
      .four_count:hover .img_arrow {
        margin-left: 18px;
      }
      .four_count:hover .four_list_bottom {
        transition: all 0.2s linear;
        transform: translateX(172px);
      }

      .four_list_top {
        text-align: center;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
      }
      .four_list:hover .four_list_top {
        transform: translate(0px, -10px);
        transition: transform 0.1s ease 0.1s;
      }
      .four_count:hover {
        transform: translateY(-2px);
      }
    }
  }
}

// 设置 小于755内容样式
@media screen and (max-width: 1600px) {
  .four {
    display: none !important;
  }
  .four_media {
    // border: 1px solid orchid;
    // width: 755px;
    width: 700px;
    // border: 1px solid lightseagreen;
    box-sizing: content-box;
    margin-left: auto;
    margin-right: auto;
    // 上面之前写法
    // border: 1px solid red;
    display: flex;
    flex-direction: column;
    align-items: center;
    // overflow: hidden;
    .four_media_swiper {
      // border: 1px solid lightseagreen;
      width: 750px;
      height: 301px;
      margin-top: 70px;
      padding-bottom: 50px;
      .swiper {
        width: 100%;
        height: 100%;
      }

      .swiper-slide {
        text-align: center;
        font-size: 18px;
        // background: #fff;
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
        // 未激活缩小样式
        transition: 300ms;
        transform: scale(0.9);
        .four_list {
          width: 326px;
          height: 301px;
          border-radius: 12px;
          background: #ffffff;
          /* border: 1px solid #000000; */
          margin: 0 auto;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          box-shadow: 0px 16px 80px 0px rgba(51, 51, 51, 0.12);
          transition: all 0.5s;
          .four_list_img {
            width: 69.19px;
            height: 64px;
            background: #ffbd74;
            border-radius: 50px;
            background: rgba(255, 189, 116, 0.05);
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            img {
              width: 25.95px;
              height: 16px;
              // background: #e2598b;
            }
          }
          .four_list_ctr {
            margin-top: 24px;
            font-family: MicrosoftYaHeiLight;
            font-size: 30px;
            line-height: 30px;
            letter-spacing: 0px;
            /* Dark */
            color: #292830;
          }
          .four_list_btn {
            font-family: MicrosoftYaHeiLight;
            font-size: 14px;
            line-height: 30px;
            letter-spacing: 0px;
            color: #bdbdbd;
            margin-top: 12px;
          }
          .four_list_bottom {
            // width: 17.3px;
            // height: 8px;
            margin-top: 215px;
            margin-right: 355px;
            cursor: pointer;
            position: absolute;
            overflow: hidden;
          }
          .img_arrow {
            margin-left: -18px;
          }
        }
        .four_count:hover .four_list {
          transform: translate(0px, -20px);
        }
        .four_count:hover .img_arrow {
          width: 17.3px;
          height: 8px;
          margin-left: 18px;
        }
        .four_count:hover .four_list_bottom {
          transition: all 0.2s linear;
          transform: translateX(172px);
        }
        .four_list_top {
          text-align: center;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
        }
        .four_list:hover .four_list_top {
          transform: translate(0px, -10px);
          transition: transform 0.1s ease 0.1s;
        }
        .four_count:hover {
          transform: translateY(-2px);
        }
      }
      // 激活后还原样式
      .swiper-slide-active,
      .swiper-slide-duplicate-active {
        transform: scale(1.1);
      }
      .swiper-slide img {
        display: block;
        width: 100%;
        height: 100%;
        object-fit: cover;
      }
      #mySwiperFourmain-pagination {
        position: relative;
        left: 330px;
        top: 20px;
        // margin: 0 auto;
        /deep/ .swiper-pagination-bullet-active {
          background: #000000 !important;
          width: 32px;
          height: 2px;
          border-radius: 0 !important;
        }
        /deep/ .swiper-pagination-bullet {
          width: 20px;
          height: 2px;
          background: rgba(0, 0, 0, 0.5);
          border-radius: 0 !important;
        }
      }
    }
  }

  .four_media_box {
    width: 700px;
    box-sizing: content-box;
    margin-left: auto;
    margin-right: auto;
    // border: 1px solid red;
    display: flex;
    flex-direction: column;
    align-items: center;
    // margin-top: 40px;
    overflow: hidden;
    .four_media_tit {
      font-family: MicrosoftYaHei;
      font-size: 26px;
      font-weight: bold;
      line-height: 52.8px;
      letter-spacing: 0px;
      /* 外部/Black */
      color: #000000;
      margin-top: 40px;
    }
    .four_media_bdr {
      width: 134px;
      border-bottom: 5px solid #000;
      margin-top: 14.2px;
    }
    .four_media_subtit {
      margin-top: 16px;
      font-family: MicrosoftYaHeiLight;
      font-size: 20px;
      line-height: 30px;
      letter-spacing: 0px;
      color: #3e3e3e;
      text-align: center;
    }
  }
}
// 超过755的隐藏内容样式设置a
@media screen and (min-width: 1600px) {
  .four_media {
    display: none !important;
  }
}
</style>