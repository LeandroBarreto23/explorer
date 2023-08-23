/* 
  Crie uma lista de pacientes

  Cada paciente dentro da lista, deverá conter
    nome
    idade
    peso
    altura

  Escreva uma lista contendo o nome, idade, peso e altura dos pacientes
*/

const patients = [
	{
		name: "Luiz",
		age: 20,
		weight: 100,
		height: 190
	},
	{
		name: "Amanda",
		age: 23,
		weight: 60,
		height: 165
	},
	{
		name: "Juliana",
		age: 19,
		weight: 58,
		height: 160
	},
]

// nome
const patientNames = []
for(let patient of patients) {
	patientNames.push(patient.name)
}

// idade
const patientAges = []
for(let patient of patients) {
	patientAges.push(patient.age)
}

// peso
const patientWeight = []
for(let patient of patients) {
	patientWeight.push(patient.weight)
}

// altura
const patientHeight = []
for(let patient of patients) {
	patientHeight.push(patient.height)
}

alert(`Os pacientes ${patientNames} tem ${patientAges} anos de idade, pesam ${patientWeight} KGs e tem uma altura de ${patientHeight} centímetros.`)