// function scope
let subject

function createThink() {
  subject = 'study'
}

console.log(subject)
createThink()
console.log(subject)

// subject começa sem valor (undefined)
// createThink() atualiza o valor do subject
// subject tem seu valor atribuido e exibido
