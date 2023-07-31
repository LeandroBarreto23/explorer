// for...in

let person = {
  name: "jhon",
  age: 23,
  weight: 88.6
}

for (let property in person) {
  console.log(property)
  console.log(person[property])
}