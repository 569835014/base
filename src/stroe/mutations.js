import * as NAME from '../common/config/constant'
const mutations = {
  [NAME.USER_INFO] (state, userInfo) {
    state.user = userInfo
  },
  [NAME.LOADING](state, loading){
    state.loading = loading
  }
}
export default mutations
