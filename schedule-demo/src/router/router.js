import {createRouter,createWebHashHistory} from 'vue-router'
import Login from '../views/Login.vue'
import Regist from '../views/Regist.vue'
import ShowScedule from '../views/ShowSchedule.vue'
let  router = createRouter({
    history:createWebHashHistory(),
    routes:[
        {
            path:"/",
            component:Login
        },
        {
            path:"/login",
            component:Login
        },
        {
            path:"/showSchedule",
            component:ShowScedule
        },
        {
            path:"/regist",
            component:Regist
        }
    ]
})
export default router