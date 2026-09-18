// Capacidades que tienen las funciones al igual que otros objetos

// 1. Pasar funciones como argumentos -> callback
/*
function b() {}

function c(b) {}
c(b)


// Retornar funciones

function a() {
    function b() {}
    return b
}

// Asignar funciones a variables -> Expresión de función

const a = function() {}


// Tener propiedades y métodos

function b() {}
const obj = {}
b.call(obj)

// Anidar funciones -> Nested functions

function a() {
    function b() {

        function c() {

        }
        c()
    }
    b()

}

a()
*/

// ¿Es posible almacenar funciones en objetos?

const car = {
    name: 'Ferrari',
    marcaCarro: function marcaCarro() {
        console.log('🔥')

    }

}

car.marcaCarro()