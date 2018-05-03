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
let target=[
  {
    name:'b',
    c:{
      name:'c',
      d:{
        name:'d'
      }
    }
  }
]
let proxyArr=initProxy(target)
function initProxy(arr) {
  let newArr=[]
  arr.map((item)=>{
    newArr.push(createdProxy(item,arr))
  })
  return newArr
}
function createdProxy(obj,arr) {
  let keys=Object.keys(obj);
  keys.map((key)=>{
    if(typeof obj[key]==='object'){
      obj[key]=createdProxy(obj[key],arr)
    }
  })
  return new Proxy(obj,{
    get(trapTarget, prop) {
      if (prop === 'parent' && !obj.hasOwnProperty(prop)) {
        return arr
      }
      return trapTarget[prop]
    },
    set(trapTarget, key, value, receiver){
      return Reflect.set(trapTarget, key, value, receiver)
    }
  })
}

console.info(proxyArr[0].c.d.name=9)
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
