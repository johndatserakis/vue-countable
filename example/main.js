import Vue from 'vue'
import App from './App.vue'

import VueCountable from '../src/index.js'
Vue.component('vue-countable', VueCountable)

new Vue({
  el: '#app',
  render: h => h(App)
})
