export class GithubUser {
  static search(username) {
    // busca na api os dados em string
    const endpoint = `https://api.github.com/users/${username}`

    //no fim das contas o fetch me retorna os dados
    return fetch(endpoint)
    // QUANDO esse dado vier, transformo ele em JSON
    .then(data => data.json())
    // Pego somente os dados que eu quero fazendo desestruturação de objeto
    .then(({ login, name, public_repos, followers}) => ({
      login,
      name,
      public_repos,
      followers 
    }))
  }
}