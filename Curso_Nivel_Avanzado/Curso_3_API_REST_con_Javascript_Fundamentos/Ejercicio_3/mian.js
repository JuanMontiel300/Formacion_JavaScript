const urlApi = "https://api.thecatapi.com/v1/images/search?limit=10&api_key=live_oBKhwZ0hZdEoipJ23LVxIGZ7RJhjyjF9PZZzcPgY3odtPG87Lx3sU3O1CZUc25JJ";
const urlApiFavoritos = "https://api.thecatapi.com/v1/favourites?api_key=live_oBKhwZ0hZdEoipJ23LVxIGZ7RJhjyjF9PZZzcPgY3odtPG87Lx3sU3O1CZUc25JJ";

const spanError = document.getElementById("error");
const boton = document.querySelector("#fetch-button");
boton.addEventListener("click", loadCats);

async function loadCats() {
    try {
        const response = await fetch(urlApi);
        const data = await response.json();

        if (response.status !== 200) {
            spanError.textContent = "Error al obtener la imagen del gato." + response.status + " " + data.message;
        } else {
            const imagen1 = document.getElementById("image1-url");
            const imagen2 = document.getElementById("image2-url");
            imagen1.src = data[0].url;
            imagen1.dataset.id = data[0].id;
            imagen2.src = data[1].url;
            imagen2.dataset.id = data[1].id;
        }
    } catch (error) {
        console.error("Error al obtener la imagen del gato:", error);
        spanError.textContent = "Error al obtener la imagen del gato.";
    }


}


async function loadFavoriteMichis() {
    try {
        const response = await fetch(urlApiFavoritos);
        const data = await response.json();
        console.log(data);
        if (response.status !== 200) {
            spanError.textContent = "Error al obtener la imagen del gato." + response.status + " " + data.message;
        }

    } catch (error) {
        console.error("Error al obtener los gatos favoritos:", error);
        spanError.textContent = "Error al obtener la imagen del gato.";
    }
}

async function saveFavoriteMichis(id) {
    try {
        if (!id) {
            throw new Error("No se encontró el ID de la imagen.");
        }

        const response = await fetch(urlApiFavoritos, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                image_id: id
            })
        });
        const data = await response.json();
        if (!response.ok) {
            spanError.textContent = "Error al guardar el gato favorito." + response.status + " " + data.message;
        }
    } catch (error) {
        console.error("Error al guardar el gato favorito:", error);
        spanError.textContent = "Error al guardar el gato favorito.";
    }
}
loadCats();
loadFavoriteMichis();