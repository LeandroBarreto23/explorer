export class Router {

  routes = {}

  add(routeName, page) {
    this.routes[routeName] = page
  }

  route(event) {
    event = event || window.event
    event.preventDefault()
    
    //atualiza o historico do navegador. O pushState atualiza a URL sem causar um carregamento da pagina
    window.history.pushState({}, "", event.target.href)
  
    // chama a funcao handle que é responsavel por manipular a rota da url
    this.handle()
  }

  handle() {
    // desestruturacao de objeto - pathname representa o caminho da URL (.../algumacoisa)
    const { pathname } = window.location
    // crio uma variavel que busca no OBJETO "routes" o caminho da URL pathname, se nao encontrar usa a 404(error)
    const route = this.routes[pathname] || this.routes[404]
    
    // fetch (busca) um recurso na constante route
    fetch(route)
    // then() processa a resposta e atribuo a variavel "data" e text() transforma essa resposta em texto
    .then(data => data.text())
    // entao essa resposta ja em texto é atribuida a variavel "html" e em seguida busco meu objeto com id #app e insiro o conteudo html dentro dessa div
    .then(html => {
      document.querySelector('#app').innerHTML = html
    })
  }
}
