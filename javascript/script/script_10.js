// Manipulando arrays

let techs = ["html", "css", "js"]

// adicionar um item no fim
techs.push("nodejs")

// adicionar no começo
techs.unshift("sql")

// remover do fim
techs.pop()

// remover do começo
techs.shift()

// pegar somente alguns elementos do array
//1° argumento: o index do array (0, 1, 2) - 2° argumento: o tamanho (length) do array (3)
console.log(techs.slice(1, 3))

// remover um ou mais items em qualquer posição do array
techs.splice(1, 2)

// encontrar a posição de um elemento no array
let index = techs.indexOf('css')
techs.splice(index, 1)
// console.log(index)

console.log(techs)