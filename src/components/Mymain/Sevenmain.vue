<template>
  <div class="scroll-item">
    <!-- PC layout -->
    <div class="seven" ref="seven">
      <div class="seven_box">
        <!-- 上面三个 -->
        <div class="seven_top">
          <div class="seven_top_list">
            <div class="seven_top_list_top">{{$t('Home.Sevenmain.OurTeam')}}</div>
            <div class="seven_top_list_box">
              <div class="seven_top_list_box_img"></div>
              <div class="seven_top_list_box_txt">
                <div class="seven_top_list_box_txt_top">{{$t('Home.Sevenmain.JohnDoe')}}</div>
                <div class="seven_top_list_box_txt_btn">{{$t('Home.Sevenmain.ChiefExecutive')}}</div>
              </div>
            </div>
          </div>
          <div class="seven_top_list">
            <div class="seven_top_list_top seven_top_list_top2">——————</div>
            <div class="seven_top_list_box">
              <div class=" seven_top_list_box_img2"></div>
              <div class="seven_top_list_box_txt">
                <div class="seven_top_list_box_txt_top">{{$t('Home.Sevenmain.StuartMartin')}}</div>
                <div class="seven_top_list_box_txt_btn">{{$t('Home.Sevenmain.Director')}}</div>
              </div>
            </div>
          </div>
          <div class="seven_top_list">
            <div class="seven_top_list_top">&nbsp;</div>
            <div class="seven_top_list_box">
              <div class=" seven_top_list_box_img3"></div>
              <div class="seven_top_list_box_txt">
                <div class="seven_top_list_box_txt_top">{{$t('Home.Sevenmain.BillyJames')}}</div>
                <div class="seven_top_list_box_txt_btn">{{$t('Home.Sevenmain.Senior')}}</div>
              </div>
            </div>
          </div>
        </div>
        <!-- 下面三个 -->
        <div class="seven_bottom">
          <div class="seven_bottom_list">
            <div class="seven_bottom_list_top"></div>
            <div class="seven_bottom_list_box">
              <div class="seven_bottom_list_box_img"></div>
              <div class="seven_bottom_list_box_txt">
                <div class="seven_bottom_list_box_txt_top">{{$t('Home.Sevenmain.ConnorBrown')}}</div>
                <div class="seven_bottom_list_box_txt_btn">{{$t('Home.Sevenmain.HiringManager')}}</div>
              </div>
            </div>
          </div>
          <div class="seven_bottom_list">
            <div class="seven_bottom_list_top"></div>
            <div class="seven_bottom_list_box">
              <div class="seven_bottom_list_box_img seven_bottom_list_box_img2"></div>
              <div class="seven_bottom_list_box_txt">
                <div class="seven_bottom_list_box_txt_top">{{$t('Home.Sevenmain.KettyRobert')}}</div>
                <div class="seven_bottom_list_box_txt_btn">{{$t('Home.Sevenmain.FabricDesigner')}}</div>
              </div>
            </div>
          </div>
          <div class="seven_bottom_list">
            <div class="seven_bottom_list_top"></div>
            <div class="seven_bottom_list_box">
              <div class="seven_bottom_list_box_img seven_bottom_list_box_img3"></div>
              <div class="seven_bottom_list_box_txt">
                <div class="seven_bottom_list_box_txt_top">{{$t('Home.Sevenmain.MayaHarris')}}</div>
                <div class="seven_bottom_list_box_txt_btn">{{$t('Home.Sevenmain.FabricDesigner')}}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- mobile layout -->
    <div class="seven_media">
      <div class="seven_media_tit">
        Our Team
      </div>
      <div class="seven_media_bdr"></div>
      <div class="seven_media_box">
        <!-- 上面三个  -->
        <div class="seven_media_box_top">
          <div class="seven_media_box_top_list">
            <div class="seven_media_box_top_list_img"></div>
            <div class="seven_media_box_top_list_txt">
              <div class="seven_media_box_top_list_txt_tit">John Doe</div>
              <div class="seven_media_box_top_list_txt_subtit">Chief Executive</div>
            </div>
          </div>
          <div class="seven_media_box_top_list">
            <div class="seven_media_box_top_list_img seven_media_box_top_list_img2"></div>
            <div class="seven_media_box_top_list_txt">
              <div class="seven_media_box_top_list_txt_tit">Ketty Robert</div>
              <div class="seven_media_box_top_list_txt_subtit">Fabric Designer</div>
            </div>
          </div>
          <div class="seven_media_box_top_list">
            <div class="seven_media_box_top_list_img seven_media_box_top_list_img3"></div>
            <div class="seven_media_box_top_list_txt">
              <div class="seven_media_box_top_list_txt_tit">Stuart Martin</div>
              <div class="seven_media_box_top_list_txt_subtit">Director</div>
            </div>
          </div>
        </div>
        <!-- 下面三个 -->
        <div class="seven_media_box_bottom">
          <div class="seven_media_box_bottom_list">
            <div class="seven_media_box_bottom_list_img4"></div>
            <div class="seven_media_box_bottom_list_txt">
              <div class="seven_media_box_bottom_list_txt_tit">Maya Harris</div>
              <div class="seven_media_box_bottom_list_txt_subtit">Fabric Designer</div>
            </div>
          </div>
          <div class="seven_media_box_bottom_list">
            <div class="seven_media_box_bottom_list_img4 seven_media_box_bottom_list_img5"></div>
            <div class="seven_media_box_bottom_list_txt">
              <div class="seven_media_box_bottom_list_txt_tit">Billy James</div>
              <div class="seven_media_box_bottom_list_txt_subtit">Hiring Manager</div>
            </div>
          </div>
          <div class="seven_media_box_bottom_list">
            <div class="seven_media_box_bottom_list_img4 seven_media_box_bottom_list_img6"></div>
            <div class="seven_media_box_bottom_list_txt">
              <div class="seven_media_box_bottom_list_txt_tit">Connor Brown</div>
              <div class="seven_media_box_bottom_list_txt_subtit">Hiring Manager</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<style lang="less" scoped>
.seven {
  width: 100%;
  // height: 1052px;
  // height: 900px;
  // border-top: 1px solid #a7e4ff;
  white-space: normal;
  flex-direction: column;
  display: flex;
  justify-content: center;
  align-items: center;
  .seven_box {
    width: 1200px;
    // margin: 0 auto;
    // border: 1px solid #a7e4ff;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-image: url('../../assets/images/loog_bg.png');
    background-size: 100% 40%;
    background-repeat: no-repeat;
    background-position: 0px 120px;
    position: relative;
    top: 90px;
    // padding-left: 16px;
    // padding-right: 16px;
    box-sizing: content-box;
    margin-left: auto;
    margin-right: auto;
    // margin-top: 160px;
    .seven_top {
      width: 100%;
      justify-content: space-between;
      flex-direction: row;
      display: flex;
      .seven_top_list {
        cursor: pointer;

        justify-content: center;
        flex-direction: column;
        // align-items: center;
        display: flex;
        transition: all 0.5s;
        .seven_top_list_top {
          font-family: MicrosoftYaHei;
          font-size: 26px;
          font-weight: normal;
          line-height: 60px;
          letter-spacing: 0px;

          /* Mono/Black */
          color: #000000;
        }
        .seven_top_list_top2 {
          margin-left: 20px;
        }
        .seven_top_list_box {
          margin-top: 38px;
          width: 221px;
          height: 301px;
          border-radius: 4px;
          background: #ffffff;
          box-shadow: 0px 16px 80px 0px rgba(51, 51, 51, 0.12);
          flex-direction: column;
          display: flex;
          overflow: hidden;
          .seven_top_list_box_img {
            width: 221px;
            height: 189px;
            border-radius: 4px 4px 0 0;
            background-image: url('../../assets/images/seven1.png');
            background-size: 100% 100%;
            background-repeat: no-repeat;
            overflow: hidden;
            transition: all 0.6s;
          }
          .seven_top_list_box_img:hover {
            cursor: pointer;
            transform: scale(1.1);
          }
          .seven_top_list_box_img2 {
            width: 221px;
            height: 189px;
            border-radius: 4px 4px 0 0;
            background-image: url('../../assets/images/seven2.png');
            background-size: 100% 100%;
            background-repeat: no-repeat;
            transition: all 0.6s;
          }
          .seven_top_list_box_img2:hover {
            cursor: pointer;
            transform: scale(1.1);
          }
          .seven_top_list_box_img3 {
            width: 221px;
            height: 189px;
            border-radius: 4px 4px 0 0;
            background-image: url('../../assets/images/seven3.png');
            background-size: 100% 100%;
            background-repeat: no-repeat;
            transition: all 0.6s;
          }
          .seven_top_list_box_img3:hover {
            cursor: pointer;
            transform: scale(1.1);
          }
          .seven_top_list_box_txt {
            text-align: center;
            box-sizing: border-box;
            .seven_top_list_box_txt_top {
              font-family: MicrosoftYaHei;
              font-size: 18px;
              font-weight: normal;
              line-height: 36px;
              letter-spacing: 0px;
              /* Mono/Black */
              color: #000000;
              padding: 23px 0px 8px 0px;
            }
            .seven_top_list_box_txt_btn {
              font-family: MicrosoftYaHeiLight;
              font-size: 14px;
              line-height: 24px;
              letter-spacing: 0px;
              /* Mono/02 */
              color: #4f4f4f;
            }
          }
        }
      }
    }
    .seven_bottom {
      width: 100%;
      justify-content: space-between;
      flex-direction: row;
      display: flex;
      margin-top: 83px;
      .seven_bottom_list {
        justify-content: center;
        flex-direction: column;
        align-items: center;
        display: flex;
        transition: all 0.5s;
        cursor: pointer;
        .seven_bottom_list_top {
          font-family: MicrosoftYaHei;
          font-size: 26px;
          font-weight: normal;
          line-height: 60px;
          letter-spacing: 0px;
          /* Mono/Black */
          color: #000000;
        }
        .seven_bottom_list_box {
          margin-top: 38px;
          width: 221px;
          height: 301px;
          border-radius: 4px;
          background: #ffffff;
          box-shadow: 0px 16px 80px 0px rgba(51, 51, 51, 0.12);
          overflow: hidden;
          .seven_bottom_list_box_img {
            width: 221px;
            height: 189px;
            border-radius: 4px 4px 0 0;
            background-image: url('../../assets/images/seven4.png');
            background-size: 100% 100%;
            background-repeat: no-repeat;
            transition: all 0.6s;
          }
          .seven_bottom_list_box_img:hover {
            cursor: pointer;
            transform: scale(1.1);
          }
          .seven_bottom_list_box_img2 {
            width: 221px;
            height: 189px;
            border-radius: 4px 4px 0 0;
            background-image: url('../../assets/images/seven5.png');
            background-size: 100% 100%;
            background-repeat: no-repeat;
            transition: all 0.6s;
          }
          .seven_bottom_list_box_img2:hover {
            cursor: pointer;
            transform: scale(1.1);
          }
          .seven_bottom_list_box_img3 {
            width: 221px;
            height: 189px;
            border-radius: 4px 4px 0 0;
            background-image: url('../../assets/images/seven6.png');
            background-size: 100% 100%;
            background-repeat: no-repeat;
            transition: all 0.6s;
          }
          .seven_bottom_list_box_img3:hover {
            cursor: pointer;
            transform: scale(1.1);
          }
          .seven_bottom_list_box_txt {
            text-align: center;
            box-sizing: border-box;
            .seven_bottom_list_box_txt_top {
              font-family: MicrosoftYaHei;
              font-size: 18px;
              font-weight: normal;
              line-height: 36px;
              letter-spacing: 0px;
              /* Mono/Black */
              color: #000000;
              padding: 23px 0px 8px 0px;
            }
            .seven_bottom_list_box_txt_btn {
              font-family: MicrosoftYaHeiLight;
              font-size: 14px;
              font-weight: 290;
              line-height: 10px;
              letter-spacing: 0px;
              /* Mono/02 */
              color: #4f4f4f;
            }
          }
        }
      }
      // .seven_bottom_list:hover {
      //   transform: translateY(-12px);
      //   cursor: pointer;
      // }
    }
  }
}

// 设置 小于755内容样式
@media screen and (max-width: 1600px) {
  .seven {
    display: none !important;
  }
  .seven_media {
    // border: 1px solid pink;
    // width: 755px;
    width: 700px;
    // border: 1px solid indianred;
    box-sizing: content-box;
    margin-left: auto;
    margin-right: auto;
    // 上面之前写法
    // border: 1px solid red;
    display: flex;
    flex-direction: column;
    align-items: center;
    // overflow: hidden;
    margin-top: 40px;
    .seven_media_tit {
      font-family: MicrosoftYaHei;
      font-size: 26px;
      font-weight: bold;
      line-height: 60px;
      letter-spacing: 0px;
      color: #000000;
    }
    .seven_media_bdr {
      width: 125px;
      border-bottom: 5px solid #000;
      margin-top: 5px;
    }
    .seven_media_box {
      // border: 1px solid pink;
      // width: 695px;
      width: 700px;
      box-sizing: content-box;
      margin-left: auto;
      margin-right: auto;
      // border: 1px solid pink;
      display: flex;
      flex-direction: column;
      align-items: center;
      margin-top: 32px;
      .seven_media_box_top {
        width: 100%;
        display: flex;
        justify-content: space-between;
        flex-direction: row;
        .seven_media_box_top_list {
          width: 221px;
          height: 301px;
          border-radius: 4px;
          background: #ffffff;
          box-shadow: 0px 16px 80px 0px rgba(51, 51, 51, 0.12);
          overflow: hidden;
          .seven_media_box_top_list_img {
            width: 221px;
            height: 189px;
            border-radius: 4px 4px 0 0;
            background-image: url('../../assets/images/seven1.png');
            background-size: 100% 100%;
            background-repeat: no-repeat;
            overflow: hidden;
            transition: all 0.6s;
          }
          .seven_media_box_top_list_img:hover {
            cursor: pointer;
            transform: scale(1.1);
          }
          .seven_media_box_top_list_img2 {
            width: 221px;
            height: 189px;
            border-radius: 4px 4px 0 0;
            background-image: url('../../assets/images/seven2.png');
            background-size: 100% 100%;
            background-repeat: no-repeat;
            overflow: hidden;
          }
          .seven_media_box_top_list_img3 {
            width: 221px;
            height: 189px;
            border-radius: 4px 4px 0 0;
            background-image: url('../../assets/images/seven3.png');
            background-size: 100% 100%;
            background-repeat: no-repeat;
            overflow: hidden;
          }
          .seven_media_box_top_list_txt {
            text-align: center;
            box-sizing: border-box;
            .seven_media_box_top_list_txt_tit {
              margin-top: 20px;
              font-family: MicrosoftYaHei;
              font-size: 20px;
              font-weight: bold;
              line-height: 36px;
              letter-spacing: 0px;
              /* Mono/Black */
              color: #000000;
            }
            .seven_media_box_top_list_txt_subtit {
              font-family: MicrosoftYaHeiLight;
              font-size: 20px;
              line-height: 24px;
              letter-spacing: 0px;
              /* Mono/02 */
              color: #4f4f4f;
            }
          }
        }
      }
      .seven_media_box_bottom {
        width: 100%;
        display: flex;
        justify-content: space-between;
        flex-direction: row;
        margin-top: 15px;
        .seven_media_box_bottom_list {
          width: 221px;
          height: 301px;
          border-radius: 4px;
          background: #ffffff;
          box-shadow: 0px 16px 80px 0px rgba(51, 51, 51, 0.12);
          margin-top: 24px;
          overflow: hidden;
          .seven_media_box_bottom_list_img4 {
            width: 221px;
            height: 189px;
            border-radius: 4px 4px 0 0;
            background-image: url('../../assets/images/seven4.png');
            background-size: 100% 100%;
            background-repeat: no-repeat;
            transition: all 0.6s;
          }
          .seven_media_box_bottom_list_img4:hover {
            cursor: pointer;
            transform: scale(1.1);
          }
          .seven_media_box_bottom_list_img5 {
            width: 221px;
            height: 189px;
            border-radius: 4px 4px 0 0;
            background-image: url('../../assets/images/seven5.png');
            background-size: 100% 100%;
            background-repeat: no-repeat;
          }
          .seven_media_box_bottom_list_img6 {
            width: 221px;
            height: 189px;
            border-radius: 4px 4px 0 0;
            background-image: url('../../assets/images/seven6.png');
            background-size: 100% 100%;
            background-repeat: no-repeat;
          }
          .seven_media_box_bottom_list_txt {
            text-align: center;
            box-sizing: border-box;
            .seven_media_box_bottom_list_txt_tit {
              margin-top: 20px;
              font-family: MicrosoftYaHei;
              font-size: 20px;
              font-weight: bold;
              line-height: 36px;
              letter-spacing: 0px;
              /* Mono/Black */
              color: #000000;
            }
            .seven_media_box_bottom_list_txt_subtit {
              font-family: MicrosoftYaHeiLight;
              font-size: 20px;
              line-height: 24px;
              letter-spacing: 0px;
              /* Mono/02 */
              color: #4f4f4f;
            }
          }
        }
      }
    }
  }
}
// 超过755的隐藏内容样式设置a
@media screen and (min-width: 1600px) {
  .seven_media {
    display: none !important;
  }
}
</style>