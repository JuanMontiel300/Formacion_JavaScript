async function* anotherGenerater() {
    yield await Promise.resolve(1);
    yield await Promise.resolve(2);
    yield await Promise.resolve(3);
}

const other = anotherGenerater()
other.next().then(response => console.log(response.value))
other.next().then(response => console.log(response.value))
other.next().then(response => console.log(response.value))
console.log('Hello')

async function arrayOfName(array) {
    for await (let value of array) {
        console.log(value)
    }
}

const array = arrayOfName(['Pera', 'Banano', 'Melon'])
console.log('After')