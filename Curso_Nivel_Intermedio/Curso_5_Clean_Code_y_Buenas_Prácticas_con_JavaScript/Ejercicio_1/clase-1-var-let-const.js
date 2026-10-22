// Anterior a ES6
var name = "Juan "


// JavaScript Moderno

let name = "Pablo"
const PI = 3.1416



//var

var age = 19

{
    console.log("Valor dentro del bloque", age)
    var age = 29
}

console.log("Valor fuera del bloque", age)

age = age * 2

console.log("Valor cambaido", age)


//let
let age = 19

{
    let age = 29
    console.log("Valor dentro del bloque", age) //error
}

console.log("Valor fuera del bloque", age)

age = age * 2

console.log("Valor cambaido", age)


//const 


const pi = 3.1416

pi = 3.1315