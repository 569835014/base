<template>
  <div class="test">
    <div v-for="(item,index) in view">
      <template v-if="item.type==='choice'">
        <template v-if="item.mode==='single'">
          <single-choice :subject="item" :ref="`choice${index}`"></single-choice>
        </template>
        <template v-else>
          <multi-choice :subject="item" :ref="`choice${index}`"></multi-choice>
        </template>
      </template>
      <template v-else-if="item.type==='completion'">
        <completion :subject="item" :ref="`completion${index}`"></completion>
      </template>
    </div>
    <button class="提交" @click="submit">提交</button>
    <div style="color: red" v-if="typeof score==='number'">{{score}}</div>
    <div style="color:red;font-size: 40px" v-if="score===100">Congratulations</div>
  </div>
</template>

<script>
  import SubjectFactory from './SubjectFactory.js'
  import SingleChoice from './SingleChoice.vue'
  import MultiChoice from './MultiChoice.vue'
  import Completion from './Completion.vue'

  export default {
    name: "Test",
    data() {
      return {
        list: [
          {
            stem: `$事竟成$$苦心人$$$`,
            type: "completion",
            answer: ['有志者', '破釜沉舟', '百二秦关终属楚', '天不负', '卧薪尝胆', '三千越甲可吞吴'],
          },
          {
            stem: "驾驶机动车在高速公路遇到能见度低于100米的气象条件时，最高车速是多少？",
            branch: ['不得超过40公里/小时', '不得超过60公里/小时', '不得超过80公里/小时', '不得超过90公里/小时'],
            type: "choice",
            answer: [1],
            mode: 'single'
          },
          {
            stem: "驾驶机动车在高速公路遇到能见度低于100米的气象条件时，最高车速是多少？",
            branch: ['不得超过40公里/小时', '不得超过60公里/小时', '不得超过80公里/小时', '不得超过90公里/小时'],
            type: "choice",
            answer: [1, 2],
            mode: 'multi'
          }
        ],
        view: [],
        score: null
      }
    },
    created() {
      this.list.map((item) => {
        this.view.push(SubjectFactory.subject(item))
      })
    },
    components: {
      SingleChoice,
      MultiChoice,
      Completion
    },
    methods: {
      submit() {
        this.score = this.view.reduce((first, item, index) => {
          let child = this.$refs[`${item.type}${index}`];
          if (child) {
            child = child[0]
            let result = child.validateAnswer(child.subAnswer)
            if (item.type === 'choice') {
              if (result) return first + 20
              else return first
            } else if (item.type === 'completion') {
              if (typeof result === "object") {

                let _result = Object.keys(result).reduce((_first, _item) => {
                  if (result[_item]) {
                    return _first + 10
                  } else {
                    return _first
                  }
                }, 0)
                return _result + first
              } else {
                return first
              }

            }
          }
        }, 0)
      }
    },
  }
</script>

<style scoped>
  input {
    border-top: none;
    border-left: none;
    border-right: none;
  }
</style>
