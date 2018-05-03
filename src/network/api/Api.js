import BaseApi from './BaseApi'
import {ABNORMAL,LOGIN_OUT,SUCCESS} from '../../common/config/code'
import {Notice} from 'iview'
import {symbolContext} from '../../decorator/decorator'
class Api extends BaseApi {
  constructor (target) {
    super()
    if(target){
      this.context.call(this,target)
    }

  }
  context(target){
    target.prototype[symbolContext]=this
  }
  initNotice () {
    this.Notice=Notice
    // dosomething
  }
  request (config) {
    return config;
  }
  response (response) {
    return response;
  }
  reject (error) {
    console.error(error)
  }
  //用户未登录
  loginOut(){
    App.$router.push({
      name:'login'
    })
  }
  before () {}
  after () {}
  abnormal (param,res) {
    this.showNotice(param,res,'温馨提示','warning')
  }
  error (param,res) {
    this.showNotice(param,res,'不好了','error')
  }
  showNotice(param,res,title,type='info'){
    this.Notice[type]({
      title,
      render:param.render?param.render(...res):h=>{
        return h('span', [
          res.message,
        ])
      }
    })
  }
  async common (param) {
    let _config = Object.assign({}, param)
    await this.before()
    let res;
    try {
      res = await this.axios(param.url, _config)
      res=(res&&res.data)?res.data:null;
      console.info(res)
      if(!res){
        param.error ? param.error(res,param) : this.error(param,{message:"程序在开小差"})
      }else if (!res.state || ABNORMAL.includes(res.state)) {
        param.abnormal ? param.abnormal(param,res) : this.abnormal(param,res)
      }else if (LOGIN_OUT.includes(res.state)){
        this.loginOut();
      } else if(SUCCESS.includes(res.state)){
        (param.successNotice)?this.showNotice(param,res,'恭喜你','success'):'';
        param.success?param.success(res.data):''
      }else{
        param.error ? param.error(res,param) : this.error(param,{message:"程序在开小差"})
      }
    } catch (e) {
      console.error(e);
      param.error ? param.error(res,param) : this.error(param,{message:"程序在开小差"})
    }
    await this.after()
    return res
  }
  // async common (param) {
  //
  //   let _config = Object.assign({}, param)
  //   await this.before()
  //   let res;
  //   try {
  //     setTimeout(async ()=>{
  //       res = await this.axios(param.url, _config)
  //       res=(res&&res.data)?res.data:null;
  //       if(!res){
  //         param.error ? param.error(res,param) : this.error(param,{message:"程序在开小差"})
  //       }else if (!res.state || res.state === ABNORMAL) {
  //         param.abnormal ? param.abnormal(param,res) : this.abnormal(param,res)
  //       }else{
  //         (param.successNotice)?this.showNotice(param,res,'恭喜你','success'):'';
  //         param.success?param.success(res.data):''
  //       }
  //       await this.after()
  //     },5000)
  //
  //   } catch (e) {
  //     console.error(e);
  //     param.error ? param.error(res,param) : this.error(param,{message:"程序在开小差"})
  //   }
  //
  //   return res
  // }
}
export default Api
