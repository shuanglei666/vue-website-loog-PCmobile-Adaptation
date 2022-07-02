import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
Vue.use(ElementUI);
Vue.config.productionTip = false

import VueAwesomeSwiper from "vue-awesome-swiper";
import "swiper/css/swiper.css";
import 'amfe-flexible';

Vue.use(VueAwesomeSwiper);


// 引入vuei18n
import VueI18n from 'vue-i18n'
// 以插件的形式
Vue.use(VueI18n)
//创建VueI18n实例
const i18n = new VueI18n({
  locale: localStorage.getItem('language') || 'zh', //语言标识
  messages: {
    'zh': require('../src/I18n/zh'),
    'en': require('../src/I18n/en')
  },
   silentTranslationWarn: true,
})

new Vue({
  router,
  store,
  i18n,
  render: h => h(App)
}).$mount('#app')