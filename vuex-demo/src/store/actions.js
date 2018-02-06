import * as types from './type'
export default {
  increase:({commit})=>{
    commit(types.INCREASE);
  },
  decrease:({commit})=>{
    commit(types.DECREASE)
  },
  clickOnlyEven:({commit,state})=>{
    if(state.mutations.count % 2 ==0){
      commit(types.INCREASE)
    }
  },
  clickAjax:({commit})=>{
    new Promise((resolve)=>{
      setTimeout(function() {
        commit(types.INCREASE)
      },1000);
    })
  }
  }

