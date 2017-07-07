import Vue from 'vue'
import VueRouter from 'vue-router'

//pages
import IndexPage from './page/index.vue'

Vue.use(VueRouter)

const routers = [
  {path: '/', component: IndexPage}
]

export default new VueRouter({
  mode: 'history',
  base: __dirname,
  routers
})
