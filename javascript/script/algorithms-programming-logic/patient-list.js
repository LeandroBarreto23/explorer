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

const patientNames = []

for(let patient of patients) {
	patientNames.push(patient.name)
}

alert(patientNames)