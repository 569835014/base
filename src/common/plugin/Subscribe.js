/*********
 * 自己写的订阅发布模式
 */
class Subscribe {
  constructor () {
    this.handle = {}
  }

  on (name, listener) {
    // 必须是个函数
    if (typeof listener !== 'function') {
      throw new TypeError('"listener" must be a function')
    }
    // 获得订阅者信息
    let subscribe = this.handle[name]
    // 订阅者不存在
    if (!subscribe) {
      this.handle[name] = []
    }
    this.handle[name].push(listener)
  }

  emit (name, ...arg) {
    let subscribe = this.handle[name]
    // 发布信息
    if (Array.isArray(subscribe)) {
      subscribe.map((item) => {
        item.apply(this, arg)
      })
    }
  }

  off (name, listener) {
    let subscribe = this.handle[name]
    if (!listener) {
      this.handle[name] = []
      return
    }
    if (Array.isArray(subscribe)) {
      let len = subscribe.indexOf(listener)
      if (len > -1) {
        // 取消订阅
        subscribe.splice(len, 1)
      }
    }
  }

  install (Vue) {
    Vue.prototype.$subscribe = this
  }
}
const subscribe = new Subscribe()
export default subscribe
