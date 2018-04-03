import * as DOM from './dom'
const URL = {
  // 当前页面路径
  href: window.location.href,
  // 当前页面查询字符串
  search: window.location.search,
  // 查询URL传递的参数值
  query: function (key) {
    console.info(window.location)
    let reg = new RegExp('(^|&|\\?|#)' + key + '=([^&]*)(&|\x24)', '')
    let match = this.search.substr(1).match(reg)
    if (match) {
      return match[2]
    }
    return ''
  }
}
export {URL, DOM}
