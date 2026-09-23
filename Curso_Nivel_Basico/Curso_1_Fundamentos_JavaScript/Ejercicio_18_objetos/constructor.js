/*const persona = {
    nombre: "Juan",
    apellido: "Montiel",
    edad: 19,
    altura: 1.70
} */

function Persona(nombre, apellido, edad, altura) {
    this.nombre = nombre
    this.apellido = apellido
    this.edad = edad
    this.altura = altura
}

const persona = new Persona('Juan', 'Montiel', 19, 1.70)
const persona2 = new Persona('Juan', 'Pablo', 18, 1.50)

for (let i = 0; i < 2; i++) {
    console.log(persona)
    console.log(persona2)
}


//Persona.prototipo.telefono = "3162914315"

persona.nacionalidad = 'colombiano'

Persona.prototype.saludar = function() {
    console.log(`Hola, me llamo ${this.nombre} ${this.apellido}`)
}

persona.saludar()
persona2.saludar()