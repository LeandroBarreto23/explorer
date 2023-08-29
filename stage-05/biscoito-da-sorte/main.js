// variaveis das telas
const screenOne = document.querySelector(".screenOne")
const screenTwo = document.querySelector(".screenTwo")
// variaveis dos botoes
const cookieOpen = document.querySelector("#cookieOpen")
const openOtherCookie = document.querySelector("#openOtherCookie")

// array que armazena as frases do biscoito
const phrases = [
  "Cada linha de código é um passo rumo ao seu objetivo.",
  "Erros são oportunidades de aprendizado em código.",
  "Você está construindo o futuro com cada programa.",
  "A programação é a arte de criar possibilidades.",
  "Sua mente é a melhor ferramenta de programação."
]

// execucao de funcao
openOtherCookie.addEventListener('click', handleTryClick)
openOtherCookie.addEventListener('click', handleResetClick)

// funções
// adiciona a class 'hide' se nao tiver, remove se tiver
function toggleScreen() {
  screenTwo.classList.toggle('hide')
  screenOne.classList.toggle('hide')
}

// gerando um numero de posição aleatoria para a frase do array
function pickPhrases {
  let allPhrases = phrases.length
  let randomNumber = Math.floor(Math.random() * allPhrases)
  screenTwo.querySelector("h2").innerText = `${phrases[randomNumber]}`
}

// chamando a toggle para realizar a troca da class hide e alternar entre as telas
function handleResetClick() {
  toggleScreen()
}

// 
function handleTryClick(event) {
  toggleScreen()
  pickPhrases() 
}