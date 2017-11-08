import { asClass } from 'awilix'
import GithubService from './GithubService'

export default (app, container) => {
  container.register({
    GithubService: asClass(GithubService).singleton()
  })
}
