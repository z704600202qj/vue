<style>
  .pre {
    height: 0.7rem;
    font-size: 0.25rem;
    width: 100%;
    background: #ccc;
    line-height: 0.7rem;
    padding-left: 0.5rem
  }

  .order_list li {
    float: left;
    font-size: 0.2rem;
    width: 20%;
    text-align: center;
    height: 0.5rem;
    line-height: 0.5rem
  }

  .line1 {
    border-bottom: 1px solid #2DA666;
    display: block;
    width: 100%;
    height: 100%;
  }

  .orderList {
    width: 100%;
    /*height: 4.2rem;*/
    background: #cccccc;
    overflow: hidden;
    padding-bottom: 0.2rem;
    margin-bottom: 0.2rem;
  }

  .tit {
    font-size: 0.35rem;
    height: 0.6rem
  }

  .tit span {
    margin: 0 0.5rem
  }

  .mint-loadmore-text {
    font-size: 0.3rem
  }

  .mint-header-button {
    height: 100%;
    overflow: hidden;
    margin-bottom: 0.2rem
  }
</style>
<template>
  <div>
    <div class="pre">
      <!--<div >-->
      <!--<router-link to="/me">返回</router-link>-->
      <!--</div>-->
      <mt-header
        style="position: fixed;top: 0px;left: 0px;width: 100%;height: 0.7rem;background: #3bff95;z-index: 999;font-size: 0.13rem">
        <router-link to="/me" slot="left">
          <mt-button icon="back">返回</mt-button>
        </router-link>
      </mt-header>
    </div>
    <ul class="order_list" style="height:0.52rem ">
      <li>
        <router-link :to="{ name: 'order', params: { userId: 1 }}" class="order">待付款</router-link>
      </li>
      <li>
        <router-link :to="{ name: 'order', params: { userId: 2 }}" class="order">待发货</router-link>
      </li>
      <li>
        <router-link :to="{ name: 'order', params: { userId: 3 }}" class="order">已发货</router-link>
      </li>
      <li>
        <router-link :to="{ name: 'order', params: { userId: 4 }}" class="order">已完成</router-link>
      </li>
      <li>
        <router-link :to="{ name: 'order', params: { userId: 5 }}" class="order">全部</router-link>
      </li>
    </ul>
    <div class="order_con">
      <mt-loadmore :top-method="loadTop" bottomPullText="上拉加载" :bottom-method="loadBottom" distanceIndex:3
                   ref="loadmore">
        <ul>
          <li class="orderList" v-for="item in data1">
            <p class="tit"><span style="float: left">店铺名称：{{item[0].name}}</span><span
              style="float: right">{{item[1].payName}}</span></p>
            <div style="width: 80%;height: 55%;margin: 0.1rem auto;border-bottom: 1px solid #b33053">
              <div style="width: 1.5rem;height: 100%;float: left">
                <img src="../../static/img/6.png" alt=""
                     style="width: 1.5rem;height:1.5rem;float: left;margin: 0.35rem 0.2rem">
              </div>
              <div style="flex: 1;height: 100%;;float: left;margin-left: 0.5em">
                <div style="width: 100%;height: 0.5rem">
                  <p style="display:block;font-size: 0.4rem;">{{item[0].tit}} </p>
                </div>
                <div style="width: 100%;height: 1rem">
                  <p style="display: inline-block;font-size: 0.4rem;float: left;line-height: 1rem">
                    {{item[0].price | price}}</p>
                  <p style="display: inline-block;font-size: 0.4rem;float: right;line-height: 1rem">{{item[0].num}}</p>
                </div>
                <div style="width: 100%;height: 1rem">
                  <p style="display: inline-block;font-size: 0.6rem;float: right">
                    合计：{{item[0].num * item[0].price | price}}</p>
                </div>
                <span
                  style="width: 2rem;height:0.8rem;display: block;background:red;float: left;font-size: 0.4rem;line-height: 0.8rem;text-align: center">{{item[2].del}}</span>
                <span
                  style="width: 2rem;height: 0.8rem;display: block;background:#b31cff;float: left;font-size: 0.4rem;text-align: center;line-height: 0.8rem;">{{item[2].goPay}}</span>
              </div>
            </div>
          </li>
        </ul>
      </mt-loadmore>
    </div>
  </div>
</template>
<script>
  var num1 = 0

  var line = document.getElementsByClassName('order')
  export default{
    data(){
      return {
        shuju: [],
        data1:[],
        topStatus: '',
      }
    },
    mounted: function () {
      var index = this.$route.params.userId
      if (index == 1) {
        this.$http.get("./static/orderList.json").then(function (res) {
          this.shuju = res.data.Allpay
          this.data1=this.shuju.slice(0,5)
        })
        line[index - 1].setAttribute('class', 'line1')
      } else if (index == 2) {
        this.$http.get("./static/orderList.json").then(function (res) {
          this.shuju = res.data.FF
          this.data1=this.shuju.slice(0,5)
        })
        line[index - 1].setAttribute('class', 'line1')
      } else if (index == 3) {
        this.$http.get("./static/orderList.json").then(function (res) {
          this.shuju = res.data.Fpay
          this.data1=this.shuju.slice(0,5)
        })
        line[index - 1].setAttribute('class', 'line1')
      } else if (index == 4) {
        this.$http.get("./static/orderList.json").then(function (res) {
          this.shuju = res.data.unF
          this.data1=this.shuju.slice(0,5)
        })
        line[index - 1].setAttribute('class', 'line1')
      } else if (index == 5) {
        this.$http.get("./static/orderList.json").then(function (res) {
          this.shuju = res.data.unpay
          this.data1=this.shuju.slice(0,5)
        })
        line[index - 1].setAttribute('class', 'line1')
      }

    },
    watch: {
      '$route' (to, from) {
        // 对路由变化作出响应...
        var index = to.params.userId
        if (index == 1) {
          this.$http.get("./static/orderList.json").then(function (res) {
            this.shuju = res.data.Allpay
            this.data1=this.shuju.slice(0,5)
          })
        } else if (index == 2) {
          this.$http.get("./static/orderList.json").then(function (res) {
            this.shuju = res.data.FF
            this.data1=this.shuju.slice(0,5)
          })
        } else if (index == 3) {
          this.$http.get("./static/orderList.json").then(function (res) {
            this.shuju = res.data.Fpay
            this.data1=this.shuju.slice(0,5)
          })
        } else if (index == 4) {
          this.$http.get("./static/orderList.json").then(function (res) {
            this.shuju = res.data.unF
            this.data1=this.shuju.slice(0,5)
          })
        } else if (index == 5) {
          this.$http.get("./static/orderList.json").then(function (res) {
            this.shuju = res.data.pay
            this.data1=this.shuju.slice(0,5)
          })
        }
      }
    },
    methods: {
      loadTop() {
        // 加载更多数据
        var a = this.$refs.loadmore.onTopLoaded();

      },
      loadBottom() {
        // 加载更多数据
        this.allLoaded = true;// 若数据已全部获取完毕
        this.$refs.loadmore.onBottomLoaded();
        this.data1=this.data1.concat(this.shuju.slice(5,10))
      },
      handleTopChange(status) {
        this.topStatus = status;
      },
    },
    filters: {
      price(val){
        var text = "￥"
        return val + text
      }
    }
  }
</script>
