<script setup>
  let fuckMe=()=>{
    alert("好舒服")
  }
  let fuckMeAgain=()=>{
    alert("不要")
  }
    
</script>

<template>
    <button v-on:click="fuckMe" >操我</button>
    <br>
    <input type="button" value="在操我" @click="fuckMeAgain" />
    <br>

</template>

<style scoped>


</style>
