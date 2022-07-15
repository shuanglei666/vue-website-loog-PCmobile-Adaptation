<template>
  <div class="mycircularleft">
    <div class="main_box">
      <div class="yuan_bg">
      </div>
    </div>
  </div>
</template>
<style lang="less" scoped>
.mycircularleft {
  min-width: 100%;
  position: relative;
  z-index: -999;
  .main_box {
    width: 1200px;
    display: flex;
    margin: 0 auto;
    .yuan_bg {
      width: 246.83px;
      height: 238.48px;
      background-image: url('../../assets/images/yuan.png');
      background-size: 100% 100%;
      background-repeat: no-repeat;
      position: relative;
      right: 300px;
      // top: 118px;
      top: 60px;
    }
  }
}
</style>