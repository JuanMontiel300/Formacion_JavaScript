/* 
Requerimientos del reto:

1. El usuario debe poder ingresar su usuario y contraseña
2. El sistema debe ser capaz de validar si el usuario y contraseña ingresados por el usuario existen en la base de datos
3. Si el usuario y contraseña son correctos, el sistema debe mostrar un mensaje de bienvenida y mostrar el timeline del usuario.
4. Si el usuario y contraseña son incorrectos, el sistema debe mostrar un mensaje de error y no mostrar ningun timeline.

*/
const usersDatabase = [{
        username: "andres",
        password: "123",
    },
    {
        username: "caro",
        password: "456",
    },
    {
        username: "mariana",
        password: "789",
    },
    {
        username: "juan",
        password: "333",
    }
];
const usersTimeline = [{
        username: "Estefany",
        timeline: "Me encata Javascript!",
    },
    {
        username: "Oscar",
        timeline: "Bebeloper es lo mejor!",
    },
    {
        username: "Mariana",
        timeline: "A mi me gusta más el café que el té",
    },
    {
        username: "Andres",
        timeline: "Yo hoy no quiero trabajar",
    },
];


const nombreUsuario = prompt("Ingresa tu usuario:");
const contrasena = prompt("Ingresa tu contrasena:");

function usuarioExistente(nombreUsuario, contrasena) {
    for (let i = 0; i < usersDatabase.length; i++) {
        if (
            usersDatabase[i].username === nombreUsuario &&
            usersDatabase[i].password === contrasena
        ) {
            return true;
        }
    }

    return false;
}

function mostrarTimeline(nombreUsuario) {
    const timeline = usersTimeline.find(
        (publicacion) => publicacion.username.toLowerCase() === nombreUsuario.toLowerCase()
    );

    if (timeline) {
        console.log(timeline.timeline);
    }
}

function iniciarSesion(nombreUsuario, contrasena) {
    if (usuarioExistente(nombreUsuario, contrasena)) {
        alert(`Bienvenido a tu cuenta, ${nombreUsuario}`);
        mostrarTimeline(nombreUsuario);
    } else {
        alert("Uuups, usuario o contrasena incorrectos");
    }
}

iniciarSesion(nombreUsuario, contrasena);