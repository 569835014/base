import Subject from './Subject'
import {SUBJECT_TYPE} from "./configuration";

class Completion extends Subject {
  constructor({stem, branch, type, answer},insInitComponents) {
    super({stem, branch, type, answer},insInitComponents)
  }
  attrValidation() {
    if (!(this.stem instanceof Array)) {
      throw new Error('题干不能为空，且是数组')
    }
    if (!this.type || typeof this.type !== 'string') {
      throw new Error('类型不能为空，且是文本类型')
    } else if (!SUBJECT_TYPE.includes(this.type)) {
      throw new Error('暂不支持该类型')
    }

    if (this.branch) {
      if (!this.branch) {
        throw new Error('题支不能为空。')
      }
    }
    if (!(this.answer instanceof Array)) {
      throw new Error('答应必须是数组')
    }
  }
  validateAnswer(answer) {
    if (typeof answer !== "object") {
      return new Array(this.answer.length-1).fill(false)
    }
    let result = [];
    this.answer.map((item, index) => {
      if (!answer[index] || answer[index] !== item) {
        result.push(false)
      } else {
        result.push(true)
      }
    })
    return result
  }
  placeholder(){
    return this.config.placeholder
  }
  renderTemplate(type){
    if(type==='Vue'){

      let template=`
      <div :class="name">
                 <slot class="" v-if="stem">
                    <div class="stem"  >
                      <template v-for="(item,index) in stem">
                           <template v-if="item!==placeholder">
                          <span >{{item}}</span>
                        </template>
                        <template v-else>
                            <input type="text" v-model="subAnswer[index]">
                        </template>
                      </template>
                       
                    </div>
                </slot>
            </div>
    `
      return {
        template,
        methods:{
          initSubAnswer(){
            let arr=[];
            this.stem.map((item,index)=>{
              if(item===this.config.placeholder){
                arr.push(index)
              }
            })
            let subAnswer={};
            arr.map(item=>{
              subAnswer[item]=null
            })
            this.subAnswer=subAnswer
          }
        },
        computed:{

          placeholder:this.placeholder,
        }
      }
    }

  }
}

export default Completion
