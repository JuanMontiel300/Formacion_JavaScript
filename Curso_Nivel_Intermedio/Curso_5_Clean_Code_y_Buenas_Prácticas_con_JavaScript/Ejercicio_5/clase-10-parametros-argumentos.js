//Parametros de number

function getDouble(number) {
    return number * 2
}

//argumento 
getDouble(2)


//parametro defecto

function greet(person = 'Juan') {
    console.log("hello " + person)
}

greet()
greet("Pablo")



/*function greet(person) {
    console.log("hello " + person)
}

greet() */

//sin usar rest

function add(x, y) {
    console.log(x + y)
}
add(1, 2, 3, 4)

// uso de rest

function add1(...args) {
    console.log(args.reduce((prev, current) => prev + current))
}

add1(1, 2, 3, 4, 5)


//Clonar

const couser = {
    title: "JavaScript",
    const: "Todo los que necesito saber"
}

const courseCloned = Object.assign({}, couser)
const spreadCourseCloned = {...couser, }

console.log(spreadCourseCloned)

// slice
const numbers = [1, 2, 3]

const clonedNumbers = numbers.slice()
const spreadCloneNumbers = [...numbers]

console.log(spreadCloneNumbers)

//Clonar dos Array diferentes en uno solo 

const numbersA = [1, 2, 3]
const numberB = [4, 5, 6]

const newNumbers = [...numbersA, ...numberB]

console.log(newNumbers)