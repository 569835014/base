import Subject from './Subject'
class ShortAnswer extends Subject{
  constructor({stem, branch, type, answer},insInitComponents){
    super({stem, branch, type, answer},insInitComponents)
  }
  attrValidation(){
  }
  validateObjective(){
    throw new Error('请实现客观题')
  }
  validateSubjective(){
    throw new Error('主观题请手动打分')
  }
  validateAnswer(answer){
    if(this.config.isObjective){
      this.validateObjective(answer)
    }else{
      this.validateSubjective(answer)
    }
  }
}

export default ShortAnswer
