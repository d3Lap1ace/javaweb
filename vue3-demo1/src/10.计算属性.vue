<script setup>
    import {computed}from 'vue'

    //准备数据模
    let users = [
      {id:1,name:"李浩然",age:28,isMarried:true},
      {id:2,name:"吕航",age:23,isMarried:false},
      {id:3,name:"毛荔枝",age:3,isMarried:false},
      {id:4,name:"耿东旭",age:35,isMarried:true},
      {id:5,name:"程昕玲",age:21,isMarried:false},
      {id:6,name:"韩总",age:33,isMarried:true}
    ]
    // 使用computed函数计算结婚的人数,使用compute处理只会返回的也是ref对象
    // 如果只是查询
    let marriedCount = computed(()=>{
        let marriedUsers = users.filter(user=>{
            // 从所有的员工中进行过滤,获取已结婚的人数
            return user.isMarried
        })
        return marriedUsers.length
    })
</script>

<template>
   <div>
    <h1>员工的总人数是:{{ users.length }}</h1>
    <h1>已结婚的总人数是:{{ marriedCount }}</h1>
   </div>
</template>

<style scoped>


</style>
