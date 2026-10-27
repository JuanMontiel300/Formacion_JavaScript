const array = ['Diego', "karen", "juan"]

console.log(array[1])


class MyArray {
    constructor() {
        this.length = 0
        this.data = {}
    }

    get(index) {
        return this.data[index]
    }

    push(item) {
        this.data[this.length] = item
        this.length++
            return this.data
    }
    pop() {
        const lastItem = this.data[this.length - 1]
        delete this.data[this.length - 1]
        this.length--
            return lastItem

    }

    delete(index) {
        const item = this.data[index]
        this.shiftINdex(index)
        return item
    }

    shiftINdex(index) {
        for (let i = index; i < this.length - 1; i++) {
            this.data[i] = this.data[i + 1]
        }

        delete this.data[this.length - 1]
        this.length--
    }
}

const myArray = new MyArray()