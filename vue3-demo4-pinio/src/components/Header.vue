<template>
    <h1>
        <img :src="userData.userInfo.avatar">
        欢迎您，{{ userData.userInfo.username }}
    </h1>
</template>
<script setup>
    //引入userInfoStore
    import {userInfoStore} from '../store/modules/user'
    //获取共享数据
    let userData = userInfoStore()
    //还可以直接修改共享的数据
    //userData.userInfo.username = "吴亦凡"
    //调用共享库中actions中的方法修改共享数据
    userData.setUsername("吴签")
</script>