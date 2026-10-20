const obj1 = {
    a: "a",
    b: "b",
    c: {
        d: "d",
        e: "e",
    },

    editar() {
        this.a = "aaaaaaaa"
    }
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