const letters = ['a', 'b', 'c', 'd']

const newArray = letters.map(item => item + '++')

/*for (let i = 0; i < letters.length; i++) {
    const elemet = letters[i]
    newArray.push(elemet + ['+'])
}*/

console.log('Original:' + letters)
console.log('Trasformacion:' + newArray)