import Subject from './Subject'
class Completion extends Subject {
  constructor({stem, branch, type, answer}) {
    super({stem, branch, type, answer})
  }
  attrValidation() {
    super.attrValidation();
    if (!(this.answer instanceof Array)) {
      throw new Error('答案必须是数组')
    }
  }
  validateAnswer(answer) {
    if(({}).toString.call(answer).slice(8, -1).toLowerCase()!=='object'){
      throw new Error('用户答应必须是一个对象')
    }
    let len=this.answer.length;
    let result={};
    for(let i=0;i<len;i++){
      let item=answer[i]
      if(!item||!this.answer[i]||item!==this.answer[i]){
        result[i]=false
      }else{
        result[i]=true
      }
    }
    return result
  }
}

export default Completion
