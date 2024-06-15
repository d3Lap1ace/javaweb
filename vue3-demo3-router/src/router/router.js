// 导入路由创建的相关方法
import {createRouter,createWebHashHistory} from 'vue-router'
// 导入vue组件
import add from '../views/add/index.vue'
import list from '../views/list/index.vue'
import edit from '../views/edit/index.vue'
// 创建路由对象,声明路由规则
const router = createRouter({
    /* 
                component指定组件在默认的路由视图位置展示
                components:Home
                components指定组件在name为某个值的路由视图位置展示
                components:{
                    default:Home,// 默认路由视图位置
                    homeView:Home// name为homeView的路由视图位置
                }   
            */
    //createWebHashHistory() 是 Vue.js 基于 hash 模式创建路由的工厂函数。在使用这种模式下，路由信息保存在 URL 的 hash 中，
    //使用 createWebHashHistory() 方法，可以创建一个路由历史记录对象，用于管理应用程序的路由。在 Vue.js 应用中，
    //通常使用该方法来创建路由的历史记录对象。
    //就是路由中缓存历史记录的对象，vue-router提供
    history: createWebHashHistory(),
    routes:[
        {
            path:'/',
            component:list
        },
        {
            path:'/list',
            component:list
        },
        {
            path:'/add',
            component:add 
        },
        {
            path:'/edit',
            component:edit 
        },
    ]

})

//配置全局前置路由守卫
router.beforeEach((to,from,next)=>{
    //从哪儿来
    let fromPath = from.path
    console.log(fromPath)
    //到哪儿去
    let toPath = to.path
    console.log(toPath)
    //放行请求
    next()
})
//配置全局后置路由守卫
router.afterEach((to,from)=>{

})
//3.导出路由器
export default router