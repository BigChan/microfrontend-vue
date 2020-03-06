import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './single-spa-config'

Vue.config.productionTip = false

window.globalStore = store

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')
