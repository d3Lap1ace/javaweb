<script setup>
  import axios from 'axios'
  import {ref} from 'vue'
  import request from './utils/request';
  let result = ref('')
  let result1 = ref('')
  let result2 = ref("")
  let result3 = ref("")
  // 声明sendGetP
  let sendGetP=()=>{
    request.get("https://api.uomg.com/api/rand.qinghua?format=json").then((a)=>{
      console.log(a)
      // 给span标签渲染内容
      result3.value=a.content
    })
  }
  let sendAjax = ()=>{
    // 使用axios发送异步
    axios({
      method:"get", // 设置请求方式
      url:"https://api.uomg.com/api/rand.qinghua?format=json",
      data:{
        username:"admin",
        password:"123456"
      }// 设置请求参数,如果是post请求,请求参数会转换为json通过请求体传输 否则以key=value的形式凭借到URL后面传输
    }).then((response)=>{
      console.log(response)
      result.value=response.data.content
    })
  }
  let sendGet=()=>{
    let url = "https://api.uomg.com/api/rand.qinghua?format=json"
    axios.get(url).then(response =>{
      result1.value = response.data.content
    })
  }

  let sendPost=()=>{
    let url = "https://api.uomg.com/api/rand.qinghua?format=json"
    let requestParams = {
      current:1,
      sizse:10
    }
    axios.post(url,requestParams)
    .then(response=>{
      result2.value = response.data.content
    }).catch((error)=>{
      console.log(error.message)
    })
  }
  
</script>

<template>
  <div>
      <button @click="sendAjax">通过Axios发送异步请求</button><span style="color: red;" v-text="result"></span><br><br>
      <button @click="sendGet">通过Axios直接发送Get请求</button><span style="color: red;" v-text="result1"></span><br><br>
      <button @click="sendPost">通过Axios直接发送Get请求</button><span style="color: red;" v-text="result2"></span><br><br>
      <button @click="sendGetP">通过封装之后的Axios直接发送Get请求</button><span style="color: red;" v-text="result3"></span><br><br>
  </div>
  
</template>

<style scoped>

</style>
