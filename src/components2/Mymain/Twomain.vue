<template>
  <div class="scroll-item">
    <div class="two">
      <!-- pc布局 -->
      <div class="main_box">
        <div class="main_box_top">
          <div class="main_box_top_tit">DAG 是一个由社区管理的去中心化平台创作者平台。创作者、艺术家、品牌和名人可以在DAG平台推出自己的社交代币，建立代币化社区。</div>
          <div class="main_box_top_bottpm">
            <div class="main_box_top_bottpm_bdr"></div>
            <div class="main_box_top_bottpm_ctr"><img src="../../assets/images2/two_sanjiao.png" alt=""></div>
            <div class="main_box_top_bottpm_bdr main_box_top_bottpm_bdr2"></div>
          </div>
        </div>
        <div class="main_box_bottom">
          <div class="main_left">
            <div class="main_left_bg1"></div>
            <div class="main_left_bg2"></div>
            <div class="main_left_custam3"></div>
            <div class="main_left_custam1"></div>
            <div class="main_left_custam2"></div>
          </div>
          <div class="main_right">
            <div class="tit_boder">
              <div class="main_right_tit">
                <!-- {{$t('Home2.Twomain.Decentralized')}} -->
                去中心化社区经济体系
              </div>
              <div class="main_right_bdr"></div>
            </div>
            <div>
              <div class="main_right_txt">
                <div class="main_right_txt_list">
                  <!-- {{$t('Home2.Twomain.DGManagement')}} -->
                  DAG平台由其治理代币DG管理，粉丝可以购买DG代币来支持他们喜爱的创作者，并获得由创作者决定的特殊权益。
                </div>
                <div class="main_right_txt_list">
                  <!-- {{$t('Home2.Twomain.WithDAG')}} -->
                  DAG让创作者能够基于自己的自定义社交代币驱动的商业模型，与粉丝共享经济。
                </div>
                <div class="main_right_txt_list">
                  <!-- {{$t('Home2.Twomain.economicPerformance')}} -->
                  DAG让粉丝支持创作者的同时也会获得创作者影响力扩大后带来相应的经济效益
                </div>
              </div>
            </div>
            <!-- <div class="main_right_btn">
              <div class="main_right_btn_left1" :class="red? 'main_right_btn_left1' : 'main_right_btn_left2'"
                @click="get">
                <span>{{$t('Home2.Twomain.LearnMore')}}</span>
              </div>
              <div class="main_right_btn_right1" :class="flag2? 'main_right_btn_right1' : 'main_right_btn_right2'"
                @click="customize"><span>{{$t('Home2.Twomain.CustomizeShirts')}}</span></div>
            </div> -->
          </div>
        </div>
      </div>
    </div>
    <!-- mobile布局 -->
    <div class="two_media">
      <div class="two_media1">
        <div class="two_media_top_tit">
          去中心化社区经济体系
        </div>
        <div class="two_media_top_bdr"></div>
      </div>
      <div class="two_media2">
        <div class="two_media2_list">
          DAG平台由其治理代币DG管理，粉丝可以购买DG代币来支持他们喜爱的创作者，并获得由创作者决定的特殊权益。
        </div>
        <div class="two_media2_list">
         DAG让创作者能够基于自己的自定义社交代币驱动的商业模型，与粉丝共享经济。
        </div>
        <div class="two_media2_list">
          DAG让粉丝支持创作者的同时也会获得创作者影响力扩大后带来相应的经济效益
        </div>
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

.two {
  width: 100%;
  // height: 833px;
  // height: 800px;
  justify-content: space-between;
  align-items: center;
  flex-direction: row;
  display: flex;
  // border-bottom: 1px solid #5f16d4;
  .main_box {
    width: 1200px;
    // border: 1px solid plum;
    align-items: center;
    flex-direction: column;
    display: flex;
    background-image: url('../../assets/images2/loog_bg.png');
    // background-image: url('../../assets/images2/custam3.png');
    background-size: 100% 40%;
    background-repeat: no-repeat;
    background-position: 0 55%;
    position: relative;
    top: 70px;
    box-sizing: content-box;
    margin-left: auto;
    margin-right: auto;
    .main_box_top {
      // margin-top: 48px;
      margin-top: 18px;
      flex-direction: column;
      display: flex;
      align-items: center;
      .main_box_top_tit {
        font-family: MicrosoftYaHei;
        font-size: 16px;
        font-weight: 600;
        line-height: 18px;
        letter-spacing: 0px;
        color: #01002f;
      }
      .main_box_top_bottpm {
        align-items: center;
        flex-direction: row;
        display: flex;
        margin-top: 19px;
        display: flex;
        flex-direction: row;
        .main_box_top_bottpm_bdr {
          width: 80px;
          height: 1px;
          background: #23226b;
          &.main_box_top_bottpm_bdr {
            position: relative;
            left: 1px;
          }
        }
        .main_box_top_bottpm_ctr {
          width: 12px;
          padding: 0 3px;
        }
      }
    }
    .main_box_bottom {
      // margin-top: 235px;
      margin-top: 150px;
      width: 100%;
      justify-content: space-between;
      align-items: center;
      flex-direction: row;
      display: flex;
      // 左边
      .main_left {
        display: flex;
        flex-direction: row;
        position: relative;
        .main_left_bg1 {
          width: 181px;
          height: 202px;
          // border: 1px solid rgb(24, 2, 2);
          // background-image: url('../../assets/images2/custamdian.png');
          background-size: cover;
          background-repeat: no-repeat;
          margin-top: 375px;
        }
        .main_left_bg2 {
          width: 181px;
          height: 202px;
          // border: 1px solid rgb(24, 2, 2);
          // background-image: url('../../assets/images2/custamdian.png');
          background-size: cover;
          background-repeat: no-repeat;
        }
        .main_left_custam3 {
          width: 318px;
          height: 395px;
          background-image: url('../../assets/images2/custam3.png');
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
          background-image: url('../../assets/images2/custam1.png');
          background-size: 100% 100%;
          background-repeat: no-repeat;
          // background: #a7e4ff;
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
          background-image: url('../../assets/images2/custam2.png');
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
        flex-direction: column;
        display: flex;
        // border: 1px solid rgb(24, 2, 2);
        .tit_boder {
          width: 100%;
          height: 70px;
          display: flex;
          // justify-content: space-between;
          flex-direction: column;
          box-sizing: content-box;
          .main_right_tit {
            font-family: MicrosoftYaHei;
            font-size: 26px;
            font-weight: normal;
            // line-height: 60px;
            letter-spacing: 0px;
            color: #000000;
            flex-shrink: 0;
          }
          .main_right_bdr {
            width: 134px;
            // height: 2px;
            // min-height: 2px;
            // background: #000000;
            border-bottom: 3px solid #000;
            object-fit: cover;
            display: inline-block;
            flex-shrink: 0;
            box-sizing: content-box;
            position: relative;
            top: 23px;
          }
        }
        .main_right_txt {
          font-family: MicrosoftYaHeiLight;
          font-size: 14px;
          font-weight: 290;
          line-height: 18px;
          letter-spacing: 0px;
          /* Text/Primary */
          color: #1a1a1a;
          // margin-top: 30px;
          position: relative;
          top: 30px;
          box-sizing: content-box;
          .main_right_txt_list {
            padding: 12px 0;
            font-family: MicrosoftYaHeiLight;
            font-size: 14px;
            line-height: 21px;
            letter-spacing: 0px;
            /* Text/Primary */
            color: #1a1a1a;
          }
        }
        // .main_right_btn {
        //   margin-top: 199px;
        //   display: flex;
        //   flex-direction: row-reverse;
        //   // 右边
        //   .main_right_btn_left1 {
        //     width: 157px;
        //     height: 52px;
        //     border-radius: 10px;
        //     background: #fdec57;
        //     text-align: center;
        //     line-height: 3;
        //     // 下面这个是防止选中文字
        //     -webkit-user-select: none;
        //     -moz-user-select: none;
        //     -ms-user-select: none;
        //     user-select: none;
        //     // 这里
        //     border: 1px solid #fff;
        //     box-sizing: border-box !important;
        //     overflow: hidden;
        //     -webkit-backface-visibility: hidden;
        //     -moz-backface-visibility: hidden;
        //     -ms-backface-visibility: hidden;
        //     backface-visibility: hidden;
        //     cursor: pointer;
        //     flex-direction: column;
        //     display: flex;
        //     justify-content: space-between;
        //     align-items: center;
        //     // 按钮过渡动画
        //     transition-property: all;
        //     transition-duration: 0.5s;
        //     transition-timing-function: linear;
        //     span {
        //       font-family: MicrosoftYaHeiLight;
        //       font-size: 16px;
        //       // line-height: 26px;
        //       line-height: 3;
        //       letter-spacing: 1px;
        //       /* Primary/Normal */
        //       // color: #143a79;
        //     }
        //   }
        //   .main_right_btn_left1:hover {
        //     width: 157px;
        //     height: 52px;
        //     border-radius: 10px;
        //     box-sizing: border-box;
        //     border: 1px solid #000000;
        //     background: none;
        //     text-align: center;
        //     line-height: 3;
        //     cursor: pointer;
        //     span {
        //       font-family: MicrosoftYaHeiLight;
        //       font-size: 16px;
        //       // line-height: 24px;
        //       letter-spacing: 1px;
        //       /* Primary/Normal */
        //       color: #143a79;
        //     }
        //   }
        //   .main_right_btn_left2 {
        //     width: 156px;
        //     height: 52px;
        //     border-radius: 10px;
        //     box-sizing: border-box;
        //     border: 1px solid #000000;
        //     background: none;
        //     text-align: center;
        //     line-height: 3;
        //     -webkit-user-select: none;
        //     -moz-user-select: none;
        //     -ms-user-select: none;
        //     user-select: none;
        //     cursor: pointer;
        //     span {
        //       font-family: MicrosoftYaHeiLight;
        //       font-size: 16px;
        //       // line-height: 24px;
        //       letter-spacing: 1px;
        //       /* Primary/Normal */
        //       color: #143a79;
        //     }
        //   }
        //   // 左边
        //   .main_right_btn_right1 {
        //     width: 157px;
        //     height: 52px;
        //     border-radius: 10px;
        //     background: #fdec57;
        //     text-align: center;
        //     line-height: 3;
        //     margin-right: 25px;
        //     -webkit-user-select: none;
        //     -moz-user-select: none;
        //     -ms-user-select: none;
        //     user-select: none;
        //     border: 1px solid #fff;
        //     box-sizing: border-box !important;
        //     cursor: pointer;
        //     flex-direction: column;
        //     display: flex;
        //     justify-content: space-between;
        //     align-items: center;
        //     // 按钮过渡动画
        //     // background-color: rgb(1, 187, 204);
        //     transition-property: all;
        //     transition-duration: 0.5s;
        //     transition-timing-function: linear;
        //     span {
        //       font-family: MicrosoftYaHeiLight;
        //       font-size: 16px;
        //       // line-height: 24px;
        //       letter-spacing: 1px;
        //       /* Primary/Normal */
        //       // color: #143a79;
        //     }
        //   }
        //   .main_right_btn_right1:hover {
        //     width: 157px;
        //     height: 52px;
        //     border-radius: 10px;
        //     box-sizing: border-box;
        //     border: 1px solid #000000;
        //     background: none;
        //     text-align: center;
        //     line-height: 3;
        //     cursor: pointer;
        //     span {
        //       font-family: MicrosoftYaHeiLight;
        //       font-size: 16px;
        //       // line-height: 24px;
        //       letter-spacing: 1px;
        //       /* Primary/Normal */
        //       color: #143a79;
        //     }
        //   }
        //   .main_right_btn_right2 {
        //     width: 157px;
        //     height: 52px;
        //     border-radius: 10px;
        //     box-sizing: border-box;
        //     border: 1px solid #000000;
        //     background: none;
        //     text-align: center;
        //     line-height: 3;
        //     -webkit-user-select: none;
        //     -moz-user-select: none;
        //     -ms-user-select: none;
        //     user-select: none;
        //     cursor: pointer;

        //     span {
        //       font-family: MicrosoftYaHeiLight;
        //       font-size: 16px;
        //       // line-height: 24px;
        //       letter-spacing: 1px;
        //       /* Primary/Normal */
        //       color: #143a79;
        //     }
        //   }
        // }
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
}

// 设置 小于755内容样式
@media screen and (max-width: 1600px) {
  .two {
    display: none !important;
  }
  .two_media {
    // border: 1px solid magenta;
    position: relative;
    top: 10px;
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
        line-height: 60px;
        letter-spacing: 0px;
        color: #000000;
      }
      .two_media_top_bdr {
        width: 134px;
        border-bottom: 5px solid #000;
        margin: 0 auto;
      }
    }
    .two_media2 {
      margin-top: 16px;
      width: 700px;
      box-sizing: content-box;
      // margin-left: 31px;
      // margin-right: 31px;
      margin-left: auto;
      margin-right: auto;
      text-align: center;
      // 这个上面最新修改写法
      font-family: MicrosoftYaHeiLight;
      font-size: 20px;
      line-height: 30px;
      letter-spacing: 0px;
      /* Text/Primary */
      color: #1a1a1a;
      .two_media2_list {
        padding-bottom: 16px;
        font-family: MicrosoftYaHeiLight;
        font-size: 20px;
        line-height: 30px;
        letter-spacing: 0px;
        /* Text/Primary */
        color: #1a1a1a;
      }
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
        background-image: url('../../assets/images2/custamdian.png');
        background-size: 100% 100%;
        background-repeat: no-repeat;
        margin-top: 550px;
        position: relative;
        right: 32px;
      }
      .main_left_bg2 {
        width: 269.19px;
        height: 299.32px;
        // border: 1px solid rgb(24, 2, 2);
        background-image: url('../../assets/images2/custamdian.png');
        background-size: cover;
        background-repeat: no-repeat;
        position: relative;
        right: 65px;
      }
      .main_left_custam3 {
        width: 471px;
        height: 585px;
        background-image: url('../../assets/images2/two_media1.png');
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
        background-image: url('../../assets/images2/two_media2.png');
        background-size: 100% 100%;
        background-repeat: no-repeat;
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
        box-shadow: 0px 16px 80px 0px rgba(0, 0, 0, 0.12);
        background-image: url('../../assets/images2/three_media_bottom4.png');
        background-size: 100% 100%;
        background-repeat: no-repeat;
        position: absolute;
        // top: 385px;
        // left: 134px;
        transition: all 0.5s;
        cursor: pointer;
        // margin-left: 151px;
        // margin-top: 561px;
        margin-top: 562px;
        margin-left: 154px;
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