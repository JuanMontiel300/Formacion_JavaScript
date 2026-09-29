function esPar(lista) {

    return !(lista.length % 2)
}


function esImpar(lista) {

    return lista.length % 2
}

function calcularMediana(lista) {
    const listaEsPar = esPar(lista)
    if (listaEsPar) {
        const mitadListaPar1 = (lista.length / 2) - 1
        const mitadListaPar2 = lista.length / 2
        const listaMitades = [lista[mitadListaPar1], lista[mitadListaPar2]]
        calcularPromedioMetodo(listaMitades)
    } else {
        const mitadListaImpar = Math.floor(lista.length / 2)
        const medianaListaImpar = lista[mitadListaImpar]
        console.log(mitadListaImpar)
        console.log(medianaListaImpar)
        return medianaListaImpar
    }



}

function calcularPromedioMetodo(lista) {

    function sumarTodosElementos(nuevoValor, valorAcumulado) {
        return valorAcumulado + nuevoValor
    }

    const array = lista.reduce(sumarTodosElementos)

    const promedio = array / lista.length
    console.log(promedio)
    return promedio

}