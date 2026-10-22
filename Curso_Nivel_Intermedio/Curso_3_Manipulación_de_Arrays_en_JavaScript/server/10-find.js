const numbers = [1, 30, 49, 29, 10, 13]


let rta = undefined
for (let i = 0; i < numbers.length; i++) {
    const elemet = numbers[i]

    if (elemet === 30) {
        rta = elemet
        break
    }
}
console.log("for", rta)

const rta2 = numbers.find(item => item === 10)

console.log("find", rta2)


const products = [{
        name: "Pizza",
        price: 12,
        id: '🍕'
    },
    {
        name: "Burger",
        price: 23,
        id: '🍔'
    },
    {
        name: "Hot dog",
        price: 34,
        id: '🌭'
    },
    {
        name: "Hot cakes",
        price: 355,
        id: '🥞'
    },
];


const rta3 = products.find(item => item.id === '🥞')
console.log("Respuesta:", rta3)



const rta4 = products.findIndex(item => item.id === '🥞')
console.log("Respuesta:", rta4)