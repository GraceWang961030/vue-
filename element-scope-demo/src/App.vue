<template>
  <div id="app">
    <el-button type="primary" @click="get">primary button</el-button>
    <el-radio v-model="radio" label="1">备选项</el-radio>
    <el-radio v-model="radio" label="2">备选项</el-radio>
    <my-button @click.native="get"></my-button>
    <div>{{msg}}</div>
  </div>
</template>

<script>
import ElButton from "../../element-second-demo/node_modules/element-ui/packages/button/src/button.vue";
import myButton from"./components/Button.vue"
import axios from 'axios'
export default {
  components: {ElButton,myButton},
  name: 'App',
  data(){
    return{
      radio:'1',
      msg:''
    }
  },
  methods:{
    get(){
      axios.get('https://easy-mock.com/mock/5a699b8932767a35bdb7f62f/test/test').then(function (res){
        this.msg=res.data;
      }.bind(this)).catch(function (err) {
        console.log(err)
      })

    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
