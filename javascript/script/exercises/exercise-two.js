/* 
Nesse desafio você irá criar uma lista de **estudantes** e, cada estudante dentro dessa lista, deverá conter os seguintes dados:

- nome;
- nota da primeira prova;
- nota da segunda prova.

Depois de criada a lista:

- [ ok ]  Crie uma **função** que irá calcular a média das notas de cada aluno;
- [ ]  Supondo que a média, para esse concurso é **7**, verifique **se** cada aluno obteve sucesso ou não em entrar no concurso e mostre uma mensagem na tela.
*/

let students = [
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

function media(firstNote, secondNote){
	return ((firstNote + secondNote) / 2)
}

function printMediaStudent(student){
	return `A média do(a) aluno(a) ${student.name} é: ${media(student.firstNote, student.secondNote)}`
}

for (let student of students) {
	let mediaMessage = printMediaStudent(student)
	alert(mediaMessage)
}