class Persona {
    constructor(nombre, edad) {
        this.nombre = nombre
        this.edad = edad
    }
}

const personal = new Persona("Juan", "19")
console.log(personal)


personal.nuevometodo = function() {
    console.log(`Mi nombre es ${this.nombre} y tengo ${this.edad}`)
}