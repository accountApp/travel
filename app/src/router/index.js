import Vue from 'vue'
import Router from 'vue-router'
import Main from '@/components/Main'


import Login from '@/components/Login'
import Load from '@/components/Load'
import Personal from '@/components/Personal1'
import Register from '@/components/Register'
import Detailpage from '@/components/Detailpage'
import List from '@/components/List'
import Maincon from '@/components/Maincon'

import Mycenter from '@/components/Mycenter'

Vue.use(Router)

var router= new Router({
  routes: [
      {
        path: '/',
        name: 'Main',
        component: Main,
          children:[
              {path:"",component:Maincon},
              {path:"/mycenter",component:Mycenter,
                beforeEnter(to,from,next){
                    if(sessionStorage.getItem("indexLogin")){
                        next()
                    }else{
                        next("/login")
                    }
                }
              },
          ]
      },
      {
        path:"/login",
        name:"Login",
        component:Login
      },
      {
          path:"/load",
          name:"Load",
          component:Load,
          children:[
              {
                  path:"",
                  component:Personal
              },
              {
                  path:"/register",
                  component:Register
              }

          ]
      },
      {
          path:"/detailpage",
          name:"Detailpage",
          component:Detailpage
      },
      {
          path:"/list",
          name:"List",
          component:List
      }
  ]
})

export default router
