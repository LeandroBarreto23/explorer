import { GithubUser } from "./GithubUser.js"

// classe que vai conter a logica dos dados
// como os dados serão estruturados
export class Favorites {
  constructor(root) {
    this.root = document.querySelector(root)
    this.load()
  }

  // crio um array de objetos com os dados de cada usuario
  load() {
    // no local storage é salvo todo tipo de dado em formato de string, por isso usamos o JSON.parse() para transformar a string em um objeto
    this.entries = JSON.parse(localStorage.getItem('@github-favorites:')) || []
  }

  save() {
    localStorage.setItem('@github-favorites:', JSON.stringify(this.entries))
  }

  // async define que a função será assincrona
  async add(username) {
    // await vai esperar a promeça retornar o dado para continuar suas funcionalidades
    try {
      const userExists = this.entries.find(entry => entry.login === username)

      if(userExists) {
        throw new Error('Usuário já cadastrado')
      }

      const user = await GithubUser.search(username)
      
      if(user.login === undefined) {
        throw new Error('Usuário nao encontrado!')
      }

      this.entries = [user, ...this.entries]
      this.update()
      this.save()
    } catch(error) {
      alert(error.message)
    }
  }

  delete(user) {
    //higher order functions (map, filter, find, reduce)
    const filteredEntries = this.entries
    .filter(entry => entry.login !== user.login)

    // principio da imutabilidade - reatribuir o resultado da funcao ao array original (apago todo o original e coloco um novo array)
    this.entries = filteredEntries
    this.update()
  }
}

// classe que vai criar a visualizacao e eventos do HTML
export class FavoritesView extends Favorites {
  //root aqui é passado no main como sendo o #app do html
  constructor(root) {
    super(root)

  // localizo no #app o tbody dentro da table
  this.tbody = this.root.querySelector('table tbody')

    this.update()
    this.onAdd()
  }

  onAdd() {
    const addButton = this.root.querySelector('.search button')
    addButton.onclick = () => {
      // desestruturacao de dado pegando o valor do input (value = input.value)
      const { value } = this.root.querySelector('.search input')

      this.add(value)
    }
  }

  update() {
    this.removeAllTr()

    //para cada usuario vou rodar uma funcao
    this.entries.forEach(user => {
      const row = this.createRow()

      row.querySelector('.user img').src = `https://github.com/${user.login}.png`
      row.querySelector('.user img').alt = `Imagem de ${user.name}`
      row.querySelector('.user a').href = `https://github.com/${user.login}`
      row.querySelector('.user p').textContent = user.name
      row.querySelector('.user span').textContent = user.login
      row.querySelector('.repositories').textContent = user.public_repos
      row.querySelector('.followers').textContent = user.followers

      row.querySelector('.remove').onclick = () => {
        const isOk = confirm('Tem certeza que deseja deletar essa linha?')
        if(isOk) {
          this.delete(user)
        }
      }

      this.tbody.append(row)
    })
  }

  createRow() {
    const tr = document.createElement('tr')
    tr.innerHTML = `
      <td class="user">
        <img src="https://github.com/diego3g.png" alt="Imagem de maykbrito">
        <a href="https://github.com/diego3g" target="_blank">
          <p>Diego Fernandes</p>
          <span>diego3g</span>
        </a>
      </td>
      <td class="repositories">48</td>
      <td class="followers">22503</td>
      <td>
        <button class="remove">&times;</button>
      </td>
    `

    return tr
  }

  // funcao para remover as linhas da tablea
  removeAllTr() {
    // pego todos os tr, para cada tr, pegue o tr e remova
    this.tbody.querySelectorAll('tr').forEach((tr) => {
      tr.remove()
    });
  }
}