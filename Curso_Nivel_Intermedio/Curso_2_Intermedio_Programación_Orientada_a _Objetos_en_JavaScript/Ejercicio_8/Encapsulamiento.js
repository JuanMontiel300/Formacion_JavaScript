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
        changeName(newName) {
            private["_name"] = newName
        },
        redName() {
            return private["_name"]
        }
    }
    Object.defineProperty(public, "readName", {
        configurabl: false,
        configurable: false
    })

    Object.defineProperty(public, "changeName", {
        configurabl: false,
        configurable: false
    })
    return public
}

const juan = createStudents({ name: 'Juan', gmail: 'Juan3838@gmail.com' })

function validar(param) {
    throw new Error(param + " es obligatorio ")
}