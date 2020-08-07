/**
 * Created by yibao on 2020/8/4.
 */
// 入口js
import Vue from 'vue'
import App from './App.vue'
import router from './router/index.js'
/* eslint-disable no-new */
new Vue({
  el: '#app',
  render: h => h(App),
  router
})
