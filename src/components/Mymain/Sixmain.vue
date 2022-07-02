<template>
  <div class="scroll-item">
    <!-- PC layout -->
    <div class="six">
      <div class="six_box">
        <!-- 上 -->
        <div class="six_box_top">
          <div class="six_box_top_tit">{{$t('Home.Sixmain.ServiceWeProvide')}}</div>
          <div class="six_box_top_txt">
            <div class="six_box_top_txt_radius"></div>
            <div class="span">{{$t('Home.Sixmain.WeHave')}}</div>
            <div class="six_box_top_txt_radius"></div>
          </div>
        </div>
        <!-- 中 -->
        <div class="six_box_ctr">
          <div class="six_box_ctr_left">
            <div class="six_box_ctr_left_list">
              <div class="six_box_ctr_left_list_date">
                2026 / 06 / 22
              </div>
              <div class="six_box_ctr_left_list_tit">
                {{$t('Home.Sixmain.InfluencerMarketing')}}
              </div>
              <div class="six_box_ctr_left_list_sub">
                {{$t('Home.Sixmain.CreateCustomizable')}}
              </div>
              <div class="six_box_ctr_left_img"></div>
            </div>
          </div>
          <div class="six_box_ctr_right">
            <div class="six_box_ctr_right_list">
              <div class="six_box_ctr_right_list_date">
                2026 / 06 / 22
              </div>
              <div class="six_box_ctr_right_list_tit">
                {{$t('Home.Sixmain.InfluencerMarketing')}}
              </div>
              <div class="six_box_ctr_right_list_sub">
                {{$t('Home.Sixmain.CreateCustomizable')}}
              </div>
              <div class="six_box_ctr_right_list_img"></div>
            </div>
          </div>
        </div>
        <!-- 下 -->
        <div class="six_box_btm">
          <!-- 1 -->
          <div class="six_box_btm_list">
            <div class="six_box_btm_list_img"></div>
            <div class="six_box_btm_list_tit">
              2026 / 06 / 22
            </div>
            <div class="six_box_btm_list_sub">
              {{$t('Home.Sixmain.InfluencerMarketing')}}
            </div>
            <div class="six_box_btm_list_txt">
              {{$t('Home.Sixmain.CreateCustomizable')}}
            </div>
          </div>
          <!-- 2 -->
          <div class="six_box_btm_list">
            <div class="six_box_btm_list_img six_box_btm_list_img2"></div>
            <div class="six_box_btm_list_tit">
              2026 / 06 / 22
            </div>
            <div class="six_box_btm_list_sub">
              {{$t('Home.Sixmain.InfluencerMarketing')}}
            </div>
            <div class="six_box_btm_list_txt">
              {{$t('Home.Sixmain.CreateCustomizable')}}
            </div>
          </div>
          <!-- 3 -->
          <div class="six_box_btm_list">
            <div class="six_box_btm_list_img"></div>
            <div class="six_box_btm_list_tit">
              2026 / 06 / 22
            </div>
            <div class="six_box_btm_list_sub">
              {{$t('Home.Sixmain.InfluencerMarketing')}}
            </div>
            <div class="six_box_btm_list_txt">
              {{$t('Home.Sixmain.CreateCustomizable')}}
            </div>
          </div>
        </div>
      </div>
      <div class="six_box_bdr">
        <div class="six_box_bdr_radius">
          <div class="six_box_bdr_radius_list"></div>
          <div class="six_box_bdr_radius_list"></div>
          <div class="six_box_bdr_radius_list"></div>
          <div class="six_box_bdr_radius_list"></div>
          <div class="six_box_bdr_radius_list"></div>
        </div>
      </div>
    </div>
    <!-- mobile layout -->
    <div class="six_media">
      <div class="six_media1">
        Sergtrfx we provide
      </div>
      <div class="six_media_bdr"></div>
      <!-- 上面轮播图 -->
      <!-- <div class="six_media_swiper1">
        <div class="six_media_swiper_box">
          <div class="swiper-container" id="Sixmain1">
            <div class="swiper-wrapper">
              <div class="swiper-slide">
                <div class="container_img">
                  <img src="../../assets/images/six1.png" alt="">
                </div>
                <div class="container_txt">
                  <div class="container_txt_width">Trefde lacus drfefe sagittis lacus in. Amet nisl at mauris enim
                    aumsiitincidunt vel. Efffeec ipsum, at quis ullamcorper eget ut., ipsum, at quis ullamcorper eget ut
                    ipsum, at quis ullamcorper eget ut ipsum, at quis ullamcorper eget ut ipsum, at quis ullamcorper
                    eget
                    ut</div>
                </div>
              </div>
              <div class="swiper-slide">
                <div class="container_img"> <img src="../../assets/images/six1.png" alt=""></div>
                <div class="container_txt">
                  <div class="container_txt_width">Trefde lacus drfefe sagittis lacus in. Amet nisl at mauris enim
                    aumsiitincidunt vel. Efffeec ipsum, at quis ullamcorper eget ut., ipsum, at quis ullamcorper eget ut
                    ipsum, at quis ullamcorper eget ut ipsum, at quis ullamcorper eget ut ipsum, at quis ullamcorper
                    eget
                    ut</div>
                </div>
              </div>
              <div class="swiper-slide">
                <div class="container_img"><img src="../../assets/images/six1.png" alt=""></div>
                <div class="container_txt">
                  <div class="container_txt_width">Trefde lacus drfefe sagittis lacus in. Amet nisl at mauris enim
                    aumsiitincidunt vel. Efffeec ipsum, at quis ullamcorper eget ut., ipsum, at quis ullamcorper eget ut
                    ipsum, at quis ullamcorper eget ut ipsum, at quis ullamcorper eget ut ipsum, at quis ullamcorper
                    eget
                    ut</div>
                </div>
              </div>
            </div>
            <div class="swiper-pagination" id="Sixmain1_swiper_pagination"></div>
          </div>
        </div>
      </div> -->
      <div class="six_media_swiperAAA">
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
          <div class="swiper-pagination" id="six_media_swiperAAA" slot="pagination"></div>
        </swiper>
      </div>
      <!-- 下面轮播图 -->
      <div class="six_media_swiper2">
        <div class="six_media_swiper2_tit">
          Service we provide
        </div>
        <div class="six_media_swiper2_subtit">
          <div class="six_media_swiper2_subtit_radius"></div>
          <div class="six_media_swiper2_subtit_txt">We have made it our business to offer unique solutions</div>
          <div class="six_media_swiper2_subtit_radius"></div>
        </div>
        <div class="six_media_swiper2_box">
          <!-- 上面 -->
          <!-- <div class="six_media_swiper2_top">
            <div class="six_media_swiper2_top1">
              <div class="six_media_swiper2_top1_date">2026 / 06 / 22 </div>
              <div class="six_media_swiper2_top1_tit">Influencer Marketing</div>
              <div class="six_media_swiper2_top1_txt">
                Create customizable illustrations with
                attractivedesigns that are made
                visually through high
                creativity
              </div>
            </div>
            <div class="six_media_swiper2_top1">
              <div class="six_media_swiper2_top1_date">2026 / 06 / 22 </div>
              <div class="six_media_swiper2_top1_tit">Influencer Marketing</div>
              <div class="six_media_swiper2_top1_txt">
                Create customizable illustrations with
                attractivedesigns that are made
                visually through high
                creativity
              </div>
            </div>
          </div>
          <div class="six_media_swiper2_bdr">2</div>
          <div class="six_media_swiper2_bottom">
          </div> -->

          <!-- <div class="swiper mySwiper" id="Sixmain2">
            <div class="swiper-wrapper">
              <div class="swiper-slide">
                <div class="Sixmain2_box">
                  <div class="Sixmain2_box_left">
                    <div class="Sixmain2_box_left_list1">
                      <div class="Sixmain2_box_left_list1_tit">2026 / 06 / 22 </div>
                      <div class="Sixmain2_box_left_list1_subtit">Influencer Marketing</div>
                      <div class="Sixmain2_box_left_list1_txt">Create customizable illustrations withattract
                        ivedesigns that are madevisuallythroughhig
                        hcreativity</div>
                    </div>
                    <div class="Sixmain2_box_left_list1 Sixmain2_box_left_list2">
                      <div class="Sixmain2_box_left_list1_tit">2026 / 06 / 22 </div>
                      <div class="Sixmain2_box_left_list1_subtit">Influencer Marketing</div>
                      <div class="Sixmain2_box_left_list1_txt">Create customizable illustrations withattract
                        ivedesigns that are madevisuallythroughhig
                        hcreativity</div>
                    </div>
                    <div class="Sixmain2_box_left_list1 Sixmain2_box_left_list2">
                      <div class="Sixmain2_box_left_list1_tit">2026 / 06 / 22 </div>
                      <div class="Sixmain2_box_left_list1_subtit">Influencer Marketing</div>
                      <div class="Sixmain2_box_left_list1_txt">Create customizable illustrations withattract
                        ivedesigns that are madevisuallythroughhig
                        hcreativity</div>
                    </div>
                    <div class="Sixmain2_box_left_list1 Sixmain2_box_left_list2">
                      <div class="Sixmain2_box_left_list1_tit">2026 / 06 / 22 </div>
                      <div class="Sixmain2_box_left_list1_subtit">Influencer Marketing</div>
                      <div class="Sixmain2_box_left_list1_txt">Create customizable illustrations withattract
                        ivedesigns that are madevisuallythroughhig
                        hcreativity</div>
                    </div>
                    <div class="Sixmain2_box_left_list1 Sixmain2_box_left_list2">
                      <div class="Sixmain2_box_left_list1_tit">2026 / 06 / 22 </div>
                      <div class="Sixmain2_box_left_list1_subtit">Influencer Marketing</div>
                      <div class="Sixmain2_box_left_list1_txt">Create customizable illustrations withattract
                        ivedesigns that are madevisuallythroughhig
                        hcreativity</div>
                    </div>
                  </div>
                  <div class="Sixmain2_box_center">
                    <div class="Sixmain2_box_center_bdr">
                      <div class="Sixmain2_box_center_bdr_box">
                        <div class="Sixmain2_box_center_bdr_box_list">
                          <div class="Sixmain2_box_center_bdr_img1"></div>
                          <div class="Sixmain2_box_center_bdr_radius"></div>
                        </div>
                        <div class="Sixmain2_box_center_bdr_box_list">
                          <div class="Sixmain2_box_center_bdr_img2"></div>
                          <div class="Sixmain2_box_center_bdr_radius"></div>
                        </div>
                        <div class="Sixmain2_box_center_bdr_box_list">
                          <div class="Sixmain2_box_center_bdr_img3"></div>
                          <div class="Sixmain2_box_center_bdr_radius"></div>
                        </div>
                        <div class="Sixmain2_box_center_bdr_box_list">
                          <div class="Sixmain2_box_center_bdr_img1"></div>
                          <div class="Sixmain2_box_center_bdr_radius"></div>
                        </div>
                        <div class="Sixmain2_box_center_bdr_box_list">
                          <div class="Sixmain2_box_center_bdr_img2"></div>
                          <div class="Sixmain2_box_center_bdr_radius"></div>
                        </div>
                        <div class="Sixmain2_box_center_bdr_box_list">
                          <div class="Sixmain2_box_center_bdr_img3"></div>
                          <div class="Sixmain2_box_center_bdr_radius"></div>
                        </div>

                        <div class="Sixmain2_box_center_bdr_box_list">
                          <div class="Sixmain2_box_center_bdr_img1"></div>
                          <div class="Sixmain2_box_center_bdr_radius"></div>
                        </div>
                        <div class="Sixmain2_box_center_bdr_box_list">
                          <div class="Sixmain2_box_center_bdr_img2"></div>
                          <div class="Sixmain2_box_center_bdr_radius"></div>
                        </div>
                        <div class="Sixmain2_box_center_bdr_box_list">
                          <div class="Sixmain2_box_center_bdr_img3"></div>
                          <div class="Sixmain2_box_center_bdr_radius"></div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="Sixmain2_box_right">
                    <div class="Sixmain2_box_right_list1">
                      <div class="Sixmain2_box_right_list1_tit">2026 / 06 / 22 </div>
                      <div class="Sixmain2_box_right_list1_subtit">Influencer Marketing</div>
                      <div class="Sixmain2_box_right_list1_txt">Create customizable illustrations withattract
                        ivedesigns that are madevisuallythroughhig
                        hcreativity</div>
                    </div>
                    <div class="Sixmain2_box_right_list1">
                      <div class="Sixmain2_box_right_list1_tit">2026 / 06 / 22 </div>
                      <div class="Sixmain2_box_right_list1_subtit">Influencer Marketing</div>
                      <div class="Sixmain2_box_right_list1_txt">Create customizable illustrations withattract
                        ivedesigns that are madevisuallythroughhig
                        hcreativity</div>
                    </div>
                    <div class="Sixmain2_box_right_list1">
                      <div class="Sixmain2_box_right_list1_tit">2026 / 06 / 22 </div>
                      <div class="Sixmain2_box_right_list1_subtit">Influencer Marketing</div>
                      <div class="Sixmain2_box_right_list1_txt">Create customizable illustrations withattract
                        ivedesigns that are madevisuallythroughhig
                        hcreativity</div>
                    </div>
                    <div class="Sixmain2_box_right_list1">
                      <div class="Sixmain2_box_right_list1_tit">2026 / 06 / 22 </div>
                      <div class="Sixmain2_box_right_list1_subtit">Influencer Marketing</div>
                      <div class="Sixmain2_box_right_list1_txt">Create customizable illustrations withattract
                        ivedesigns that are madevisuallythroughhig
                        hcreativity</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div> -->

          <div class="Sixmain2_box">
            <div class="Sixmain2_box_left">
              <!-- 1 -->
              <div class="Sixmain2_box_left_list1">
                <div class="Sixmain2_box_left_list1_tit">2026 / 06 / 22 </div>
                <div class="Sixmain2_box_left_list1_subtit">Influencer Marketing</div>
                <div class="Sixmain2_box_left_list1_txt">
                  <div>Create customizable illustrations withattract
                    ivedesigns that are madevisuallythroughhig
                    hcreativity</div>
                </div>
              </div>
              <!-- 2 -->
              <div class="Sixmain2_box_left_list1 Sixmain2_box_left_list2">
                <div class="Sixmain2_box_left_list1_tit">2026 / 06 / 22 </div>
                <div class="Sixmain2_box_left_list1_subtit">Influencer Marketing</div>
                <div class="Sixmain2_box_left_list1_txt">Create customizable illustrations withattract
                  ivedesigns that are madevisuallythroughhig
                  hcreativity</div>
              </div>
              <!-- 3 -->
              <div class="Sixmain2_box_left_list1 Sixmain2_box_left_list2">
                <div class="Sixmain2_box_left_list1_tit">2026 / 06 / 22 </div>
                <div class="Sixmain2_box_left_list1_subtit">Influencer Marketing</div>
                <div class="Sixmain2_box_left_list1_txt">Create customizable illustrations withattract
                  ivedesigns that are madevisuallythroughhig
                  hcreativity</div>
              </div>
            </div>
            <!-- 中间 -->
            <div class="Sixmain2_box_center">
              <div class="Sixmain2_box_center_bdr">
                <div class="Sixmain2_box_center_bdr_box">
                  <!-- 第1个 -->
                  <div class="Sixmain2_box_center_bdr_box_list">
                    <div class="Sixmain2_box_center_bdr_img1"></div>
                    <div class="Sixmain2_box_center_bdr_radius"></div>
                  </div>
                  <!-- 第2个 -->
                  <div class="Sixmain2_box_center_bdr_box_list">
                    <div class="Sixmain2_box_center_bdr_img2"></div>
                    <div class="Sixmain2_box_center_bdr_radius"></div>
                  </div>
                  <!-- 第3个 -->
                  <div class="Sixmain2_box_center_bdr_box_list">
                    <div class="Sixmain2_box_center_bdr_img3"></div>
                    <div class="Sixmain2_box_center_bdr_radius"></div>
                  </div>
                  <!-- 第4个 -->
                  <div class="Sixmain2_box_center_bdr_box_list">
                    <div class="Sixmain2_box_center_bdr_img2"></div>
                    <div class="Sixmain2_box_center_bdr_radius"></div>
                  </div>
                  <!-- 第5个 -->
                  <div class="Sixmain2_box_center_bdr_box_list">
                    <div class="Sixmain2_box_center_bdr_img1"></div>
                    <div class="Sixmain2_box_center_bdr_radius"></div>
                  </div>
                </div>
              </div>
            </div>
            <!-- 右半面 -->
            <div class="Sixmain2_box_right">
              <div class="Sixmain2_box_right_list1">
                <div class="Sixmain2_box_right_list1_tit">2026 / 06 / 22 </div>
                <div class="Sixmain2_box_right_list1_subtit">Influencer Marketing</div>
                <div class="Sixmain2_box_right_list1_txt">Create customizable illustrations withattract
                  ivedesigns that are madevisuallythroughhig
                  hcreativity</div>
              </div>
              <div class="Sixmain2_box_right_list1">
                <div class="Sixmain2_box_right_list1_tit">2026 / 06 / 22 </div>
                <div class="Sixmain2_box_right_list1_subtit">Influencer Marketing</div>
                <div class="Sixmain2_box_right_list1_txt">Create customizable illustrations withattract
                  ivedesigns that are madevisuallythroughhig
                  hcreativity</div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  </div>
  <!-- </section> -->
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
        // pagination: '#six_media_swiperAAA',
        paginationClickable: true,
        pagination: {
          el: '#six_media_swiperAAA',
          clickable: true, // 允许点击小圆点跳转
        }
      }
    }
  },
  mounted () {
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
    // setTimeout(() => {
    //   new Swiper("#Sixmain2", {
    //     direction: "vertical",
    //     slidesPerView: "auto",
    //     freeMode: true,
    //     scrollbar: {
    //       el: ".swiper-scrollbar",
    //     },
    //     mousewheel: true,
    //   });
    // }, 10)
  }
}
</script>
<style lang="less" scoped>
.six {
  width: 100%;
  height: 915px;
  // border-top: 1px solid #a7e4ff;
  .six_box {
    width: 1200px;
    // margin: 0 auto;
    // border: 1px solid orangered;
    height: 100%;
    justify-content: center;
    display: flex;
    align-items: center;
    flex-direction: column;
    background-image: url('../../assets/images/loog_bg.png');
    background-size: 100% 40%;
    background-repeat: no-repeat;
    background-position: 0px 180px;
    position: relative;
    top: 40px;
    // padding-left: 16px;
    // padding-right: 16px;
    box-sizing: content-box;
    margin-left: auto;
    margin-right: auto;
    // 上
    .six_box_top {
      //   position: relative;
      //   right: 160px;
      width: 100%;
      .six_box_top_tit {
        font-family: MicrosoftYaHei;
        font-size: 26px;
        font-weight: normal;
        line-height: 52.8px;
        letter-spacing: 0px;
        /* 外部/Black */
        color: #000000;
      }
      .six_box_top_txt {
        width: 100%;
        // justify-content: center;
        display: flex;
        // align-items: center;
        flex-direction: row;
        margin-top: 11.2px;
        .six_box_top_txt_radius {
          width: 6px;
          height: 6px;
          background: #000000;
          border-radius: 50%;
          position: relative;
          top: 11px;
        }
        .span {
          padding: 0 5px;
          font-family: MicrosoftYaHei;
          font-size: 14px;
          font-weight: normal;
          line-height: 25.2px;
          letter-spacing: 0px;
          /* Black */
          color: #000000;
        }
      }
    }
    // 中
    .six_box_ctr {
      margin-top: 129.8px;
      display: flex;
      flex-direction: row;
      .six_box_ctr_left {
        width: 50%;
        display: flex;
        flex-direction: row-reverse;
        .six_box_ctr_left_list {
          margin-right: 44.5px;
          width: 340px;
          text-align: center;
          .six_box_ctr_left_list_date {
            font-family: MicrosoftYaHei;
            font-size: 24px;
            font-weight: normal;
            line-height: 31.99px;
            letter-spacing: 0px;
            /* 外部/Grey/Carbon */
            color: #333333;
          }
          .six_box_ctr_left_list_tit {
            font-family: MicrosoftYaHei;
            font-size: 24px;
            font-weight: normal;
            line-height: 31.99px;
            letter-spacing: 0px;
            /* 外部/Grey/Carbon */
            color: #333333;
          }
          .six_box_ctr_left_list_sub {
            font-family: MicrosoftYaHeiLight;
            font-size: 16px;
            line-height: 24px;
            letter-spacing: 0.05px;
            /* Black */
            color: #000000;
          }
          .six_box_ctr_left_img {
            width: 33.33px;
            height: 33.33px;
            background-image: url('../../assets/images/jianzi.png');
            background-size: 100% 100%;
            background-repeat: no-repeat;
            margin: 0px auto;
            position: relative;
            top: 30px;
          }
        }
      }
      .six_box_ctr_right {
        width: 50%;
        .six_box_ctr_right_list {
          margin-left: 44.5px;
          width: 340px;
          text-align: center;
          .six_box_ctr_right_list_date {
            font-size: 24px;
            font-weight: normal;
            line-height: 31.99px;
            letter-spacing: 0px;

            /* 外部/Grey/Carbon */
            color: #333333;
          }
          .six_box_ctr_right_list_tit {
            font-family: MicrosoftYaHei;
            font-size: 24px;
            font-weight: normal;
            line-height: 31.99px;
            letter-spacing: 0px;

            /* 外部/Grey/Carbon */
            color: #333333;
          }
          .six_box_ctr_right_list_sub {
            font-family: MicrosoftYaHeiLight;
            font-size: 16px;
            line-height: 24px;
            letter-spacing: 0.05px;

            /* Black */
            color: #000000;
          }
          .six_box_ctr_right_list_img {
            width: 33.33px;
            height: 33.33px;
            background-image: url('../../assets/images/jianzi.png');
            background-size: 100% 100%;
            background-repeat: no-repeat;
            margin: 0px auto;
            position: relative;
            top: 30px;
          }
        }
      }
    }

    // 下
    .six_box_btm {
      width: 100%;
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      position: relative;
      top: 209px;
      .six_box_btm_list {
        width: 30%;
        text-align: center;
        .six_box_btm_list_img {
          width: 30px;
          height: 31.67px;
          background-image: url('../../assets/images/five1.png');
          background-size: 100% 100%;
          background-repeat: no-repeat;
          margin: 0 auto;
        }
        .six_box_btm_list_tit {
          font-family: MicrosoftYaHei;
          font-size: 24px;
          font-weight: normal;
          line-height: 31.99px;
          letter-spacing: 0px;

          /* 外部/Grey/Carbon */
          color: #333333;
          margin-top: 23px;
        }
        .six_box_btm_list_sub {
          font-family: MicrosoftYaHei;
          font-size: 24px;
          font-weight: normal;
          line-height: 31.99px;
          letter-spacing: 0px;

          /* 外部/Grey/Carbon */
          color: #333333;
        }
        .six_box_btm_list_txt {
          font-family: MicrosoftYaHeiLight;
          font-size: 16px;
          line-height: 24px;
          letter-spacing: 0.05px;
          /* Black */
          color: #000000;
        }
        .six_box_btm_list_img2 {
          width: 36.67px;
          height: 26.68px;
          background-image: url('../../assets/images/five3.png');
          background-size: 100% 100%;
          background-repeat: no-repeat;
          margin: 0 auto;
        }
      }
    }
  }
  .six_box_bdr {
    width: 100%;
    border-bottom: 1px dashed #143a79;
    position: relative;
    bottom: 221px;
    .six_box_bdr_radius {
      width: 858px;
      display: flex;
      margin: 0 auto;
      flex-direction: row;
      justify-content: space-between;
      .six_box_bdr_radius_list {
        width: 15px;
        height: 15px;
        border: 1px solid #143a79;
        border-radius: 50%;
        position: relative;
        top: 8px;
        background: none;
        z-index: 99;
        background: #fff;
      }
    }
  }
}

// 设置 小于755内容样式
@media screen and (max-width: 1600px) {
  .six {
    display: none !important;
  }
  .six_media {
    // border: 1px solid thistle;
    // margin-top: 140px;
    // margin-top: 39px;
    margin-top: 39px;
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
    .six_media1 {
      font-family: MicrosoftYaHei;
      font-size: 26px;
      font-weight: bold;
      line-height: 52.8px;
      letter-spacing: 0px;
      /* 外部/Black */
      color: #000000;
    }
    .six_media_bdr {
      width: 134px;
      margin-top: 14.2px;
      border-bottom: 5px solid #000;
    }
    // 上面轮播图
    // .six_media_swiper1 {
    //   margin-top: 16px;
    //   width: 755px;
    //   display: flex;
    //   flex-direction: column;
    //   .six_media_swiper_img {
    //     height: 47.5px;
    //   }
    //   .six_media_swiper_box {
    //     margin-top: 16px;
    //     width: 755px;
    //     .swiper-container {
    //       width: 100%;
    //       height: 100%;
    //     }
    //   }
    //   .swiper-slide {
    //     height: auto;
    //     display: flex;
    //     flex-direction: column;
    //     justify-content: center;
    //     align-items: center;
    //   }
    //   .container_img {
    //     position: relative;
    //     top: 15px;
    //   }
    //   .container_txt {
    //     width: 100%;
    //     height: 300px;
    //     text-align: center;
    //     font-family: MicrosoftYaHeiLight;
    //     font-size: 20px;
    //     line-height: 30px;
    //     letter-spacing: 0px;
    //     color: #3e3e3e;
    //     margin: 0 auto;
    //     background: #fafafa;
    //     .container_txt_width {
    //       width: 692px;
    //       margin: 0 auto;
    //     }
    //   }
    // }
    // 第二个
    .six_media_swiperAAA {
      margin-top: 16px;
      width: 750px;
      // border: 1px solid red;
      // background: #ccc;
      .swiper {
        width: 100%;
        height: 100%;
        // position: relative;
        // top: 50px;
        .container_img {
          width: 93px;
          height: 95px;
          background: url(../../assets/images/six1.png) no-repeat;
          background-size: 100% 100%;
          z-index: 100;
          margin: 0 auto;
          position: relative;
          top: 40px;
        }
        .container_txt {
          width: 100%;
          // height: 300px;
          height: 260px;
          padding-top: 50px;
          background: #fafafa;
          position: relative;
          // bottom: 20px;
          // top: 50px;
          font-family: MicrosoftYaHeiLight;
          font-size: 20px;
          line-height: 30px;
          letter-spacing: 0px;
          color: #3e3e3e;
          .container_txt_width {
            padding-left: 10px;
            padding-right: 10px;
            text-align: center;
          }
        }
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
    // 下面轮播图
    .six_media_swiper2 {
      // border: 1px solid red;
      width: 750px;
      margin-top: 40px;
      justify-content: center;
      align-items: center;
      flex-direction: column;
      display: flex;
      .six_media_swiper2_tit {
        font-family: MicrosoftYaHei;
        font-size: 26px;
        font-weight: bold;
        line-height: 52.8px;
        letter-spacing: 0px;
        /* 外部/Black */
        color: #000000;
      }
      .six_media_swiper2_subtit {
        width: 400px;
        margin: 0 auto;
        height: auto;
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
        .six_media_swiper2_subtit_radius {
          // width: 6px;
          // height: 6px;
          // transform: rotate(180deg);
          // border-radius: 50px;
          // background: #000000;
          width: 10px;
          height: 10px;
          border-radius: 50px;
          background: #000;
        }
        .six_media_swiper2_subtit_txt {
          // border: 1px solid red;
          width: 300px;
          text-align: center;
          font-family: MicrosoftYaHei;
          font-size: 20px;
          font-weight: normal;
          line-height: 25.2px;
          letter-spacing: 0px;
          /* Black */
          color: #000000;
          padding: 0 15px;
        }
      }
      .six_media_swiper2_box {
        width: 100%;
        // height: 1173px;  //  没有轮播图注释掉
        flex-direction: column;
        display: flex;
        overflow: hidden;
        .six_media_swiper2_top {
          margin-top: 47.6px;
          width: 100%;
          flex-direction: row;
          display: flex;
          justify-content: space-between;
          .six_media_swiper2_top1 {
            width: 336px;
            height: auto;
            flex-direction: column;
            display: flex;
            text-align: center;
            .six_media_swiper2_top1_date {
              font-family: MicrosoftYaHei;
              font-size: 24px;
              font-weight: normal;
              line-height: 31.99px;
              letter-spacing: 0px;
              color: #333333;
            }
            .six_media_swiper2_top1_tit {
              font-family: MicrosoftYaHei;
              font-size: 24px;
              font-weight: normal;
              line-height: 31.99px;
              letter-spacing: 0px;
              color: #333333;
            }
            .six_media_swiper2_top1_txt {
              width: 336px;
              height: 120px;
              font-family: MicrosoftYaHeiLight;
              font-size: 20px;
              line-height: 30px;
              letter-spacing: 0.05px;
              color: #000000;
            }
          }
        }
        .swiper {
          width: 100%;
          height: 100%;
        }
        .swiper-slide {
          font-size: 18px;
          height: auto;
          -webkit-box-sizing: border-box;
          box-sizing: border-box;
        }
        .Sixmain2_box {
          // width: 695px;
          width: 700px;
          box-sizing: content-box;
          margin-left: auto;
          margin-right: auto;
          margin-top: 23.6px;
          justify-content: space-between;
          flex-direction: row;
          display: flex;
          // 左边
          .Sixmain2_box_left {
            width: 315px;
            flex-direction: column;
            display: flex;
            .Sixmain2_box_left_list1 {
              display: flex;
              flex-direction: column;
              margin-top: 67px;
              // margin-top: 239px;
              .Sixmain2_box_left_list1_tit {
                font-family: MicrosoftYaHei;
                font-size: 24px;
                font-weight: bold;
                line-height: 31.99px;
                letter-spacing: 0px;
                /* 外部/Grey/Carbon */
                color: #333333;
                flex-direction: row-reverse;
                display: flex;
              }
              .Sixmain2_box_left_list1_subtit {
                font-family: MicrosoftYaHei;
                font-size: 27px;
                font-weight: bold;
                line-height: 31.99px;
                letter-spacing: 0px;
                color: #333333;
                flex-direction: row-reverse;
                display: flex;
              }
              .Sixmain2_box_left_list1_txt {
                font-family: MicrosoftYaHeiLight;
                font-size: 16px;
                line-height: 26px;
                letter-spacing: 0.05px;
                /* Black */
                color: #000000;
                flex-direction: row-reverse;
                display: flex;
                margin-top: 8.01px;
              }
            }
            .Sixmain2_box_left_list2 {
              margin-top: 210px;
            }
          }
          // 中间
          .Sixmain2_box_center {
            width: 3%;
            // border: 1px solid aqua;
            .Sixmain2_box_center_bdr {
              // height: 100%;
              // width: 1173px;
              height: 1100px;
              width: 1px;
              border-right: 1px dotted #143a79;
              margin: 0 auto;
              .Sixmain2_box_center_bdr_box {
                flex-direction: column;
                display: flex;
                position: relative;
                right: 13px;
                bottom: 45px;
                .Sixmain2_box_center_bdr_box_list {
                  margin-top: 145px;
                  flex-direction: column;
                  display: flex;
                  .Sixmain2_box_center_bdr_img1 {
                    width: 30px;
                    height: 31.67px;
                    background-image: url('../../assets/images/Sixmain1.png');
                    background-size: 100% 100%;
                    background-repeat: no-repeat;
                    margin: 0px auto;
                  }
                  .Sixmain2_box_center_bdr_img2 {
                    width: 33.33px;
                    height: 33.33px;
                    background-image: url('../../assets/images/Sixmain2.png');
                    background-size: 100% 100%;
                    background-repeat: no-repeat;
                    margin: 0px auto;
                  }
                  .Sixmain2_box_center_bdr_img3 {
                    width: 36.67px;
                    height: 26.68px;
                    background-image: url('../../assets/images/Sixmain3.png');
                    background-size: 100% 100%;
                    background-repeat: no-repeat;
                    margin: 0px auto;
                  }
                  .Sixmain2_box_center_bdr_radius {
                    width: 15px;
                    height: 15px;
                    transform: rotate(90deg);
                    /* Mono/White */
                    background: #ffffff;
                    box-sizing: border-box;
                    /* Primary/Normal */
                    border: 1px solid #143a79;
                    border-radius: 50%;
                    margin-top: 8.33px;
                    position: relative;
                    left: 7px;
                  }
                }
              }
            }
          }
          // 右边
          .Sixmain2_box_right {
            // width: 47%;
            width: 315px;
            // border: 1px solid red;
            display: flex;
            flex-direction: column;
            // margin-top: 297px;
            .Sixmain2_box_right_list1 {
              // margin-top: 297px;
              margin-top: 245px;
              .Sixmain2_box_right_list1_tit {
                font-family: MicrosoftYaHei;
                font-size: 24px;
                font-weight: bold;
                line-height: 31.99px;
                letter-spacing: 0px;
                /* 外部/Grey/Carbon */
                color: #333333;
              }
              .Sixmain2_box_right_list1_subtit {
                font-family: MicrosoftYaHei;
                font-size: 24px;
                font-weight: bold;
                line-height: 27px;
                letter-spacing: 0px;
                color: #333333;
              }
              .Sixmain2_box_right_list1_txt {
                font-family: MicrosoftYaHeiLight;
                font-size: 16px;
                line-height: 26px;
                letter-spacing: 0.05px;
                /* Black */
                color: #000000;
                margin-top: 8.01px;
              }
            }
          }
        }
      }
    }
  }
}
// 超过755的隐藏内容样式设置a
@media screen and (min-width: 1600px) {
  .six_media {
    display: none !important;
  }
}
</style>