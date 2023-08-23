// variaveis das telas
const screenOne = document.querySelector(".screenOne")
const screenTwo = document.querySelector(".screenTwo")
// variaveis dos botoes
const cookieOpen = document.querySelector("#cookieOpen")
const openOtherCookie = document.querySelector("#openOtherCookie")

// função callback - adiciona a class 'hide' se nao tiver, remove se tiver
function toggleScreen() {
    screenOne.classList.toogle('hide')
    screenTwo.classList.toogle('hide')
}

// array que armazena as frases do biscoito
const frases = [
    "Cada linha de código é um passo rumo ao seu objetivo.",
    "Erros são oportunidades de aprendizado em código.",
    "Você está construindo o futuro com cada programa.",
    "A programação é a arte de criar possibilidades.",
    "Sua mente é a melhor ferramenta de programação."
]