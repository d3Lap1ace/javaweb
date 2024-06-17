// 引入requset模块
import requset from '../utils/request.js'
// 声明一个常量
const api_name = "/admin/hosp/hospitalSet"

// 声明一个分页查询的函数
const getPageList = (current,size)=>{
    return requset.get(`${api_name}/${current}/${size}`)
}
//添加医院
const add = (hospital)=>{
    return request.post(`${api_name}/`)
}
// 导出函数
export{
    getPageList
}