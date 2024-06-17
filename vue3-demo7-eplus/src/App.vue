<script setup>
import { onMounted, ref } from 'vue';
import { getPageList, add ,deleteById,getById,updateById} from './api/hospitalSet'
import { Search} from '@element-plus/icons-vue'
import { Delete} from '@element-plus/icons-vue'
import { ElMessage,ElMessageBox } from 'element-plus'

// 初始化数据的函数
let fetchData=async()=>{
  let{code,data}=await getPageList(pageParams.value.current,pageParams.value.size,serchParam.value)
  if(code == 200){
    loading.value = false
    hosSetList.value = data.records
    total.value = data.total
  }
}
// 当挂载完成之后触发的钩子函数
onMounted(()=>{
  fetchData()
})

// 表格的数据模型
let hosSetList = ref([])
// 加载效果
let loading = ref(true)

// 分页
let pageParams = ref({
  curremt:1,
  size:3
})
// 总页
let total = ref(0)
// 每页显示的条数改变触发的事件
let handleSizeChange = (pageSize)=>{
  pageParams.value.size = pageSize
}
// 当前页面改变触发的函数
let handleCurrentChange = (pageNum)=>{
  pageParams.value.current = pageNum
  fetchData()
}

// 搜索的查询条件
let serchParam = ref({
  hosName:"",
  hosCode:"",

})
// 重置查询条件
let resetSearch=()=>{
  serchParam.value={ }
}
</script>


<template>
  <div>
  <el-card style="max-width: 5000px">
    医院名称:<el-input v-model="serchParam.hosName" style="width: 360px" placeholder="请输入要查询的医院名称"/>&nbsp;&nbsp;&nbsp;
    医院编码:<el-input v-model="serchParam.hosCode" style="width: 360px" placeholder="请输入要查询的医院编码"/>&nbsp;
    <el-button type="primary" plain :icon="Search">搜索</el-button>
    <el-button plain :iocn="Delete" @click="resetSearch">重置</el-button>
  </el-card>
  <el-card>
    <template #header>
      
    </template>
      <el-table :data="hosSetList" v-loading="loading">
        <el-table-column type="index" label="序号" width="80" />
        <el-table-column label="医院名称"></el-table-column>
        <el-table-column label="医院编码"></el-table-column>
        <el-table-column label="接口地址"></el-table-column>
        <el-table-column label="联系人"></el-table-column>
        <el-table-column label="联系电话"></el-table-column>
        <el-table-column label="操作">
          <template #default="scope">
          <el-button size="small" @click="handleSizeChange(scope.$index, scope.row)">
            Edit
          </el-button>
          <el-button
            size="small"
            type="danger"
            @click="handleCurrentChange(scope.$index, scope.row)"
          >
            Delete
          </el-button>
        </template>
      </el-table-column>
    </el-table>
    <template #footer>
      <el-pagination
        v-model:currentPage="pageParams.current"
        v-model:page-size="pageParams.pageSize"
        :small="small"
        :disabled="disabled"
        :background="background"
        layout=" total, sizes,prev,next,jumper"
        :total="total"
        @size-change="handleSizeChange"
        @current-change="handleCurrentChange"
      />
    </template>
  </el-card>
  </div>
 
</template>
  
<style scoped>
</style>