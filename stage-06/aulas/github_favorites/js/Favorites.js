// classe que vai conter a logica dos dados
// como os dados serão estruturados
export class Favorites {
  constructor(root) {
    this.root = document.querySelector(root)
  }
}



// classe que vai criar a visualizacao e eventos do HTML
export class FavortesView extends Favorites {
  //root aqui é passado no main como sendo o #app do html
  constructor(root) {
    super(root)

    this.update()
  }

  update() {
    this.removeAllTr()
  }

  // funcao para remover as linhas da tablea
  removeAllTr() {
    // localizo no #app o tbody dentro da table
    const tbody = this.root.querySelector('table tbody')
    // pego todos os tr, para cada tr, pegue o tr e remova
    tbody.querySelectorAll('tr').forEach((tr) => {
      tr.remove()
    });
  }
}