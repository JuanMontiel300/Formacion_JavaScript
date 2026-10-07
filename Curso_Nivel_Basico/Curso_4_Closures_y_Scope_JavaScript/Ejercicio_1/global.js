// Variables

var a // declarando

var b = 'b' // declaramos / asginamos valor 

b = 'bb' //reasignacion

var a = 'aa' //redeclaracion


// Global Scape

var fruit = "Apple" // Variable Global

function bestFruit() {
    console.log(fruit)
}

bestFruit()


function countries() {
    country = 'Colombia'
    console.log(country)
}

countries()
console.log(country)