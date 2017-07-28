// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import Layout from './components/layout.vue'
import router from './router'
import store from './store'
import VueAxios from 'vue-axios'
import axios from './http'


Vue.config.productionTip = false

//axios配置
Vue.use(VueAxios, axios)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  render: h => h(Layout),
  router,
  store
})
