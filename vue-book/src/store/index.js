import Vue from 'vue';
import Vuex from 'vuex';
import logger from 'vuex/dist/logger';
Vue.use(Vuex);
import mutations from './mutations';
let state={cartList:[]};
import getters from './getters';
export default new Vuex.Store({
  state,
  mutations,
  strict:true,
  plugins:[logger()],
  getters
});
