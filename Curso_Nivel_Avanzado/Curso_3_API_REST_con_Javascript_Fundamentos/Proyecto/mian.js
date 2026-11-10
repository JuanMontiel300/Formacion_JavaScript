const api = axios.create({
    baseURL: "https://api.thecatapi.com/v1",
});
api.defaults.headers.common["x-api-key"] = "live_oBKhwZ0hZdEoipJ23LVxIGZ7RJhjyjF9PZZzcPgY3odtPG87Lx3sU3O1CZUc25JJ";
const urlApi = "https://api.thecatapi.com/v1/images/search?limit=10";
const urlApiFavoritos = "https://api.thecatapi.com/v1/favourites";
const urlApiDeleteFavoritos = (id) => `https://api.thecatapi.com/v1/favourites/${id}`;

const spanError = document.getElementById("error");
const boton = document.querySelector("#fetch-button");
boton.addEventListener("click", loadCats);

async function loadCats() {
    try {
        const response = await api.get(urlApi);
        const data = response.data;
        const imagen1 = document.getElementById("image1-url");
        const imagen2 = document.getElementById("image2-url");
        imagen1.src = data[0].url;
        imagen1.dataset.id = data[0].id;
        imagen2.src = data[1].url;
        imagen2.dataset.id = data[1].id;
    } catch (error) {
        console.error("Error al obtener la imagen del gato:", error);
        spanError.textContent = "Error al obtener la imagen del gato.";
    }


}


async function loadFavoriteMichis() {
    try {
        const limit = 100;
        const favorites = [];
        let page = 0;
        let hasMoreFavorites = true;

        while (hasMoreFavorites) {
            const favoritesUrl = new URL(urlApiFavoritos);
            favoritesUrl.searchParams.set("limit", limit);
            favoritesUrl.searchParams.set("page", page);

            const response = await api.get(favoritesUrl.toString());
            const data = response.data;

            favorites.push(...data);
            hasMoreFavorites = data.length === limit;
            page++;
        }


        const section = document.getElementById("favoriteMichis");
        section.querySelectorAll("article").forEach(article => article.remove());

        section.innerHTML = ""
        const title = document.createElement("h2");
        const titleText = document.createTextNode("Gatitos favoritos");
        title.appendChild(titleText);
        section.appendChild(title);
        let incompleteFavorites = false;
        favorites.forEach(michi => {
            if (!michi.image || !michi.image.url) {
                console.warn("El favorito no incluye una URL de imagen:", michi);
                incompleteFavorites = true;
                return;
            }

            const article = document.createElement("article");
            const img = document.createElement("img");
            const button = document.createElement("button");
            const btnText = document.createTextNode("sacar al michi favoritos");

            img.src = michi.image.url;
            img.width = 150;
            button.appendChild(btnText);
            button.addEventListener("click", () => deleteFavoriteMichis(michi.id));
            article.appendChild(img);
            article.appendChild(button);
            section.appendChild(article);
        });

        spanError.textContent = incompleteFavorites ?
            "Algunos favoritos no tienen una imagen disponible." :
            "";
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

        await api.post(urlApiFavoritos, {
            image_id: id
        });
        await loadFavoriteMichis();
    } catch (error) {
        console.error("Error al guardar el gato favorito:", error);
        spanError.textContent = "Error al guardar el gato favorito.";
    }
}

async function deleteFavoriteMichis(id) {
    try {
        if (!id) {
            throw new Error("No se encontró el ID del favorito.");
        }
        await api.delete(urlApiDeleteFavoritos(id));
        await loadFavoriteMichis();
    } catch (error) {
        console.error("Error al eliminar el gato favorito:", error);
        spanError.textContent = "Error al eliminar el gato favorito.";
    }
}

async function uploadMichi() {
    try {
        const form = document.getElementById("uploadForm");
        const formData = new FormData(form);
        const file = formData.get("file");

        if (!file || !file.size) {
            spanError.textContent = "Selecciona una imagen para subir.";
            return;
        }

        const response = await api.post("https://api.thecatapi.com/v1/images/upload", formData);
        const data = response.data;
        if (!data.id) {
            throw new Error("La respuesta no incluye el ID de la imagen.");
        }

        await saveFavoriteMichis(data.id);
    } catch (error) {
        console.error("Error al subir el gato:", error);
        spanError.textContent = "Error al subir el gato. " + error.message;
    }
}
loadCats();
loadFavoriteMichis();