function createStudents({
    name = validar("name"),
    age,
    gmail = validar("gmail"),
    twitter,
    instagram,
    facebook,
    approvedCourse = [],
    learningPaths = [],
} = {}) {
    const private = {
        "_name": name,
        "_learningPaths": learningPaths
    }

    const public = {
        age,
        gmail,
        approvedCourse,
        socialMedia: {
            facebook,
            instagram,
            twitter,

        },
        get name() {
            return private["_name"]
        },
        set name(newName) {
            if (newName.length != 0) {
                private["_name"] = newName

            } else {
                console.warn("Tu nombre debe tener al menos 1 caracter")
            }

        },
        get learningPaths() {
            return private["_learningPaths"]
        },
        set learningPaths(newLP) {
            if (!newLP.name) {
                console.warn("Tu LP no tiene la propiedad name")
                return
            }

            if (!newLP.course) {
                console.warn("Tu LP no tiene courses")
                return
            }

            if (!isArray(newLP.course)) {
                console.warn("Tu LP no es una lista (de cursos)")
                return
            }
            private["_learningPaths"].push(newLP)


        },
    }

    return public
}

function isArray(subject) {
    return Array.isArray(subject)
}

function isObject(subject) {

    return typeof subject == "Object"
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

    for (key of subject) {
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


function validar(param) {
    throw new Error(param + " es obligatorio ")
}

function createLearning({
    name = validar("name"),
    course = []
}) {
    const private = {
        "_name": name,
        "_courses": course,

    }
    const public = {
        get name() {
            return private["_name"]
        },
        set name(newName) {
            if (newName.length != 0) {
                private["_name"] = newName

            } else {
                console.warn("Tu nombre debe tener al menos 1 caracter")
            }

        },
        get course() {
            return private["_courses"]
        },

    }

    return public
}
const juan = createStudents({ name: 'Juan', gmail: 'Juan3838@gmail.com' })