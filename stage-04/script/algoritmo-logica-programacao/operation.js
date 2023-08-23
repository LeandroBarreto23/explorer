/*
  Capturar 2 números
  e fazer as operações matemáticas
  de soma, subtração, multiplicação,
  divisão e resto da divisão.

  E para cada operação, mostrar um alerta
  com o resultado.
*/

alert("Iremos realizar algumas operações matématicas")

let firstNumber = prompt("digite o primeiro número: ")
let secondNumber = prompt("digite o segundo número: ")

firstNumber = Number(firstNumber)
secondNumber = Number(secondNumber)

const sum = firstNumber + secondNumber
const sub = firstNumber - secondNumber
const mtp = firstNumber * secondNumber
const div = firstNumber / secondNumber
const rest = firstNumber % secondNumber

alert('Soma: ' + sum)
alert('Subtração: ' + sub)
alert('Multiplicação: ' + mtp)
alert('Divisão: ' + div)
alert('Resto da divisão: ' + rest)