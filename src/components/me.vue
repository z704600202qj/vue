<template>
  <div>
    <div class="me_head" style="position: relative">
      <span class="me_photo"></span>
      <p>fdgsdfg</p>
    </div>
    <div class="me_tap">
      <mt-navbar>
        <mt-tab-item id="1">
          <router-link class="me_tab" to="/me_fisrt">会员中心VIP</router-link>
        </mt-tab-item>
        <mt-tab-item id="2">
          <router-link class="me_tab" to="/me_second">会员中心</router-link>
        </mt-tab-item>
      </mt-navbar>
    </div>
    <router-view></router-view>


    <foot></foot>
  </div>

</template>

<script>
  export default{
    data () {
      return {}
    },
    methods: {},
    created: function () {
      this.$http.get('./static/Home.json', []).then(function (res) {
        this.$set(this, 'me_tab', res.data)
        this.me_tab = res.data
      })
    }
  }
</script>
<style scoped>
  @import "css/me.css";
</style>
