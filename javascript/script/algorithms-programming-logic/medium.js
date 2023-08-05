/*
  Solicitar o nome do aluno, 
  as 3 notas do bimestre,
  e calcular a média daquele aluno.

  A média positiva deverá ser maior que 6

  Se o aluno passou no bimestre, dar os 
  parabéns.

  Se o aluno não passou no bimestre, 
  motivar o aluno a dar seu melhor na prova
  de recuperação.

  Em ambos os casos, mostre uma mensagem com o nome do aluno e a nota
*/

// pegando o nome do aluno
let student = prompt("Qual o nome do aluno(a)?")

// pegando as notas
let n1 = prompt("Qual a nota da primeira prova?")
let n2 = prompt("Qual a nota da segunda prova?")
let n3 = prompt("Qual a nota da terceira prova?")

// calculando a media
let average = ( Number(n1) + Number(n2) + Number(n3) ) / 3

let result = average > 6

average = average.toFixed(1)

if (result) {
  alert("Parabens, " + student + "! Sua média foi de: " + average)
} else if (average < 3) {
  alert("Reprovado")
} else {
  alert(student + " estude para sua prova de recuperacao! Sua média foi de: " + average)
}