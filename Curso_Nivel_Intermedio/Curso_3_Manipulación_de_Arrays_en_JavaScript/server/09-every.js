const numbers = [1, 30, 49, 29, 10, 13]

let rta = true
for (let i = 0; i < numbers.length; i++) {
    const elemet = numbers[i]

    if (elemet >= 40) {
        rta = false
    }
}
console.log('For', rta)

const rta2 = numbers.every(item => item <= 40)

console.log("Respuesta: ", rta2)

//Recto

const team = [{
        name: "Nicolas",
        age: 12,
    },
    {
        name: "Andrea",
        age: 8,
    },
    {
        name: "Zulema",
        age: 2,
    },
    {
        name: "Santiago",
        age: 12,
    },
];


const edad = team.every(item => item.age <= 15)

console.log("Cumplen:", edad)