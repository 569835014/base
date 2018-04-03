const Koa = require('koa2')
const app = new Koa()
const KoaBody=require('koa-bodyparser')
const Router = require('koa-router')
let router = new Router()
// router.post('/login', main)
router.post('/user/admin/login', (ctx,next)=>{
  console.info(ctx.request.body)
  let {userName,password}=ctx.request.body;
  console.info(userName)
  if(userName==='admin'&&password==='111111'){
    return ctx.body= {
      message:'登陆成功！',
      state:'S0000',
      data:{
        userName,
        nickname:"你的智商已下线",
        token:'57af5b10-3a76-11e5-922a-75f42afeee38',
        phone:"13588067285",
        email:"569835014@qq.com",
        avatarUrl:"http://wx.qlogo.cn/mmopen/vi_32/DYAIOgq83eoG8ib2gglicEVjyCy7z1ORtxVicSVE7XSaGhzlM3thIQgziaE8keJpl2NcuUmKia0hRupvGziajJoIia9TQ/0"
      }
    }
  }else if(userName!=='admin'){
    return ctx.body= {
      message:'该账号不存在',
      state:'A0000',
    }
  }else if(password!=='111111'){
    return ctx.body= {
      message:'密码错误',
      state:'A0000',
    }
  }
})
app.use(KoaBody())
app.use(router.routes())
app.use(router.allowedMethods())
app.listen(3000, () => {
  console.log('[demo] route-use-middleware is starting at port 3000')
})
