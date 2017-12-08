// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import $ from 'jquery'
import validation from 'jquery-validation'

import "@/assets/css/base.css"
import "@/assets/iconfont/iconfont.css"
import "@/assets/js/mui.js"

import "@/assets/js/rem.js"
import "@/assets/fonts/mui.ttf"

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
