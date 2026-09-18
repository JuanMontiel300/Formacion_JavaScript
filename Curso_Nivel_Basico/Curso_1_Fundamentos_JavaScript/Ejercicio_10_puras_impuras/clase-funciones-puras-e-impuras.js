// Funciones puras

// Side Effects
// 1. Modificar variables globales
// 2. Modificar parámetros
// 3. Solicitudes HTTP
// 4. Imprimir mensajes en pantalla o consola
// 5. Manipulación del DOM
// 6. Obtener la hora actual


function sum(a, b) {
    return a + b
}

// Funciones impuras
function sum(a, b) {
    console.log('A:', a)
    return a + b
}

let total = 0

function sum(a) {
    total += a
    return total
}

// Función pura


function cudrado(x) {

    return x * x
}

function addTen(y) {
    return y + 10
}

const numero = 5
const finalResultado = addTen(cudrado(numero))
console.log('Final del Resultado:', finalResultado)