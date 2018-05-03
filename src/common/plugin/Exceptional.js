class Exceptional {
   catch(fn,context,...arg){
     try{
       return fn.apply(context,arg);
     }catch (e) {
       let argHandler=arg[arg.length-1]
       if(typeof argHandler==='function'){
         return argHandler.call(context,e);
       }
       else if(context.errorHandler){
         return context.errorHandler(e);
       } else{
         return this.errorHandler(context,e);
       }
     }finally {
       if(context.finally)  context.finally()
       else  this.finallyHandle(context)
     }
  }
   finallyHandle(){
     // TODO
     new Error('请实现')
   }
  errorHandler(){
    // TODO
    new Error('请实现')
   }
   init(context){
     let self=this

     context=new Proxy(context,{
      get:(target , prop)=>{
        if(!target[prop]){
          return
        }else if(typeof target[prop]==='function'&&prop.startsWith('catch')) {
          target[prop] = self.catch.bind(self, target[prop], context)
        }
         return target[prop]
      }
    })
     return context
  }
}
export default Exceptional
