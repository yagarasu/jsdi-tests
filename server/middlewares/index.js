import { scopePerRequest } from 'awilix-koa'

export default (app, container) => {
  // Dependency injection
  app.use(scopePerRequest(container))

  // Logger
  app.use(async (ctx, next) => {
    const start = Date.now()
    console.log(`${ctx.method}:${ctx.url} - Start`)
    await next()
    const elapsed = Date.now() - start
    console.log(`${ctx.method}:${ctx.url} - End (${elapsed}ms)`)
  })
}
