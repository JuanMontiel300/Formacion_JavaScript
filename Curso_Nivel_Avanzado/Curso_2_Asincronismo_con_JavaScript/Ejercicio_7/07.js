//Promise.all

const fetchProducts = id => fetch(`https://fakestoreapi.com/products/${id}`)
    .then(response => {
        if (!response.ok) throw new Error('Error al obtener el producto');
        return response.json();
    })

Promise.all([fetchProducts(1), fetchProducts(2), fetchProducts(3)])
    .then(products => {
        console.log('Productos obtenidos:', products)
    })
    .catch(error => {
        console.error('Error:', error.message);
    })

//Promise.allSettled

Promise.allSettled([
        Promise.resolve('Promesa 1 resuelta'),
        Promise.reject(new Error('Promesa 2 rechazada')),
        Promise.resolve('Promesa 3 resuelta')
    ])
    .then(results => {
        results.forEach(result => {
            if (result.status === 'fulfilled') {
                console.log('Resultado:', result.value);
            } else {
                console.error('Error:', result.reason.message);
            }
        });
    })

//Promise.race
const rapida = new Promise((resolve) => {
    setTimeout(() => {
        resolve('Promesa rápida');
    }, 100);
})
const mediana = new Promise((resolve) => {
    setTimeout(() => {
        resolve('Promesa mediana ');
    }, 300);
})

const lenta = new Promise((resolve) => {
    setTimeout(() => {
        resolve('Promesa lenta ');
    }, 500);
})

Promise.race([rapida, mediana, lenta])
    .then(result => {
        console.log('Resultado de la promesa más rápida:', result);
    })
    .catch(error => {
        console.error('Error:', error.message);
    });

//Promise.any

Promise.any([
        Promise.reject(new Error('Promesa 1 rechazada')),
        Promise.reject(new Error('Promesa 2 rechazada')),
        Promise.resolve('Promesa 3 resuelta')
    ])
    .then(result => {
        console.log('Resultado de la primera promesa resuelta:', result);

    })

Promise.any([
        Promise.reject(new Error('Promesa 1 rechazada')),
        Promise.reject(new Error('Promesa 2 rechazada')),
    ])
    .catch(error => {
        console.error('Error:', error.message); // AggregateError: All promises were rejected
    })