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
    <p>how dare are you </p>
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
