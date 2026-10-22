const pets = ['cat', 'dog', 'bat']


let includeArray = false
for (let i = 0; i < pets.length; i++) {
    const elemet = pets[i]

    if (elemet === 'bat') {
        includeArray = true
        break
    }
}
console.log(includeArray)


const rta2 = pets.includes('bat')

console.log("Encontre:", rta2)