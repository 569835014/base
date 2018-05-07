import Choice from './Choice'
class MultiChoice extends Choice{
  constructor({stem, branch, type, answer,mode}){
    super({stem, branch, type, answer,mode})
  }
  attrValidation(){
    super.attrValidation()
    if(this.mode!=='multi'){
      throw new Error('这是单选题')
    }
  }
  validateAnswer(answer){
    if(super.validateAnswer(answer)){
      let len=answer.length;
      for(let i=0;i<len;i++){
        if(!this.answer.includes(answer[i])){
          return false
        }
      }
      return true
    }
    return false
  }
}
export default MultiChoice
