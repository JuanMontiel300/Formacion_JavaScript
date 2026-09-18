// dos formas de ustlizar que es new Array() o Array()

const fruta = Array('manzana', 'banano', 'fresa', 'pera')
console.log(fruta)

const Jugador = Array(12)
console.log(Jugador)


const number = Array(1, 2, 3, 4, 5)
console.log(number)

// sintaci de un Array

const number1 = [4]
console.log(number1)

const arrayBavio = []
console.log(arrayBavio)


const deportes = ['futbol', 'tenis', 'ciclismo']
console.log(deportes)

const recetaAmburguesa = [
    'Amburguesa',
    2,
    true,
    {
        ingredientes: 'pan',
        cantidad: 2

    },
    false
]

console.log(recetaAmburguesa)

// acceder a los datos de un elemto array
const primeraFruta = fruta[0]
console.log(primeraFruta)

// El tamano de una array
const numeroFrutas = fruta.length
console.log(numeroFrutas)


// mutabilidad

fruta.push('watermelon')
console.log(fruta)

//inmutabilidad 

const newfrutas = fruta.concat(['cereza', 'guanabana'])
console.log(fruta)
console.log(newfrutas)


//checking arrys with Arry.isArry()

const isArray = Array.isArray(fruta)

console.log(isArray)