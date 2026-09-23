//map

const number = [2, 4, 8, 10, 12]
const mapNumber = number.map(num => num * num)
console.log(mapNumber)


//forEch

const colors = ['azul', 'blanco', 'negro']
const iteracionColors = colors.forEach(color => console.log(color))
console.log(colors)
console.log(iteracionColors)

//Ejercicio pratico

const temperaturaFhrenheit = [32, 68, 95, 104, 212]
const convetirFahrenheit = temperaturaFhrenheit.map(temperaturaFhrenheit => (5 / 9) * (temperaturaFhrenheit - 32))

console.log(`Temperaturas en Fahrnheit: `, temperaturaFhrenheit)
console.log(`Temperaturas en Celsius: `, convetirFahrenheit)

//Ejercicio pratico 2

const numberElemetos = [4, 23, 35, 40, 55]
let sum = 0
numberElemetos.forEach(number => { sum += number })

console.log('Suma de todo los elemtos que hay en un array son: ' + sum)