window.addEventListener('DOMContentLoaded', navigator, false)
window.addEventListener('hashchange', navigator, false)

function navigator() {
    console.log({ location })
    if (location.hash.startsWith('#trends')) {
        trendsPage()
    } else if (location.hash.startsWith('#search=')) {
        searchPage()
    } else if (location.hash.startsWith('#movie=')) {
        moviesPage()
    } else if (location.hash.startsWith('#category=')) {
        categoryPage()
    } else {
        homePage()
        getTrendingMoviePreviews().catch((error) => console.error(error));
        getCategegotiesPreviews().catch((error) => console.error(error));
    }
    location.hash
}


function homePage() {
    console.log('Home!!')
}

function trendsPage() {
    console.log('Trends')
}

function searchPage() {
    console.log('Search!!')
}

function moviesPage() {
    console.log('Movies!!')
}

function categoryPage() {
    console.log('Categories!!')
}