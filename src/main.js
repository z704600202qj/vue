// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
// import public from "./assets/public"
import App from './App'
import router from './router'
Vue.config.productionTip = false
var myComponent=Vue.extend({
  template:'  <div class="bottom_warp">\
  <div class="tab boder-1px">\
  <div class="tab-item">\
  <router-link class="item" to="/Home">首页</router-link>\
  <router-link class="item" to="/ratings">分类</router-link>\
  <router-link class="item" to="/goods">商品</router-link>\
  <router-link class="item" to="/seller">购物车</router-link>\
  <router-link class="item" to="/me">我的</router-link>\
  </div>\
  </div>\
  </div>'
})
Vue.component('foot',myComponent)
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: {App}

})
