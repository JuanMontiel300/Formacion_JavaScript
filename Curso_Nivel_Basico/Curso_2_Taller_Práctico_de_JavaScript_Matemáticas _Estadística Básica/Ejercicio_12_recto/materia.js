const notes = [{
        course: "Programación",
        note: 8,
        credit: 5
    },
    {
        course: "Matemáticas",
        note: 5,
        credit: 1
    },
    {
        course: "Inglés",
        note: 8,
        credit: 2
    }
];

const notasConCredito = notes.map(function(notas) {
    return notas.note * notas.credit
})

const resultado = notasConCredito.reduce(function(acumulador, numero) {
    return acumulador + numero

})

const creditos = notes.map(function(credito) {
    return credito.credit
})

const sumaCreditos = creditos.reduce(function(acumuladorCredito, numeroCredito) {
    return acumuladorCredito + numeroCredito
})

const division = resultado / sumaCreditos

console.log('Las notas son: ', +division)