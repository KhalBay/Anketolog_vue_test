import Vue from 'vue'
import store from './store'
import App from './App'

Vue.config.productionTip = false

new Vue({
  store,
  el: '#app',
  components: { App },
  template: '<App/>'
})
