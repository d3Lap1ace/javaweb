<script setup>
  
  let promise = new Promise((resolve,reject)=>{
    console.log("promise invoked")
  })
  console.log('other code1 invoked')

  promise.then((result)=>{
    console.log('The normal execution result is: ${result}')
  }).catch((Error)=>{
    console.log("execution error: ${Error}")
  })
  console.log('other code2 invoked')
</script>

<template>
  <div>
    
  </div>
  
</template>

<style scoped>

</style>
