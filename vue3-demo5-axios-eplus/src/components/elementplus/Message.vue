<template>
    <el-button :plain="true" @click="open1">Success</el-button>
    <el-button :plain="true" @click="open2">Warning</el-button>
    <el-button :plain="true" @click="open3">Message</el-button>
    <el-button :plain="true" @click="open4">Error</el-button>
  </template>
  
  <script lang="ts" setup>
  import { ElMessage } from 'element-plus'
  
  const open1 = () => {
    ElMessage({
      message: '成功',
      type: 'success',
      plain: true, //是否纯色
    })
  }
  const open2 = () => {
    // ElMessage({
    //   message: '警告',
    //   type: 'warning',
    //   plain: false,
    // })
    //如果都使用默认值，可以使用以下简单的方式
    ElMessage.warning("警告")
  }
  const open3 = () => {
    ElMessage({
      message: '这是一个普通消息',
      type: 'info',
      plain: true,
    })
  }
  const open4 = () => {
    ElMessage({
      message: 'Oops, this is a error message.',
      type: 'error',
      plain: true,
      duration:5000
    })
    //简写
    ElMessage.error("出错啦")
  }
  </script>
  