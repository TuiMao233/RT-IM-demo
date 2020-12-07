/*
 * @Author: Mr.Mao
 * @LastEditors: Mr.Mao
 * @Date: 2020-12-07 09:02:16
 * @LastEditTime: 2020-12-07 17:15:48
 * @Description: 后台应用出口
 * @任何一个傻子都能写出让电脑能懂的代码，而只有好的程序员可以写出让人能看懂的代码
 */
import Koa from 'koa'
import bodyParser from 'koa-bodyparser'
import router from './routes'
import graphql from './graphql'
import excepition from './exception'
// 创建app应用对象
const app = new Koa()

app
  .use(excepition())
  .use(bodyParser())
  .use(router.routes())
  .use(router.allowedMethods())
  .use(graphql)

// 监听端口号, 启动服务器
app.listen(3001, () =>
  console.log('服务器启动成功, 地址: http://localhost:3001/')
)
