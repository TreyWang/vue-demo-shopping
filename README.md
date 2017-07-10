使用vue全家桶搭建购物网站

# vue-shopping

> A Vue.js project

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report
```

For detailed explanation on how things work, checkout the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).

# 使用axios做异步数据请求操作

## 引入axios
```
npm install --save-dev axios
npm install --save-dev vue-axios
```

## 配置axios
```
import axios from 'axios'
import VueAxios from 'vue-axios'

Vue.use(VueAxios, axios)
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded;charset=UTF-8';
axios.defaults.baseURL = 'http://localhost:8081/';
```

## POST传参序列化拦截器
```
axios.interceptors.request.use((config) => {
  if(config.method  === 'post'){
    config.data = JSON.stringify(config.data);
  }
  return config;
}, (error) => {
  return Promise.reject(error);
});
```

## 使用demo
```
# get
this.axios.get(uri
	).then(response => {
	console.log(response.data);
	}).catch(error => {
	console.log(error);
	})
  
# post
this.axios.post(uri,{data: data
	}).then(response => {
	console.log(response.data);
	}).catch(error => {
	console.log(error);
	})

# 省略PUT,DELETE
```

# 使用json-server模拟数据，测试前端异步数据提取

## 引入json-server
```
npm install --save-dev json-server
```

## 配置json-server
在build/dev-server.js中配置
```
# json-server数据测试
const jsonServer = require('json-server')
const apiServer = jsonServer.create()
# 配置json数据源为根目录下的db.json
const apiRouter = jsonServer.router('db.json')
const middlewares = jsonServer.defaults()

apiServer.use(middlewares)
apiServer.use(apiRouter)
# 监听数据源端口8081
apiServer.listen("8081", () => {
  console.log('JSON Server is running')
})
```

## 写入json数据源
在根目录下编写db.json数据源
db.json例：
```
{
  "news": [
    {
      "id": 1,
      "title": "英美会谈",
      "url": "http://starcraft.com"
    },
    {
      "id": 2,
      "title": "G20峰会",
      "url": "http://warcraft.com"
    },
    {
      "id": 3,
      "title": "高考状元",
      "url": "http://overwatch.com"
    },
    {
      "id": 4,
      "title": "状元采访",
      "url": "http://hearstone.com"
    }
  ]
}
```

注：默认情况下，异步请求uri为json数据的key值，如上述数据url为http://localhost:8081/news

##运行
```
npm run dev # 启动
```








