// variaveis das telas
const screenOne = document.querySelector(".screenOne")
const screenTwo = document.querySelector(".screenTwo")
// variaveis dos botoes
const cookieOpen = document.querySelector("#cookieOpen")
const openOtherCookie = document.querySelector("#openOtherCookie")

function toggleScreen() {
    screenOne.classList.toogle('hide')
    screenTwo.classList.toogle('hide')
}

