/* 

Nesse desafio, você irá solicitar ao usuário que ele insira **dois números** e, a partir daí, calcular:

- [ ok ]  A soma dos dois números;
- [ ok ]  A subtração dos dois números;
- [ ok ]  A multiplicação dos dois números;
- [ ok ]  A divisão dos dois números;
- [ ok ]  O resto da divisão dos dois números;
- [ ]  Verifique se a soma dos dois números é par ~~(ou ímpar)~~;
- [ ok ]  Verifique se os dois números inseridos são iguais ~~(ou diferentes)~~.

*/

alert("Insira dois números e, a partir deles vamos fazer algumas operações matemáticas.")

let numberOne = Number(prompt ("insira o primeiro número: "))
let numberTwo = Number(prompt ("insira o segundo número: "))

const sum = numberOne + numberTwo
const sub = numberOne - numberTwo
const mtp = numberOne * numberTwo
const div = numberOne / numberTwo
const res = numberOne % numberTwo

alert(`A soma é: ${sum}`)
alert(`A divisão é: ${sub}`)
alert(`A multiplicação é: ${mtp}`) 
alert(`A divisão é: ${div}`)
alert(`E o resto é: ${res}`)

if(numberOne == numberTwo) {
  alert("Os números inseridos são iguais.")
} else {
  alert("Os números inseridos são diferentes.")
}