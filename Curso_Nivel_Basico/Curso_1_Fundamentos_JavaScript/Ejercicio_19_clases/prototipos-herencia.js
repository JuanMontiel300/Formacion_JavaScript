class Animal {
    constructor(nombre, tipo) {
        this.nombre = nombre
        this.tipo = tipo
    }

    emitirSonido() {
        console.log("El animal emite u sonido ")
    }
}

class Perro extends Animal {
    constructor(nombre, tipo, raza) {
        super(nombre, tipo);
        this.raza = raza
    }

    emitirSonido() {
        console.log('El perro ladra')
    }
    correr() {
        console.log(`${this.nombre} corre alegremente`)
    }

}

const perro1 = new Perro('lucas', 'perro', 'chiguagua ')
console.log(perro1)

perro1.correr()
perro1.emitirSonido()
perro1.nuevoMetodo = function() {
    console.log("Este es un metodo")
}

//herencia

Perro.prototype.segundoMetodo = function() {
    console.log('Es otro nuevo metodo')
}