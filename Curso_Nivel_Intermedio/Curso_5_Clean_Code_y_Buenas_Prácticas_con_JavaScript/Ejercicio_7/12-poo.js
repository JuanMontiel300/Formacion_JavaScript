// Antes de ES6
function Person(name) {
    this.name = name
}
Person.prototype.greet = function() {
    return "hello I am " + this.name
}


var person = new Person("Juan")

console.log(person.name)
console.log(person.greet())


//Con ES6

class Cat {
    constructor(cat) {
        this.name = cat
    }

    greet() {
        return "Hello I am a cat and my name is " + this.name
    }
}

const cat = new Cat("Pepito")
console.log(cat.name)
console.log(cat.greet())