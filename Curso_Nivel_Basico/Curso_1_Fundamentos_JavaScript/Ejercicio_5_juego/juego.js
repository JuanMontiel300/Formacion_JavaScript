const numeroSecreto = Math.floor(Math.random() * 10 + 1)
const numeroJugador = parseInt(prompt("Adivina el numero entre 1 al 10"))

console.log(`Este es el numero con el que jugas: ${numeroJugador}`)

if (numeroJugador === numeroSecreto) {
    console.log("Felicidades , adivinas el numero secreto")

} else if (numeroJugador < numeroSecreto) {
    console.log("El numero es demasiado bajo, intenta de nuevo")

} else {
    console.log("El numero es demasiado alto, intenta de nuevo")
}