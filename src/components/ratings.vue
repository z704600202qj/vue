<template>
  <div>
    <aside id="aside">
      <div class="input_warp">
        <mt-search
          cancel-text="搜索"
          placeholder="搜索">
        </mt-search>
      </div>
      <div class="aside_warp">
        <ul>
          <li>1</li>
          <li>1</li>
          <li>1</li>
          <li>1</li>
          <li>1</li>
          <li>1</li>
          <li>1</li>
          <li>1</li>
          <li>1</li>
          <li>1</li>
          <li>1</li>
          <li>1</li>
          <li>1</li>
          <li>1</li>
          <li>1</li>
          <li>1</li>
          <li>1</li>
          <li>1</li>
          <li>1</li>
          <li>1</li>
        </ul>
      </div>
    </aside>
    <foot></foot>
  </div>
</template>
<style lang="less">
  @base: #f938ab;
  .mint-searchbar-inner{height: 100%!important;}
  .mintui-search{font-size: 0.3rem!important;}
  .mint-searchbar-core{font-size: 0.2rem}
  .mint-search{height: 80%!important;width: 90%;margin: 1.4% 5%;border-radius: 0.2rem}
  .input_warp{width: 100%;height: 1rem;background: salmon;overflow: hidden}
  .aside_warp{height:auto;width: 1rem;background: @base;margin-bottom: 0.8rem}
  li{width: 100%;height:1rem;background:seagreen}
</style>
<script>
  export default{
      data(){
        return{aa:[]}

      },
    methods:{

    }
  }
</script>
<script>
  var aside=document.getElementById('aside')
  console.log(document.documentElement.clientHeight);
</script>
