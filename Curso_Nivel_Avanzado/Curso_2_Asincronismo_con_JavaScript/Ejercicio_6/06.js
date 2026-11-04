function obtenerUsuario(id) {
    return fetch(`https://api.escuelajs.co/api/v1/users/${id}`)
        .then(response => {
            if (!response.ok) {
                throw new Error('Error al obtener el usuario');
            }
            return response.json();
        });
}

obtenerUsuario(1)
    .then(usuario => {
        console.log('Usuario del id', usuario.id);
        return usuario;
    })
    .then(usuario => {
        console.log(usuario.name)
        return usuario
    })
    .then(usuario => {
        console.log(usuario.role)
        return usuario
    })
    .catch(error => {
        console.error('Error:', error.message);
    })