// operador condicional (ternário)

// dependendo da condicao, nós recebemos valores diferentes

// condição "então" valor1 se não valor2
// condition "?" value1 ":" value2

// exemplos
// café da manhã top

let pao = false
let queijo = true

const niceBreakFast = pao || queijo ? "café top" : "café ruim"

console.log(niceBreakFast)

// maior de 18 anos

let age = 16

const canDrive = age >= 18 ? "can drive" : "can't drive"

console.log(canDrive)