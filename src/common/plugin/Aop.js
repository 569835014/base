class Aop {
  constructor(){
    new Proxy(this,{
      get:async ( target , prop)=>{

      }
    })
  }
  before(){
    new Error('请实现')
  }
  after(){
    new Error('请实现')
  }
}
