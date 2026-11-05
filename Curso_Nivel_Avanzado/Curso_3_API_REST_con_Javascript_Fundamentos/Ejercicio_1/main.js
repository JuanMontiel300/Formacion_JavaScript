const urlApi = "https://api.thecatapi.com/v1/images/search?limit=2";

const boton = document.querySelector("#fetch-button");
boton.addEventListener("click", async() => {
    try {
        const response = await fetch(urlApi);
        const data = await response.json();
        const imagen1 = document.getElementById("image1-url");
        const imagen2 = document.getElementById("image2-url");
        imagen1.src = data[0].url;
        imagen2.src = data[1].url;
    } catch (error) {
        console.error("Error al obtener la imagen del gato:", error);
    }

});


//Forma que se hace con fetch y promesas
/*const boton = document.querySelector("#fetch-button");
boton.addEventListener("click", () => {
    fetch(urlApi)
        .then((response) => {
            return response.json();
        })
        .then((data) => {
            const imagen = document.querySelector("#image-url");
            imagen.src = data[0].url;
        })
        .catch((error) => {
            console.error("Error al obtener la imagen del gato:", error);
        })

});*/