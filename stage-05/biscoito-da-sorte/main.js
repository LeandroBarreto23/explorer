// pegando os ELEMENTOS das telas e trazendo em variaveis JS
const screenOne = document.getElementById('screenOne')
const screenTwo = document.getElementById('screenTwo')
const cookieOpen = document.getElementById('cookieOpen')
const openAnotherCookie = document.getElementById('openAnotherCookie')
const message = document.getElementById('message')

// array de frases
let allPhrases = [
  "O sucesso é a soma de pequenos esforços repetidos dia após dia.",
  "Acredite em si mesmo e tudo será possível.",
  "A jornada de mil milhas começa com um único passo.",
  "Nunca é tarde demais para ser quem você poderia ter sido.",
  "A persistência é o caminho do êxito.",
  "Você é mais forte do que pensa que é.",
  "Cada novo dia é uma nova chance de mudar sua vida.",
  "O otimismo é a fé que leva à realização.",
  "Não se preocupe com os obstáculos, eles são parte do caminho.",
  "Se você sonha, você pode fazer."
]

// funcao para selecionar uma frase aleatória
function randomPhrase() {
  let randomNumber = Math.floor(Math.random() * allPhrases.length) //sorteei um numero do tamanho do array para agir como o indice do array
  let chosenPhrase = allPhrases[randomNumber] //atribui a frase do indice a uma variavel
  return chosenPhrase //retornei o valor da posicao do array pra fora da funcao
}  

// funcao para exibir a frase aleatória no HTML
function displayRandomPhrase() {
  let displayPhrase = randomPhrase()
  message.textContent = displayPhrase 
}

displayRandomPhrase()

// funcao para alternar entre as telas
function toggleScreen() {
  screenOne.classList.toggle('hide')
  screenTwo.classList.toggle('hide')
}

// funcao de click ao para abrir o biscoito
function handleClick() {
  toggleScreen()
  displayRandomPhrase()
}

// funcao de click para abrir outro biscoito
function btnResetClick() {
  toggleScreen()
  displayRandomPhrase()
}

// pegando os EVENTOS de click
cookieOpen.addEventListener('click', handleClick)
openAnotherCookie.addEventListener('click', btnResetClick)
