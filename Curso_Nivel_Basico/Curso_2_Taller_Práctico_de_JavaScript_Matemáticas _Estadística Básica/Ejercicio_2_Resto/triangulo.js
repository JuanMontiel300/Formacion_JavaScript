function calcularTriangulo(lado, base) {
    if (lado == base) {
        console.warn('Este no es un triangulo isosceles')
    } else {
        return Math.sqrt((lado ** 2) - ((base ** 2)) / 4)
    }
}

function calcularTrianguloEscaleno(lado1, lado2, lado3) {
    const s = (lado1 + lado2 + lado3) / 2
    if (lado1 == lado2 || lado2 == lado3 || lado3 == lado1) {
        console.warn("Este no es un Triangulo escaleno ")
    } else {
        return Math.sqrt((s * (s - lado1) * (s - lado2) * (s - lado3)))
    }
}