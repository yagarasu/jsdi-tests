import Router from 'koa-router'
import { makeClassInvoker } from 'awilix-koa'

import UsersController from '../../controllers/users'

export default () => {
  const usersRouter = new Router({
    prefix: '/users'
  })

  const controller = makeClassInvoker(UsersController)

  usersRouter
    .get('/', controller('hello'))
    .get('/:name', controller('getUser'))
    .get('/:name/repos', controller('getRepos'))

  return usersRouter
}
