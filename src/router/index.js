import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import one from '../views/one.vue'
import two from '../views/two.vue'




Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/one',
    name: 'one',
    component: one
  },
  {
    path: '/two',
    name: 'two',
    component: two
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
