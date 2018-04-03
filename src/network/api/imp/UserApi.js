import Api from '../Api'
import {controller,showNotice,post} from "../../../decorator/decorator";
import {LOGIN_URL} from '../../../common/config/url'
@controller('/user')
class UserApi extends Api{
  constructor(){
    super(UserApi);
  }
  // abnormal(param,res){
  //   alert(res.message)
  // }
  before(){
   App.$store.dispatch('changeLoading',true)

  }
  after(){
    return new Promise(resolve=>{
      setTimeout(()=>{
        resolve( App.$store.dispatch('changeLoading',false))
      },2000)
    })

  }
  @post(LOGIN_URL)
  @showNotice
  async login(params){
    return await this.common(params)
  }
  async newlogin(params){
    params.url=LOGIN_URL
    return await this.common(params)
  }
}
export {UserApi}
export default new UserApi()
