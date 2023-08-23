// throw - disparar, lançar

function sayMyName(name = '') {
  if(name ==='') {
    throw "Nome é obrigatório"
  }

  console.log(name)
}

// try (tentar)...catch (pegar)
try {
  sayMyName('Leandro')
} catch(e) {
  console.log(e)
}

// try tenta executar a função, e caso haja algum erro o catch permite que esse erro seja capturado e seu código continue rodando. Caso contrário se nao houver o try/catch o código da o erro e a aplicação é parada.

console.log('após o try/catch')
