import { movieGenres } from "./Movie";

export function SearchMovie(item) {
    // основной контейнер
    const card = document.createElement("div");
    card.className = "search-card";

    // постер
    const poster = document.createElement("img");
    poster.className = "search-poster";
    poster.src = "https://image.tmdb.org/t/p/original" + item.poster_path

    // блок информации
    const info = document.createElement("div");
    info.className = "search-info";

    // название
    const title = document.createElement("h2");
    title.textContent = item.title;

    // жанры
    const genres = document.createElement("p");
    genres.className = "search-genres";
    genres.textContent = item.genre_ids.map(id => movieGenres[id] || "Unknown");

    // рейтинг
    const rating = document.createElement("div");
    rating.className = "search-rating";
    rating.textContent = item.vote_average.toFixed(1);

    // сборка
    info.appendChild(title);
    info.appendChild(genres);

    card.appendChild(poster);
    card.appendChild(info);
    card.appendChild(rating);

    card.onclick = () => {
        window.location.href = "/movie"
        localStorage.setItem("movieId", item.id)
    }
    
    return card
}
