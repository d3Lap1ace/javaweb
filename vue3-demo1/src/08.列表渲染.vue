<script setup>
  let users = [
      {id:1,name:"李浩然",age:28,isMarried:true},
      {id:2,name:"吕航",age:23,isMarried:true},
      {id:3,name:"毛荔枝",age:3,isMarried:false},
      {id:4,name:"耿东旭",age:35,isMarried:true},
      {id:5,name:"程昕玲",age:21,isMarried:true},
      {id:6,name:"韩总",age:33,isMarried:true}
   ]
</script>

<template>
   <div>
    <table border="1px" cellpadding="20" cellspacing="0">
        <tr>
            <th>索引</th>
            <th>工号</th>
            <th>姓名</th>
            <th>年龄</th>
            <th>婚否</th>
            <th colspan="2">操作</th>
        </tr>
        <tr v-for="(user,index) in users">
            <td>{{ index }}</td>
            <td>{{ user.id }}</td>
            <td>{{ user.name }}</td>
            <td>{{ user.age }}</td>
            <td>{{ user.isMarried? '已婚':'未婚' }}</td>
            <td><a href="">编辑</a></td>
            <td><a href="">删除</a></td>
        </tr>
    </table>
   </div>
   <br>
   <a href="">首页 </a>
   <a href="">上一页 </a>
   <a href="">1 2 3 4 </a>
   <a href="">下一页 </a>
   <a href="">尾页 </a>
</template>

<style scoped>


</style>
