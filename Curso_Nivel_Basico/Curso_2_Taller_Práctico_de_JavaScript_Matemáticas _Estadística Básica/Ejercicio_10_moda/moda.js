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
}