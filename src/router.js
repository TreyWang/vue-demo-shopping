import Vue from 'vue'
import VueRouter from 'vue-router'

//pages
import IndexPage from './page/index.vue'

Vue.use(VueRouter)

const routes = [
  {path: '/', component: IndexPage}
]

export default new VueRouter({
  model: 'history',
  base: __dirname,
  routes
})
