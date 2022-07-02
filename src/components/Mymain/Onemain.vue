<template>
  <div class="scroll-item">
    <div class="one">
      <!-- 圆 -->
      <div class="one_yuan">
        <img src="../../assets/images/yuan.png" alt="">
      </div>
      <!-- PC layout -->
      <div class="one_box">
        <!-- 左边 -->
        <div class="one_box_left">
          <div>
            <div class="one_box_left_tit">
              {{$t('Home.Onemain.Track')}}
            </div>
            <div class="bdr1"></div>
            <div class="one_box_left_subtit">
              {{$t('Home.Onemain.Premium')}}
            </div>
            <div class="bdr2"></div>
            <div class="wehave">
              <div class="wehave_radius"></div>
              <div class="wehave_txt">
                {{$t('Home.Onemain.WeHave')}}
              </div>
              <div class="wehave_radius"></div>
            </div>
            <div class="one_box_left_txt">
              <div class="one_box_left_txt_span">
                {{$t('Home.Onemain.WeWill')}}
              </div>
              <div class="one_box_left_txt_span">
                {{$t('Home.Onemain.HelpCreate')}}
              </div>
            </div>
          </div>
          <div>
            <!-- 三个按钮 -->
            <div class="one_box_left_btn">
              <div class="one_box_left_btn1" :class="flag1? 'one_box_left_btn1': 'one_box_left_btn2' " @click="get1">
                <span>{{$t('Home.Onemain.EBookSharingCommunity')}}</span>
              </div>
              <div class="one_box_left_btn1" :class="flag2? 'one_box_left_btn1': 'one_box_left_btn2' " @click="get2">
                <span>{{$t('Home.Onemain.tradingPlatform')}}</span>
              </div>
              <div class="one_box_left_btn1" :class="flag3? 'one_box_left_btn1': 'one_box_left_btn2' " @click="get3">
                <span>{{$t('Home.Onemain.whitePaper')}}</span>
              </div>
            </div>
          </div>
        </div>
        <!-- 右边图 -->
        <div class="one_box_right">
          <img src="../../assets/images/main_left_img.png" alt="">
        </div>
      </div>
    </div>
    <!-- mobile layout -->
    <div class="one_media">
      <div class="one_media_head">
        <div class="one_media_head1">
          Track your Expenses to Save Money
        </div>
        <div class="one_media_head_bdr1"></div>
        <div class="one_media_head2">Premium Suits</div>
        <div class="one_media_head_bdr2"></div>
        <div class="one_media_head3">
          <div class="one_media_head3_radius">
            <div class="one_media_head3_radius_box"></div>
          </div>
          <div class="one_media_head3_fontSize">We have made it our business to offer unique solutions</div>
          <div class="one_media_head3_radius">
            <div class="one_media_head3_radius_box"></div>
          </div>
        </div>
        <div class="one_media_head4">
          We will help a client's pfergtrhcdiiikiii to provide their social media peformanc
        </div>
        <div class="one_media_head_btn">
          <div class="one_media_head_btn1">
            <span>E-book sharing community</span>
          </div>
          <div class="one_media_head_btn1 one_media_head_btn2">
            <span>trading platform</span>
          </div>
          <div class="one_media_head_btn1">
            <span>white paper</span>
          </div>
        </div>
        <div class="one_media_head5_box">
          <div class="one_media_head5_top">
            We will help a client's pfergtrhcdiiikiii to provide their social media peformanc
          </div>
          <div class="one_media_head5_bottom">
            We will help a client's pfergtrhcdiiikiii to provide their social media peformanc
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
      flag1: true,
      flag2: true,
      flag3: true,
    }
  },
  methods: {
    get1 () {
      this.flag1 = !this.flag1
    },
    get2 () {
      this.flag2 = !this.flag2
    },
    get3 () {
      this.flag3 = !this.flag3
    }
  }
}
</script>

<style lang="less" scoped>
.one {
  width: 100%;
  display: flex;
  flex-direction: row;
  border-bottom: 1px solid #e0e0e0;
  .one_box {
    // border: 1px solid salmon;
    width: 1200px;
    height: 630px;
    display: flex;
    // margin: 0 auto;
    flex-direction: row;
    justify-content: space-between;
    // padding-left: 16px;
    // padding-right: 16px;
    box-sizing: content-box;
    margin-left: auto;
    margin-right: auto;
    padding-top: 48px;
    // 左边
    .one_box_left {
      width: 38%;
      height: 513px;
      flex-direction: column;
      display: flex;
      justify-content: space-between;
      .one_box_left_tit {
        font-family: MicrosoftYaHei;
        font-size: 50px;
        font-weight: normal;
        line-height: 62px;
        letter-spacing: 0px;
        /* Dark */
        color: #292830;
        margin-top: 25px;
        padding-bottom: 4px;
      }
      .bdr1 {
        width: 294px;
        border-top: 2px solid #000;
        margin-top: 5px;
      }
      .one_box_left_subtit {
        font-family: MicrosoftYaHei;
        font-size: 26px;
        font-weight: normal;
        line-height: 60px;
        letter-spacing: 0px;
        /* Mono/Black */
        color: #000000;
      }
      .bdr2 {
        width: 153px;
        border-top: 2px solid #000;
      }
      .wehave {
        flex-direction: row;
        display: flex;
        align-items: center;
        margin-top: 30px;
        .wehave_radius {
          width: 4.58px;
          height: 4.58px;
          background: #000;
          border-radius: 50px;
        }
        .wehave_txt {
          font-family: MicrosoftYaHei;
          font-size: 14px;
          font-weight: normal;
          line-height: 25.2px;
          letter-spacing: 0px;
          /* Black */
          color: #000000;
          padding: 0 5px;
        }
      }
      .one_box_left_txt {
        display: flex;
        flex-direction: column;
        margin-top: 15px;
        .one_box_left_txt_span {
          width: 65%;
          font-family: MicrosoftYaHeiLight;
          font-size: 12px;
          line-height: 18px;
          letter-spacing: 0px;
          /* Black */
          color: #000000;
        }
      }
      // 按钮
      .one_box_left_btn {
        width: 100%;
        flex-direction: row;
        justify-content: space-between;
        display: flex;
        margin-top: 29px;
        .one_box_left_btn1 {
          width: 128px;
          height: 42px;
          border-radius: 10px;
          background: #ffd700;
          box-shadow: 0px 30px 40px 0px rgba(212, 217, 232, 0.1);
          text-align: center;
          -webkit-user-select: none;
          -moz-user-select: none;
          -ms-user-select: none;
          user-select: none;
          justify-content: center;
          display: flex;
          align-items: center;
          flex-direction: column;
          cursor: pointer;
          span {
            font-family: MicrosoftYaHei;
            font-size: 12px;
            font-weight: normal;
            letter-spacing: 0em;
            color: #000000;
          }
        }
        .one_box_left_btn1:hover {
          width: 128px;
          height: 42px;
          border-radius: 10px;
          background: #143a79;
          box-shadow: 0px 30px 40px 0px rgba(212, 217, 232, 0.1);
          cursor: pointer;
          span {
            font-family: MicrosoftYaHei;
            font-size: 12px;
            font-weight: normal;
            letter-spacing: 0em;
            color: #ffffff;
          }
        }
        .one_box_left_btn2 {
          width: 128px;
          height: 42px;
          border-radius: 10px;
          background: #143a79;
          box-shadow: 0px 30px 40px 0px rgba(212, 217, 232, 0.1);
          cursor: pointer;
          span {
            font-family: MicrosoftYaHei-Bold;
            font-size: 12px;
            font-weight: bold;
            letter-spacing: 0em;
            color: #ffffff;
          }
        }
      }
    }
    // 右边
    .one_box_right {
      width: 59%;
      img {
        width: 100%;
        height: 513px;
        position: relative;
        top: 2px;
        cursor: pointer;
      }
    }
  }
  // 园
  .one_yuan {
    // overflow: visible;
    // position: absolute;
    // z-index: 5;
    // right: -70px;
    // right: 57%;
    // top: 8px;
    // margin-right: 510px;
    // margin-top: 380px;
    overflow: visible;
    position: absolute;
    z-index: 5;
    right: 50%;
    top: 380px;
    margin-right: 645px;
    z-index: -999;
  }
}

// 设置 小于755内容样式
@media screen and (max-width: 1600px) {
  .one {
    display: none !important;
  }
  .one_media {
    box-sizing: content-box;
    margin-left: auto;
    margin-right: auto;
    // width: 100%;
    // border: 1px solid red;
    display: flex;
    flex-direction: column;
    .one_media_head {
      // width: 100%;
      // width: 100%;
      // margin-left: 31px;
      // margin-right: 31px;
      // border: 1px solid red;
      width: 700px;
      margin-left: auto;
      margin-right: auto;
      height: 1205px;
      // background-image: url('../../assets/images/Onemain_bg.png');
      background: url('../../assets/images/Onemain_bg.png') no-repeat;
      background-size: 100% 100%;
      display: flex;
      flex-direction: column;
      align-items: center;
      box-sizing: content-box;
      .one_media_head1 {
        text-align: center;
        padding-right: 54px;
        padding-left: 53px;
        font-family: MicrosoftYaHei;
        font-size: 66px;
        font-weight: normal;
        line-height: 99px;
        letter-spacing: 0px;
        color: #292830;
        padding-top: 60px;
      }
      .one_media_head_bdr1 {
        width: 294px;
        border-bottom: 5px solid #000;
        margin-top: 5px;
      }
      .one_media_head2 {
        font-family: MicrosoftYaHei;
        font-size: 32px;
        font-weight: normal;
        line-height: 60px;
        letter-spacing: 0px;
        /* Mono/Black */
        color: #000000;
      }
      .one_media_head_bdr2 {
        width: 153px;
        border-bottom: 5px solid #000;
      }
      .one_media_head3 {
        padding-top: 73px;
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-content: center;
        text-align: center;
        .one_media_head3_fontSize {
          width: 350px;
          font-family: MicrosoftYaHei;
          font-size: 26px;
          font-weight: bold;
          line-height: 25.2px;
          letter-spacing: 0px;
          /* Black */
          color: #000000;
          // padding: 0 2px;
        }
        .one_media_head3_radius {
          // width: auto;
          height: 100%;
          justify-content: center;
          display: flex;
          align-items: center;
          flex-direction: column;
          .one_media_head3_radius_box {
            width: 10px;
            height: 10px;
            background: #000;
            border-radius: 50px;
          }
        }
      }
      .one_media_head4 {
        width: 478px;
        font-family: MicrosoftYaHeiLight;
        font-size: 20px;
        line-height: 30px;
        letter-spacing: 0px;
        /* Black */
        color: #000000;
        text-align: center;
        padding-top: 40px;
      }
      .one_media_head_btn {
        width: auto;
        flex-direction: row;
        display: flex;
        margin-top: 106px;
        .one_media_head_btn1 {
          width: 185px;
          height: 80px;
          border-radius: 10px;
          background: #ffd700;
          box-shadow: 0px 30px 40px 0px rgba(212, 217, 232, 0.1);
          align-content: center;
          display: flex;
          justify-content: center;
          text-align: center;
          flex-direction: column;
          cursor: pointer;
          span {
            font-family: MicrosoftYaHei;
            font-size: 18px;
            font-weight: bold;
            letter-spacing: 0em;
            color: #000000;
            // white-space: nowrap;
            // overflow: hidden;
            // text-overflow: ellipsis;
          }
        }
        .one_media_head_btn2 {
          margin: 0 49px;
        }
      }

      .one_media_head5_box {
        // margin-top: 32px;
        // height: 213px;
        margin-top: 37px;
        height: 263px;
        // border: 1px solid red;
        flex-direction: column;
        display: flex;
        justify-content: space-between;
        .one_media_head5_top {
          width: 478px;
          text-align: center;
          margin-right: auto;
          margin-left: auto;
          font-family: MicrosoftYaHeiLight;
          font-size: 16px;
          line-height: 20px;
          letter-spacing: 0px;
          /* Black */
          color: #000000;
        }
        .one_media_head5_bottom {
          // width: 564px;
          text-align: center;
          margin-right: auto;
          margin-left: auto;
          font-family: MicrosoftYaHeiLight;
          font-size: 16px;
          line-height: 20px;
          letter-spacing: 0px;
          /* Black */
          color: #000000;
        }
      }
    }
  }
}

// 超过755的隐藏内容样式设置a
@media screen and (min-width: 1600px) {
  .one_media {
    display: none !important;
  }
}
</style>

