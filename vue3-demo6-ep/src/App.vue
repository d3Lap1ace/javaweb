<script setup>
    import { onMounted } from 'vue';
    import request from './utils/request.js';
    //初始化数据的函数
    let fetchData=()=>{
      request.get("/admin/hosp/hospitalSet/1/2").then(res=>{
        console.log(res)
      })
    }
    //当挂载完成之后触发的钩子函数
    onMounted(()=>{
      //调用初始化的函数
      fetchData()
    })
</script>

<template>
  <el-card>
    <template #header>
      <div class="card-header">
        <span>
          <el-button type="primary">新增</el-button>
        </span>
      </div>
    </template>
    <el-table  style="width: 100%">
    <el-table-column label="Date" prop="date" />
    <el-table-column label="Name" prop="name" />
    <el-table-column align="right">
      <template #header>
        <el-input v-model="search" size="small" placeholder="Type to search" />
      </template>
      <template #default="scope">
        <el-button size="small" @click="handleEdit(scope.$index, scope.row)">
          Edit
        </el-button>
        <el-button
          size="small"
          type="danger"
          @click="handleDelete(scope.$index, scope.row)"
        >
          Delete
        </el-button>
      </template>
    </el-table-column>
  </el-table>
    <template #footer>
      分页组件
    </template>
  </el-card>
</template>


<style scoped>

</style>
