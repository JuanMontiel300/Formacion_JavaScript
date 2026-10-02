function calcularModa(lista) {
    const listaCount = {}

    for (let u = 0; u < lista.length; u++) {
        const elemento = lista[u]
        if (listaCount[elemento]) {
            listaCount[elemento] += 1
        } else {
            listaCount[elemento] = 1
        }

    }

    console.log(listaCount)

    const listaArray = Object.entries(listaCount)

    console.log(listaArray)

    const listaOrdenada = ordenarListaModa(listaArray, 1)
    console.log(listaOrdenada)


    const listaOrdenadaMaxNumero = listaOrdenada[listaOrdenada.length - 1]
    const moda = listaOrdenadaMaxNumero[0]
    return moda
}



const listaBidimencional = [
    ['a', 100],
    ['b', 20],
    ['c', 30]
]




function ordenarListaModa(listaDesordenada) {
    function ordenarLista(valorAculumulado, nuevoValor) {
        return valorAculumulado[1] - nuevoValor[1]
    }
    const lista = listaDesordenada.sort(ordenarLista)

    return lista

}