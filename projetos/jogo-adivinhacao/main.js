// puxando os elementos do HTML para o JS
const screenOne = document.querySelector(".screenOne")
const screenTwo = document.querySelector(".screenTwo")
const btnTry = document.querySelector("#btnTry")
const btnReset = document.querySelector("#btnReset")

const randomNumber = Math.round(Math.random() * 10)
let xAttempts = 1

// função callback
function handleTryClick(event) {
  event.preventDefault() //nao faça o padrao desse evento (neste caso, nao envie o formulario)
  
  const inputNumber = document.querySelector("#inputNumber")

  if(Number(inputNumber.value) == randomNumber) {
    screenOne.classList.add("hide")
    screenTwo.classList.remove("hide")

    document.querySelector(".screenTwo h2")
    .innerText = `Você acertou em ${xAttempts} tentativas`
  }

  inputNumber.value = "" //para resetar o valor do input toda vez q errar o numero correto
  xAttempts++
}

// função callback
btnTry.addEventListener('click', handleTryClick)
btnReset.addEventListener('click', function() {
  screenOne.classList.remove("hide")
  screenTwo.classList.add("hide")
  xAttempts = 1
})