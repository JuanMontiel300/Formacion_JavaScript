const words = ['spray', 'limit', 'elite', 'exuberant'];


const newArray = []
for (let i = 0; i < words.length; i++) {
    const elemet = words[i]

    if (elemet.length >= 6) {
        newArray.push(elemet)
    }
}

console.log(newArray)


const rta = words.filter(item => item.length >= 6)

console.log("Respuesta", rta)
console.log("Original", words)

const orders = [{
        customerName: "Nicolas",
        total: 60,
        delivered: true,
    },
    {
        customerName: "Zulema",
        total: 120,
        delivered: false,
    },
    {
        customerName: "Santiago",
        total: 180,
        delivered: true,
    },
    {
        customerName: "Valentina",
        total: 240,
        delivered: true,
    },
    {
        customerName: "Valentina",
        total: 140,
        delivered: false,
    },
]

const rta2 = orders.filter(item => item.delivered && item.total >= 100)
console.log("Respuesta", rta2)

const search = (query) => {
    return orders.filter(item => {
        return item.customerName.includes(query)
    })
}
console.log(search('Valentina'))