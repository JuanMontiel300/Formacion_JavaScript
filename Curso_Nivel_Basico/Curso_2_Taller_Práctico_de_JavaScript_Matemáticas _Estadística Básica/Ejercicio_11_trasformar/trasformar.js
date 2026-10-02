export function solution(obj) {
    const object1 = obj
    const array = Object.entries(object1)
    const arrayOfObjects = []

    for (let element of array) {
        arrayOfObjects.push({
            'id': element[0],
            'name': element[1]
        })
    }

    return arrayOfObjects
}