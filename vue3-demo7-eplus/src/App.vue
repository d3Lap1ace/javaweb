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
let loading = ref(false)

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
// 设置隐藏对话窗 
let dialogVisible=ref(false)
// 准备添加或更新医院设置的数据
let newHospital=ref({
  id:"",
  hosname:"",
  hoscode:"",
  contactsName:"",
  contactsPhone:"",
  apiUrl:""
})
// 添加触发显示对话窗
let showAdd=()=>{
  dialogVisible.value=true
  newHospital.value={}
}
// 设置对话框显示的标题
let hospitalTitle=ref("新增医院")
// 添加所触发的函数
let addorUpdataHospSet =()=>{
  dialogVisible.value=false
  if(!newHospital.value.id){
    addHospSet()
  }
  else{
    updateHostSet()()
  }
}
// 设置医院添加的函数
let addHospSet = async()=>{
  let {code,message} = await add(newHospital.value)
  if(code == 200){
    ElMessage.success(message)
    fetchData()
  }
}
</script>


<template>
  <div>
  <el-card style="max-width: 5000px">
    医院名称:<el-input v-model="serchParam.hosName" style="width: 360px" placeholder="请输入要查询的医院名称"/>&nbsp;&nbsp;&nbsp;
    医院编码:<el-input v-model="serchParam.hosCode" style="width: 360px" placeholder="请输入要查询的医院编码"/>&nbsp;
    <el-button type="primary" plain :icon="Search" @click="fetchData">搜索</el-button>
    <el-button plain :iocn="Delete" @click="resetSearch">重置</el-button>
  </el-card>
  <el-card>
    <template #header>
      <div class ="card-header">
        <span>
          <el-button type ="primary" @click="showAdd">新增</el-button>
        </span>
      </div>
    </template>
      <el-table :data="hosSetList" v-loading="loading"  style="width: 100%">
        <el-table-column type="index" label="序号" width="80" />
        <el-table-column label="医院名称" prop="hosname"></el-table-column>
        <el-table-column label="医院编码" prop="hoscode"></el-table-column>
        <el-table-column label="接口地址" prop="apiUrl"></el-table-column>
        <el-table-column label="联系人" prop="contactsName"></el-table-column>
        <el-table-column label="联系电话" prop="contactsPhone"></el-table-column>
        <el-table-column label="操作">
          <template #default="scope">
          <el-button size="small" @click="handleEdit(scope.$index, scope.row)">
            Edit
          </el-button>
          <el-button
            size="small"
            type="danger"
            @click="handleDele(scope.$index, scope.row)"
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
        layout=" total,prev,next,jumper"
        :total="total"
        :default-page-size="2"
        @size-change="handleSizeChange"
        @current-change="handleCurrentChange"
      />
    </template>
  </el-card>
  <el-dialog :title="hospitalTitle" v-model="dialogVisible" width="70%">
     <!-- 医院信息收集表单 -->
      <el-form  label-width="100px" :inline="false" size="normal">
        <!-- 表单项 -->
        <el-form-item label="医院名称">
          <el-input v-model="newHospital.hosname"></el-input>
        </el-form-item>
        <el-form-item label="医院编码">
          <el-input v-model="newHospital.hoscode"></el-input>
        </el-form-item>
        <el-form-item label="联系人姓名">
          <el-input v-model="newHospital.contactsName"></el-input>
        </el-form-item>
        <el-form-item label="联系人电话">
          <el-input v-model="newHospital.contactsPhone"></el-input>
        </el-form-item>
        <el-form-item label="接口地址">
          <el-input v-model="newHospital.apiUrl"></el-input>
        </el-form-item>
      </el-form>
    
     <!-- 底部取消和确定按钮 -->
    <template #footer>
      <span>
        <el-button @click="dialogVisible = false">取消</el-button>
        <el-button type="primary" @click="addorUpdataHospSet">保存</el-button>
      </span>
    </template>
  </el-dialog>
  </div>
</template>
  
<style scoped>
</style>