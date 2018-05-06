import Subject from './Subject'
class Choice extends Subject{
  constructor({stem, branch, type, answer,mode},insInitComponents){
    super({stem, branch, type, answer,mode},insInitComponents)
  }
  attrValidation(){
    super.attrValidation()
    if(!(this.branch instanceof Array)){
      throw new Error('选择题题支必须是数组')
    }
    if(!(this.answer instanceof Array)){
      throw new Error('答应必须是数组')
    }
  }
  renderText(context,item,index){
    let start=65
    return String.fromCharCode(start+index)+'、'+item
  }
  renderTemplate(type){
    if(type==='Vue'){
      return `
      <div :class="name">
                 <slot class="">
                    <div class="stem">{{stem}}</div>
                    <ul v-if="branch" >
                        <li v-for="(item,index) in branch" :key="index" >
                        <template v-if="type==='choice'&&subAnswer">
                              <template v-if="mode==='single'"> 
                                <input  type="radio" :name="name+'radio'" :value="index" v-model="subAnswer[0]"> {{renderText?renderText(item,index):item}}
                              </template>
                             <template v-else-if="mode=='multi'"> 
                                 <input  type="checkbox" :name="name+'radio'" :value="index" v-model="subAnswer[index]"> {{renderText?renderText(item,index):item}}
                             </template>
                             
                        </template>
                 
                        </li>
                    </ul>
                </slot>
            </div>
    `
    }

  }
}

export default Choice
