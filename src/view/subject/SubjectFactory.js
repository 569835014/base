
function toUpCase(str) {
  return str.charAt(0).toUpperCase() + str.substr(1)
}

class SubjectFactory {
  /**
   * 工厂方法，创建题目
   * @param stem
   * @param branch
   * @param type
   * @param answer
   * @param mode
   * @param insInitComponents
   * @returns {*}
   */
  static subject({stem, branch, type, answer, mode}) {
    let name = mode ? toUpCase(mode) + toUpCase(type) : toUpCase(type)
    let Subject = require(`./${name}`).default;
    console.info(mode)
    return new Subject({stem, branch, type, answer,mode})
  }

}

export default SubjectFactory
