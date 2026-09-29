function calcularPromedioMetodo(lista) {

    function sumarTodosElementos(nuevoValor, valorAcumulado) {
        return valorAcumulado + nuevoValor
    }

    const array = lista.reduce(sumarTodosElementos)

    const promedio = array / lista.length
    console.log(promedio)
    return promedio

}

const arrayFuncion = (a, b) => a + b