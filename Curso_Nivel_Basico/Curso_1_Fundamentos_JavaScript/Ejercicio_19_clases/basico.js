class Persona {
    constructor(nombre, apellido, edad) {
        this.nombre = nombre
        this.apellido = apellido
        this.edad = edad

    }

    saludar() {

        console.log(`Hola, me llamo ${this.nombre}  ${this.apellido} y tengo ${this.edad}`)
    }
}

const persona1 = new Persona('Juan', 'Montiel', '19')

persona1.saludar()