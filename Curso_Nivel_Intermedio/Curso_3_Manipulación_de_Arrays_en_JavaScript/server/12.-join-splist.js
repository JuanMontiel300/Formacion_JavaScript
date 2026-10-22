const elements = ["Fire", "Air", "Water"]


let rta = ''
const sepatador = ':)'
for (let i = 0; i < elements.length; i++) {
    const elemet = elements[i]

    rta = rta + elemet + sepatador
}

console.log("Respuesta ", rta)

const rta2 = elements.join('--')

console.log("Respuesta: Metodo join ", rta2)

const title = "Curso de Video juego"

console.log(title.split(" ").join("-").toLowerCase())