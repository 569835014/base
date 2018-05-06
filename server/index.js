const Koa = require('koa2')
const app = new Koa()
const Router = require('koa-router')
let router = new Router()
const main = Context => {
  let {userName,password}=Context.request.body
  if(userName==='admin'&&password==='111111'){
    return Context.body={
      userName,
      token:'57af5b10-3a76-11e5-922a-75f42afeee38',
      name:'zhangmin',
    }
  }

};
// router.post('/login', main)
router.post('/login', main)
app.use(router.routes())
app.use(router.allowedMethods())
app.listen(3000, () => {
  console.log('[demo] route-use-middleware is starting at port 3000')
})
