const totals = [1, 2, 3, 4]

let sum = 0
for (let i = 0; i < totals.length; i++) {
    const elemet = totals[i]
    sum += elemet
}

console.log(sum)

const rta = totals.reduce((sum, item) => sum + item, 0)
console.log(" Respuesta " + rta)