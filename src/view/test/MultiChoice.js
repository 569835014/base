import Choice from './Choice'
class MultiChoice extends Choice{
  constructor({stem, branch, type, answer,mode},insInitComponents){
    super({stem, branch, type, answer,mode},insInitComponents)
  }
  attrValidation(){
    super.attrValidation()
    if(this.answer.length<1){
      throw new Error('这是多选题')
    }
  }
  validateAnswer(answer){
    if(!(answer instanceof Array)){
      return false
    }else if(answer.length!==this.answer.length){
      return false
    }
    let len=this.answer.length;
    for(let i=0;i<len;i++){
      if((!this.answer.includes(answer[i]))){
        return false
      }
    }
    return true
  }
}

export default MultiChoice
