import Vue from 'vue'
import App from './App.vue'
import store from './store'
import './assets/tailwind.css'

Vue.config.productionTip = false

const vueapp=new Vue({
  store,
  render: h => h(App),
})

vueapp.$mount('#app')
