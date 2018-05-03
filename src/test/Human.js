class Human {
  constructor(params){
    this.name=params.name;
    this.sex=params.sex;
    this.occupation=params.occupation
  }
  static created(){

  }
  speek(){
    throw Error('你必须实现speek方法')
  }
  run(){
    throw Error('你必须实现run方法')
  }
  work(){
    throw Error('你必须实现work方法')
  }
}

class YellowHuman extends Human{

}
