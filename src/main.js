// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import Layout from './components/layout.vue'
import router from './router'
import axios from 'axios'
import VueAxios from 'vue-axios'

Vue.config.productionTip = false

//axios配置
Vue.use(VueAxios, axios)
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded;charset=UTF-8';
axios.defaults.baseURL = 'http://localhost:8081/';

//POST传参序列化
axios.interceptors.request.use((config) => {
  if(config.method  === 'post'){
    config.data = JSON.stringify(config.data);
  }
  return config;
}, (error) => {
  return Promise.reject(error);
});


/* eslint-disable no-new */
new Vue({
  el: '#app',
  render: h => h(Layout),
  router
})
