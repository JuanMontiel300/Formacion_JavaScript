const obj1 = {
    a: "a",
    b: "b",
    c: {
        d: "d",
        e: "e",
    },

    editar() {
        this.a = "aaaaaaaa"
    }
}

const obj2 = JSON.stringify(obj1)
console.log(obj2)

const obj3 = JSON.parse(obj2)
console.log(obj3)