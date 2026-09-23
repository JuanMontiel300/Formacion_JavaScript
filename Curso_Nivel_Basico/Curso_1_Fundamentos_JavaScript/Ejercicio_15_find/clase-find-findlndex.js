// Encontarar elementos

//find
const numero = [1, 2, 3, 4, 5]
const primerNumeroDeArray = numero.find(number => number >= 3)

console.log(numero)
console.log(primerNumeroDeArray)
console.log('----------------------')

//findIndex

const numero1 = [5, 10, 15, 20, 25]
const findNumber = numero1.findIndex(number => number > 20)

console.log(numero1)
console.log(findNumber)