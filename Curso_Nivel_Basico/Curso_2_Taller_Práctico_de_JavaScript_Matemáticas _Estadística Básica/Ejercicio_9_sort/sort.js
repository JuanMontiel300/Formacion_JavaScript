function ordenarLista(listaDesordenada) {
    const lista = listaDesordenada.sort(ordenarLista)

    function ordenarLista(valorAcomulado, nuevoValor) {
        if (valorAcomulado > nuevoValor) {
            return 1
        } else if (valorAcomulado == nuevoValor) {
            return 0
        } else if (valorAcomulado < nuevoValor) {
            return -1
        }

    }

    return lista
}