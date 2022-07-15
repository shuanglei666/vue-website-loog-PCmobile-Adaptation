<template>
  <div class="scroll-item">
    <!-- pc layout -->
    <div class="three">
      <div class="main_box">
        <div class="main_left">
          <div class="main_left_tit">
            {{$t('Home.Theremain.Sergtrfx')}}
          </div>
          <div class="main_left_bdr"></div>
          <div class="main_left_subtit">{{$t('Home.Theremain.WeWillHelp')}}</div>
          <div class="main_left__box">
            <!-- 第一个 -->
            <div class="main_left_list">
              <!-- <div class="main_left_list_lft"><span>{{$t('Home.Theremain.one')}}</span></div>
              <div class="main_left_list_rgt">
                <div class="main_left_list_rgt_tit">
                  {{$t('Home.Theremain.PerformanceMarketing')}}
                </div>
                <div class="main_left_list_rgt_txt">
                  {{$t('Home.Theremain.HelpCreate')}}
                </div>
              </div> -->
              <div class="main_left_list_lft"><span>1</span></div>
              <div class="main_left_list_rgt">
                <div class="main_left_list_rgt_tit">
                  {{$t('Home.Theremain.FeedManagementECommerce')}}
                </div>
                <div class="main_left_list_rgt_txt">
                  {{$t('Home.Theremain.HelpCreate')}}
                </div>
              </div>
            </div>
            <!-- 第二个 -->
            <div class="main_left_list">
              <div class="main_left_list_lft"><span>2</span></div>
              <div class="main_left_list_rgt">
                <div class="main_left_list_rgt_tit">
                  {{$t('Home.Theremain.FeedManagementECommerce')}}
                </div>
                <div class="main_left_list_rgt_txt">
                  {{$t('Home.Theremain.CreateCustomizable')}}
                </div>
              </div>
            </div>
            <!-- 第三个 -->
            <div class="main_left_list">
              <div class="main_left_list_lft"><span>3</span></div>
              <div class="main_left_list_rgt">
                <div class="main_left_list_rgt_tit">
                  {{$t('Home.Theremain.PerformanceMarketing')}}
                </div>
                <div class="main_left_list_rgt_txt">
                  {{$t('Home.Theremain.CreateCustomizable')}}
                </div>
              </div>
            </div>
            <!-- 第四个 -->
            <div class="main_left_list">
              <div class="main_left_list_lft"><span>4</span></div>
              <div class="main_left_list_rgt">
                <div class="main_left_list_rgt_tit">
                  {{$t('Home.Theremain.InfluencerMarketing')}}
                </div>
                <div class="main_left_list_rgt_txt">
                  {{$t('Home.Theremain.CreateCustomizable')}}
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="main_right">
          <div class="main_right_top">
            <div class="main_right_top_rgt"></div>
            <div class="main_right_top_lft">
              <div class="main_right_top_lft_bg">
                <img src="../../assets/images/custamdian.png" alt="">
              </div>
              <div class="main_right_top_lft_tu">
                <img src="../../assets/images/custam2.png" alt="">
              </div>
            </div>
          </div>
          <div class="main_right_btn">
            <div class="main_right_btn_lft">
              <div class="main_right_btn_lft_bg">
                <img src="../../assets/images/custamdian.png" alt="">
              </div>
              <div class="main_right_btn_lft_tu">
                <img src="../../assets/images/custam2.png" alt="">
              </div>
            </div>
            <div class="main_right_btn_rgt"></div>
          </div>
        </div>
      </div>
    </div>
    <!-- mobile layout -->
    <div class="three_media">
      <div class="three_media_top">
        <div class="three_media_tit">
          {{$t('Home.Theremain.Sergtrfx')}}
        </div>
        <div class="three_media_bdr"></div>
        <div class="three_media_subtit">
          {{$t('Home.Theremain.WeWillHelp')}}
        </div>
        <div class="three_media_top_box">
          <div class="main_left">
            <!-- <div class="main_left_tit">
              {{$t('Home.Theremain.Sergtrfx')}}
            </div>
            <div class="main_left_bdr"></div>
            <div class="main_left_subtit">{{$t('Home.Theremain.WeWillHelp')}}</div> -->
            <div class="main_left__box">
              <!-- 第一个 -->
              <div class="main_left_list">
                <div class="main_left_list_lft"><span>1</span></div>
                <!-- <div class="main_left_list_lft">{{$t('Home.Theremain.one')}}</div> -->
                <div class="main_left_list_rgt">
                  <div class="main_left_list_rgt_tit">
                    {{$t('Home.Theremain.PerformanceMarketing')}}
                  </div>
                  <div class="main_left_list_rgt_txt">
                    {{$t('Home.Theremain.HelpCreate')}}
                  </div>
                </div>
              </div>
              <!-- 第二个 -->
              <div class="main_left_list">
                <div class="main_left_list_lft"><span>2</span></div>
                <div class="main_left_list_rgt">
                  <div class="main_left_list_rgt_tit">
                    {{$t('Home.Theremain.FeedManagementECommerce')}}
                  </div>
                  <div class="main_left_list_rgt_txt">
                    {{$t('Home.Theremain.CreateCustomizable')}}
                  </div>
                </div>
              </div>
              <!-- 第三个 -->
              <div class="main_left_list">
                <div class="main_left_list_lft"><span>3</span></div>
                <div class="main_left_list_rgt">
                  <div class="main_left_list_rgt_tit">
                    {{$t('Home.Theremain.PerformanceMarketing')}}
                  </div>
                  <div class="main_left_list_rgt_txt">
                    {{$t('Home.Theremain.CreateCustomizable')}}
                  </div>
                </div>
              </div>
              <!-- 第四个 -->
              <div class="main_left_list">
                <div class="main_left_list_lft"><span>4</span></div>
                <div class="main_left_list_rgt">
                  <div class="main_left_list_rgt_tit">
                    {{$t('Home.Theremain.InfluencerMarketing')}}
                  </div>
                  <div class="main_left_list_rgt_txt">
                    {{$t('Home.Theremain.CreateCustomizable')}}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="three_media_bottom">
        <div class="main_right">
          <div class="main_right_top">
            <div class="main_right_top_rgt"></div>
            <div class="main_right_top_lft">
              <div class="main_right_top_lft_bg">
                <img src="../../assets/images/threedian1.png" alt="">
              </div>
              <div class="main_right_top_lft_tu">
                <img src="../../assets/images/custam2.png" alt="">
              </div>
            </div>
          </div>
          <div class="main_right_btn">
            <div class="main_right_btn_lft">
              <div class="main_right_btn_lft_bg">
                <img src="../../assets/images/custamdian.png" alt="">
              </div>
              <div class="main_right_btn_lft_tu">
                <img src="../../assets/images/custam2.png" alt="">
              </div>
            </div>
            <div class="main_right_btn_rgt"></div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<style lang="less" scoped>
.three {
  min-width: 100%;
  // border-top: 1px solid #a7e4ff;
  white-space: normal;
  // position: absolute;
  // height: 924px;
  // height: 700px;
  .main_box {
    width: 1200px;
    // height: 100%;
    // border: 1px solid orange;
    // margin: 0 auto;
    justify-content: space-between;
    align-items: center;
    flex-direction: row;
    display: flex;
    background-image: url('../../assets/images/loog_bg.png');
    background-size: 100% 40%;
    background-repeat: no-repeat;
    // top: 10px;
    // padding-left: 16px;
    // padding-right: 16px;
    box-sizing: content-box;
    margin-left: auto;
    margin-right: auto;
    // overflow: hidden;
    position: relative;
    top: 60px;
    // 左边
    .main_left {
      width: 36%;
      box-sizing: border-box;
      .main_left_tit {
        font-family: MicrosoftYaHei;
        font-size: 26px;
        font-weight: normal;
        line-height: 52.8px;
        letter-spacing: 0px;
        /* 外部/Black */
        color: #000000;
        padding-bottom: 22px;
      }
      .main_left_bdr {
        width: 134px;
        border-bottom: 3px solid #000;
      }
      .main_left_subtit {
        padding-top: 39px;
        font-family: MicrosoftYaHeiLight;
        font-size: 14px;
        line-height: 23px;
        letter-spacing: 0px;
        /* Black */
        color: #000000;
      }
      // 列表
      .main_left__box {
        flex-direction: column;
        display: flex;
        margin-top: 40px;
        box-sizing: border-box;
        // 列表盒子
        .main_left_list {
          padding-bottom: 33px;
          display: flex;
          flex-direction: row;
          height: 85px;
          .main_left_list_lft {
            width: 52px;
            height: 52px;
            border-radius: 10px;
            background: #f0f0f0;
            text-align: center;
            flex-shrink: 0;
            span {
              font-family: MicrosoftYaHei-Bold;
              font-size: 18px;
              font-weight: bold;
              line-height: 52.8px;
              letter-spacing: 0px;
              color: #000000;
            }
          }
          // .main_left_list_lft {
          //   font-family: MicrosoftYaHei-Bold;
          //   font-size: 12px;
          //   font-weight: bold;
          //   line-height: 52.8px;
          //   letter-spacing: 0px;
          //   color: #000000;
          //   padding: 26px 26px;
          //   box-sizing: content-box;
          //   border-radius: 10px;
          //   background: #f0f0f0;
          //   text-align: center;
          // }
          .main_left_list_rgt {
            // width: 360px;
            // border: 1px solid red;
            margin-left: 20px;
            flex-direction: column;
            display: flex;
            .main_left_list_rgt_tit {
              font-family: MicrosoftYaHei;
              font-size: 16px;
              font-weight: normal;
              line-height: 31.99px;
              letter-spacing: 0px;
              /* 外部/Grey/Carbon */
              color: #333333;
            }
            .main_left_list_rgt_txt {
              font-family: MicrosoftYaHeiLight;
              font-size: 14px;
              line-height: 24px;
              letter-spacing: 0.05px;
              /* Black */
              color: #000000;
            }
          }
        }
      }
    }
    // 右边
    .main_right {
      width: 45%;
      // border: 1px solid aqua;
      flex-direction: column;
      display: flex;
      position: relative;
      top: 20px;
      // 上
      .main_right_top {
        flex-direction: row;
        display: flex;
        .main_right_top_rgt {
          width: 250px;
          height: 334px;
          background-image: url('../../assets/images/custam3.png');
          background-size: 100% 100%;
          background-repeat: no-repeat;
          transition: all 0.5s;
          cursor: pointer;
        }
        .main_right_top_rgt:hover {
          transform: translateY(-20px);
        }
        .main_right_top_lft {
          // box-shadow: 0px 16px 80px 0px rgba(51, 51, 51, 0.12);
          // margin-left: 20px;
          position: relative;
          left: 20px;
          .main_right_top_lft_bg {
            position: absolute;
            left: 40px;
            top: 25px;
            width: 181.8px;
            height: 202px;
            opacity: 0.5;
            // background: #404852;
            img {
              width: 100%;
              height: 100%;
            }
          }
          .main_right_top_lft_tu {
            position: relative;
            top: 63px;
            width: 270px;
            height: 271px;
            box-shadow: 0px 16px 80px 0px rgba(51, 51, 51, 0.12);
            transition: all 0.5s;
            cursor: pointer;
            img {
              width: 100%;
              height: 100%;
            }
          }
          .main_right_top_lft_tu:hover {
            transform: translateY(-20px);
            cursor: pointer;
          }
        }
      }
      // 下
      .main_right_btn {
        margin-top: 19px;
        flex-direction: row;
        display: flex;
        .main_right_btn_lft {
          // background-image: url('../../assets/images/custamdian.png');
          // background-size: cover;
          // background-repeat: no-repeat;
          .main_right_btn_lft_bg {
            width: 181.8px;
            height: 202px;
            position: absolute;
            opacity: 0.5;
            img {
              width: 100%;
              height: 100%;
              position: relative;
              top: 125px;
              right: 40px;
            }
          }
          .main_right_btn_lft_tu {
            width: 164px;
            height: 288px;
            position: relative;
            box-shadow: 0px 16px 80px 0px rgba(51, 51, 51, 0.12);
            transition: all 0.5s;
            cursor: pointer;
            img {
              width: 100%;
              height: 100%;
            }
          }
          .main_right_btn_lft_tu:hover {
            transform: translateY(-20px);
          }
        }
        .main_right_btn_rgt {
          width: 356px;
          height: 359px;
          box-shadow: 0px 16px 80px 0px rgba(51, 51, 51, 0.12);
          background-image: url('../../assets/images/custam3.png');
          background-size: cover;
          background-repeat: no-repeat;
          position: relative;
          left: 20px;
          transition: all 0.5s;
          cursor: pointer;
        }
        .main_right_btn_rgt:hover {
          transform: translateY(-20px);
        }
      }
    }
  }
}

// 设置 小于755内容样式
@media screen and (max-width: 1600px) {
  .three {
    display: none !important;
  }
  .three_media {
    // border: 1px skyblue solid;
    // width: 695px;
    width: 700px;
    // border: 1px solid slateblue;
    box-sizing: content-box;
    margin-left: auto;
    margin-right: auto;
    // 上面之前写法
    // border: 1px solid red;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 41px;
    overflow: hidden;
    .three_media_top {
      width: 100%;
      box-sizing: content-box;
      margin-left: auto;
      margin-right: auto;
      // border: 1px solid red;
      display: flex;
      flex-direction: column;
      align-items: center;
      .three_media_tit {
        font-family: MicrosoftYaHei;
        font-size: 26px;
        font-weight: bold;
        line-height: 52.8px;
        letter-spacing: 0px;
        /* 外部/Black */
        color: #000000;
      }
      .three_media_bdr {
        width: 134px;
        border-bottom: 5px solid #000;
        margin-top: 14px;
      }
      .three_media_subtit {
        font-family: MicrosoftYaHeiLight;
        font-size: 20px;
        line-height: 30px;
        letter-spacing: 0px;
        /* Black */
        color: #000000;
        text-align: center;
        margin-top: 16px;
      }
      .three_media_top_box {
        margin-top: 26px;
        // 列表
        .main_left__box {
          flex-direction: column;
          display: flex;
          box-sizing: border-box;
          // 列表盒子
          .main_left_list {
            padding-bottom: 50px;
            display: flex;
            flex-direction: row;
            height: 85px;
            .main_left_list_lft {
              width: 52px;
              height: 52px;
              border-radius: 10px;
              background: #f0f0f0;
              text-align: center;
              display: inline-block;
              flex-shrink: 0;
              display: flex;
              flex-direction: column;
              justify-content: space-between;
              align-items: center;
              span {
                font-family: MicrosoftYaHei-Bold;
                font-size: 18px;
                font-weight: bold;
                line-height: 52.8px;
                letter-spacing: 0px;
                color: #000000;
              }
            }
            .main_left_list_rgt {
              // width: 700px;
              margin-left: 20px;
              display: inline-block;
              // border: 1px solid red;
              flex-direction: column;
              display: flex;
              .main_left_list_rgt_tit {
                font-family: MicrosoftYaHei;
                font-size: 20px;
                font-weight: bold;
                line-height: 31.99px;
                letter-spacing: 0px;
                /* 外部/Grey/Carbon */
                color: #333333;
              }
              .main_left_list_rgt_txt {
                padding-top: 8.01px;
                font-family: MicrosoftYaHeiLight;
                font-size: 20px;
                line-height: 30px;
                letter-spacing: 0.05px;
                /* Black */
                color: #000000;
              }
            }
          }
        }
      }
    }
    .three_media_bottom {
      box-sizing: content-box;
      margin-left: auto;
      margin-right: auto;
      // border: 1px solid red;
      display: flex;
      flex-direction: column;
      align-items: center;
      // 右侧图改为下面
      .main_right {
        flex-direction: column;
        display: flex;
        // 上
        .main_right_top {
          flex-direction: row;
          display: flex;
          .main_right_top_rgt {
            width: 290px;
            height: 383px;
            box-shadow: 0px 16px 80px 0px rgba(51, 51, 51, 0.12);
            background-image: url('../../assets/images/custam3.png');
            background-size: 100% 100%;
            background-repeat: no-repeat;
            transition: all 0.5s;
            cursor: pointer;
          }
          .main_right_top_rgt:hover {
            transform: translateY(-20px);
          }
          .main_right_top_lft {
            // box-shadow: 0px 16px 80px 0px rgba(51, 51, 51, 0.12);
            // margin-left: 20px;
            position: relative;
            left: 20px;
            .main_right_top_lft_bg {
              position: absolute;
              left: 40px;
              top: 25px;
              width: 210.81px;
              height: 234.01px;
              opacity: 0.5;
              img {
                width: 100%;
                height: 100%;
              }
            }
            .main_right_top_lft_tu {
              position: relative;
              top: 69px;
              transition: all 0.5s;
              cursor: pointer;
              width: 313px;
              height: 314px;
              box-shadow: 0px 16px 80px 0px rgba(51, 51, 51, 0.12);
              img {
                width: 100%;
                height: 100%;
              }
            }
            .main_right_top_lft_tu:hover {
              transform: translateY(-20px);
              cursor: pointer;
            }
          }
        }
        // 下
        .main_right_btn {
          margin-top: 19px;
          flex-direction: row;
          display: flex;
          .main_right_btn_lft {
            // background-image: url('../../assets/images/custamdian.png');
            // background-size: cover;
            // background-repeat: no-repeat;
            .main_right_btn_lft_bg {
              width: 210.81px;
              height: 234.01px;
              opacity: 0.5;
              // background: #404852;
              position: absolute;
              img {
                width: 100%;
                height: 100%;
                position: relative;
                top: 125px;
                right: 40px;
              }
            }
            .main_right_btn_lft_tu {
              position: relative;
              // box-shadow: 0px 16px 80px 0px rgba(51, 51, 51, 0.12);
              transition: all 0.5s;
              cursor: pointer;
              img {
                width: 190px;
                height: 334px;
              }
            }
            .main_right_btn_lft_tu:hover {
              transform: translateY(-20px);
            }
          }
          .main_right_btn_rgt {
            width: 413px;
            height: 416px;
            box-shadow: 0px 16px 80px 0px rgba(51, 51, 51, 0.12);
            background-image: url('../../assets/images/custam3.png');
            background-size: cover;
            background-repeat: no-repeat;
            position: relative;
            left: 20px;
            transition: all 0.5s;
            cursor: pointer;
          }
          .main_right_btn_rgt:hover {
            transform: translateY(-20px);
          }
        }
      }
    }
  }
}
// 超过755的隐藏内容样式设置a
@media screen and (min-width: 1600px) {
  .three_media {
    display: none !important;
  }
}
</style>