<template>
  <div class="app">
    <router-view />
  </div>
</template>
<script>
export default {
}
</script>
<style>
@media screen and (min-width: 2560px) {
  html {
    font-size: 388px !important;
  }
}

@media screen and (min-width: 1920px) {
  html {
    font-size: 354px !important;
  }
}

@media screen and (min-width: 1600px) {
  html {
    font-size: 320px !important;
  }
}

.app {
  margin: 0px;
  padding: 0px;
  /* -moz-user-select: none;  
  -webkit-user-select: none;
  -ms-user-select: none;
  -khtml-user-select: none;
  user-select: none; */
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  -webkit-text-size-adjust: 100%;
  text-shadow: 1px 1px 1px 1px rgba(0, 0, 0, 0.005);
}
#app > * {
  width: 100%;
  overflow-x: hidden;
}
</style>