var lastName = 'Juan'
lastName = 'Khen'
console.log(lastName)


let fruit = 'Banana'
fruit = 'Pera'
console.log(fruit)

const animal = 'Dog'
animal = 'Cat'
console.log(animal)

const fruits = () => {
    if (true) {
        var fruit1 = 'Banana' //function scope esta se puede aceder solo en la funcion
        let fruit2 = 'Pera' //block scope esta solo se puede aceder al bloque 
        const fruit3 = 'Melon' //block scope esta solo se puede aceder al bloque 
    }

    console.log(fruit1)
    console.log(fruit2)
    console.log(fruit3)
}
fruits()