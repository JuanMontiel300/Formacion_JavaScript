console.group("Cuadrado")

//Calcular el Perimetro 

const ladosCuadrado = 6
const calcularPerimetro = ladosCuadrado * 4

console.log(`El perimetro de un Cuadrado: ${calcularPerimetro} cm`)

// Calcular el Area de un Cuadrado

const areaCuadrado = 7
const calcularArea = areaCuadrado * areaCuadrado
console.log('El area de un cuadrado: ' + calcularArea)

// Con una funcion para calcular un Cuadrado 


function calcularCuadrado1(lado, lado1, lado2) {
    return {
        perimetro: lado * 4,
        area: lado1 * lado2,
    }
}
console.groupEnd("Cuadrado")

//Triangulo 
console.group("Triangulo")

const ladosTriangulo1 = 3
const ladosTriangulo2 = 5
const ladosTriangulo3 = 4
const calcularTriangulo = ladosTriangulo1 + ladosTriangulo2 + ladosTriangulo3

//Are de un Triangulo

const baseTriangulo = 4
const alturaTriangulo = 8

const calcularAreaTriangulo = (baseTriangulo * alturaTriangulo) / 2
console.log('El area de un triangulo es: ' + calcularAreaTriangulo)

// Con una funcion para calcular un Triangulo


function calcularTriangulo1(lado1, lado2, lado3, base, altura) {
    return {
        perimetro: lado1 + lado2 + lado3,
        area: (base * altura) / 2,
    }
}

console.groupEnd("Triangulo")


console.group("Circulo")

// Circulo
const radio = 4
const pi = 3.1416
const diametro = radio * 2

//Diametro
const circuferencia = diametro * pi
const areaCirculo = (radio * radio) * pi

console.log('El diametro de un circulo: ' + circuferencia)
console.log('El area de un circulo:' + areaCirculo)

//Funcion

function calcularCirculo(radio) {
    const diametro = radio * 2
    const radioCuadrado = Math.pow(radio, 2)
    return {
        circulo: diametro * Math.PI.toFixed(3),
        area: radioCuadrado * Math.PI.toFixed(3),
    }

}


console.groupEnd("Circulo")