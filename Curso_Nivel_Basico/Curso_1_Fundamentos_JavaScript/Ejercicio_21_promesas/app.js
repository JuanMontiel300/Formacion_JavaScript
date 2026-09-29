const promesa = new Promise((resolve, reject) => {
    setTimeout(() => {
        const operacionExitosa = true

        if (operacionExitosa) {
            resolve("La operación fue exitosa")
        } else {
            reject("Fallo la operación")
        }
    }, 200)
})

promesa
    .then((mensaje) => {
        console.log(`Esta promesa fue exitosa: ${mensaje}`)
    })
    .catch((error) => {
        console.log(error)
    })