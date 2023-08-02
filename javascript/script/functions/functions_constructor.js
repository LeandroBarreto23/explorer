// function() constructor
//  * expressão new
//  * criar um novo objeto
//  * this keyword

function Person(name) {
  this.name = name
  this.walk = function() {
    return this.name + " esta andando"
  }
}
const leandro = new Person("leandro")
const joao = new Person("João")
console.log(leandro.walk())
console.log(joao.walk())