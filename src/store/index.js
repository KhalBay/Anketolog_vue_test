import Vue from 'vue'
import Vuex from 'vuex'
import element from './modules/element'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    element
  },
})
