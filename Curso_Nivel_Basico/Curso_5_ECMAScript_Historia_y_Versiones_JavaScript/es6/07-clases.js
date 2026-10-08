// declarando 
class User {}

// Estamos haciendo una instancia de una clase
//const newUSer = new User()

class user {
    //metodos

    saludar() {
        return 'Hola'
    }
}

const userSaludar = new user()

console.log(userSaludar.saludar())

//Herencia

const herencia = new user()
console.log(herencia.saludar())


//construtor

class userPerson {
    //construtor
    constructor() {
        console.log('Nuevo Usuario')
    }
    saludar() {
        return 'Hola'
    }
}

const juan = new userPerson()

//this

class user {
    constructor(name) {
        this.name = name
    }

    //metodos

    speak() {
        return 'Hello'
    }

    saludar() {
        return `${this.speak()} ${this.name}`
    }
}

const montiel = new user('Juan')

console.log(montiel.saludar())


//getters y setters

class newPerson {
    constructor(name, age) {
        this.name = name
        this.age = age
    }

    //metodos
    speak() {
        return 'Hello'
    }

    saludar() {
        return `${this.speak()} ${this.name}`
    }

    get uAge() {
        return this.age
    }

    set uAge(newP) {
        this.age = newP
    }
}

const newP = new newPerson('Juan', 19)

console.log(newP.saludar(), newP.uAge)
console.log(newP.uAge = 30)