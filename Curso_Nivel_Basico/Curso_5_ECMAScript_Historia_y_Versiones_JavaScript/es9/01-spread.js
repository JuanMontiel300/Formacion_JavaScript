const user = {
    username: 'Juan',
    age: 19,
    country: 'COL'
}

const { username, ...values } = user

console.log(username)
console.log(values)