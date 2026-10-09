const anotherFuncion = () => {
    return new Promise((resolve, reject) => {
        if (true) {
            resolve("lo logramos")
        } else {
            reject("Pailas no Funciona")
        }
    })
}

anotherFuncion()
    .then(response => console.log(response))
    .catch(error => console.log(error))
    .finally(() => console.log('Aterminado'))