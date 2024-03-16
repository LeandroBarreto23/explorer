// logica dos dados - como serao estruturados
export class Favorites {
  constructor(root) {
    this.root = document.querySelector(root)

    this.tbody = this.root.querySelector('table tbody')

    this.load()
  }

  load() {
    this.entries = JSON.parse(localStorage.getItem('@github-favorites:')) || []
  }

  delete(user) {
    const filteredEntries = this.entries
    .filter(entry => entry.login !== user.login)

    this.entries = filteredEntries
    this.update()
  }
}

// criar a visualizacao e eventos do HTML
export class FavoritesView extends Favorites {
  constructor(root) {
    super(root)

    this.update()
  }

  update() {
    this.removeAllTr()
    
    this.entries.forEach(user => {
      const row = this.createRow()

      row.querySelector('.user img').src = `https://github.com/${user.login}.png`
      row.querySelector('.user img').alt = `Imagem de ${user.name}`
      row.querySelector('.user p').textContent = user.name
      row.querySelector('.user span').textContent = `/${user.login}`
      row.querySelector('.public_repos').textContent = user.public_repos
      row.querySelector('.followers').textContent = user.followers

      row.querySelector('.btn-remove').onclick = () => {
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
      <img src="https://github.com/maykbrito.png" alt="Imagem de maykbrito">
      <a href="https://github.com/maykbrito" target="_blank">
        <p>Mayk Brito</p>
        <span>/maykbrito</span>
      </a>
    </td>
    <td class="public_repos">123</td>
    <td class="followers">1234</td>
    <td class="action">
      <button class="btn-remove">
        Remover
      </button>
    </td>
    `

    return tr
  }
  
  removeAllTr() {
    this.tbody.querySelectorAll('tr').forEach((tr) => {
      tr.remove()
    })
  }
}