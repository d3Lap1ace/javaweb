// 引入axios
import axios from 'axios'

// 创建axios实例
const service = axios.create({
    // baseURL:"https://api.uomg.com", // 基础路径
    // timeout:5000                  // 超时时间
})
// 配置拦截请求的拦截器,再请求之前执行
service.interceptors.request.use(
    config=>{
        // 在请求头添加一个token  token的值从pinia共享库中获取
        config.headers.token = "129600111123"
        return config
    }   
)
// 配置拦截响应的拦截器,在接收响应数据之前执行
service.interceptors.request.use(
    response=>{
        // 获取后端响应的数据
        let res=response.data
        return res;
    },
    error=>{
        // 出现异常
        return Promise.reject(error)
    }
)
export default service