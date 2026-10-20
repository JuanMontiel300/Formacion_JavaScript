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

    return {
        name,
        age,
        gmail,
        socialMedia: {
            facebook,
            instagram,
            twitter,

        }
    }
}

const juan = createStudents({ name: 'Juan', gmail: 'Juan3838@gmail.com' })

function validar(param) {
    throw new Error(param + " es obligatorio ")
}