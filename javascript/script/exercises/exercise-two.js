/* 
Nesse desafio você irá criar uma lista de **estudantes** e, cada estudante dentro dessa lista, deverá conter os seguintes dados:

- nome;
- nota da primeira prova;
- nota da segunda prova.

Depois de criada a lista:

- [ ok ]  Crie uma **função** que irá calcular a média das notas de cada aluno;
- [ ]  Supondo que a média, para esse concurso é **7**, verifique **se** cada aluno obteve sucesso ou não em entrar no concurso e mostre uma mensagem na tela.
*/

let studentsList = [
	{
		name: "Leandro",
		firstNote: 8,
		secondNote: 9
	},
	{
		name: "Pedro",
		firstNote: 5,
		secondNote: 7
	},
	{
		name: "Jessica",
		firstNote: 9,
		secondNote: 9
	},
	{
		name: "Sara",
		firstNote: 10,
		secondNote: 9
	}
]

function calcMedia(firstNote, secondNote){
	let media = (firstNote + secondNote) / 2
	return media
}

for (let student of studentsList) {
	let individualMedia = calcMedia(student.firstNote, student.secondNote)
	let approvedOrNot  = individualMedia < 7 ? ' Infelizmente você nao passou, tente novamente.' : ' Parabens! você passou.'

alert(`A média do(a) ${student.name} é ${individualMedia}.${approvedOrNot} `)
}