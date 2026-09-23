/*

   estructura de datos

   key / value 

   objeto {
     propiedad: valor, 
     propiedad: valor, 
     propiedad: valor 
     Metodos()
   }

*/

const persona = {
    nombre: "Juan",
    apellido: "Montiel",
    edad: 19,
    altura: 1.70,
    direccion: {
        calle: "Calle 40 sur 72 g23",
        cuidad: "Bogota"
    },

    saludar() {
        console.log(`Hola, mi nombre ${this.nombre}  ${this.apellido} tengo ${this.edad} anos`)
    }
}

console.log(persona)

persona.saludar()

persona.telefono = "3162914315"
console.log(persona.telefono)

persona.despedir = () => {
    console.log('Adios me voy por 5 minutos')
}

persona.despedir()

delete persona.telefono

delete persona.despedir