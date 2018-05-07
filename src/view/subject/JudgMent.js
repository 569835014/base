import Subject from './Subject'
class JudgMent extends Subject{
  constructor({stem, branch, type, answer}){
    super({stem, branch, type, answer})
  }
  attrValidation(){
    super.attrValidation()
    if(typeof this.answer!=="boolean"){
      throw new Error('判断题答案应该为布尔类型')
    }
  }
  validateAnswer(answer){
    if(typeof answer!=="boolean" || this.answer!==answer){
      return false
    }
    return true
  }
}

export default JudgMent
