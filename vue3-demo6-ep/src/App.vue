<script setup>
    import { onMounted, ref } from 'vue';
    import {getPageList} from './api/hospitalSet'
    import  {Search}  from '@element-plus/icons-vue';
    import  {Delete}  from '@element-plus/icons-vue';
    

    //重置查询条件
    let resetSearch = ()=>{
      searchParam.value = {}
      //再次查询
      fetchData()
    }

    //准备搜索的查询条件
    let searchParam = ref({
      hosname:"",
      hoscode:""
    })

    //每页显示的条数改变触发的事件
    let handleSizeChange = (pageSize)=>{
      //修改每页显示的条数
      pageParams.value.size = pageSize
       //重新发送请求
       fetchData()
    }
    //当前页改变触发的函数
    let handleCurrentChange = (pageNum)=>{
      //修改当前页的值
      pageParams.value.current = pageNum
        //重新发送请求
        fetchData()
    }

    //准备总记录数
    let total = ref(0)

    //准备分页的请求数据
    let pageParams = ref({
      current:1,
      size:2
    })

    //准备表格的数据模型
    let hosSetList = ref([])
    //准备加载效果是数据
    let loading = ref(true)

    //初始化数据的函数
    let fetchData=async()=>{
       //发送异步请求调用后端接口
       let {code,data} = await getPageList(pageParams.value.current,pageParams.value.size,searchParam.value)
       if(code == 200){
          //关闭加载效果
          loading.value = false
          //对hosSetList赋值
          hosSetList.value = data.records
          //对总记录数赋值
          total.value = data.total
       }
    }
    //当挂载完成之后触发的钩子函数
    onMounted(()=>{
      //调用初始化的函数
      fetchData()
    })
</script>

<template>
  <div>
    <el-card>
    医院名称：<el-input v-model="searchParam.hosname" style="width: 500px" placeholder="请求输入要查询的医院名称的关键字" />
    &nbsp;&nbsp;&nbsp;&nbsp;
    医院编码：<el-input v-model="searchParam.hoscode" style="width: 500px" placeholder="请求输入医院编码" />&nbsp;
    <el-button type="primary" plain :icon="Search" @click="fetchData">搜索</el-button>
    <el-button  plain :icon="Delete" @click="resetSearch">重置</el-button>
  </el-card>
  <el-card>
    <template #header>
      <div class="card-header">
        <span>
          <el-button type="primary">新增</el-button>
        </span>
      </div>
    </template>
    <el-table  :data="hosSetList" v-loading="loading" style="width: 100%">
      <el-table-column type="index" label="序号" width="80" />
      <el-table-column label="医院名称" prop="hosname"></el-table-column>
      <el-table-column label="医院编码" prop="hoscode"></el-table-column>
      <el-table-column label="接口地址" prop="apiUrl"></el-table-column>
      <el-table-column label="联系人" prop="contactsName"></el-table-column>
      <el-table-column label="联系电话" prop="contactsPhone"></el-table-column>
      <el-table-column label="操作"> 
        <template #default="scope">
        <el-button size="small" @click="handleEdit(scope.$index, scope.row)">
          编辑
        </el-button>
        <el-button
          size="small"
          type="danger"
          @click="handleDelete(scope.$index, scope.row)"
        >
          删除
        </el-button>
      </template>
      </el-table-column>
    </el-table>
    <template #footer>
      <el-pagination
        v-model:current-page="pageParams.current"
        v-model:page-size="pageParams.pageSize"
        :page-sizes="[2, 5, 10, 20]"
        :small="small"
        :disabled="disabled"
        :background="background"
        layout="total, sizes, prev, pager, next, jumper"
        :total="total"
        :default-page-size="2"
        @size-change="handleSizeChange"
        @current-change="handleCurrentChange"
    />
    </template>
  </el-card>
  </div>
</template>


<style scoped>

</style>
