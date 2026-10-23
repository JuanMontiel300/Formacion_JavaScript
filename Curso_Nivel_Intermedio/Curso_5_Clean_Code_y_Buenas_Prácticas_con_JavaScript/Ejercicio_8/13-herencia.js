// Clase padre
function Person(name) {
    this.name = name
}
Person.prototype.greet = function() {
    console.log("hello I am " + this.name)
}

// Clase Hijo\

function Developer(name) {
    this.name = name
}

Developer.prototype = Object.create(Person.prototype)


Developer.prototype.writeCode = function(coffe) {
    if (coffe) console.log("I am working in a new feature")
    else console.log("I need coffe, please!")
}

var dev = new Developer("Juan")

dev.greet()
dev.writeCode()

// Clase padre

class Person2 {
    constructor(name) {
        this.name = name
    }

    greet() {
        console.log(`Hello I am ${this.name}`)
    }
}

//Clase hija

class Developer extends Person2 {
    constructor(name) {
        super(name)
    }

    writeCode(coffee) {
        coffee ? console.log("I am developing a new feature") : console.log("I need coffee, please")
    }
}

const dev = new Developer("Pablo")
dev.greet()
dev.writeCode()