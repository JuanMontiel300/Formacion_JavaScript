const miPromesa = new Promise((resolve, reject) => {
    setTimeout(() => {
        const exito = true
        if (exito) {
            resolve('¡La promesa se resolvió con éxito!')
        } else {
            reject('La promesa fue rechazada.')
        }
    }, 2000)
})

console.log(miPromesa)