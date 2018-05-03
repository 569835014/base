import Exceptional from './Exceptional'
class MyExceptional extends Exceptional{
  finallyHandle(){

    console.info(arguments)
  }
  errorHandler(){
    console.info(arguments)
  }

}
export default MyExceptional
