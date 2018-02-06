<template>
  <div>
    <el-button>默认按钮</el-button>
    <el-button type="primary">主要按钮</el-button>
    <el-button type="success">成功按钮</el-button>
    <el-button type="info" icon="el-icon-close">信息按钮</el-button>
    <el-button type="warning" icon="el-icon-search">警告按钮</el-button>
    <el-button type="danger">危险按钮</el-button>

    <el-row>
      <el-col :span="12">
        <div class="my-grid">
          <Date></Date>
        </div>
      </el-col>
      <el-col :span="12">
        <div class="my-grid"></div>
      </el-col>
    </el-row>
  </div>

</template>

<script>
import ElRow from "element-ui/packages/row/src/row";
import Date from './Date.vue';
export default {
  components: {
    ElRow,Date
  },
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
  @color:red;
  .h50(@h){
    height:@h;
  }
  .my-grid{
    border: 1px solid @color;
    .h50(30px)
  }
</style>
