// uma classe com a lógica dos dados: como os dados serao estruturados
export class Favorites {
  constructor(root) {
    this.root = document.querySelector(root)
  }
}



// classe que vai criar a visualizacao e eventos do html
export class FavoritesView extends Favorites {
  constructor(root) {
    super(root)

    this.update()
  }

  update() {
    const tbody = this.root.querySelector('table tbody')

    tbody.querySelectorAll('tr').forEach((tr) => {
      tr.remove
    })
  }
}