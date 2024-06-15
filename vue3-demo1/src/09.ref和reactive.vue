<script setup>
    import {ref, reactive}from 'vue'

       //准备数据模
   //使用ref将基本类型变成响应式的
   let count = ref(35)
   //使用reactive将基本类型变成响应式的，会给一个警告：value cannot be made reactive: 560
   let totalCount = reactive(560)
   //使用ref包装对象
   let user1 = ref({id:1,name:"李浩然",age:28,isMarried:true})
   //使用reaction包装对象
   let user2 = reactive({id:2,name:"吕航",age:23,isMarried:true})
   // 修改name属性触发的函数
   let modifyReactiveName =()=>{
    user1.value.name="李萧然"
   }
   let modifyRefName=()=>{
    user2.name="吕布"
   }
   //修改对象触发的函数
   let modifyReactiveObj=()=>{
    user1.value = {id:1,name:"毛荔枝",age:3,isMarried:false}
   }
   let modifyRefObj=()=>{
    user2 =  {id:2,name:"耿东旭",age:35,isMarried:true}
   }
</script>

<template>
   <div>
    <h1>班级的人数是:{{ count }}</h1>
    <h1>全校的人数是:{{ totalCount }}</h1>
    <h1>{{ user1.name }}</h1>
    <h1>{{ user2.name }}</h1>
    <h1>{{ user1 }}</h1>
    <h1>{{ user2 }}</h1>
    <button @click="modifyRefName">修改ref包装的对象的name属性</button>
    <button @click="modifyReactiveName">修改reactive包装的对象的name属性</button>
    <button @click="modifyRefObj">修改ref包装的对象</button>
    <button @click="modifyRefObj">修改reactive包装的对象</button>

   </div>
</template>

<style scoped>


</style>
