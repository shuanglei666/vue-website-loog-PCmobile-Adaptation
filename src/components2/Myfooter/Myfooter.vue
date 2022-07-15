<template>
  <div>
    <!-- PC layout -->
    <div class="footer">
      <div class="footer_box">
        <!-- 上面 -->
        <div class="footer_top">
          <div class="footer_top_left">
            <div class="footer_top_left_img">
              <img src="../../assets/images2/LOOG.png">
            </div>
            <div class="footer_top_left_yellow"></div>
            <div class="footer_top_left_txt">
              {{$t('Home2.Myfooter.Fast')}}
            </div>
          </div>
        </div>

        <div class="footer_bottom">
          <div class="footer_bottom_rgt">
            <div class="footer_bottom_rgt_top">{{$t('Home2.Myfooter.ContactUs')}}</div>
            <div class="footer_bottom_rgt_btm">
              <div class="footer_bottom_rgt_btm_top">
                <div class="footer_bottom_rgt_btm_top_list">
                  <img src="../../assets/images2/footer1.png" alt="">
                </div>
                <div class="footer_bottom_rgt_btm_top_list">
                  <img src="../../assets/images2/footer2.png" alt="">
                </div>
                <div class="footer_bottom_rgt_btm_top_list">
                  <img src="../../assets/images2/footer3.png" alt="">
                </div>
                <div class="footer_bottom_rgt_btm_top_list">
                  <img src="../../assets/images2/footer4.png" alt="">
                </div>
                <div class="footer_bottom_rgt_btm_btm_list">
                  <img src="../../assets/images2/footer5.png" alt="">
                </div>
                <div class="footer_bottom_rgt_btm_btm_list">
                  <img src="../../assets/images2/footer6.png" alt="">
                </div>
                <div class="footer_bottom_rgt_btm_btm_list">
                  <img src="../../assets/images2/footer7.png" alt="">
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="backtop extra-btn" :class="navShow? '' : 'hidden'" @click="toTop">
          <div class="sc-hKwDye eESxKY navItem top_bg">
          </div>
        </div>
      </div>
      <div class="footer_bottom_btm">
        {{$t('Home2.Myfooter.Copyright')}}
      </div>
    </div>
    <!-- mobile layout -->
    <div class="footer_media">
      <div class="footer_media_left">
        <div class="footer_media_logo">
          <img src="../../assets/images2/LOOG.png" alt="">
        </div>
        <div class="footer_media_bdr"></div>
        <div class="footer_media_tit">Fast, safe and decent
          -ralized</div>
        <div class="footer_media_subtit">Copyright © 2022 GMR Productions
          -Limited. All rights reserved</div>
      </div>
      <div class="footer_media_right">
        <div class="footer_media_right_tit">Contact us</div>
        <div class="footer_media_right_box">
          <div class="footer_media_right_box_top">
            <div class="footer_media_right_box_img"><img src="../../assets/images2/footer1.png" alt=""></div>
            <div class="footer_media_right_box_img"><img src="../../assets/images2/footer2.png" alt=""></div>
            <div class="footer_media_right_box_img"><img src="../../assets/images2/footer3.png" alt=""></div>
            <div class="footer_media_right_box_img"><img src="../../assets/images2/footer4.png" alt=""></div>
          </div>
          <div class="footer_media_right_box_btm">
            <div class="footer_media_right_box_btm_box">
              <div class="footer_media_right_box_img"><img src="../../assets/images2/footer5.png" alt=""></div>
              <div class="footer_media_right_box_img"><img src="../../assets/images2/footer6.png" alt=""></div>
              <div class="footer_media_right_box_img"><img src="../../assets/images2/footer7.png" alt=""></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data () {
    return {
      gotop: false,
      top: "",
      navShow: null
    }
  },
  mounted () {
    // window.addEventListener("scroll", this.handleScroll, true);
    window.addEventListener("scroll", () => {
      this.top =
        document.documentElement.scrollTop ||
        document.body.scrollTop ||
        window.pageYOffset;
    });
  },
  // handleScroll () {
  //   let scrolltop = document.documentElement.scrollTop || document.body.scrollTop;
  //   scrolltop > 30 ? (this.gotop = true) : (this.gotop = false);
  // },
  methods: {
    toTop () {
      let top = document.documentElement.scrollTop || document.body.scrollTop;
      const timeTop = setInterval(() => {
        document.body.scrollTop = document.documentElement.scrollTop = top -= 50;
        if (top <= 0) {
          clearInterval(timeTop);
        }
      }, 1);
    },
  },
  watch: {
    // top (newValue, oldValue) {
    // if (newValue == 0) {
    //   this.navShow = true;
    // } else if (newValue > 0) {
    // }
    // },
    top (newValue, oldValue) {
      if (newValue == 0) {
        this.navShow = false;
      } else {
        this.navShow = true;
      }
    },
  }
}
</script>
<style lang="less" scoped>
.footer {
  width: 100%;
  // height: 566px;
  // border: 1px solid red;
  // margin-top: 213px;
  padding-bottom: 131px;
  justify-content: center;
  flex-direction: column;
  display: flex;
  align-items: center;
  white-space: normal;
  // border-top: 1px solid #a7e4ff;
  .footer_box {
    width: 1200px;
    flex-direction: row;
    justify-content: space-between;
    display: flex;
    // border: 1px solid mediumturquoise;
    // 上面
    .footer_top {
      width: 100%;
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      align-items: center;
      .footer_top_left {
        .footer_top_left_img {
          width: 186px;
        }
        .footer_top_left_yellow {
          width: 24px;
          height: 8px;
          border-radius: 2px;
          background: linear-gradient(71deg, #fdec57 1%, #fdec57 1%, #ffc300 99%, #ffc300 100%);
          box-shadow: 0px 4px 10px 0px #fdeb54;
          margin-top: 6px;
        }
        .footer_top_left_txt {
          // width: 300px;
          font-family: MicrosoftYaHei;
          font-size: 29px;
          font-weight: normal;
          line-height: 38px;
          letter-spacing: 0em;
          color: #00081e;
          margin-top: 12px;
        }
      }
      .footer_top_right {
        width: 195px;
        font-family: MicrosoftYaHeiLight;
        font-size: 12px;
        line-height: 24px;
        letter-spacing: 0em;
        color: #00081e;
      }
    }
    // 下面
    .footer_bottom {
      // width: 100%;
      flex-direction: row;
      justify-content: space-between;
      display: flex;
      margin-top: 20px;
      // 左边盒子
      .footer_bottom_lft {
        // width: 60%;
        // border: 1px solid red;
        flex-direction: row;
        justify-content: space-between;
        display: flex;
        .footer_bottom_lft_lft {
          flex-direction: column;
          display: flex;
          .footer_bottom_lft_lft_top {
            font-family: MicrosoftYaHei;
            font-size: 18px;
            font-weight: bold;
            line-height: 24px;
            letter-spacing: 0em;
            color: #00081e;
          }
          .footer_bottom_lft_lft_list {
            font-family: MicrosoftYaHeiLight;
            font-size: 12px;
            line-height: 24px;
            letter-spacing: 0em;
            color: #00081e;
            margin-top: 19px;
            cursor: pointer;
          }
        }
      }
      // 右边盒子
      .footer_bottom_rgt {
        // border: 1px solid red;
        flex-direction: column;
        display: flex;
        .footer_bottom_rgt_top {
          flex-direction: row-reverse;
          display: flex;
          font-family: MicrosoftYaHei;
          font-size: 18px;
          font-weight: bold;
          line-height: 24px;
          letter-spacing: 0em;
          color: #00081e;
        }
        .footer_bottom_rgt_btm {
          margin-top: 30px;
          width: 324px;
          display: flex;
          flex-direction: row;
          justify-content: space-between;
          cursor: pointer;
          .footer_bottom_rgt_btm_top {
            width: 100%;
            display: flex;
            flex-direction: row;
            justify-content: space-between;
          }
          .footer_bottom_rgt_btm_btm {
            width: 71%;
            margin-top: 32px;
            display: flex;
            flex-direction: row;
            justify-content: space-between;
            position: relative;
            left: 1px;
          }
        }
      }
    }
    // 返回顶部
    .backtop {
      box-sizing: content-box;
      position: fixed;
      // bottom: 142.05px;
      // right: 98px;
      bottom: 131px;
      right: 106px;
      z-index: 1000;
      cursor: pointer;
      width: 46px;
      height: 46px;
      border-radius: 4px;
      background: #d8d8d8;
      box-shadow: 0px 16px 30px 0px rgba(0, 0, 0, 0.12);
    }
    .backtop.hidden {
      opacity: 0;
    }
    .extra-btn {
      background: #d8d8d8 url(../../assets/images2/footerback.png) no-repeat center center;
    }
  }
  .footer_bottom_btm {
    margin-top: 51px;
    font-family: MicrosoftYaHeiLight;
    font-size: 12px;
    line-height: 24px;
    letter-spacing: 0em;
    color: #00081e;
  }
}

// 设置 小于755内容样式
@media screen and (max-width: 1600px) {
  .footer {
    display: none !important;
  }
  .footer_media {
    // border: 1px solid blue;
    width: 700px;
    box-sizing: content-box;
    margin-left: auto;
    margin-right: auto;
    // 上面之前写法
    // border: 1px solid red;
    // margin-top: 194px;
    margin-top: 81px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    overflow: hidden;
    padding-bottom: 87px;
    .footer_media_left {
      flex-direction: column;
      display: flex;
      .footer_media_logo {
        width: 146px;
        height: 65px;
        img {
          width: 100%;
          height: 100%;
        }
      }
      .footer_media_bdr {
        width: 24px;
        height: 8px;
        border-radius: 2px;
        background: linear-gradient(71deg, #fdec57 1%, #fdec57 1%, #ffc300 100%, #ffc300 100%);
        box-shadow: 0px 4px 10px 0px #fdeb54;
        margin-top: 15px;
      }
      .footer_media_tit {
        width: 210px;
        margin-top: 10px;
        font-family: MicrosoftYaHei;
        font-size: 20px;
        font-weight: normal;
        line-height: 30px;
        letter-spacing: 0em;
        color: #00081e;
      }
      .footer_media_subtit {
        width: 350px;
        font-family: MicrosoftYaHeiLight;
        font-size: 20px;
        line-height: 30px;
        letter-spacing: 0em;
        color: #767676;
      }
    }

    .footer_media_right {
      margin-top: 28px;
      flex-direction: column;
      display: flex;
      .footer_media_right_tit {
        font-family: MicrosoftYaHei;
        font-size: 20px;
        font-weight: bold;
        line-height: 24px;
        letter-spacing: 0em;
        color: #00081e;
        display: flex;
        flex-direction: row-reverse;
      }
      .footer_media_right_box {
        margin-top: 25px;
        flex-direction: column;
        display: flex;
        width: 300px;
        .footer_media_right_box_top {
          flex-direction: row;
          justify-content: space-between;
          display: flex;
          .footer_media_right_box_img {
            width: 44px;
            height: 44px;
            img {
              width: 100%;
              height: 100%;
            }
          }
        }
        .footer_media_right_box_btm {
          width: 100%;
          flex-direction: row-reverse;
          display: flex;
          .footer_media_right_box_btm_box {
            margin-top: 34px;
            width: 71%;
            // border: 1px solid red;
            flex-direction: row;
            justify-content: space-between;
            display: flex;
            .footer_media_right_box_img {
              width: 44px;
              height: 44px;
              img {
                width: 100%;
                height: 100%;
              }
            }
          }
        }
      }
    }
  }
}
// 超过1600px的隐藏内容样式设置a
@media screen and (min-width: 1600px) {
  .footer_media {
    display: none !important;
  }
}
</style>