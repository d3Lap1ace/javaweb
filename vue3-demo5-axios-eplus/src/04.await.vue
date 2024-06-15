<script setup>
// 声明一个普通的函数
  function fun(){
    return 10
  }
  let result =fun()
  console.log(result)
  
  /*
      当函数前面添加了async关键字的时候，函数的返回值将变成Promise对象
      Promise对象状态如何判断：
        1.如果函数的返回值不是一个Promise对象（比如返回的100），那么Promise的状态就右Pending变成Resolved（fulfilled）状态
        2.如果函数的返回值是一个Promise对象，那么函数这个Promise对象的状态与返回的Promise对象的状态一致
  */
  
  //await只能使用在添加了async的函数中，不能单独使用，而async可以单独使用
  async function fun2(){
    let res = null
    try{
      res = await Promise.reject("something wrong")
    }catch(e){
      console.log("catch got:"+e)
    }
    console.log("await got:"+res)
  }

  fun2()

</script>
<templatet>

</templatet>

<style scoped>

</style>