import Vue from 'vue'
import VueRouter from 'vue-router'

//pages
import IndexPage from './page/index.vue'
import DetailPage from './page/detail.vue'

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
    ]
  },
  {path: '*', component: Error404}
]

export default new VueRouter({
  mode: 'history',
  base: __dirname,
  routes
})
