<template>

</template>
<script setup>
    //导入useRoute函数
    import {useRoute} from 'vue-router'
    //获取当前路由
    let route = useRoute()
    //获取传统风格的请求参数（/edit?id=1）id的值
    // let id = route.query.id
    //获取Rest风格的请求参数（/edit/1）id的值
    let id = route.params.id
    // console.log(id)
</script>