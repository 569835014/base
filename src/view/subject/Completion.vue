<template>
  <div class="Completion">
    <span>
      <template v-for="(item,index) in subject.stem" v-if="subAnswer">
        <template v-if="item===subject.config.placeholder">
          <input type="text" v-model.trim="subAnswer[index]"/>
        </template>
        <template v-else>
            {{item}}
        </template>
      </template>
    </span>
  </div>
</template>

<script>
  import subjectMixins from './subjectMixins'

  export default {
    name: "Completion",
    mixins: [subjectMixins],
    created() {
      this.subAnswer = {}
    },
    methods: {
      validateAnswer(answer){
        if(this.subject.validateAnswer){
          return this.subject.validateAnswer(this.calculation(answer))
        }
        return false
      },
      calculation() {
        let result = {};
        let keys = Object.keys(this.subAnswer)
        keys.sort((a, b) => {
          return a * 1 - b * 1
        })
        keys.map((item,index)=>{
          result[index]=this.subAnswer[item]
        })
        return result
      }
    },

  }
</script>

<style scoped>

</style>
