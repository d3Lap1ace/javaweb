<script setup>
  // 声明一个普通的函数
  function fun(){
    return 10
  }
  let ver1 = fun()
  console.log(ver1);

  // 声明一个
  let fun1 = async()=>{
    return 100
  }
  let result = fun1()
  console.log(result)

  result.then((value)=>{
    console.log(value)
  }).catch((error)=>{
    console.log(error)
  })
  
</script>

<template>
  <div>
    
  </div>
  
</template>

<style scoped>

</style>
