// Você pode apresentar o resultado tanto no **console** quanto em um **alerta** no navegador.
//     💡 Para saber o tipo de dado você pode usar o operador `typeof`

// 1. Crie um script que exiba a mensagem "Hello World!" em um alerta no navegador.
alert("Hellow world");

// 2. Crie um script que declare uma variável e verifique se o seu valor é um número. Se for, exiba a mensagem "É um número", caso contrário, exiba a mensagem "Não é um número".

    
// 3. Crie um script que declare uma variável e verifique se o seu valor é uma string. Se for, exiba a mensagem "É uma string", caso contrário, exiba a mensagem "Não é uma string".


// 4. Crie um script que declare uma variável e verifique se o seu valor é um booleano. Se for, exiba a mensagem "É um booleano", caso contrário, exiba a mensagem "Não é um booleano".


// 5. Crie um script que declare duas variáveis e exiba o resultado da soma entre elas.
alert("Insira dois numeros para realizar a soma entre eles.")
let numberOne = Number(prompt("insira o primeiro numero: "));
let numberTwo = Number(prompt("insira o segundo número: "));
let sum = numberOne + numberTwo

alert("a soma dos números é: " + sum);

// 6. Crie um script que declare duas variáveis e exiba o resultado da subtração entre elas.
alert("Insira dois numeros para realizar a subtração entre eles.")
let numberThree = Number(prompt("insira o primeiro número: "))
let numberFour = Number(prompt("insira o segundo número: "))
let sub = numberThree - numberFour

alert("a subtração dos números é: " + sub);

// 7. Crie um script que declare duas variáveis e exiba o resultado da multiplicação entre elas.
alert("Insira dois numeros para realizar a multiplicação entre eles.")
let numberFive = Number(prompt("insira o primeiro número: "))
let numberSix = Number(prompt("insira o segundo número: "))
let mtp = numberFive * numberSix

alert("a multiplicação dos números é: " + mtp);

// 8. Crie um script que declare duas variáveis e exiba o resultado da divisão entre elas.
alert("Insira dois numeros para realizar a divisão entre eles.")
let numberSeven = Number(prompt("insira o primeiro número: "))
let numberEight = Number(prompt("insira o segundo número: "))
let div = numberSeven / numberEight

alert("a divisão dos números é: " + div);

// 9. Crie um script que declare uma variável e verifique se o seu valor é um número par. Se for, exiba a mensagem "É um número par", caso contrário, exiba a mensagem "Não é um número par".
let numberPair = Number(prompt("insira um número para saber se ele é par ou não"))
let isParOrNot = numberPair % 2

if (isParOrNot === 1) {
  alert(`O número ${numberPair} não é par`)
} else {
  alert(`O número ${numberPair} é par`)
}

// 10. Crie um script que declare uma variável e verifique se o seu valor é um número ímpar. Se for, exiba a mensagem "É um número ímpar", caso contrário, exiba a mensagem "Não é um número ímpar".
let numberOdd = Number(prompt("Insira um número para saber se ele é impar ou não"))
let isOddOrNot = numberOdd % 2

if(isOddOrNot === 0) {
  alert(`O número ${numberOdd} não é impar`)
} else {
  alert(`O número ${numberOdd} é impar`)
}

