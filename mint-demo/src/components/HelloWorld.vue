<template>
  <div class="hello">
    <mt-header fixed title="固定在顶部"></mt-header>
    <mt-tabbar v-model="selected">
      <mt-tab-item id="外卖">
        <img slot="icon" src="../assets/logo.png">
        外卖
      </mt-tab-item>
      <mt-tab-item id="订单">
        <img slot="icon" src="../assets/logo.png">
        订单
      </mt-tab-item>
      <mt-tab-item id="发现">
        <img slot="icon" src="../assets/logo.png">
        发现
      </mt-tab-item>
      <mt-tab-item id="我的">
        <img slot="icon" src="../assets/logo.png">
        我的
      </mt-tab-item>
    </mt-tabbar>

    <mt-button type="default">default</mt-button>
    <mt-button type="primary">primary</mt-button>
    <mt-button type="danger">danger</mt-button>

    <mt-swipe :auto="4000" class="page-swipe-desc" :show-indicator="false">
      <mt-swipe-item :class="{slide1:true}">1</mt-swipe-item>
      <mt-swipe-item :class="{slide1:true}">2</mt-swipe-item>
      <mt-swipe-item :class="{slide1:true}">3</mt-swipe-item>
    </mt-swipe>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .page-swipe-desc {
    text-align: center;
    color: red;
    margin-bottom: 5px;
    height: 200px;
    font-size: 30px;
    background: blue;
  }
</style>
