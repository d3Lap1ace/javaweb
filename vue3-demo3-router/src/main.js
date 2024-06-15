import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
//导入router模块
import router from './router/router.js'
const app = createApp(App)
//绑定路由对象
app.use(router)
//挂载视图
app.mount("#app")