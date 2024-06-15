<script setup>
  //引入Header
  import Header from "./components/Header.vue";
</script>
<template>
    <div>
      <Header></Header>
      <hr>
        <!-- 路由输出 -->
      <router-view></router-view>
     
      
    </div>
</template>
<style scoped>
</style>
