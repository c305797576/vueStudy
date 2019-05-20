import Vue from 'vue';
import Vuex from 'vuex';
import looger from 'vuex/dist/logger';
import mutations from './mutations';
Vue.use(Vuex);
const state={count:0};
const getters={
  getval:(state)=>state.count%2?'奇数':'偶数'
};
export default new Vuex.Store({
  state,
  mutations,
  getters,
  plugins:[looger()],
  strict:true //只能通过mutation（管理员）来更改状态，mutation不支持异步
});

