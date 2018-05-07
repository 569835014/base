import Choice from './Choice'
class SingleChoice extends Choice{
  constructor({stem, branch, type, answer,mode}){
    super({stem, branch, type, answer,mode})
  }
  attrValidation(){
    super.attrValidation()
    if(this.answer.length!==1){
      throw new Error('这是单选题')
    }
    if(this.mode!=='single'){
      throw new Error('这是单选题')
    }
  }
  validateAnswer(answer){
    if(super.validateAnswer(answer)) {
      if (this.answer[0]!==answer[0]) {
        return false
      }
      return true
    }
    return false
  }
}

export default SingleChoice
