<template>
  <div class="multi">
    <slot class="">
      <div class="stem">{{subject.stem}}</div>
      <ul v-if="subject.branch">
        <li v-for="(item,index) in subject.branch" :key="index">
          <template v-if="subject.type==='choice'&&subAnswer">
            <input type="checkbox" :name="name+'radio'" :value="index" @change="change($event,index)">
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
    name: "MultiChoice",
    mixins: [subjectMixins, choiceMixins],
    data(){
      return{
        name:'MultiChoice'
      }
    },
    created() {
      this.subAnswer = []
    },
    methods:{
      change($event,index){
        if($event.target.checked){
          if(!(this.subAnswer.includes(index))){
            this.subAnswer.push(index)
          }
        }else{
          let _index=this.subAnswer.indexOf(index)
          if(_index>-1){
            this.subAnswer.splice(_index,1)
          }
        }
      }
    }

  }
</script>

<style scoped>

</style>
