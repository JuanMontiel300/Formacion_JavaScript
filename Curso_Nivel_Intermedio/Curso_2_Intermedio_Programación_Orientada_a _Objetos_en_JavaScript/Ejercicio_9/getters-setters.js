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
        "_name": name
    }

    const public = {
        age,
        gmail,
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
    }

    return public
}

const juan = createStudents({ name: 'Juan', gmail: 'Juan3838@gmail.com' })