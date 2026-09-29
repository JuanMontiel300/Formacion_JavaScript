function calcularPromedio(lista) {
    let sumaP = 0

    for (let i = 0; i < lista.length; i++) {
        sumaP = sumaP + lista[i]
    }
    const promedio = sumaP / lista.length
    console.log(promedio)
    return promedio
}