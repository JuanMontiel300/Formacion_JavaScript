const matriz = [
    [1, 2, 3],
    [4, 5, 6, [1, 2, [1, 2]]],
    [7, 8, 9]
]

const newArray = []

for (let i = 0; i < matriz.length; i++) {
    for (let j = 0; j < matriz.length; j++) {
        const array2 = matriz[i][j]
        newArray.push(array2)
    }
}



const rta = matriz.flat(3)
console.log("For", newArray)

console.log("flat", rta)