class newPerson {
    constructor(name, age) {
        this.name = name
        this.age = age
    }

    //metodos #privacidad

    speak() {
        return 'Hello'
    }

    saludar() {
        return `${this.speak()} ${this.name}`
    }

    /*get# uAge() {
        return this.age
    }

    set# uAge(newP) {
        this.age = newP
    }*/
}

const newP = new newPerson('Juan', 19)

console.log(newP.saludar(), newP.uAge)
console.log(newP.uAge = 30)