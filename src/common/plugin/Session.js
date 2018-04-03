class Session {
  static Storage='sessionStorage'
  static saveItem (key, value) {
    window[this.Storage].setItem(key, JSON.stringify(value))
  }
  static getItem (key) {
    let value = window[this.Storage].getItem(key)
    try {
      return JSON.parse(value)
    } catch (e) {
      return value
    }
  }
  static removeItem (key) {
    window[this.Storage].removeItem(key)
  }
  static clear () {
    window[this.Storage].clear()
  }
  static getProp (key, prop) {
    let value = this.getItem(key)
    if (value) return value[prop]
    return null
  }
  static install (Vue, Storage = 'sessionStorage') {
    Session.Storage = Storage
    Vue.prototype.$storage = Session
  }
}
export default Session
