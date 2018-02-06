import {INCREASE,DECREASE} from "./type";
import getters from './getters'
const state={
  count:20
};
const mutations={
  [INCREASE](state){
     state.count++;
  },
  [DECREASE](state){
    state.count--;
  }
};

export default {
  state,
  mutations,
  getters
}
