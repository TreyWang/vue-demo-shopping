1 /**
 2  * http配置
 3  */
import axios from 'axios'
import store from './store'

// 超时时间5秒
axios.defaults.timeout = 5000
// 设置http请求头为form表单提交方式
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded;charset=UTF-8';
// 设置默认请求地址
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

// http request 拦截器
axios.interceptors.request.use(
  config => {
  if (store.state.token) {
    config.headers.Authorization = `token ${store.state.token}`;
  }
  return config;
  },
  err => {
    return Promise.reject(err);
  });

// http response 拦截器
axios.interceptors.response.use(
  response => {
    return response;
  },
  error => {
  if (error.response) {
    switch (error.response.status) {
      case 401:
        // 401 清除token信息并跳转到登录页面
        //store.commit(types.LOGOUT);
        // router.replace({
        //   path: 'login',
        //   query: {redirect: router.currentRoute.fullPath}
        // })
        alert('请先登录');
    }
  }
  // console.log(JSON.stringify(error));//console : Error: Request failed with status code 402
  return Promise.reject(error.response.data)
  });

export default axios
