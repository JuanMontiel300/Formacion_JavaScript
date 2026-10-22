const numbers = [1, 2, 3, 4, 5]

let rta = false
for (let i = 0; i < numbers.length; i++) {
    const elemet = numbers[i]

    if (elemet % 2 === 0) {
        rta = true
        break
    }
}

console.log(rta)

const rta2 = numbers.some(item => item % 2 === 0)

console.log('Respuesta:', rta2)

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




const rta3 = orders.some(item => item.delivered)
console.log("Respuesta: ", rta3)


const dates = [{
        startDate: new Date(2021, 1, 1, 10),
        endDate: new Date(2021, 1, 1, 11),
        title: "Cita de trabajo",
    },
    {
        startDate: new Date(2021, 1, 1, 15),
        endDate: new Date(2021, 1, 1, 15, 30),
        title: "Cita con mi jefe",
    },
    {
        startDate: new Date(2021, 1, 1, 20),
        endDate: new Date(2021, 1, 1, 21),
        title: "Cena",
    },
];

const newAppoins = {
    startDate: new Date(2021, 1, 1, 19),
    endDate: new Date(2021, 1, 1, 10, 30),
}
const { areIntervalsOverlapping } = require('date-fns')

const isOverlap = (newFecha) => {
    return dates.some(date => {
        return areIntervalsOverlapping({ start: date.startDate, end: date.endDate }, { start: newFecha.startDate, end: newFecha.endDate })

    })
}

console.log('Respuesta', isOverlap(newAppoins))