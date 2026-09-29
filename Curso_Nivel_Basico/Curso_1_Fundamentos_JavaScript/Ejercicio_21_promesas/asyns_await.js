/*function fetchData() {
fetch("https://jsonplaceholder.typicode.com/posts")
    .then((respuesta) => respuesta.json())
    .then((data) => console.log(data))
    .catch((error) => console.log(error))
} */

async function fetchData() {
    try {
        let responder = await fetch("https://jsonplaceholder.typicode.com/posts")
        let data = await responder.json
        console.log(data)
    } catch (error) {
        console.log(error)
    }
}

const urls = [
    "https://rickandmortyapi.com/api/character",
    "https://rickandmortyapi.com/api/location",
    "https://rickandmortyapi.com/api/episode",
]

async function fetchNewData() {
    try {
        for await (let url of urls) {
            let responder = await fetch(url)
            let data = await responder.json()
            console.log(data)
        }
    } catch (error) {

        console.log(error)
    }
}