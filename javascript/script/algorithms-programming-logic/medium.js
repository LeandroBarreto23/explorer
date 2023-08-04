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
let Name = prompt("Qual é o seu nome: ")

// pegando as 3 notas do bimestre
let medOne = prompt("digite qual foi a sua primeira nota: ")
let medTwo = prompt("digite qual foi a sua segunda nota: ")
let medThree = prompt("digite qual foi a sua terceira nota: ")

// transformando a string em number
medOne = Number(medOne)
medTwo = Number(medTwo)
medThree = Number(medThree)

// calculando a média
const medium = (medOne + medTwo + medThree) / 3

// média positiva > 6
if(medium >= 6) {
  alert("Parabens " + Name + ", a sua média do bimestre foi de " + (medium.toFixed(1)) + " pontos. Você foi aprovado.")
}else {
  alert("Sinto muito " + Name + ", a sua média foi de " + (medium.toFixed(1)) +" pontos e está abaixo do esperado. Mas nao desista, tente novamente na prova de recuperação.")
}