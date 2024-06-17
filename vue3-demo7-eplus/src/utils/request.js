import axios from 'axios'
// 创建instance实例
const instance = axios.create({

    timeout:5000
})
// 添加请求拦截
instance.interceptors.request.use(
    config=>{
        config.headers.token="888888"
        return config
    },
    error=>{
        return Promise.reject(error)
    }
)
// 添加响应拦截器
instance.interceptors.response.use(
    response=>{
        let res = response.data
        return res
    },
    error=>{
        return Promise.reject(error)
    }
)

export default instance