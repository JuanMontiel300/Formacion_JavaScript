/*console.log(animal)
var animal = 'Dog'
console.log(animal)*/


// var elmo // undefined
// JavaScript "sube" la declaración de la variable,
// pero NO sube el valor que le asignamos.
// Por eso en este momento el valor de elmo es undefined.


nameDog() // podemos llamar la función antes de escribirla


function nameDog() {
    // La función también puede utilizar elmo,
    // pero en este momento elmo todavía tiene el valor undefined.
    console.log(`El mejor perrito es ${elmo}`)
}


var elmo = 'lucas' // aquí finalmente asignamos el valor 'lucas'