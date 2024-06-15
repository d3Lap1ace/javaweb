<script setup>
    import { ref } from 'vue'

    let msg = "aaaaa"
    let changeDate=()=>{
        msg.value="bbbbb"
    }

</script>

<template>
    <div>
        <h1>{{ msg }}</h1>
        <br>
        <!-- 双向的数据绑定 -->
        <input v-model="msg"/><br>
        <!-- 单项的数据绑定 -->
         <input :value="msg"/><br>
        <button @click="changeData">修改Js中数据模型的值</button>

    </div>
    

</template>

<style scoped>


</style>
