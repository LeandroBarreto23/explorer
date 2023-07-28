// callback function - chamar de volta

function sayMyName(name) {
  console.log('antes de executar a callback')
  name()
  console.log('depois de executar a callback')
}

sayMyName(
  () => {
    console.log('estou em uma callback')
  }
)