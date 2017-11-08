import usersRoutes from './users'

export default (app, container) => {
  // Create routers
  const routers = [
    usersRoutes()
  ]
  // Apply all routers
  routers.forEach(router => {
    app.use(router.routes()).use(router.allowedMethods())
  })
}
