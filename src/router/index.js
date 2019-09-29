import Vue from 'vue'
import Router from 'vue-router';
import HelloWorld from "../components/HelloWorld.vue"
import Login from '../components/login.vue'
import Zhu from '../components/zhu'
// import store from './store'
Vue.use(Router)
export default new Router({
    routes:[
        {
            path:"/",
            component:Login,
            name:"login"
        },
        {
            path:"/HelloWorld",
            component:HelloWorld,
            name:"HelloWorld"
        },
        {
            path:"/zhu",
            component:Zhu,
            name:"zhu"
        }
    ],
    redirect:"Login"
})