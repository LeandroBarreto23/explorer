// classe que vai conter a logica dos dados
// como os dados serão estruturados
export class Favorites {
  constructor(root) {
    this.root = document.querySelector(root)
    this.load()
  }

  // crio um array de objetos com os dados de cada usuario
  load() {
    this.entries = [
      {
      login: 'maykbrito',
      name: 'Mayk Brito',
      public_repos: '76',
      followers: '120000'
      },
      {
      login: 'diego3g',
      name: 'Diego Fernandes',
      public_repos: '76',
      followers: '120000'
      }
    ]
  }

  delete(user) {
    //higher order functions (map, filter, find, reduce)
    const filteredEntries = this.entries
    .filter(entry => entry.login !== user.login)
    
    console.log(filteredEntries)
  }
}

// classe que vai criar a visualizacao e eventos do HTML
export class FavortesView extends Favorites {
  //root aqui é passado no main como sendo o #app do html
  constructor(root) {
    super(root)

  // localizo no #app o tbody dentro da table
  this.tbody = this.root.querySelector('table tbody')

    this.update()
  }

  update() {
    this.removeAllTr()

    //para cada usuario vou rodar uma funcao
    this.entries.forEach(user => {
      const row = this.createRow()

      row.querySelector('.user img').src = `https://github.com/${user.login}.png`
      row.querySelector('.user img').alt = `Imagem de ${user.name}`
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