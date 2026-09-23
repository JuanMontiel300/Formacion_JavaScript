// Copia y combina elemetos que haiga en un arraty

const arrayOriginal = [1, 2, 3, 4, 5]
const arrayCopia = [...arrayOriginal]


console.log(arrayOriginal)
console.log(arrayCopia)
console.log('-------------')

// combinar dos array
const combinarArrayOrinahal = [1, 2, 3, 4, 5]
const combinarArray2 = [6, 7, 8, 9, 10]

const combinarDosArray = [...combinarArrayOrinahal, ...combinarArray2]
console.log(combinarArrayOrinahal)
console.log(combinarArray2)
console.log(combinarDosArray)
console.log('--------------------')

// crear arrays con adicinal elementos

const baseArray = [1, 2, 3]
const arrayWithAdditionalElemetos = [...baseArray, 4, 5, 6]
console.log(baseArray)
console.log(arrayWithAdditionalElemetos)

//pasar elementos a funcion
function sum(a, b, c) {
    return a + b + c
}

const numbers = [1, 2, 3]
const result = sum(...numbers)

console.log(result)