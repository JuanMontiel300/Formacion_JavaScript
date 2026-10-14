// Objeto literal

const juan = {
    name: 'Juan',
    apellido: 'Montiel',
    age: 19,
    cusrsos: [
        "Curso Definido de HTML y CSS",
        "Curso Definido de HTML y CSS"
    ],

    aprobarCurso(nuevoCurso) {
        this.cusrsos.push(nuevoCurso)
    }
}


// Aprobar otro curso

juan.cusrsos.push('Curso de Reponsi')

//Prototipo


function student(name, age, cursosAprobados) {
    this.name = name
    this.age = age
    this.cursosAprobados = cursosAprobados
}

student.prototype.aprobarCurso = function(nuevoCurso) {
    this.cursosAprobados.push(nuevoCurso)
}

const stundetJuan = new student(
    'juan',
    19, [
        "Curso de HTML Y CSS",
        "Curso de CSS Grid",
        "Curso de Buenas Praticas"
    ]
)


// Prototipos con la sintaxis de clases 

class student2 {
    constructor(name, age, cursosAprobados) {
        this.name = name
        this.age = age
        this.cursosAprobados = cursosAprobados
    }

    aprobarCurso(nuevoCurso) {
        this.cursosAprobados.push(nuevoCurso)
    }
}
const khen = new student2(
    'Khen',
    50, [
        "Curso de HTMl y CSS",
        "Curso de video Juego",
        "Curso de basico de javacri"
    ]
)

//Esto es para una forma mas facil de hacer para no tener que recordar que atributos tenesmos

class student3 {
    constructor({
        name,
        age,
        gmail,
        cursosAprobados
    }) {
        this.name = name
        this.age = age
        this.gmail = gmail
        this.cursosAprobados = cursosAprobados
    }

    aprobarCurso(nuevoCurso) {
        this.cursosAprobados.push(nuevoCurso)
    }
}

const pablo = new student3({
    name: 'pablo',
    gmail: 'Pablo4544@gmail.com',
    cursosAprobados: [
        "Curso de HTMl y CSS",
        "Curso de video Juego",
        "Curso de basico de javacri"
    ],
    age: 50,


})