class UsersController {
  constructor ({ GithubService }) {
    this.GithubService = GithubService
  }

  hello (ctx, next) {
    ctx.body = { message: 'Users!' }
    return next()
  }

  async getUser (ctx, next) {
    const { name } = ctx.params
    const user = await this.GithubService.getUser(name)
    ctx.body = user
    return next()
  }

  async getRepos (ctx, next) {
    const { name } = ctx.params
    const repos = await this.GithubService.getRepos(name)
    ctx.body = repos
    return next()
  }
}

export default UsersController
