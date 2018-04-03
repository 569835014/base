<template>
  <div id="app">
    <img src="./assets/logo.png">
    <router-view v-if="!loading"/>
    <loading v-else></loading>
  </div>
</template>

<script>
import {mapGetters} from 'vuex'
import Loading from '@/components/base/loading/Loading.vue'
export default {
  name: 'App',
  computed:{
    ...mapGetters([
      'loading'
    ])
  },
  components:{
    Loading
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
