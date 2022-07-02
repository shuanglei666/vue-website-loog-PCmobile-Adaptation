<template>
  <div class="scroll-item">
    <div class="main">
      <!-- pc布局 -->
      <div class="main_box">
        <div class="main_left">
          <div class="main_left_bg1"></div>
          <div class="main_left_bg2"></div>
          <div class="main_left_custam3"></div>
          <div class="main_left_custam1"></div>
          <div class="main_left_custam2"></div>
        </div>
        <div class="main_right">
          <div class="main_right_tit">{{$t('Home.Twomain.CustamShirts')}}</div>
          <div class="main_right_bdr"></div>
          <div class="main_right_txt">{{$t('Home.Twomain.StayAhead')}}</div>
          <div class="main_right_btn">
            <div class="main_right_btn_left1" :class="red? 'main_right_btn_left1' : 'main_right_btn_left2'"
              @click="get">
              <span>{{$t('Home.Twomain.LearnMore')}}</span>
            </div>
            <div class="main_right_btn_right1" :class="flag2? 'main_right_btn_right1' : 'main_right_btn_right2'"
              @click="customize"><span>{{$t('Home.Twomain.CustomizeShirts')}}</span></div>
          </div>
        </div>
        <!-- <div class="main_radius"></div> -->
      </div>
    </div>
    <!-- mobile布局 -->
    <div class="two_media">
      <div class="two_media1">
        <div class="two_media_top_tit">
          Custam Shirts
        </div>
        <div class="two_media_top_bdr"></div>
      </div>
      <div class="two_media2">
        Stay ahead of the competitive tailoring business using ourshirt customizaton tool. Itallows your customers to
        design their shirts.
      </div>
      <div class="two_media3">
        <div class="main_left_bg1"></div>
        <div class="main_left_bg2"></div>
        <div class="main_left_custam3"></div>
        <div class="main_left_custam1"></div>
        <div class="main_left_custam2"></div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data () {
    return {
      red: true,
      flag2: true
    }
  },
  methods: {
    get () {
      this.red = !this.red
    },
    customize () {
      this.flag2 = !this.flag2
    }
  }
}
</script>
<style lang="less" scoped>
// * {
//   margin: 0;
//   padding: 0;
//   box-sizing: border-box;
// }

.main {
  width: 100%;
  // height: 833px;
  justify-content: space-between;
  align-items: center;
  flex-direction: row;
  display: flex;
  // border-top: 1px solid #e0e0e0;
  .main_box {
    width: 1200px;
    // border: 1px solid plum;
    justify-content: space-between;
    align-items: center;
    flex-direction: row;
    display: flex;
    background-image: url('../../assets/images/loog_bg.png');
    background-size: 100% 40%;
    background-repeat: no-repeat;
    position: relative;
    top: 100px;
    // padding-left: 16px;
    // padding-right: 16px;
    box-sizing: content-box;
    margin-left: auto;
    margin-right: auto;
    // 左边
    .main_left {
      display: flex;
      flex-direction: row;
      position: relative;
      .main_left_bg1 {
        width: 181px;
        height: 202px;
        // border: 1px solid rgb(24, 2, 2);
        background-image: url('../../assets/images/custamdian.png');
        background-size: cover;
        background-repeat: no-repeat;
        margin-top: 375px;
      }
      .main_left_bg2 {
        width: 181px;
        height: 202px;
        // border: 1px solid rgb(24, 2, 2);
        background-image: url('../../assets/images/custamdian.png');
        background-size: cover;
        background-repeat: no-repeat;
      }
      .main_left_custam3 {
        width: 318px;
        height: 395px;
        box-shadow: 0px 16px 80px 0px rgba(51, 51, 51, 0.12);
        background-image: url('../../assets/images/custam3.png');
        background-size: 100% 100%;
        background-repeat: no-repeat;
        position: absolute;
        top: 100px;
        left: 21px;
        transition: all 0.5s;
        cursor: pointer;
      }
      .main_left_custam3:hover {
        transform: translateY(-20px);
        cursor: pointer;
      }
      .main_left_custam1 {
        width: 205px;
        height: 255px;
        box-shadow: 0px 16px 80px 0px rgba(51, 51, 51, 0.12);
        background: #a7e4ff;
        position: absolute;
        left: 242px;
        top: 50px;
        transition: all 0.5s;
        cursor: pointer;
      }
      .main_left_custam1:hover {
        transform: translateY(-20px);
        cursor: pointer;
      }
      .main_left_custam2 {
        width: 314px;
        height: 194px;
        box-shadow: 0px 16px 80px 0px rgba(51, 51, 51, 0.12);
        background-image: url('../../assets/images/custam2.png');
        background-size: 100% 100%;
        background-repeat: no-repeat;
        position: absolute;
        top: 385px;
        left: 134px;
        transition: all 0.5s;
        cursor: pointer;
      }
      .main_left_custam2:hover {
        transform: translateY(-20px);
        cursor: pointer;
      }
    }
    // 右边
    .main_right {
      width: 50%;
      // border: 1px solid rgb(24, 2, 2);
      .main_right_tit {
        font-family: MicrosoftYaHei;
        font-size: 26px;
        font-weight: normal;
        line-height: 60px;
        letter-spacing: 0px;
        color: #000000;
      }
      .main_right_bdr {
        width: 134px;
        height: 2px;
        /* Mono/Black */
        background: #000000;
        margin-top: 6px;
      }
      .main_right_txt {
        font-family: MicrosoftYaHeiLight;
        font-size: 14px;
        font-weight: 290;
        line-height: 18px;
        letter-spacing: 0px;
        /* Text/Primary */
        color: #1a1a1a;
        margin-top: 42px;
      }
      .main_right_btn {
        margin-top: 199px;
        display: flex;
        flex-direction: row-reverse;
        // 右边
        .main_right_btn_left1 {
          width: 157px;
          height: 52px;
          border-radius: 10px;
          background: #fdec57;
          text-align: center;
          line-height: 3;
          // 下面这个是防止选中文字
          -webkit-user-select: none;
          -moz-user-select: none;
          -ms-user-select: none;
          user-select: none;
          // 这里
          border: 1px solid #fff;
          box-sizing: border-box !important;
          overflow: hidden;
          -webkit-backface-visibility: hidden;
          -moz-backface-visibility: hidden;
          -ms-backface-visibility: hidden;
          backface-visibility: hidden;
          cursor: pointer;
          flex-direction: column;
          display: flex;
          justify-content: space-between;
          align-items: center;
          span {
            font-family: MicrosoftYaHeiLight;
            font-size: 16px;
            // line-height: 26px;
            line-height: 3;
            letter-spacing: 1px;
            /* Primary/Normal */
            // color: #143a79;
          }
        }
        .main_right_btn_left1:hover {
          width: 157px;
          height: 52px;
          border-radius: 10px;
          box-sizing: border-box;
          border: 1px solid #000000;
          background: none;
          text-align: center;
          line-height: 3;
          cursor: pointer;
          // 按钮过渡动画
          transition-property: all;
          transition-duration: 1s;
          transition-timing-function: linear;
          span {
            font-family: MicrosoftYaHeiLight;
            font-size: 16px;
            // line-height: 24px;
            letter-spacing: 1px;
            /* Primary/Normal */
            color: #143a79;
          }
        }
        .main_right_btn_left2 {
          width: 156px;
          height: 52px;
          border-radius: 10px;
          box-sizing: border-box;
          border: 1px solid #000000;
          background: none;
          text-align: center;
          line-height: 3;
          -webkit-user-select: none;
          -moz-user-select: none;
          -ms-user-select: none;
          user-select: none;
          cursor: pointer;
          span {
            font-family: MicrosoftYaHeiLight;
            font-size: 16px;
            // line-height: 24px;
            letter-spacing: 1px;
            /* Primary/Normal */
            color: #143a79;
          }
        }
        // 左边
        .main_right_btn_right1 {
          width: 157px;
          height: 52px;
          border-radius: 10px;
          background: #fdec57;
          text-align: center;
          line-height: 3;
          margin-right: 25px;
          -webkit-user-select: none;
          -moz-user-select: none;
          -ms-user-select: none;
          user-select: none;
          border: 1px solid #fff;
          box-sizing: border-box !important;
          cursor: pointer;
          flex-direction: column;
          display: flex;
          justify-content: space-between;
          align-items: center;
          span {
            font-family: MicrosoftYaHeiLight;
            font-size: 16px;
            // line-height: 24px;
            letter-spacing: 1px;
            /* Primary/Normal */
            // color: #143a79;
          }
        }
        .main_right_btn_right1:hover {
          width: 157px;
          height: 52px;
          border-radius: 10px;
          box-sizing: border-box;
          border: 1px solid #000000;
          background: none;
          text-align: center;
          line-height: 3;
          cursor: pointer;
          // 按钮过渡动画
          // background-color: rgb(1, 187, 204);
          transition-property: all;
          transition-duration: 1s;
          transition-timing-function: linear;

          span {
            font-family: MicrosoftYaHeiLight;
            font-size: 16px;
            // line-height: 24px;
            letter-spacing: 1px;
            /* Primary/Normal */
            color: #143a79;
          }
        }
        .main_right_btn_right2 {
          width: 157px;
          height: 52px;
          border-radius: 10px;
          box-sizing: border-box;
          border: 1px solid #000000;
          background: none;
          text-align: center;
          line-height: 3;
          -webkit-user-select: none;
          -moz-user-select: none;
          -ms-user-select: none;
          user-select: none;
          cursor: pointer;

          span {
            font-family: MicrosoftYaHeiLight;
            font-size: 16px;
            // line-height: 24px;
            letter-spacing: 1px;
            /* Primary/Normal */
            color: #143a79;
          }
        }
      }
    }
    .main_radius {
      width: 266px;
      height: 257px;
      background-image: url(/img/yuan.3f07cbbf.png);
      background-size: cover;
      background-repeat: no-repeat;
      border: 1px solid red;
      overflow: visible;
      position: absolute;
      z-index: 5;
      /* right: -70px; */
      left: 50%;
      // bottom: 48px;
      // top: 100px;
      // margin-left: 680px;
      margin-left: 455px;
      margin-top: 800px;
    }
  }
}

// 设置 小于755内容样式
@media screen and (max-width: 1600px) {
  .main {
    display: none !important;
  }
  .two_media {
    // border: 1px solid magenta;
    width: 700px;
    box-sizing: content-box;
    margin-left: auto;
    margin-right: auto;
    // 上面之前写法
    // border: 1px solid red;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 40px;
    overflow: hidden;
    .two_media1 {
      .two_media_top_tit {
        font-family: MicrosoftYaHei;
        font-size: 26px;
        font-weight: bold;
        letter-spacing: 0px;
        color: #000000;
      }
      .two_media_top_bdr {
        width: 134px;
        border-bottom: 5px solid #000;
        margin: 5px auto;
      }
    }
    .two_media2 {
      width: 700px;
      box-sizing: content-box;
      // margin-left: 31px;
      // margin-right: 31px;
      margin-left: auto;
      margin-right: auto;
      // 这个上面最新修改写法
      font-family: MicrosoftYaHeiLight;
      font-size: 20px;
      line-height: 30px;
      letter-spacing: 0px;
      /* Text/Primary */
      color: #1a1a1a;
      text-align: center;
      margin-top: 40px;
    }
    .two_media3 {
      box-sizing: content-box;
      margin-left: auto;
      margin-right: auto;
      // 这个上面最新修改写法
      flex-direction: row;
      display: flex;
      margin-top: 16px;
      .main_left_bg1 {
        width: 269.19px;
        height: 299.32px;
        // border: 1px solid rgb(24, 2, 2);
        background-image: url('../../assets/images/custamdian.png');
        background-size: cover;
        background-repeat: no-repeat;
        margin-top: 550px;
        position: relative;
        right: 32px;
      }
      .main_left_bg2 {
        width: 269.19px;
        height: 299.32px;
        // border: 1px solid rgb(24, 2, 2);
        background-image: url('../../assets/images/custamdian.png');
        background-size: cover;
        background-repeat: no-repeat;
        position: relative;
        right: 65px;
      }
      .main_left_custam3 {
        width: 471px;
        height: 585px;
        background-image: url('../../assets/images/twoa.png');
        background-size: 100% 100%;
        background-repeat: no-repeat;
        position: absolute;
        // top: 100px;
        // left: 21px;
        margin-top: 172px;
        transition: all 0.5s;
        cursor: pointer;
      }
      .main_left_custam3:hover {
        transform: translateY(-20px);
        cursor: pointer;
      }
      .main_left_custam1 {
        width: 304px;
        height: 378px;
        box-shadow: 0px 16px 80px 0px rgba(51, 51, 51, 0.12);
        background: #a7e4ff;
        position: absolute;
        // left: 242px;
        // top: 50px;
        transition: all 0.5s;
        cursor: pointer;
        margin-left: 312px;
        margin-top: 70px;
      }

      .main_left_custam1:hover {
        transform: translateY(-20px);
        cursor: pointer;
      }
      .main_left_custam2 {
        width: 465px;
        height: 288px;
        box-shadow: 0px 16px 80px 0px rgba(51, 51, 51, 0.12);
        background-image: url('../../assets/images/twoc.png');
        background-size: 100% 100%;
        background-repeat: no-repeat;
        position: absolute;
        // top: 385px;
        // left: 134px;
        transition: all 0.5s;
        cursor: pointer;
        margin-left: 151px;
        margin-top: 561px;
      }
      .main_left_custam2:hover {
        transform: translateY(-20px);
        cursor: pointer;
      }
    }
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
  .two_media {
    display: none !important;
  }
}
</style>