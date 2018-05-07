<template>
  <div class="single">
    <slot class="">
      <div class="stem">{{subject.stem}}</div>
      <ul v-if="subject.branch">
        <li v-for="(item,index) in subject.branch" :key="index">
          <template v-if="subject.type==='choice'&&subAnswer">
            <input type="radio" :name="name+'radio'" :value="index" v-model="subAnswer[0]">
            {{renderText?renderText(item,index):item}}
          </template>

        </li>
      </ul>
    </slot>
  </div>
</template>

<script>
  import subjectMixins from './subjectMixins'
  import choiceMixins from './choiceMixins'
  export default {
    name: "SingleChoice",
    data(){
      return{
        name:'SingleChoice'
      }
    },
    mixins:[subjectMixins,choiceMixins],
    created(){
      this.subAnswer=[false]
    },
  }
</script>

<style scoped>

</style>
