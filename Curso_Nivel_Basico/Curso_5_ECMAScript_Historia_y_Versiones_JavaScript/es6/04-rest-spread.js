// Array desstructuring

let fruits = ['Pera', 'Banano', 'Melon']

let [a, b, c] = fruits

console.log(a, b, fruits[0])

// Object desstructuring

let user = {
    username: 'Juan',
    age: 19,
    altura: 1.70
}
let { username, altura } = user

console.log(username, altura, user.age)

//spread operator

let person = {
    name: 'Pablo',
    age: 20
}

let country = 'COl'

let data = {...person,
    country
}
console.log(data)

//rest

function sum(num, ...value) {
    console.log(value)
    console.log(num + value[0])
    return num + value[0]
}

sum(1, 2, 3, 4, 5)