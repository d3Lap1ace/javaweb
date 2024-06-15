<template>
    <el-button plain @click="open">删除</el-button>
    <el-popconfirm title="确定要删除吗？">
    <template #reference>
      <el-button>Delete</el-button>
    </template>
  </el-popconfirm>
    </template>
  
  <script lang="ts" setup>
  import { ElMessage, ElMessageBox } from 'element-plus'
  
  const open = () => {
    ElMessageBox.confirm(
      'proxy will permanently delete the file. Continue?',
      'Warning',
      {
        confirmButtonText: 'OK',
        cancelButtonText: 'Cancel',
        type: 'warning',
      }
    )
      .then(() => {
        //调用后端接口删除数据
        ElMessage({
          type: 'success',
          message: 'Delete completed',
        })
      })
      .catch(() => {
        ElMessage({
          type: 'info',
          message: 'Delete canceled',
        })
      })
  }
  </script>
  