<template>
  <div id="login">
      <el-input  placeholder="请输入账户" ></el-input>
      <br><br>
      <el-input  placeholder="请输入账户" ></el-input>
      <br><br>
      <el-button type="primary" plain  @click="btn">登陆</el-button><el-button type="primary" plain  @click="zhu">注册</el-button>
  </div>
</template>

<script>


export default {
  name: 'login',
  components: {
    
  },
  methods:{
    btn(){
      this.$router.push('./HelloWorld')
    },
    zhu(){
      this.$router.push('./zhu')
    }
  }
}
</script>

<style>
body,html{
  width:100;
  height:100%;
}
#login{
  width:500px;
  height:500px;
  margin:0 auto;
}
</style>
