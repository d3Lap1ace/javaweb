<script setup>
    //引入Button组件
    import Button from './components/elementplus/Button.vue'
    //引入Form组件
    import Form from './components/elementplus/Form.vue'
    //引入Upload组件
    import Upload from './components/elementplus/Upload.vue'
    //引入Table组件
    import Table from './components/elementplus/Table.vue';
    //引入Message组件
    import Message from './components/elementplus/Message.vue'
    //引入确认、取消提示框
    import Confirm from './components/elementplus/Confirm.vue';
</script>

<template>
  <div>
    <Button></Button>
    <br>
    <hr>
    <br>
    <Form></Form>
    <br>
    <hr>
    <br>
    <Upload></Upload>
    <br>
    <hr>
    <br>
    <Table></Table>
    <br>
    <hr>
    <br>
    <Message></Message>
    <br>
    <hr>
    <br>
    <Confirm></Confirm>
  </div>
</template>

<style scoped>

</style>