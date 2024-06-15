<template>
    <h1 style="color: red;">我是自定义的组件</h1>
    {{ msg }}
    <button @click="sendMsgToParent">给父组件发送消息</button>
</template>
<script setup>
    //方式一：使用数组接收父组件传递的数据，数组中是父组件设置的属性名
    // let props = defineProps(["msg"])
    //方式二：使用对象接收父组件传递的数据，对象中的格式：{属性名:属性的类型}
    let props = defineProps({
        msg:String
    })
    let emits = defineEmits(["getSonMsg"])
    // alert(props.msg)
    //创建点击按钮之后触发的回调函数
    let sendMsgToParent = ()=>{
        // emits("我已收到你的消息，马上给你打电话")
        emits("getSonMsg","我已收到你的消息，马上给你打电话")
    }
</script>