<style>
  .pay {
    overflow: hidden
  }

  .pay li {
    width: 49.5%;
    height: 0.7rem;
    background: #fff;
    float: left;
    font-size: 0.4rem;
    line-height: 0.7rem;
    box-sizing: border-box;
    font-size: 0.3rem;
    color: #ccc
  }

  .pay span {
    width: 0.7rem;
    height: 0.5rem;
    display: inline-block;
    background: darkred;;
    float: left;
    margin-top: 0.1rem;
    margin-left: 0.3rem
  }

  .order {
    font-size: 0.2rem;
    width: 100%;
    margin-top: 0.3rem
  }

  .adm_order {
    height: 0.5rem;
    line-height: 0.5rem;
    border-bottom: 1px solid #cccccc
  }

  .adm_order span {
    margin: 0 0.3rem
  }

  .all_order {
    float: right
  }

  .ord_list {
    height: 0.8rem
  }

  .ord_list li {
    float: left;
    line-height: 0.8rem;
    width: 20%;
    text-align: center
  }
</style>
<template>
  <div style="background:#F5F5F5;overflow: hidden">
    <ul class="pay">
      <li><span></span>花呗</li>
      <li><span></span>消费</li>
    </ul>
    <div class="order">
      <div class="adm_order">
        <span>订单管理</span>
        <span class="all_order"> <router-link :to="{ name: 'order', params: { userId: 1 }}">  查看全部订单  ></router-link></span>
      </div>
      <div class="ord_list">
        <ul>
          <li>
            <router-link :to="{ name: 'order', params: { userId: 1 }}">待付款</router-link>
          </li>
          <li>
            <router-link :to="{name:'order',params:{userId:2}}">待发货</router-link>
          </li>
          <li>
            <router-link :to="{name:'order',params:{userId:3}}">已发货</router-link>
          </li>
          <li>
            <router-link :to="{name:'order',params:{userId:4}}">已完成</router-link>
          </li>
          <li>
            <router-link :to="{name:'order',params:{userId:5}}">退货/换货</router-link>
          </li>
        </ul>
      </div>
      <ul class="me_list">
        <mt-cell title="我的购物车" to="/seller" is-link :value="value1" class="cart">
          <img slot="icon" src="../../static/img/89.png" width="24" height="24">
        </mt-cell>
        <mt-cell title="我的收藏" to="/" is-link   >
          <img slot="icon" src="" width="24" height="24">
        </mt-cell>
        <mt-cell title="积分明细" to="/" is-link >
          <img slot="icon" src="" width="24" height="24">
        </mt-cell>
        <mt-cell title="花呗商城" to="/" is-link >
          <img slot="icon" src="" width="24" height="24">
        </mt-cell>
      </ul>
    </div>
  </div>
</template>
<script>
  export default{
    data(){
      return {
        value1:[]
      }
    },
    methods: {
//      order: function (index) {
//        this.$router.push({
//          path:'/order',
//        })
//      }

    },
    beforeCreate(){
      this.$http.get("./static/Home.json").then(function (res) {
        this.value1=res.data.me_tab[1].gg_value
      })
    }
  }
</script>
