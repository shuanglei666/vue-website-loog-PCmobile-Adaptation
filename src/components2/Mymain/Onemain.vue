<template>
  <div class="scroll-item">
    <div class="one">
      <!-- 圆 -->
      <div class="one_yuan">
        <!-- <img src="../../assets/images2/yuan.png" alt=""> -->
      </div>
      <!-- PC layout -->

      <div class="one_box">
        <div class="one_box_bg">
          <div class="one_box_bg_content">
            <!-- 左边 -->
            <div class="one_box_bg_content">
              <div>
                <div class="one_box_bg_content_tit">
                  <span>{{$t('Home2.Onemain.OnDAG')}}</span><br>
                  <span>{{$t('Home2.Onemain.theProduct')}}</span>
                </div>
                <div class="bdr1"></div>
                <div class="one_box_bg_content_subtit">
                  {{$t('Home2.Onemain.Premium')}}
                </div>
                <div class="one_box_bg_content_txt">
                  <div class="one_box_bg_content_txt_list">
                  {{$t('Home2.Onemain.DagDecentralized')}}
                  </div>
                  <div class="one_box_bg_content_txt_list">
                  {{$t('Home2.Onemain.DagProvides')}}
                  </div>
                </div>
              </div>
              <div>
                <div class="one_box_bg_content_btn">
                  <div class="one_box_bg_content_btn1"
                    :class="flag1? 'one_box_bg_content_btn1': 'one_box_bg_content_btn2' " @click="get1">
                    <span>{{$t('Home2.Onemain.Jump')}}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- mobile layout -->
    <div class="one_media">
      <div class="one_media_head">
        <div class="one_media_head1">
          <!-- Track your Expenses to Save Money -->
          在DAG上 <br> 你不是产品 你是 <br> 所有者
        </div>
        <div class="one_media_head_bdr1"></div>
        <div class="one_media_head2">On DAG, you aren’t the product you’re the owner
        </div>
        <!-- <div class="one_media_head_bdr2"></div> -->
        <!-- <div class="one_media_head3">
          <div class="one_media_head3_radius">
            <div class="one_media_head3_radius_box"></div>
          </div>
          <div class="one_media_head3_fontSize">We have made it our business to offer unique solutions</div>
          <div class="one_media_head3_radius">
            <div class="one_media_head3_radius_box"></div>
          </div>
        </div> -->
        <div class="one_media_head4">
          <!-- DAG 是一个由社区管理的去中心化平台创作者平台。创 作者、艺术家、品牌和名人可以在DAG平台推出自己的 社交代币，建立代币化社区。 -->
          <div class="one_media_head4_txt">DAG 是一个由社区管理的去中心化平台创作者平台。创作者、艺术家、品牌和名人可以在DAG平台推出自己的社交代币，建立代币化社区。</div>
          <div class="one_media_head4_txt">DAG为创作者提供建立虚拟经济的工具，扩展了他们的品牌，同时也为粉丝提供社区福利和共享经济激励，让他们与自己喜爱的创作者进行更深层次的互动。</div>
        </div>
        <div class="one_media_head_btn">
          <!-- <div class="one_media_head_btn1">
            <span>E-book sharing community</span>
          </div>
          <div class="one_media_head_btn1 one_media_head_btn2">
            <span>trading platform</span>
          </div> -->
          <div class="one_media_head_btn1">
            <span>立即探索</span>
          </div>
        </div>
        <!-- <div class="one_media_head5_box">
          <div class="one_media_head5_top">
            We will help a client's pfergtrhcdiiikiii to provide their social media peformanc
          </div>
          <div class="one_media_head5_bottom">
            We will help a client's pfergtrhcdiiikiii to provide their social media peformanc
          </div>
        </div> -->
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
  },
  mounted () {
    // console.log(this.$props,'props'); 
  }
}
</script>

<style lang="less" scoped>
//  PC
.one {
  width: 100%;
  display: flex;
  flex-direction: row;
  border-bottom: 1px solid #e0e0e0;
  .one_box {
    // border: 1px solid salmon;
    width: 1200px;
    height: 588px;
    margin-top: 74px;
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: center;
    box-sizing: content-box;
    margin-left: auto;
    margin-right: auto;
    // padding-top: 48px;

    // 背景
    .one_box_bg {
      width: 100%;
      height: 548px;
      // background: no-repeat 100% url(../../assets/images2/Onemain1.png);
      background-image: url(../../assets/images2/Onemain1.png);
      background-size: 100% 100%;
      background-repeat: no-repeat;
      .one_box_bg_content {
        width: 100%;
        height: 100%;
        // background: linear-gradient(
        //   90deg,
        //   #005241 0%,
        //   #005241 0%,
        //   rgba(156, 219, 207, 0) 101%,
        //   rgba(156, 219, 207, 0) 101%
        // );
        // 内容区域
        .one_box_bg_content {
          margin-left: 61px;
          flex-direction: column;
          display: flex;
          // justify-content: space-between;
          // border: 1px solid red;
          .one_box_bg_content_tit {
            margin-top: 62px;
            font-family: MicrosoftYaHei-Bold;
            font-size: 38px;
            font-weight: bold;
            line-height: 54px;
            letter-spacing: 0px;
            // color: #9e9e9e;
            color: rgb(226, 225, 225);
          }
          .bdr1 {
            margin-top: 10px;
            width: 390px;
            height: 2px;
            background: rgba(255, 255, 255, 0.5);
            flex-shrink: 0;
            flex-grow: 0;
          }
          .one_box_bg_content_subtit {
            margin-top: 10px;
            font-family: MicrosoftYaHei-Bold;
            font-size: 15px;
            font-weight: bold;
            line-height: 27px;
            letter-spacing: 0px;
            color: #ffffff;
          }
          .one_box_bg_content_txt {
            width: 283px;
            font-family: MicrosoftYaHei;
            font-size: 12px;
            font-weight: normal;
            line-height: 18px;
            letter-spacing: 0px;
            color: #ffffff;
            .one_box_bg_content_txt_list{
              margin-top: 5px;
            }
          }
          .wehave {
            flex-direction: row;
            display: flex;
            align-items: center;
            margin-top: 44px;
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
              color: #000000;
              padding: 0 5px;
            }
          }
          .one_box_bg_content_txt {
            display: flex;
            flex-direction: column;
            margin-top: 18px;
            .one_box_bg_content_txt_span {
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
          .one_box_bg_content_btn {
            margin-top: 12px;
            .one_box_bg_content_btn1 {
              width: 157px;
              height: 52px;
              border-radius: 10px;
              background: #fdec57;
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
              transition-property: all;
              transition-duration: 0.5s;
              transition-timing-function: linear;
              span {
                font-family: MicrosoftYaHei;
                font-size: 16px;
                font-weight: normal;
                line-height: 24px;
                letter-spacing: 1px;
                color: #143a79;
              }
            }
            .one_box_bg_content_btn1:hover {
              width: 157px;
              height: 52px;
              border-radius: 10px;
              background: #143a79;
              box-shadow: 0px 30px 40px 0px rgba(212, 217, 232, 0.1);
              cursor: pointer;
              box-sizing: border-box;

              span {
                font-family: MicrosoftYaHei;
                font-size: 16px;
                font-weight: normal;
                line-height: 24px;
                letter-spacing: 1px;
                color: #ffffff;
              }
            }
            .one_box_bg_content_btn2 {
              width: 157px;
              height: 52px;
              border-radius: 10px;
              background: #143a79;
              box-shadow: 0px 30px 40px 0px rgba(212, 217, 232, 0.1);
              cursor: pointer;
              span {
                font-family: MicrosoftYaHei;
                font-size: 16px;
                font-weight: normal;
                line-height: 24px;
                letter-spacing: 1px;
                color: #ffffff;
              }
            }
          }
        }
      }
    }
  }
  // 园
  .one_yuan {
    overflow: visible;
    position: absolute;
    z-index: 5;
    right: 50%;
    // top: 380px;
    top: 240px;
    margin-right: 645px;
    z-index: -999;
  }
}

// mobile 设置 小于1600px内容样式
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
      // border: 1px solid red;
      width: 700px;
      margin-left: auto;
      margin-right: auto;
      height: 1205px;
      // filter: blur(8px);
      // background-image: url('../../assets/images2/Onemain_bg.png');
      background: url('../../assets/images2/Onemain_bg.png') no-repeat;
      background-size: 100% 100%;
      display: flex;
      flex-direction: column;
      align-items: center;
      box-sizing: content-box;
      .one_media_head1 {
        text-align: center;
        padding-right: 54px;
        padding-left: 53px;
        padding-top: 100px;

        font-family: MicrosoftYaHei-Bold;
        font-size: 66px;
        font-weight: bold;
        line-height: 101px;
        letter-spacing: 0px;
        color: #ffffff;
      }
      .one_media_head_bdr1 {
        width: 294px;
        border-bottom: 2px solid #ffffff;
        padding-top: 5px;
      }
      .one_media_head2 {
        padding-top: 29px;
        width: 378px;
        font-family: MicrosoftYaHei-Bold;
        font-size: 26px;
        font-weight: bold;
        line-height: 34px;
        letter-spacing: 0px;
        color: #ffffff;
      }
      .one_media_head4 {
        width: 544px;
        font-family: MicrosoftYaHei;
        font-size: 22px;
        font-weight: normal;
        line-height: 35px;
        letter-spacing: 0px;
        color: #ffffff;
        text-align: center;
        padding-top: 90px;
        .one_media_head4_txt{
          padding-top: 10px;
          text-align: left;
        }
      }
      .one_media_head_btn {
        // width: auto;
        // flex-direction: row;
        // display: flex;
        width: 90%;
        flex-direction: row;
        display: flex;
        // border: 1px salmon solid;
        // justify-content: space-between;
        // margin-top: 106px;
        padding-top: 150px;
        .one_media_head_btn1 {
          margin: 0 auto;
          width: 370px;
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
            font-size: 22px;
            font-weight: normal;
            letter-spacing: 0em;
            color: #000000;
          }
        }
        .one_media_head_btn2 {
          padding: 0 49px;
        }
      }

      .one_media_head5_box {
        // margin-top: 32px;
        // height: 213px;
        padding-top: 37px;
        height: 250px;
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
          // width: 85%;
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

