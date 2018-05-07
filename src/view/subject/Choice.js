import Subject from './Subject'
class Choice extends Subject{
  constructor({stem, branch, type, answer,mode}){
    super({stem, branch, type, answer,mode})
  }
  attrValidation(){
   if(!(this.branch instanceof Array)){
      throw new Error('选择题题支为数组')
    }

    if(!(this.answer instanceof Array)&&this.answer.length>0){
      throw new Error('答应必须是长度不小于1数组')
    }
  }
  validateAnswer(answer){
    if(!(answer instanceof Array)){
      console.warn('用户答案必须是数组')
      return false
    }else if(this.answer.length!==answer.length){
      return false
    }
    return true

  }
}

export default Choice
