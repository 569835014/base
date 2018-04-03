import Api from '../Api'
import {controller,get} from "../../../decorator/decorator";

@controller('/login')
class LoginApi extends Api{
  constructor(){
    super(LoginApi);
  }

  @get('/ccav')
  async login(params){
    return await this.common(params)
  }
}
export default new LoginApi()
