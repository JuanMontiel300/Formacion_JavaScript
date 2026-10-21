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

    const private = {
        "_learningPaths": []
    }
    Object.defineProperty(this, "learningPaths", {
        get() {
            return private["_learningPaths"]
        },
        set(newLP) {

            if (newLP instanceof Learning) {
                private["_learningPaths"].push(newLP)
            } else {
                console.warn("Algunos de los Lp no es una instancia del prototipo learningPaths")
            }

        },

    })



    for (learningPathZ in learningPaths) {
        this.learningPaths = learningPaths[learningPathZ]
    }

}


//}


function SuperObject() {

}
SuperObject.isObject = function(subject) {
    return typeof subject == "object"
}
SuperObject.deepCopy = function(subject) {

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