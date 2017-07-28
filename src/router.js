import Vue from 'vue'
import VueRouter from 'vue-router'
import Store from './store'

//pages
import IndexPage from './page/index.vue'
import DetailPage from './page/detail.vue'
import OrderListPage from './page/orderList.vue'

//404error
import Error404 from './page/base/error404.vue'

//detail-children
import ForecastPage from './page/detail/forecast.vue'
import AnalysisPage from './page/detail/analysis.vue'
import CountPage from './page/detail/count.vue'
import PublishPage from './page/detail/publish.vue'


Vue.use(VueRouter)

const routes = [
  {path: '/', component: IndexPage},
  {
    path: '/detail',
    component: DetailPage,
    children: [
      {path: 'forecast', component: ForecastPage},
      {path: 'analysis', component: AnalysisPage},
      {path: 'count', component: CountPage},
      {path: 'publish', component: PublishPage}
    ],
    meta: {
      requireAuth: true
    },
    redirect: '/detail/count'
  },
  {path: '/orderList', component: OrderListPage},
  {path: '*', component: Error404}
]

//判断是否登录
const router = new VueRouter({
  mode: 'history',
  base: __dirname,
  routes
})

router.beforeEach((to, from, next) => {
  if (to.meta.requireAuth){
    if(Store.state.token){
      next()
    }
    else{
      alert('请先登录')
    }
  }
  else {
    next();
  }
})

export default {
  router
}
