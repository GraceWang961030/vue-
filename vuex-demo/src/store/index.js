import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex);
import mutations from './mutations'
import actions from './actions.js'
import getters from './getters.js'

export default  new Vuex.Store({
  modules:{
    mutations
  },
  actions
})
