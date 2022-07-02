import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    language: localStorage.getItem('language'),
    title_list: [{
        title: '家',
        active: true
      },
      {
        title: '商店',
        active: false
      },
      {
        title: '页',
        active: false
      },
      {
        title: '元素',
        active: false
      },
      {
        title: '商店',
        active: false
      },
      {
        title: '页',
        active: false
      },
      {
        title: '元素',
        active: false
      },
    ]
  },
  mutations: {
    SET_LANGUAGE(state, payload) {
      state.language = payload
      // console.log(payload, 'lang');
      localStorage.setItem('language', payload)
    },
    SET_LIST(state,payload){
      state.title_list = payload
    }
  },
  actions: {

  },
  modules: {}
})