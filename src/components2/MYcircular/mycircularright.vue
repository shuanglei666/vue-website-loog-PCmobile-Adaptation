<template>
  <div class="mycircularright">
    <div class="main_box">
      <div class="yuan_bg">
      </div>
    </div>
  </div>
</template>
<style lang="less" scoped>
.mycircularright {
  min-width: 100%;
  // height: 400px;
  // background:aqua;
  z-index: -999;
  .main_box {
    width: 1200px;
    display: flex;
    flex-direction: row-reverse;
    margin: 0 auto;
    .yuan_bg {
      width: 246.83px;
      height: 238.48px;
      background-image: url('../../assets/images/yuan.png');
      background-size: 100% 100%;
      background-repeat: no-repeat;
      position: relative;
      // bottom: 118px;
      // left: 200px;
      // top: 119px;
      top: 80px;
      left: 300px;
      // position: absolute;
      // left: 85%;
      // left: 1100px;
      // position: relative;
      // left: 300px;
      // bottom: 118px;
      // top: 118px;
    }
  }
}
</style>