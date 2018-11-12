// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import {Button} from 'mint-ui'
import App from './App.vue'

/* eslint-disable no-new */
Vue.component(Button.name,Button)

new Vue({
  el: '#app',
  components: {
    App
  },
  template: '<App/>'
})
