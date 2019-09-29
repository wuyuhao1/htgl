<template>
  <div id="Zhuce">
      <el-input v-model="uName" placeholder="请输入账户" ></el-input>
      <br><br>
      <el-input v-model="uPwd" placeholder="请输入密码"></el-input>
      <br><br>
      <el-button type="primary" plain @click="zc">注册</el-button>
  </div>
</template>

<script>


export default {
    data(){
        return {
        uName:"",
        uPwd:"",
        }
    },
  methods:{
    zc(){
        let uName=this.uName
        let uPwd=this.uPwd
        let url="http://localhost:8888/vue/houtaiguan/src/api/test.php?uName="+uName+"&uPwd="+uPwd;
        console.log(url)
        this.$axios.get(url).then((res)=>{
            console.log(res.data)
            if(res.data.msg=="ok")
            {
                localStorage["uToken"] = this.data.msg.token
            }
        })
    }
  }
}
</script>

<style>
*{margin:0;padding:0;}
body,html{
  width:100;
  height:100%;
}
#Zhuce{
  width:500px;
  height:500px;
  margin:0 auto;
}
</style>
