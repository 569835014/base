import axios from 'axios'
import Qs from 'qs'
import BASE_URL from '../../common/config/base-url'
class BaseApi {
  static isinIt=false;
  constructor () {
    this.createAxios();
    this.initNotice()
  }
  createAxios () {
    if (BaseApi.isinIt) {
      return this.axios=BaseApi.isinIt
    }
    let api = axios.create({
      // 请求的接口，在请求的时候，如axios.get(url,config);这里的url会覆盖掉config中的url
      url: '',
      // 请求方法同上
      method: 'post', // default
      // 基础url前缀
      baseURL: BASE_URL,
      transformRequest: [function (data) {
        // 这里可以在发送请求之前对请求数据做处理，比如form-data格式化等，这里可以使用开头引入的Qs（这个模块在安装axios的时候就已经安装了，不需要另外安装）
        data = Qs.stringify(data)
        return data
      }],

      transformResponse: [function (data) {
        // 这里提前处理返回的数据
        try {
          return JSON.parse(data)
        } catch (e) {
          return data
        }
      }],

      // 请求头信息
      headers: {

      },

      // parameter参数
      params: {
      },

      // post参数，使用axios.post(url,{},config);如果没有额外的也必须要用一个空对象，否则会报错
      data: {
      },
      // 设置超时时间
      timeout: 5000,
      // 返回数据类型
      responseType: 'json', // default
    })
    api.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded;charset=utf-8';
    api.interceptors.request.use(
      (config) => {
        return this.request(config)
      }, (err) => {
        return this.reject(err)
      })
    api.interceptors.response.use(
      (response) => {
        return this.response(response)
      },
      (error) => {
        return this.reject(error)
      }
    )
    BaseApi.isinIt=this.axios = api
  }
  request () {
    throw Error('必须实现request函数！！！')
  }
  response () {
    throw Error('必须实现response函数！！！')
  }
  reject () {
    throw Error('必须实现reject函数！！！')
  }
  initNotice () {
    throw Error('必须实现通知函数！！！')
  }
}
export default BaseApi
