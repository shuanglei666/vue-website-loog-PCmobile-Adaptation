<template>
  <div class="box">
    <div class="header">
      <!-- <div class="header_top">
        <Myhead></Myhead>
      </div>
      <div class="header_bottom">
        <Mytitle></Mytitle>
      </div> -->
      <Mytitle></Mytitle>
    </div>
    <div class="content">
      <Onemain></Onemain>
      <Twomain></Twomain>
      <mycircularright class="mycircularright"></mycircularright>
      <Theremain></Theremain>
      <mycircularleft class="mycircularleft"></mycircularleft>
      <Fourmain></Fourmain>
      <mycircularright class="mycircularright"></mycircularright>
      <Fivemain></Fivemain>
      <mycircularleft class="mycircularleft"></mycircularleft>
      <Sixmain></Sixmain>
      <mycircularright class="mycircularright"></mycircularright>
      <Sevenmain></Sevenmain>
      <mycircularleft class="mycircularleft"></mycircularleft>
    </div>
    <div class="footer">
      <Myfooter></Myfooter>
    </div>

  </div>
</template>

<script>
import Myhead from "../components/Myhead/Myhead.vue";
import Mytitle from "../components/title/Mytitle.vue";
import Onemain from "../components/Mymain/Onemain.vue";
import Twomain from "../components/Mymain/Twomain.vue";
import mycircularright from "../components/MYcircular/mycircularright.vue";
import Theremain from "../components/Mymain/Theremain.vue";
import mycircularleft from "../components/MYcircular/mycircularleft.vue";
import Fourmain from "../components/Mymain/Fourmain.vue";
import Fivemain from "../components/Mymain/Fivemain.vue";
import Sixmain from "../components/Mymain/Sixmain.vue";
import Sevenmain from "../components/Mymain/Sevenmain.vue";
import Myfooter from "../components/Myfooter/Myfooter.vue"
export default {
  name: "Home",
  components: {
    Myhead,
    Mytitle,
    Onemain,
    Twomain,
    mycircularright,
    Theremain,
    mycircularleft,
    Fourmain,
    Fivemain,
    Sixmain,
    Sevenmain,
    Myfooter
  },
  mounted () {

  }
};
</script>
<style lang="less" scoped>
.box {
  position: absolute;
  min-width: 100%;
  min-height: 100%;
  z-index: -1;
  flex-direction: column;
  display: flex;
  // overflow-y: auto;
  // overflow-x: hidden;
  overflow: hidden;
  .header {
    width: 100%;
    // height: 165px;
    // border: 1px solid red;
    flex-direction: column;
    display: flex;
  }
  .content {
    display: flex;
    flex-direction: column;
  }
}

// @media screen and (max-width: 755px) {
//   .header {
//     height: 73px !important;
//   }
// }

// 设置 小于755内容样式
@media screen and (max-width: 1600px) {
  .mycircularright {
    display: none !important;
  }
  .mycircularleft {
    display: none !important;
  }
}
</style>