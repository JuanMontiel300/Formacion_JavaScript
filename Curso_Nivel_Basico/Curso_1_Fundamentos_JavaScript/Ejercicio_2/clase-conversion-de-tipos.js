//Explicit Type Casting

const string = '19'
const interger = parseInt(string)
console.log(interger)
console.log(typeof interger)


const stringDecimal = '3.14'
const float = parseFloat(stringDecimal)
console.log(float)
console.log(typeof float)


const binary = '1010'
const decimal = parseInt(binary, 5)
console.log(decimal)
console.log(typeof decimal)

// Implicit Type Casting

const sum = '6' + 3
console.log(sum)

const sumWithBoolean = '3' + true
console.log(sumWithBoolean)

const sumWithNumber = 3 + true
console.log(sumWithNumber)


const stringValue = '10'
const numberValue = 10
const booleanValue = true

console.log(stringValue + stringValue)
console.log(stringValue + numberValue)
console.log(stringValue + booleanValue)
console.log('-------------------------')
console.log(numberValue + stringValue)
console.log(numberValue + numberValue)
console.log(numberValue + booleanValue)
console.log('--------------------------')
console.log(booleanValue + stringValue)
console.log(booleanValue + numberValue)
console.log(booleanValue + booleanValue)