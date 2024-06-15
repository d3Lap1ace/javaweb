<script setup>
  import {ref} from 'vue'
  let result = ref('')
  
  let sendAjax=()=>{
    // 使用原生js发送异步
    // 1. 创建xmlHttpRequest对象
    let xhr = new XMLHttpRequest()
    // 2. 设置请求数据
    xhr.open("get","https://api.uomg.com/api/rand.qinghua?format=json",true)
    // 3. 发送请求
    xhr.send()
    xhr.onreadystatechange = () =>{
      if(xhr.readyState==4&&xhr.status==200){
        // 4. 获取响应数据
        let jsonStr = xhr.responseText
        let jsonObject = JSON.parse(jsonStr)
        result.value = jsonObject.content
      }
    }
    
    
  }

</script>

<template>
  <div>
    <button @click="sendAjax">发射</button>
    <span style="color: red;" v-text="result">
    </span>
  </div>
  
</template>

<style scoped>

</style>
