<template>
  <div class="test">
    问卷调查系统
    <template v-for="item in view">
      <single-choice v-if="item.mode==='single'" :stem="item.stem" :mode="item.mode" :branch="item.branch" :type="item.type" :answer="item.answer"></single-choice>
      <multi-choice v-if="item.mode==='multi'" :stem="item.stem" :mode="item.mode"  :branch="item.branch" :type="item.type" :answer="item.answer"></multi-choice>
      <completion v-if="item.type==='completion'"
                  :stem="item.stem" :mode="item.mode"
                  :config="item.config"
                  :branch="item.branch" :type="item.type"
                  :answer="item.answer">

      </completion>
    </template>

  </div>
</template>

<script>
  import SubjectFactory from './SubjectFactory.js'

  export default {
    name: "Test",
    data(){
      return {
        list:[
          {
            stem:[
              '$',
              '、',
              '事竟成,'
              ,'$'
              ,',',
              '$',
              ';'
              ,'$'
              ,'、天不负,'
              ,'$',
              ',','$'],
            type:"completion",
            answer:['有志者','破釜沉舟','百二秦关终属楚','天不负','卧薪尝胆','三千越甲可吞吴'],
          },
          {
            stem:"驾驶机动车在高速公路遇到能见度低于100米的气象条件时，最高车速是多少？",
            branch:['不得超过40公里/小时','不得超过60公里/小时','不得超过80公里/小时','不得超过90公里/小时'],
            type:"choice",
            answer:[1],
            mode:'single'
          },
          {
            stem:"驾驶机动车在高速公路遇到能见度低于100米的气象条件时，最高车速是多少？",
            branch:['不得超过40公里/小时','不得超过60公里/小时','不得超过80公里/小时','不得超过90公里/小时'],
            type:"choice",
            answer:[0,0,0,0],
            mode:'multi'
          }
        ],
        view:[]
      }
    },
    created(){
      this.list.map((item)=>{
        this.view.push(SubjectFactory.subject(item))
      })
    }
  }
</script>

<style scoped>
  input{
    border-top: none;
    border-left: none;
    border-right: none;
  }
</style>
