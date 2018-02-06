export default {
  count:(state)=> {
    return state.count;
  },
  num:(state)=>{
    return state.count%2==0?'even':'odds'
  }
}
