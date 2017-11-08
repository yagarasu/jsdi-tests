require('babel-polyfill')

import Koa from 'koa'
import { createContainer } from 'awilix'
import services from './services'
import middlewares from './middlewares'
import routes from './routes'

const app = new Koa()
const container = createContainer()

// Bootstrap
services(app, container)
middlewares(app, container)
routes(app, container)

// Listen
app.listen(3000)
console.log('Listening...')
