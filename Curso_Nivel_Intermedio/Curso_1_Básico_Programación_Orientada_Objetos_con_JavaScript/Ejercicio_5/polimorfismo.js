class Comment {
    constructor({
        contenido,
        studentName,
        rolStudent = "Estudiante"
    }) {
        this.contenido = contenido
        this.studentName = studentName
        this.rolStudent = rolStudent
        this.like = 0
    }

    Publicar() {
        console.log(this.studentName + "(" + this.rolStudent + ")")
        console.log(this.like + " likes")
        console.log(this.contenido)
    }
}



class Student {
    constructor({
        name,
        email,
        username,
        twitter = undefined,
        facebook = undefined,
        instagram = undefined,
        approvedCourses = [],
        learningPaths = []
    }) {
        this.name = name
        this.email = email
        this.username = username
        this.socialMedia = {
            twitter,
            facebook,
            instagram
        }
        this.approvedCourses = approvedCourses
        this.learningPaths = learningPaths
    }

    publicarComentario(nuevoComentario) {
        const coment = new Comment({
            contenido: nuevoComentario,
            studentName: this.name
        })

        coment.Publicar()
    }

}

class TeacherStudents extends Student {
    constructor(props) {
        super(props)
    }
    approveCourse(newCurso) {
        this.approvedCourses.push(newCurso)

    }
    publicarComentario(nuevoComentario) {
        const coment = new Comment({
            contenido: nuevoComentario,
            studentName: this.name,
            rolStudent: "Profesor"
        })

        coment.Publicar()
    }
}


class FreeStudents extends Student {
    constructor(props) {
        super(props)
    }


    approveCourse(newCurso) {
        if (newCurso.isFree) {
            this.approvedCourses.push(newCurso)
        } else {
            console.warn("Lo siento, " + this.name + ",solo puedes tomar cursos abiertos")
        }
    }
}

class BasicStundents extends Student {
    constructor(props) {
        super(props)
    }
    approveCourse(newCurso) {
        if (newCurso.lang !== "english") {
            this.approvedCourses.push(newCurso)
        } else {
            console.warn("Lo siento, " + this.name + ",no puedes tomar cursos en ingles")
        }
    }
}
class ExpertStudents extends Student {
    constructor(props) {
        super(props)
    }
    approveCourse(newCurso) {
        this.approvedCourses.push(newCurso)

    }
}

const juan = new FreeStudents({
    name: "Juan",
    email: "juan3838@gmail.com",
    username: "juan34989",
    twitter: "juan34203",
    approvedCourses: ["CSS"]

})

const pablo = new BasicStundents({
    name: "Pablo",
    email: "pablo34@gmail.com",
    username: "Pablo321",
    twitter: "pablo4949",
    instagram: "pablo_35434",
    approvedCourses: []
})

const jonathan = new TeacherStudents({
    name: "jonathan",
    email: "jonathan4@gmail.com",
    username: "jonathan321",
    twitter: "jonathan434",
    instagram: "jonathan_35434",

})

class Course {
    constructor({
        name,
        classes = [],
        isFree = false,
        lang = "spanish"
    }) {
        this._name = name
        this.classes = classes
        this.isFree = isFree
        this.lang = lang
    }

    get name() {
        return this._name
    }

    /*newName(nuevoNombre) {
        this._name = this.newName
    }*/

    set name(nuevoNombre) {
        if (nuevoNombre === "Curso malito de Programacion BAsica ") {
            console.log("Web....no")
        } else {
            this._name = nuevoNombre
        }

    }
}

const cursoProgBasica = new Course({
    name: "Curso Gratis de Progrmacion Basica ",
    isFree: true
})

const cursoDefinitivoHTML = new Course({
    name: " Curso Definitivo de HTML Y CSS"
})

const cursoPraticoHTML = new Course({
    name: " Curso Practico de HTML Y CSS",
    lang: "english"
})