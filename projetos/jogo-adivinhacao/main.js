// Variaveis
const screenOne = document.querySelector(".screenOne")
const screenTwo = document.querySelector(".screenTwo")
const btnTry = document.querySelector("#btnTry")
const btnReset = document.querySelector("#btnReset")

let randomNumber = Math.round(Math.random() * 10)
let xAttempts = 1

// eventos
btnTry.addEventListener('click', handleTryClick)
btnReset.addEventListener('click', handleResetClick)
document.addEventListener('keydown', keyReset)


// função callback
function handleTryClick(event) {
  event.preventDefault() //nao faça o padrao desse evento (neste caso, nao envie o formulario)
  
  const inputNumber = document.querySelector("#inputNumber")

  if(Number(inputNumber.value) == randomNumber) {
    toggleScreen()

    screenTwo.querySelector("h2").innerText = `Você acertou em ${xAttempts} tentativas`
  }

  //resetar o valor do input
  inputNumber.value = "" 
  xAttempts++
}

function handleResetClick() {
  toggleScreen()
  xAttempts = 1
  randomNumber = Math.round(Math.random() * 10)
}

function toggleScreen() {
  screenOne.classList.toggle("hide")
  screenTwo.classList.toggle("hide")
}

function keyReset(event) {
  if(event.key == 'Enter' && screenOne.classList.contains('hide')) {
    handleResetClick()
  }
}