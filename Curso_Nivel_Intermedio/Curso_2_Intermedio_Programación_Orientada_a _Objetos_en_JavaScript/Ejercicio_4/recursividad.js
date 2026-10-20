let num = 0
const numeritos = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
for (let i = 0; i < numeritos.length; i++) {
    num = numeritos[i]
    console.log({ i, num })
}

function recursiva(numers) {
    if (numers.length != 0) {
        const firtNum = numers[0]
        console.log(firtNum)
        numers.shift()
        recursiva(numers)
    }
}

recursiva([0, 1, 2, 3, 4, 5, 6, 7, 8])