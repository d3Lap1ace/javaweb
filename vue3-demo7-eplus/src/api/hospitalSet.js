//引入request模块
import request from '../utils/request'


//声明一个常量
const api_name = "/admin/hosp/hospitalSet"


//声明一个分页查询的函数
const getPageList=(current,size,queryDto)=>{
    return request.get(`${api_name}/${current}/${size}`,{params:queryDto}) //将来的请求地址：/admin/hosp/hospitalSet/1/2
}


//添加医院设置
const add = (hospital)=>{
    return request.post(`${api_name}/save`,hospital)
}


//根据id删除医院设置
const deleteById = (id)=>{
    return request.delete(`${api_name}/remove/${id}`)
}


//根据id查询
const getById = (id)=>{
    return request.get(`${api_name}/get/${id}`)
}


//根据id更新
const updateById =(hospitalSet)=>{
    return request.put(`${api_name}/update`,hospitalSet)
}


//导出函数
export {
    getPageList,
    add,
    deleteById,
    getById,
    updateById
}