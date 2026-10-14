class learningPaths {
    constructor({
        nameEscuela,
        courses = [],
        approvedCourses = []
    }) {
        this.nameEscuela = nameEscuela
        this.courses = courses
        this.approvedCourses = approvedCourses
    }

    addCourse(nuevoCurso) {
        this.approvedCourses.push(nuevoCurso)
    }
}

const escuelaWeb = new learningPaths({
    nameEscuela: "Escuela de Desarrollo Web",
    courses: ["HTML", "CSS", "JavaScript"],

})

const escuelaData = new learningPaths({
    nameEscuela: "Escuela de Data Science",
    courses: ["Python", "Estadística", "Machine Learning"],

})

const escuelaVgs = new learningPaths({
    nameEscuela: "Escuela de Videojuegos",
    courses: ["Unity", "Diseño", "Programación"],

})




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

    addCourse(course) {
        this.approvedCourses.push(course)
    }

    addLearningPath(path) {
        this.learningPaths.push(path)
    }
}

const juan = new Student({
    name: "Juan",
    email: "juan3838@gmail.com",
    username: "juan34989",
    twitter: "juan34203",
    approvedCourses: ["HTML"],
    learningPaths: [escuelaWeb, escuelaData]
})

const pablo = new Student({
    name: "Pablo",
    email: "pablo34@gmail.com",
    username: "Pablo321",
    twitter: "pablo4949",
    instagram: "pablo_35434",
    approvedCourses: ["CSS"],
    learningPaths: [escuelaWeb, escuelaVgs]
})


//Encapulamiento

class Course {
    constructor({
        name,
        classes = []
    }) {
        this._name = name
        this.classes = classes
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
    name: "Curso Gratis de Progrmacion Basica "
})