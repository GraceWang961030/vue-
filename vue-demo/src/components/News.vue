<template>
  <div>
  <h3>我是新闻页</h3>
    <ul>
      <li v-for="val in list">{{val}}</li>
    </ul>
  </div>
</template>
<script>
  export default {
    data(){
      return{
        list:['aaa','bbb','ccc']
        }
    }
  }
</script>
<style>
li{
  border-bottom: 1px dashed #dedede;
}
</style>
