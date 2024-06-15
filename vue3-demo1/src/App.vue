<script setup>
    import {ref} from 'vue'
    // 引出子组件
    import MyComponent from './components/mycomponents.vue'

    // 设置要传给子组件的数据
    let message = ref("收到消息后给我打电话")
    // 接收子组件消息的函数
    let recieveSonMsg = (data)=>{
        console.log(data)
    }
    
</script>
<template>
    <div>
        <MyComponent :msg="message" @getSonMsg="recieveSonMsg"></MyComponent>
        
    </div>
</template>
<style scoped>
</style>

