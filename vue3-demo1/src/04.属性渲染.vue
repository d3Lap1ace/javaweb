<script setup>
  let msgURL="www.bing.com"
  let msg="who is maolizhi"
</script>

<template>
    <div>
        <a v-bind:href="msgURL" target="_blank">bing</a>
        <input type="text" v-bind:name="msgURL" :value="msg">
    </div>
</template>

<style scoped>


</style>
