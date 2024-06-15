<template>
    <h1>添加用户信息</h1>
    <form action="" method="post">
        用户名：<input type="text" name="name" placeholder="请输入用户名"/><br>
        年龄：<input name="age"/><br>
        婚姻状态：<input type="radio" name="isMarried" value="0">未婚 
                 <input type="radio" name="isMarried" value="1">已婚 
                 <input type="radio" name="isMarried" value="2">离异
                 <br>
            <input type="submit" value="添加用户">
    </form>
</template>