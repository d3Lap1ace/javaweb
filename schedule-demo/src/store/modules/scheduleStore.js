import {defineStore} from 'pinia'
export const defineSchedule = defineStore('scheduleList',{
    state:()=>{
        return {
            itemList:[
                /*
                {sid:1,uid:1,title:'学java',completed:1},
                {sid:1,uid:1,title:'学java',completed:1}
                */
            ]
        }
    },
    getters :{},
    actions:{}
})