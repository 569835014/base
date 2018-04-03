<template>
  <div class="hello">
    这里是模拟的axios测试页账号是admin123密码是111111
    这是login页<br>
    <div v-if="!user">
      账号<input type="text" v-model="userName"><br>
      密码<input type="text" v-model="pwd"><br>
      <button @click="logo">登录</button>
    </div>
    <div v-else>
      <button @click="out">退出登录</button>
    </div>
    <div>
      展示异常和错误处理
      <button @click="diy">异常通用</button>
      <button @click="diy1">子类异常</button>
      <button @click="diy2">自定义异常</button>
    </div>
  </div>

</template>

<script>
  import { mapGetters,mapActions } from 'vuex'
  import {userService,LoginService} from '@/network/service/index'
  export default {
      name: 'Login',
    data () {
      return {
        userName:"",
        pwd:"",
        redirect:""
      }
    },
    async created(){

        // let data=await userService.newlogin({
        //   data:{
        //     userName:this.userName||'admin',
        //     password:this.pwd||'111111'
        //   },
        // })
    },
    mounted(){

      this.$subscribe.on('talk',(message)=>{
        alert(message)
      })
    },
    methods:{
      ...mapActions([
        'saveUserInfo'
      ]),
       logo(){//登录发送ajax，api是axios你可以看一下
        userService.login({
          data:{
            userName:this.userName||'admin',
            password:this.pwd||'111111'
          },
          success:(res)=>{
            this.saveUserInfo(res);
            this.$router.push({
              name:'user'
            })
          }
        })
      },
      async diy(){
       let data=await userService.login({
          data:{
            userName:this.userName||'admin1',
            password:this.pwd||'111111'
          },
         success:(res)=>{

         }
        })
      },
      diy1(){
        userService.login({
          data:{
            userName:this.userName||'admin1',
            password:this.pwd||'111111',

          },
        })
      },
      diy2(){
        userService.login({
          data:{
            userName:this.userName||'admin1',
            password:this.pwd||'111111'
          },
          successNotice:true,
          abnormal:(param,res)=>{
            this.$Notice.error({
              title: '哈喽我是自定义',
              render: h => {
                return h('span', [
                  '我是参数自定义的异常处理'+res.message,
                ])
              }
            });
          }
        })
      },
      out(){//退出登录清空vuex里面保持的用户信息和localStorage里面保存的用户信息
       this.saveUserInfo(null)
      },
    },
    computed:{
      // 使用对象展开运算符将 getters 混入 computed 对象中这是vuex稳定里有的
      ...mapGetters({
        user:'user'
      })
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  input{
    border: 1px solid black;
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
    list-style: none;
  }
  a {
    color: #42b983;
  }
