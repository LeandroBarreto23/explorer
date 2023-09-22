import { Modal } from './modal.js'
import { alertError } from "./alert-error.js"

// variables
const form = document.querySelector('form')
const inputWeight = document.querySelector('#weight')
const inputHeight = document.querySelector('#height')

form.onsubmit = event => {
  // preventDefault é uma função que remove o padrao do comportamento, neste caso esta fazendo com que o botao do submit nao recarregue a página par enviar os dados
  event.preventDefault()  
  // pegando os valores de peso e altura no input
  const weight = inputWeight.value
  const height = inputHeight.value
  
  const showAlertError = notANumber(weight) || notANumber(height)

  if(showAlertError) {
    alertError.open()
    return;
  }

  alertError.close()

  const result = IMC(weight, height)
  const message = `Seu IMC é de ${result}`
  Modal.message.innerText = message
  // modalWrapper.classList.add('open')
  Modal.open()
}

function notANumber(value) {
  return isNaN(value) || value ==""
}

function IMC(weight, height) {
  return (weight / ((height / 100) ** 2)).toFixed(2)
}