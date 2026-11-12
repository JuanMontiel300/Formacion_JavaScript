const api = axios.create({
    baseURL: 'https://api.themoviedb.org/3',
    headers: {
        accept: 'application/json',
        Authorization: `Bearer ${API_KEY}`,
    },
});

async function getTrendingMoviePreviews() {
    const { data } = await api.get("/trending/all/day", {

    });

    const movies = data.results;
    if (!Array.isArray(movies)) {
        throw new Error("La respuesta de TMDB no contiene una lista de títulos.");
    }

    const trendingMoviesContainer = document.querySelector("#trendingPreview .movie-list");
    if (!trendingMoviesContainer) {
        throw new Error("No se encontró la lista de tendencias en el HTML.");
    }

    movies.forEach((movie) => {
        if (!movie.poster_path) {
            return;
        }

        const moviePreview = document.createElement("article");
        moviePreview.classList.add("movie-card");
        const movieImg = document.createElement("img");
        movieImg.classList.add("movie-img");
        movieImg.setAttribute("alt", movie.title);
        movieImg.setAttribute("src", `https://image.tmdb.org/t/p/w400${movie.poster_path}`);

        moviePreview.appendChild(movieImg);
        trendingMoviesContainer.appendChild(moviePreview);
    });


}
async function getCategegotiesPreviews() {
    const { data } = await api.get("/genre/movie/list", {

    });

    const categories = data.genres;
    if (!Array.isArray(categories)) {
        throw new Error("La respuesta de TMDB no contiene una lista de categorías.");
    }

    const categoriesContainer = document.querySelector("#categoriesPreview .recommendation-list");
    if (!categoriesContainer) {
        throw new Error("No se encontró la lista de categorías en el HTML.");
    }

    categoriesContainer.replaceChildren();

    categories.forEach((category, index) => {
        const categoryCard = document.createElement("article");
        categoryCard.classList.add("recommendation-card");

        const categoryPoster = document.createElement("div");
        categoryPoster.classList.add(
            "recommendation-poster",
            index % 2 === 0 ? "recommendation-one" : "recommendation-two"
        );
        categoryPoster.textContent = "◆";

        const categoryInfo = document.createElement("div");
        categoryInfo.classList.add("recommendation-info");

        const categoryTitle = document.createElement("h3");
        categoryTitle.id = `id${category.id}`;
        categoryTitle.textContent = category.name;

        categoryInfo.appendChild(categoryTitle);
        categoryCard.append(categoryPoster, categoryInfo);
        categoriesContainer.appendChild(categoryCard);
    });
}