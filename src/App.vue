<template>
  <div>
    <transition>
      <router-view></router-view>
    </transition>
  </div>
</template>

<style>
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
  @import "assets/reset.css";
  @import "style/App.css";
</style>
