const cupones = {
    AHORRA10: 10,
    AHORRA15: 15,
    AHORRA20: 20,
    AHORRA25: 25,
    AHORRA30: 30,
};

const precio = document.querySelector('#precio')
const descuento = document.querySelector('#cupon')
const boton = document.querySelector('#boton')
const respuesta = document.querySelector('#respuesta')

boton.addEventListener("click", calcularDescuento)

function calcularDescuento() {
    const precioProducto = Number(precio.value)
    const codigoCupon = descuento.value.trim().toUpperCase()
    const descuentoProducto = cupones[codigoCupon]

    if (!precioProducto || precioProducto < 0) {
        respuesta.innerText = 'Escribe un precio válido.';
        return;
    }

    if (!descuentoProducto) {
        respuesta.innerText = 'Cupón no válido.';
        return;
    }

    const precioFinal = precioProducto - (precioProducto * descuentoProducto) / 100;
    respuesta.innerText = `Descuento: ${descuentoProducto}% | Total: $${precioFinal.toFixed(2)}`;
}