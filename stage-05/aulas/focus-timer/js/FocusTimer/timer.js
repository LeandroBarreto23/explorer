import state from './state.js'
import * as el from './elements.js'

export function updateDisplay(minutes, seconds) {
  minutes = minutes ?? state.minutes 
  seconds = seconds ?? state.seconds
  /* ?? -> nullish coalesing operator - ele observa a variavel pra ver se o valor dela é nulo, se for ele atribui o valor do state*/
  el.minutes.textContent = String(minutes).padStart(2, "0")
  el.seconds.textContent = String(seconds).padStart(2, "0")
}