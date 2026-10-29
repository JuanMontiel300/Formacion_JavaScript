function contar(n) {
    for (let i = 0; i < n; i++) {
        console.log(i)
    }
}

function repetir(arreglo) {
    let arregloRepetido = arreglo
    return arregloRepetido
}

function convertirAString(arreglo) {

    let resultado = arreglo.map(elemento => elemento.toString())
    return resultado

}

function dosDimensiones(valor) {
    let x = new Array(valor)

    for (let index = 0; index < valor; index++) {
        x[index] = new Array(valor).fill(0)
    }
    return x
}

console.log(dosDimensiones(5))