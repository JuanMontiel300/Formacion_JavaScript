function newUser(name, age, country) {
    var name = name || 'Juan'
    var age = age || 19
    var country = country || 'MX'
    console.log(name, age, country)
}

newUser()
newUser('Montiel', 19, 'Col')


function newAdmin(name = 'Sebastian', age = 20, country = 'Mex') {
    console.log(name, age, country)
}

newAdmin()
newAdmin('Khen', 39, 'CAN')