<template>
  <div>
    <div class="head">
      <div class="logo" v-bind:style="{backgroundImage:'url('+banner.logo+')'}"></div>
      <div class="search">
        <mt-search  v-model="currentValue"  placeholder="搜索"id="search"></mt-search>
      </div>
      <div class="user fa fa-user"@click="user"></div>
    </div>
    <div class="banner">
      <mt-swipe :auto="0">
        <mt-swipe-item v-for="(item,index) in banner.bannerImg" :key="index" >
          <img :src=item.img alt="" style="width: 100%;height: 100%"@click="getCustomers(index)">
        </mt-swipe-item>
      </mt-swipe>
    </div>
    <div class="list">
      <ul>
        <li v-for="menu in banner.menuList">
          <img :src="menu[0].img" alt="">
          <p>{{menu[1].tit}}</p>
        </li>
      </ul>
    </div>
    <div class="sub_banner"></div>
    <foot></foot>
    </div>
</template>
<style>
  @import "css/home.css";
</style>
<script type="text/javascript">
  export default {
    data () {
      return {
          banner:[],
          currentValue:this.value
      }
    },
    props:['value'],
    methods: {
      getCustomers: function (index) {
       alert(index)
      },
      user:function () {
        this.$router.push('/me')
      }
    },
    created:function () {
      {
        this.$http.get('./static/Home.json', [ ]).then(function(response){
          console.log(this);
          this.$set(this,'banner',response.data)
          this.banner=response.data
          // 响应成功回调
        }, function(response){
          console.log(response);
          // 响应错误回调
        });
      }

    }
  }
</script>
