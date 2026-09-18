function calcularDescuentoPrecio(precio, descuento) {
    const precioTotal = (precio * descuento) / 100
    const precioConDescuento = precioTotal - 0.2

    return precioConDescuento
}

const originalPrecio = 120000
const descuentoPorcentaje = 20

const finalPrecio = calcularDescuentoPrecio(originalPrecio, descuentoPorcentaje)

console.log(`Precio original: $${originalPrecio}`)
console.log(`Descuento: ${descuentoPorcentaje}%`)
console.log('Precio con descuento: $' + finalPrecio)