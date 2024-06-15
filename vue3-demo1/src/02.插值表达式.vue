<script setup>
  

  let msg = "我是数据模型"
  let like = () =>{
    return "数据模型是我"
  }
  let age = 20
</script>

<template>
  <div>
    {{ msg }}
    <h2>{{ msg }}</h2>
    <p>我喜欢的明星：{{ like() }}</p>
    <p>我喜欢的明星是否成年：{{ age>=18?'已成年':'未成年' }}</p>
  </div>



</template>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}

</style>
