<template>
  <div>
    这是user页面
    <div v-if="user">
      <div>{{user.nickname}}</div>
      <div>{{user.email}}</div>
      <img :src="user.avatarUrl" alt="">
    </div>
  </div>

</template>

<script>
import {mapGetters} from 'vuex'
export default {
  name: 'User',
  created(){
    this.$subscribe.emit('talk','登录页')
  },
  computed:{
    ...mapGetters(['user'])
  },
  //这里有个巨坑就是在路由切换的时候组件的created可能比destroyed先调用
  // destroyed(){
  //   console.info(1)
  //   this.$subscribe.off('talk')
  // },
  beforeDestroy(){
    console.info(1)
    this.$subscribe.off('talk')
  }
}
</script>

<style scoped>

</style>
