//Ananlisi de un persona Juanita


function encontrarPersona(personabusqueda) {
    return salarios.find(persona => persona.name == personabusqueda)
        /*const persona = salarios.find((persona) => {
            return persona.name == personabusqueda
        })
        return persona*/
}


function medianaPorPersona(nombrePersona) {
    const trabajos = encontrarPersona(nombrePersona).trabajos

    const salariosPersona = trabajos.map(function(elemento) {
        return elemento.salario
    })

    const medianaSalario = PlatziMath.calcularMediana(salariosPersona)
    console.log(medianaSalario)
    return medianaSalario
}



const PlatziMath = {}

PlatziMath.esPar = function esPar(lista) {
    return !(lista.length % 2)
}

PlatziMath.calcularPromedioMetodo = function calcularPromedioMetodo(lista) {
    const sumaTotal = lista.reduce((valorAcumulado, nuevoValor) => valorAcumulado + nuevoValor, 0)
    return sumaTotal / lista.length
}

PlatziMath.calcularMediana = function calcularMediana(lista) {
    const listaOrdenada = [...lista].sort((a, b) => a - b)
    const listaEsPar = PlatziMath.esPar(listaOrdenada)
    if (listaEsPar) {
        const mitadListaPar1 = (listaOrdenada.length / 2) - 1
        const mitadListaPar2 = listaOrdenada.length / 2
        const listaMitades = [listaOrdenada[mitadListaPar1], listaOrdenada[mitadListaPar2]]
        return PlatziMath.calcularPromedioMetodo(listaMitades)
    } else {
        const mitadListaImpar = Math.floor(listaOrdenada.length / 2)
        const medianaListaImpar = listaOrdenada[mitadListaImpar]
        console.log(mitadListaImpar)
        console.log(medianaListaImpar)
        return medianaListaImpar
    }
}


function proyeccionPorPersona(nombrePersona) {
    const trabajos = encontrarPersona(nombrePersona).trabajos
    let porcentajesCrecimento = []
    for (let i = 1; i < trabajos.length; i++) {
        const ultimoSalrio = trabajos[i].salario
        const salarioAnterior = trabajos[i - 1].salario
        const crecimientoDelSalario = ultimoSalrio - salarioAnterior
        const porcentajeCrecimiento = crecimientoDelSalario / salarioAnterior
        porcentajesCrecimento.push(porcentajeCrecimiento)
        console.log(porcentajesCrecimento)
    }

    const mediaPorcetaje = PlatziMath.calcularMediana(porcentajesCrecimento)
    const ultimoSalario = trabajos[trabajos.length - 1].salario

    const aumento = ultimoSalario * mediaPorcetaje

    const nuevoSlario = ultimoSalario + aumento
    console.log(nuevoSlario)
    return nuevoSlario
}

const empresas = {}

for (const persona of salarios) {
    for (const trabajo of persona.trabajos) {
        if (!empresas[trabajo.empresa]) {
            empresas[trabajo.empresa] = {}
        }

        if (!empresas[trabajo.empresa][trabajo.year]) {
            empresas[trabajo.empresa][trabajo.year] = []
        }
        empresas[trabajo.empresa][trabajo.year].push(trabajo.salario)
    }
}



function medianaPorEmpresaYear(nombre, year) {
    if (!empresas[nombre]) {
        console.warn('La empresa no exite')
        return undefined
    } else if (!empresas[nombre][year]) {
        console.warn('La empresa no dio salario ese ano')
        return undefined
    } else {
        return PlatziMath.calcularMediana(empresas[nombre][year])
    }
}

function proyeccionPorEmpresa(nombre) {
    if (!empresas[nombre]) {
        console.warn('La empresa no exite')
        return
    }

    const empresYears = Object.keys(empresas[nombre])
    const listaMedianaYears = empresYears.map((year) => medianaPorEmpresaYear(nombre, year))
    const listaValida = listaMedianaYears.filter((valor) => valor !== undefined)

    if (listaValida.length < 2) {
        console.warn('No hay suficientes años con salario para proyectar')
        return undefined
    }

    let porcentajesCrecimento = []
    for (let i = 1; i < listaValida.length; i++) {
        const ultimoSalrio = listaValida[i]
        const salarioAnterior = listaValida[i - 1]
        const crecimientoDelSalario = ultimoSalrio - salarioAnterior
        const porcentajeCrecimiento = crecimientoDelSalario / salarioAnterior
        porcentajesCrecimento.push(porcentajeCrecimiento)
        console.log(porcentajesCrecimento)
    }

    const mediaPorcetaje = PlatziMath.calcularMediana(porcentajesCrecimento)
    const ultimoMediana = listaValida[listaValida.length - 1]

    const aumento = ultimoMediana * mediaPorcetaje
    const nuevoMediana = ultimoMediana + aumento

    return nuevoMediana

}

function proyeccionGeneral() {
    const listaMedianas = salarios.map((persona) => medianaPorPersona(persona.name))
    const medianaGeneral = PlatziMath.calcularMediana(listaMedianas)

    return medianaGeneral
}

function medianaTop10() {
    const listaMedianas = salarios
        .map((persona) => medianaPorPersona(persona.name))
        .sort((a, b) => b - a)
        .slice(0, 10)

    return listaMedianas
}