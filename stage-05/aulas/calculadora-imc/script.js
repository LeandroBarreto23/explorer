// variables
const form = document.querySelector('form')
const inputWeight = document.querySelector('#weight')
const inputHeight = document.querySelector('#Height')

/* 

3 maneiras de criar e atribuir funcao a um evento

ARROW FUNCTION
form.onsubmit = (evento) => {
  mesmo código abaixo
}


form.onsubmit = handleSubmit
function handleSubmit(event) {
  mesmo código abaixo
}

*/

form.onsubmit = function(event) {
  // preventDefault é uma função que remove o padrao do comportamento, neste caso esta fazendo com que o botao do submit nao recarregue a página par enviar os dados
  event.preventDefault()
  
  // pegando os valores de peso e altura no input
  const weight = inputWeight.value
  const height = inputHeight.value
}