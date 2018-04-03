import * as NAME from '../common/config/constant'
export const saveUserInfo = function ({commit}, userInfo) {
  commit(NAME.USER_INFO, userInfo)
}
export const changeLoading = function ({commit}, loading) {
  commit(NAME.LOADING, loading)
}
