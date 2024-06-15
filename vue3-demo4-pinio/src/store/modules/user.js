//共享用户数据的共享库
//导入difineStore的函数
import {defineStore} from 'pinia'

export const userInfoStore = defineStore("user",{
    //设置要共享的数据
    state:()=>{
        return {
            userInfo:{
                username:"蔡徐坤",
                avatar:"http://localhost:9000/spzx/ikun.gif"
            }
        }
    },
    //设置一些调用后端或者修改数据的函数
    actions:{
        //设置修改共享数据的函数
        setUsername(name){
            this.userInfo.username=name
        }
    },
    //可以设置一些函数对获取的数据进行转换
    getters:{

    }
})