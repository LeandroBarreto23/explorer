/*
  Capture 10 items para compor a lista de um supermercado.
  
  Após capturar os 10 items, imprima-os, separando por vírgula.
*/

let items = [];

// capturando os 10 items
for(let i = 0; i < 10; i++) {
  itemName = prompt('digite o item ' + (i + 1))
  items[i] = itemName
}

alert(items)