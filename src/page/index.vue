<template>
  <div>
    <div class="index-wrap">
      <div class="index-left">
        <div class="index-left-block">
          <h2>全部产品</h2>
          <template for="item in productList">
            <h3>{{item.title}}</h3>
            <ul>
              <!--<li v-for="item in item.list">-->

              <!--</li>-->
            </ul>
            <div class="hr"></div>
          </template>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default{
    data(){
        return{
            productList: {
                pc: {
                  title: 'PC产品',
                  list: [
                    {
                      name: '数据统计',
                      url: 'http://starcraft.com'
                    },
                    {
                      name: '数据预测',
                      url: 'http://warcraft.com'
                    },
                    {
                      name: '流量分析',
                      url: 'http://overwatch.com',
                      hot: true
                    },
                    {
                      name: '广告发布',
                      url: 'http://hearstone.com'
                    }
                  ]
                },
                app: {
                  title: '手机应用类',
                  list:[
                    {
                      name: '91助手',
                      url: 'http://weixin.com'
                    },
                    {
                      name: '产品助手',
                      url: 'http://twitter.com',
                      hot: true
                    },
                    {
                      name: '智能地图',
                      url: 'http://maps.com'
                    },
                    {
                      name: '团队语音',
                      url: 'http://phone.com'
                    }
                  ]
                }
            }
        }
    }
  }
</script>

<style scoped="scoped">
  .index-wrap {
    width: 1200px;
    margin: 0 auto;
    overflow: hidden;
  }
  .index-left {
    float: left;
    width: 300px;
    text-align: left;
  }
  .index-right {
    float: left;
    width: 900px;
  }
  .index-left-block {
    margin: 15px;
    background: #fff;
    box-shadow: 0 0 1px #ddd;
  }
  .index-left-block .hr {
    margin-bottom: 20px;
  }
  .index-left-block h2 {
    background: #4fc08d;
    color: #fff;
    padding: 10px 15px;
    margin-bottom: 20px;
  }
  .index-left-block h3 {
    padding: 0 15px 5px 15px;
    font-weight: bold;
    color: #222;
  }
  .index-left-block ul {
    padding: 10px 15px;
  }
  .index-left-block li {
    padding: 5px;
  }
  .index-board-list {
    overflow: hidden;
  }
  .index-board-item {
    float: left;
    width: 400px;
    background: #fff;
    box-shadow: 0 0 1px #ddd;
    padding: 20px;
    margin-right: 20px;
    margin-bottom: 20px;
  }
  .index-board-item-inner {
    min-height: 125px;
    padding-left: 120px;
  }
  .index-board-car .index-board-item-inner{
    background: url(../assets/images/1.png) no-repeat;
  }
  .index-board-loud .index-board-item-inner{
    background: url(../assets/images/2.png) no-repeat;
  }
  .index-board-earth .index-board-item-inner{
    background: url(../assets/images/3.png) no-repeat;
  }
  .index-board-hill .index-board-item-inner{
    background: url(../assets/images/4.png) no-repeat;
  }
  .index-board-item h2 {
    font-size: 18px;
    font-weight: bold;
    color: #000;
    margin-bottom: 15px;
  }
  .line-last {
    margin-right: 0;
  }
  .index-board-button {
    margin-top: 20px;
  }
  .lastest-news {
    min-height: 512px;
  }
  .hot-tag {
    background: red;
    color: #fff;
  }
  .new-item {
    display: inline-block;
    width: 230px;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }

</style>
