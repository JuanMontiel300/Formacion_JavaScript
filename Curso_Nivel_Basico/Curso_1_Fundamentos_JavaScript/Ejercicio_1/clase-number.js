// 1.Tipo entero y decimal

const entero = 19
const decimal = 3.14

console.log(typeof entero, typeof decimal)

//2.Notacion cientifica 

const cientifico = 5e3

//3. Infinitos y NaN
const infinito = Infinity
const noEsUnNumero = NaN


//Operaciones arimeticas

//1.Suma, Resta , Multiplicacion y Division
const suma = 10 + 9
const resta = 20 - 2
const multiplicacion = 5 * 5
const division = 10 / 2

//2. Modulo y Exponenciacion
const modulo = 125 % 10
const exponenciacion = 5 ** 5
console.log(modulo, exponenciacion)

//Precision
const resultado = 0.1 + 0.2
console.log(resultado)
console.log(resultado.toFixed(2))
console.log(resultado === 0.3)


//Operaciones Avanzadas

const raizCuadrada = Math.sqrt(16)
const valorAbsoluto = Math.abs(100)
const aleatorio = Math.random()
console.log(raizCuadrada)
console.log(valorAbsoluto)
console.log(aleatorio.toFixed(2))