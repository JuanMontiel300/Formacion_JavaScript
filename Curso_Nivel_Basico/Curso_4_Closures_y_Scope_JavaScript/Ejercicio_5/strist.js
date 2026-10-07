'user strict' // activa el modo estricto

pi = 3.1416 // estamos asignando un valor a pi sin declararla

console.log(pi) // mostramos el valor de pi


function myFunction() {
    'user strict' // activa el modo estricto dentro de la función

    return pi = 3.1416 // asignamos 3.1416 a pi y retornamos ese valor
}

console.log(myFunction()) // ejecutamos la función y mostramos el valor retornado