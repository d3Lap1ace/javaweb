<script setup>
    import { ref, watch,watchEffect} from 'vue';
    /*
      计算属性：
        使用vue中的watch和watchEffect函数监听数据的变化
          watch函数：监听单个数据的变化
          watchEffect函数：监听所有数据的变化
    */
    //准备数据模
    let province = ref("北京市")
    let city = ref("市辖区")
    let distinct = ref("昌平区")
    let address = ref("宏福苑小区")

    let changeAddress=()=>{
        province.value= "河北省"
        city.value= "邯郸市"
        distinct.value= "丛台区"
    }
    // 监听省的变化
    watch(province,(newV,oldV)=>{
        alert(newV)
        alert(oldV)
    })
    // 监听所有的数据变化
    watchEffect(()=>{
        alert(city.value)
        alert(distinct.value)
    })
</script>

<template>
   <div>
    <h1>您所在的省：{{ province }}</h1>
    <h1>您所在的市：{{ city }}</h1>
    <h1>您所在的区：{{ distinct }}</h1>
    <h1>您的详细地址：{{ province }}{{ city }}{{ distinct }}{{ address }}</h1>
    <button @click="changeAddress">修改省市区</button>
   </div>
</template>

<style scoped>


</style>
