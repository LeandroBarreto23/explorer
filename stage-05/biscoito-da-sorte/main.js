// pegando os elementos das telas e trazendo em variaveis JS
const screenOne = document.getElementById('screenOne')
const screenTwo = document.getElementById('screenTwo')

// funcao para adicionar a class hide para alternar entre as duas telas
function handleClick(){
  screenOne.classList.toggle('hide')
  screenTwo.classList.toggle('hide')
}