require('babel-polyfill')

import { createContainer } from 'awilix'
import SomeService from './SomeService'

class MainController {
  constructor ({ SomeService }) {
    this.some = SomeService
  }

  action () {
    this.some.serviceFunction()
  }
}

const container = createContainer()

container.registerClass({
  MainController,
  SomeService
})

container.resolve('MainController').action()
