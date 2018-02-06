<template>
  <div id="app">
    <h3>welcome to Vuex-demo</h3>
    <input type="button" value="increase" @click="increase">
    <input type="button" value="decrease" @click="decrease"/>
    <input type="button" value="clickOnlyEven" @click="clickOnlyEven">
    <input type="button" value="ajax"@click="clickAjax"/>
    <div>Now the number is:{{count}},now the number is {{num}}</div>
  </div>
  </template>

<script>
  import {mapActions,mapGetters} from 'vuex'
export default {
    computed:mapGetters([
      'count',
      'num'
    ]),
  methods:mapActions([
    'increase',
    'decrease',
    'clickOnlyEven',
    'clickAjax'
  ])
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

h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
