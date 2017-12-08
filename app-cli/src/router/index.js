import Vue from 'vue'
import Router from 'vue-router'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import '@/assets/base.css'
import Admin from '@/components/Admin'
import Login from '@/components/Login'

import User from '@/components/User'
import AddUser from '@/components/AddUser'
import EditUser from '@/components/EditUser'

import Administ from '@/components/Administ'
import AddAdmin from '@/components/AddAdmin'
import EditAdmin from '@/components/EditAdmin'
import Content from '@/components/Content'
import AddCon from '@/components/AddCon'
import EditCon from '@/components/EditCon'

import Position from '@/components/Position'
import AddPosi from '@/components/AddPosi'
import EditPosi from '@/components/EditPosi'

Vue.use(Router)
Vue.use(ElementUI)

var router= new Router({
  routes: [
    {
      path: '/',
      name: 'Admin',
      component: Admin,
        children:[
            {path:"/user",component:User},
            {path:"/addUser",component:AddUser},
            {path:"/editUser",component:EditUser},

            {path:"/admin",component:Administ},
            {path:"/addAdmin",component:AddAdmin},
            {path:"/editAdmin",component:EditAdmin},
            //内容
            {path:"/content",component:Content},
            {path:"/addCon",component:AddCon},
            {path:"/editCon",component:EditCon},

            {path:"/position",component:Position},
            {path:"/addPosi",component:AddPosi},
            {path:"/editPosi",component:EditPosi},
        ]
    },
      {path:"/login",component:Login}
  ]
})
router.beforeEach(function (to,from,next) {
    if(to.path=="/login"){
        next()
    }else{
        if(sessionStorage.getItem("adminLogin")){
            next();
        }else{
            next("/login")
        }
    }
})

export default router
