const btn = document.querySelector('#calcularBtn')
const inputPrecio = document.querySelector('#precio')
const descuento = document.querySelector('#descuento')
const respuesta = document.querySelector('#resultado')
btn.addEventListener('click', calcularPrecioConDescuento)

function calcularPrecioConDescuento() {
    const precio = Number(inputPrecio.value)
    const descuentoPrecio = Number(descuento.value)
    if (!precio || !descuentoPrecio) {
        respuesta.innerText = 'Rayos por favor llena el formulario'
        return
    }

    if (descuentoPrecio > 100) {
        respuesta.innerText = 'Lo siento el descuento no debes subir el 100%'
        return
    }
    const newPrice = (precio * (100 - descuentoPrecio)) / 100

    respuesta.innerText = 'El nuevo precio con descuento es $: ' + newPrice
}