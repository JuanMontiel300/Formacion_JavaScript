// codigo que se repite

const juanAverage = (90 + 50 + 70) / 3
const alexAverage = (80 + 50 + 70 + 80) / 4

const pabloAverage = (40 + 100) / 2


console.log(pabloAverage, alexAverage, juanAverage)

function getAverage(...grades) {
    console.log(grades.reduce((prev, current) => prev + current, 0) / grades.length)
}


const juanAverage2 = getAverage(90, 50, 70, 70)