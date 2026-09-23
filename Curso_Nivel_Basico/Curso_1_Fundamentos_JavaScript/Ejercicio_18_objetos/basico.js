/*
los objetos me ayudan a estruturar datos

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
        console.log(`Hola, mi nombre ${this.nombre}  ${this.apellido}`)
    }
}