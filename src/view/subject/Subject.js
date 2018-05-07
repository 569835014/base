import {TYPE_CONFIG, SUBJECT_TYPE} from './configuration'
class Subject {
  constructor({stem, branch, type, answer,mode}){
    Object.assign(this,{stem, branch, type, answer,mode});
    this.config=TYPE_CONFIG[this.type]
    this.attrValidation();
  }
  attrValidation(){
    if (!this.stem || typeof this.stem !== "string") {
      throw new Error('题干不能为空，且是文本类型')
    }
    if (!this.type || typeof this.type !== 'string') {
      throw new Error('类型不能为空，且是文本类型')
    } else if (!SUBJECT_TYPE.includes(this.type)) {
      throw new Error('暂不支持该类型')
    }
  }
  validateAnswer(){
    throw new Error('请实现验证函数')
  }
}
export default Subject
