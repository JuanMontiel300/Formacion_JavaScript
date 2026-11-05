const urlApi = "https://api.thecatapi.com/v1/images/search?limit=10&api_key=live_oBKhwZ0hZdEoipJ23LVxIGZ7RJhjyjF9PZZzcPgY3odtPG87Lx3sU3O1CZUc25JJ";

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