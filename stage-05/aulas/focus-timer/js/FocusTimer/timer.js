import state from './state.js'
import * as el from './elements.js'
import { reset } from './actions.js'
import { kitchenTimer } from './sounds.js'
// recursão - funcao que chama ela mesma em algum momento, mas precisa ter algum momento onde ela para se nao pode haver problemas.
// setTimeout() funcao que executa uma funcao depois de alguns milisegundos.
export function countdown() {
  clearTimeout(state.countdownId)

  if(!state.isRunning) {
    return
  }

  let minutes = Number(el.minutes.textContent)
  let seconds = Number(el.seconds.textContent)

  seconds--

  if (seconds < 0) {
    seconds = 59
    minutes--
  }

  if (minutes < 0) {
    reset()
    kitchenTimer.play()
    return
  }

  updateDisplay(minutes, seconds)

  state.countdownId = setTimeout(() => countdown(), 1000)
}

export function updateDisplay(minutes, seconds) {
  minutes = minutes ?? state.minutes 
  seconds = seconds ?? state.seconds
  /* ?? -> nullish coalesing operator - ele observa a variavel pra ver se o valor dela é nulo, se for ele atribui o valor do state*/
  el.minutes.textContent = String(minutes).padStart(2, "0")
  el.seconds.textContent = String(seconds).padStart(2, "0")
}