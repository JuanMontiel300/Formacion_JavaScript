function Students({
    name = validar("name"),
    age,
    gmail = validar("gmail"),
    twitter,
    instagram,
    facebook,
    approvedCourse = [],
    learningPaths = [],
} = {}) {

    this.name = name
    this.age = age
    this.gmail = gmail
    this.socialmedia = {
        twitter,
        facebook,
        instagram
    }
    this.approvedCourse = approvedCourse


    if (isArray(learningPaths)) {
        this._learningPaths = []
        for (learningPathZ in learningPaths) {
            if (learningPaths[learningPathZ] instanceof Learning) {
                this._learningPaths.push(learningPaths[learningPathZ])
            }
        }
    }
}




function Learning({
    name = validar("name"),
    course = []
}) {
    this.name = name
    this.course = course
    const private = {
        "_name": name,
        "_courses": course,

    }

}

function isArray(subject) {
    return Array.isArray(subject)
}

function isObject(subject) {

    return subject !== null && typeof subject == "object"
}

function deepCopy(subject) {
    let copySubject
    const subjectArray = isArray(subject)
    const subjectObject = isObject(subject)

    if (subjectArray) {
        copySubject = []
    } else if (subjectObject) {
        copySubject = {}
    } else {
        return subject
    }

    for (const key in subject) {
        const keyIsObject = isObject(subject[key])
        if (keyIsObject) {
            copySubject[key] = deepCopy(subject[key])
        } else {
            if (subjectArray) {
                copySubject.push(subject[key])
            } else {
                copySubject[key] = subject[key]
            }
        }
    }
    return copySubject
}
const escuela = new Learning({ name: "Escuela de Platiz" })

const escuelaVideoJuego = new Learning({ name: "Escuela de  Video Juego" })



const juan = new Students({
    name: 'Juan',
    gmail: 'Juan3838@gmail.com',
    learningPaths: [
        escuela,
        escuelaVideoJuego,
        {
            name: "Escuela del Malo",
            course: []
        }
    ]
})