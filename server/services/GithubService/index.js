import fetch from 'node-fetch'

class GithubService {
  constructor () {}

  getUser (username) {
    return fetch(`https://api.github.com/users/${username}`).then(res => res.json())
  }

  getRepos (username) {
    return fetch(`https://api.github.com/users/${username}/repos`)
      .then(res => res.json())
      .then(repos => repos.map(({name, description}) => ({ name, description })))
  }
}

export default GithubService
