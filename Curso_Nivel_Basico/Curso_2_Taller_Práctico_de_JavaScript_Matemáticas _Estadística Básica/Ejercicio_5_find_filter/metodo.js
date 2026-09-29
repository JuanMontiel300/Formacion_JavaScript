const cupones = []
cupones.push({
    name: 'Juan2123',
    discount: 30
})
cupones.push({
    name: 'an2123',
    discount: 20
})
cupones.push({
    name: 'pepirto2123',
    discount: 10
})
cupones.push({
    name: 'n2123',
    discount: 25
})
const precio = document.querySelector('#precio')
const descuento = document.querySelector('#cupon')
const boton = document.querySelector('#boton')
const respuesta = document.querySelector('#respuesta')

boton.addEventListener("click", calcularDescuento)

function calcularDescuento() {
    const precioProducto = Number(precio.value)
    const codigoCupon = descuento.value.trim().toUpperCase()
    if (!precioProducto || precioProducto < 0) {
        respuesta.innerText = 'Escribe un precio válido.';
        return;
    }

    let discount;

    function buscarCupon(cupon) {
        return cupon.name.toUpperCase() === codigoCupon

    }

    const cuponConDescuento = cupones.filter(buscarCupon)

    if (cuponConDescuento.length > 0) {
        discount = cuponConDescuento[0].discount
    } else {
        respuesta.innerText = 'Este cupon no es valido'
        return
    }



    const precioFinal = precioProducto - (precioProducto * discount) / 100;
    respuesta.innerText = `Descuento: ${discount}% | Total: $${precioFinal.toFixed(2)}`;
}