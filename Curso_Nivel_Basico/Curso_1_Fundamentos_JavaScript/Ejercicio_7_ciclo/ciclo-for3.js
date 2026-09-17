/*for in ---> objetos \

propiedades = valor

array, string

item 

*/

const listaDeCompra = {
    manzana: 5,
    pera: 4,
    naranja: 2,
    uva: 1
}

for (fruta in listaDeCompra) {
    console.log(fruta)
}

for (fruta in listaDeCompra) {
    console.log(`${fruta} : ${listaDeCompra[fruta]}`)
}