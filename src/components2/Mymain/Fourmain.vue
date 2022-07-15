<template>
  <div class="scroll-item">
    <!-- PC layout -->
    <div class="four">
      <div class="four_box">
        <div class="four_tit">
          <div class="four_tit_lft">
            {{$t('Home2.Fourmain.Creator')}}
          </div>
          <div class="four_tit_lft_bdr"></div>
          <!-- <div class="four_tit_rgt">
            {{$t('Home2.Fourmain.TrefdeLacus')}}
          </div> -->
        </div>
        <div class="four_content">
          <!-- 第一个 -->
          <div class="four_count">
            <div class="four_count_top">1</div>
            <div class="four_count_bottom">
              <!-- <div class="four_count_bottom_tit">创作者拥有对内容的控制权</div>去中心化存储 -->
              <div class="four_count_bottom_tit">去中心化存储</div>
              <!-- <div class="four_count_bottom_subtit">Web2创作者经济中，创作者上传的内容被存储在中心化存储平台 当中，内容传播和分发都由平台完成，创作者对其内容的使用受制
                于平台。DAG创作者平台，创作者上传的内容实现去中心化存储， 永久上链，创作者具有对内容的所有权和控制权。创作者可以将其 内容制成NFT进行分发，NFT的智能合约和创建钱包地址具有确权 作用。 -->
              <div class="four_count_bottom_subtit">
                创作者拥有对内容的控制权。
              </div>
            </div>
          </div>
          <!-- 第二个 -->
          <div class="four_count">
            <div class="four_count_top four_count_top2">2</div>
            <div class="four_count_bottom">
              <div class="four_count_bottom_tit">
                <!-- 原创内容保护 -->
                智能合约
              </div>
              <div class="four_count_bottom_subtit">
                <!-- DAG创作者平台所有内容上链并产生独一无二的智能合约地址。 在Web2平台中经常出现的抄袭、模仿、搬运造成最后原创者受
                到利益侵害的问题，在DAG平台得到解决。例如收益分流功能， 用户不仅可以清晰地还原出作品基于多少改编作品，还可以直接 通过智能合约对改编对象给予相应的回报，有助于调动原创的热 情，推动更多优质原创作品出现。 -->
                强化原创内容保护。
              </div>
            </div>
          </div>
          <!-- 第三个 -->
          <div class="four_count">
            <div class="four_count_top four_count_top3">
              3
            </div>
            <div class="four_count_bottom">
              <div class="four_count_bottom_tit">
                <!-- 更有利于筛选优质内容 -->
                全新筛选机制
              </div>
              <div class="four_count_bottom_subtit">
                <!-- DAG创作者平台创设了全新的内容筛选机制，包括平台评选、用户 评选、机器人筛选等等方式，为优质内容提供代币、NFT等奖励，
                激励创作者提交原创、符合市场需求、高质量的内容。例如，将点 赞、评论等社交活动对内容质量进行影响力代币化，将奖励分配给 更具社交价值的内容。除了内容筛选机制，DAG平台还设立了打赏
                机制，用户可以为自己喜欢的内容打赏，打赏资金直接发放给创作 者，激发创作者的创作热情，有助于提升其内容质量。 -->
                更有利于筛选优质内容。
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- mobile layout -->
    <div class="four_media">
      <div class="four_media_box">
        <div class="four_media_tit">基于WEB3的创作者平台
        </div>
        <div class="four_media_bdr"></div>
        <!-- 轮播图-->
      </div>
      <div class="four_media_bottom">
        <div class="four_media_bottom_list">
          <div class="four_media_bottom_list_radius">1</div>
          <div class="four_media_bottom_list_box">
            <div class="four_media_bottom_list_box_tit">去中心化存储
            </div>
            <div class="four_media_bottom_list_box_txt">
              创作者拥有对内容的控制权。
            </div>
          </div>
        </div>
        <div class="four_media_bottom_list">
          <div class="four_media_bottom_list_radius four_media_bottom_list_radius2">2</div>
          <div class="four_media_bottom_list_box">
            <div class="four_media_bottom_list_box_tit">智能合约
            </div>
            <div class="four_media_bottom_list_box_txt">强化原创内容保护。
            </div>
          </div>
        </div>
        <div class="four_media_bottom_list">
          <div class="four_media_bottom_list_radius four_media_bottom_list_radius3">3</div>
          <div class="four_media_bottom_list_box">
            <div class="four_media_bottom_list_box_tit">全新筛选机制
            </div>
            <div class="four_media_bottom_list_box_txt">更有利于筛选优质内容。
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import Swiper from 'swiper'
export default {
  data () {
    return {
      nowIndex: 0,
      swiper: null,
      realIndex: 1,
    }
  },
  mounted () {
    this.getInfor();
  },
  methods: {
    getInfor () {
      this.$nextTick(() => {
        // this.swiper = new Swiper("#mySwiperFourmain", {
        const swiper = new Swiper("#mySwiperFourmain", {
          slidesPerView: 2.1,
          spaceBetween: 10,
          centeredSlides: true,
          grabCursor: true,
          pagination: {
            el: "#mySwiperFourmain-pagination",
            clickable: true,
          },
          observer: true,//
          observeParents: true,//修改swiper的父元素时，自动初始化swiper
          //slideToClickedSlide: true,        //  设置为true则点击slide会过渡到这个slide
          //preventClicksPropagation: true,  //  阻止click冒泡。拖动Swiper时阻止click事件
          loop: true,
          loopAdditionalSlides: 2,
          paginationClickable: true,
          navigation: {
            nextEl: ".swiper-button-next1",
            prevEl: ".swiper-button-prev1",
          },
        });
        this.swiper = swiper
        // swiper.on('click', function (touchend) {
        //   var divs = $('.swiper-slide1'); // index为指定将要切换到的slide的索引
        //   for (var i = 0, lens = divs.length; i < lens; i++) {
        //     divs[i].index = i;
        //     $(divs[i]).click(function () {
        //       swiper.slideTo(this.index, 1000, false);//切换到第一个slide，速度为1秒  slideToLoop
        //       // swiper.slideToLoop(this.index, 1000, faltse);//切换到第一个slide，速度为1秒
        //     });
        //   };
        // });
        // 点击-轮播时获取对应的索引 ==> 获取对应的数据  
        // $('.swiper-slide1').click(function () {
        //   let clickSwiperIndex = $(this).index('.swiper-slide1');
        //   swiper.slideTo(clickSwiperIndex, 500, false); //切换到第一个slide，速度为1秒
        //   $(this).addClass('timeSnapUpActBox').siblings().removeClass('timeSnapUpActBox');
        // })

      })
    },
  },

}
// };
</script>

<style lang="less" scoped>
// PC
.four {
  width: 100%;
  // height: 851px;
  // height: 800px;
  // border-top: 1px solid #ac0883;
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
    background-image: url('../../assets/images2/loog_bg.png');
    background-position: 0 5%;
    background-size: 100% 40%;
    background-repeat: no-repeat;
    position: relative;
    top: 80px;
    // padding-left: 16px;
    // padding-right: 16px;
    box-sizing: content-box;
    margin-left: auto;
    margin-right: auto;
    .four_tit {
      width: 100%;
      height: 70px;
      // display: flex;
      // flex-direction: column;
      // justify-content: space-between;
      box-sizing: content-box;
      .four_tit_lft {
        font-family: MicrosoftYaHei;
        font-size: 26px;
        font-weight: normal;
        // line-height: 96px;
        letter-spacing: 0px;
        flex-direction: column;
        display: flex;
        /* Dark */
        color: #292830;
      }
      .four_tit_lft_bdr {
        // border-bottom: 3px solid #000000;
        width: 134px;
        // height: 2px;
        // min-height: 2px;
        // background: #000;
        flex-shrink: 0;
        border-bottom: 3px solid #000;
        object-fit: cover;
        // display: inline-block;
        flex-shrink: 0;
        box-sizing: content-box;
        position: relative;
        top: 23px;
      }
      // .four_tit_rgt {
      //   width: 30%;
      //   font-family: MicrosoftYaHeiLight;
      //   font-size: 16px;
      //   font-weight: 290;
      //   line-height: 34px;
      //   letter-spacing: 0px;
      //   color: #3e3e3e;
      //   position: relative;
      //   top: 23px;
      // }
    }
    // 三个盒子
    .four_content {
      width: 100%;
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      // margin-top: 145px;
      margin-top: 100px;
      .four_count {
        flex-direction: column;
        align-items: center;
        display: flex;
        transition: 1s all;
        .four_count_top {
          width: 69.19px;
          height: 64px;
          background: rgba(255, 189, 116, 0.53);
          font-family: MicrosoftYaHei-Bold;
          font-size: 28px;
          font-weight: bold;
          letter-spacing: 0px;
          color: #000000;
          border-radius: 50%;
          justify-content: center;
          flex-direction: column;
          display: flex;
          align-items: center;
          position: relative;
          top: 32px;
          z-index: 10;
          &.four_count_top2 {
            background: #ffe2ee;
          }
          &.four_count_top3 {
            background: #e2d8ff;
          }
        }
        .four_count_bottom {
          width: 378px;
          // height: 370px;
          height: 300px;
          border-radius: 12px;
          background: #ffffff;
          box-shadow: 0px 16px 80px 0px rgba(51, 51, 51, 0.12);
          display: flex;
          flex-direction: column;
          align-items: center;
          .four_count_bottom_tit {
            font-family: MicrosoftYaHei;
            font-size: 16px;
            // font-weight: normal;
            font-weight: 600;
            // line-height: 96px;
            letter-spacing: 0px;
            color: #000000;
            // margin-top: 48px;
            margin-top: 60px;
          }
          .four_count_bottom_subtit {
            margin-top: 25px;
            font-family: MicrosoftYaHeiLight;
            font-size: 12px;
            line-height: 24px;
            letter-spacing: 0.05px;
            /* Black */
            color: #000000;
            padding: 0 13px;
          }
        }
      }
      .four_count:hover {
        transform: translateY(-20px);
      }
    }
  }
}

// 移动端设置 小于755内容样式
.swiper {
  position: relative;
}
// .swiper-button-next1 {
//   width: 145px;
//   height: 245px;
//   background-color: #000000;
//   // width: 326px;
//   // height: 301px;
//   border-radius: 12px 0 0 12px;
//   // background: #ffffff;
//   position: absolute;
//   top: 30px;
//   right: 0;
//   z-index: 100;
//   opacity: 0.5;
//   transition: all 0.5s;
//   // .four_count {
//   //   .four_count:hover {
//   //     transform: translateY(-2px);
//   //   }
//   // }
// }
// .swiper-button-next1:hover {
//   transform: translateY(-20px);
// }
// .swiper-button-next1 {
//   width: 145px;
//   height: 245px;
//   // border: 1px solid red;
//   // background-color: #000000;
//   border-radius: 12px 0 0 12px;
//   background: #ffffff;
//   position: absolute;
//   top: 25px;
//   right: 0;
//   z-index: 100;
//   opacity: 0;
//   transition: all 0.5s;
//   -moz-user-select: none;
//   -webkit-user-select: none;
//   -ms-user-select: none;
//   -khtml-user-select: none;
//   user-select: none;
// }
.swiper-button-prev1 {
  width: 145px;
  height: 245px;
  background-color: #000000;
  border: 1px solid red;
  border-radius: 0 12px 12px 0;
  background: #ffffff;
  // width: 326px;
  // height: 301px;
  // background: #ffffff;
  position: absolute;
  top: 25px;
  left: 0;
  z-index: 100;
  opacity: 0;
}

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
      line-height: 60px;
      letter-spacing: 0px;
      /* Dark */
      color: #292830;
      margin-top: 39px;
    }
    .four_media_bdr {
      width: 134px;
      border-bottom: 5px solid #000;
    }
  }
  .four_media_bottom {
    margin-top: 19px;
    // border: 1px solid red;
    flex-direction: column;
    display: flex;
    .four_media_bottom_list {
      width: 700px;
      // height: 360px;
      height: 260px;
      border-radius: 12px;
      background: #ffffff;
      box-shadow: 0px 16px 80px 0px rgba(51, 51, 51, 0.12);
      flex-direction: column;
      display: flex;
      align-items: center;
      margin-top: 53px;
      transition: 0.5s all;

      // 省略号样式
      .four_media_bottom_list_radius {
        width: 69.19px;
        height: 64px;
        background: rgba(255, 189, 116, 0.53);
        border-radius: 50%;
        flex-direction: column;
        display: flex;
        align-items: center;
        justify-content: center;
        font-family: MicrosoftYaHei-Bold;
        font-size: 28px;
        font-weight: bold;
        line-height: 52.8px;
        letter-spacing: 0px;
        color: #000000;
        position: relative;
        bottom: 32px;
      }
      .four_media_bottom_list_radius2 {
        opacity: 0.7;
        background: #ffe2ee;
      }
      .four_media_bottom_list_radius3 {
        opacity: 0.7;
        background: #e2d8ff;
      }
      .four_media_bottom_list_box {
        position: relative;
        bottom: 8px;
        margin-right: 43px;
        margin-left: 43px;
        // border: 1px solid red;
        flex-direction: column;
        display: flex;
        align-items: center;
        justify-content: center;
        .four_media_bottom_list_box_tit {
          font-family: MicrosoftYaHei;
          font-size: 22px;
          font-weight: bold;
          line-height: 33px;
          letter-spacing: 0px;
          color: #000000;
        }
        .four_media_bottom_list_box_txt {
          position: relative;
          top: 8px;
          font-family: MicrosoftYaHeiLight;
          font-size: 22px;
          line-height: 30px;
          letter-spacing: 0.05px;
          /* Black */
          color: #000000;
          // 省略号
          word-break: break-all;
          text-overflow: ellipsis;
          /** 对象作为伸缩盒子模型显示 **/
          display: -webkit-box;
          /** 设置或检索伸缩盒对象的子元素的排列方式 **/
          -webkit-box-orient: vertical;
          /** 显示文本的行数 **/
          -webkit-line-clamp: 8;
          /** 超出的内容隐藏 **/
          overflow: hidden;
        }
      }
    }
    .four_media_bottom_list:hover {
      transform: translateY(-20px);
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