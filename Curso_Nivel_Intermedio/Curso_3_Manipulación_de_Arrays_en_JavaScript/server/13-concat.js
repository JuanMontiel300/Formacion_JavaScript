const elements = [1, 2, 2, 3, 4, ]
const otroElemts = [5, 5, 6, 6]

const newArray = [...elements]
for (let i = 0; i < otroElemts.length; i++) {
    const elemet = otroElemts[i]
    newArray.push(elemet)
}
console.log(newArray)


const rta2 = elements.concat(otroElemts)
const rta3 = [...elements, ...otroElemts]
const rta4 = [...elements, "Random"]
console.log("Respuesta:", rta2)
console.log("Respuesta:", rta3)
console.log("Respuesta:", rta4)

elements.push(...otroElemts)
console.log(elements)