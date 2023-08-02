// Manipulando Strings e Arrays

// Separe um texto que contem espaços, em um novo array onde cada texto é uma posicao do array.
let phrase = "Eu quero viver o amor!"
let myArray = phrase.split(" ")
console.log(myArray)

// Depois disso, transforme o array em um texto, e onde eram espaços coloque _
let phraseWithUnderscore = myArray.join("_")
console.log(phraseWithUnderscore.toLowerCase())