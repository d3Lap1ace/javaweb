<script setup>
  let flag = false
</script>

<template>
   <div>
    <h1>maolizhi is stupid?</h1>
    <p v-if="flag">stupid</p>
    <p v-else="flag">super stupid</p>
    <p v-show="flag">stupid</p> 
    <p v-show="flag">super stupid</p>
   </div>

</template>

<style scoped>


</style>
