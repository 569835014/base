import Choice from './Choice'
class SingleChoice extends Choice{
  constructor({stem, branch, type, answer,mode},insInitComponents){
    super({stem, branch, type, answer,mode},insInitComponents)
  }
  attrValidation(){
    super.attrValidation()
    if(this.answer.length>1){
      throw new Error('这是单选题')
    }
  }
  validateAnswer(answer){
    if(!(answer instanceof Array)){
      return false
    }else if(answer[0]!==this.answer[0]){
      return false
    }
    return true
  }
  renderText(context,item,index){
    let start=65
    return String.fromCharCode(start+index)+'、'+item
  }
}

export default SingleChoice
