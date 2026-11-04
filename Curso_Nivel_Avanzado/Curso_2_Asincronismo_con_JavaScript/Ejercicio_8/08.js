function saludar() {
    return "Hola, ¿cómo estás?";
}

console.log(saludar());

// async 

async function saludarAsync() {
    return "Hola, ¿cómo estás?";
}

console.log(await saludarAsync()); // Devuelve una promesa