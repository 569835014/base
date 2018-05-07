import Subject from './Subject'
class ShortAnswer extends Subject{
  constructor({stem, branch, type, answer}){
    super({stem, branch, type, answer})
  }
  validateObjective(answer){
    if(this.answer!==answer) return false
    return true
  }
  validateSubjective(){
    throw new Error('主观题请手动打分')
  }
  validateAnswer(answer){
    if(!answer)return false
    if(this.config.isObjective){
     return this.validateObjective(answer)
    }else{
      return this.validateSubjective(answer)
    }
  }
}

export default ShortAnswer
