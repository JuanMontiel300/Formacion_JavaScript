// filter

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
const everNumbers = numbers.filter(number => number % 2 === 1)

console.log(numbers)
console.log(everNumbers)

// reduce caso 1

const numbersReduce = [1, 2, 3, 4]
const sum = numbersReduce.reduce((acumulador, evaludaor) => acumulador + evaludaor)

console.log(numbersReduce)
console.log(sum)

// reduce caso 2

const palabras = ['manzana', 'pera', 'gomitas', 'hola', 'chao', 'chao']
const palabrasFrecuency = palabras.reduce((acumulador, evaluadorAcomulador) => {
    if (acumulador[evaluadorAcomulador]) {
        acumulador[evaluadorAcomulador]++
    } else {
        acumulador[evaluadorAcomulador] = 1
    }
    return acumulador
}, {})

console.log(palabrasFrecuency)