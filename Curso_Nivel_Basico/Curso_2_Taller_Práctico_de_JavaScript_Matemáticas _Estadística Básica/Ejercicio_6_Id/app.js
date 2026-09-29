import { productos } from "./producto.js";
import { usuarios } from "./usuario.js";

const idProducto = document.querySelector("#id-producto");
const botonProducto = document.querySelector("#btn-producto");
const idUsuario = document.querySelector("#id-usuario");
const botonUsuario = document.querySelector("#btn-usuario");
const respuesta = document.querySelector("#respuesta");

botonProducto.addEventListener("click", function() {
    const idBuscado = Number(idProducto.value);

    if (idBuscado < 1) {
        respuesta.textContent = "Escribe el ID del producto.";
        return;
    }

    const productoEncontrado = productos.filter(function(producto) {
        return producto.id === idBuscado;
    });

    if (productoEncontrado.length > 0) {
        respuesta.textContent = `Producto: ${productoEncontrado[0].nombre} | Precio: $${productoEncontrado[0].precio}`;
    } else {
        respuesta.textContent = "No existe un producto con ese ID.";
    }
});

botonUsuario.addEventListener("click", function() {
    const idBuscado = Number(idUsuario.value);

    if (idBuscado < 1) {
        respuesta.textContent = "Escribe el ID del usuario.";
        return;
    }

    const usuarioEncontrado = usuarios.filter(function(usuario) {
        return usuario.id === idBuscado;
    });

    if (usuarioEncontrado.length > 0) {
        respuesta.textContent = `Usuario: ${usuarioEncontrado[0].nombre} | Correo: ${usuarioEncontrado[0].correo}`;
    } else {
        respuesta.textContent = "No existe un usuario con ese ID.";
    }
});