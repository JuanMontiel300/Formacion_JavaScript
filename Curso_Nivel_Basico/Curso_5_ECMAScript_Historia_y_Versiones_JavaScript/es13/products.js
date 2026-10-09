import fetch from "node-fetch";

const reponse = await fetch('https://api.escuelajs.co/api/v1/products')
const jsonProducts = await reponse.json()

export { jsonProducts }