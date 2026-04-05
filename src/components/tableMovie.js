import { movieGenres } from "./Movie";
export function tableMovie(item) {
    let itemCard = document.createElement("div")
    itemCard.className = "table-movie-card"
    // левая часть (постер)
    const poster = document.createElement("img");
    poster.className = "table-movie-poster";
    poster.src = "https://image.tmdb.org/t/p/original" + item.poster_path;

    // контент
    const content = document.createElement("div");
    content.className = "table-movie-content";

    // заголовок
    const title = document.createElement("h2");
    title.textContent = item.title;

    // жанры
    const genres = document.createElement("p");
    genres.className = "genres";
    genres.textContent = item.genre_ids.map(elem => movieGenres[elem] || "Unknown");


    // правая часть
    const right = document.createElement("div");
    right.className = "right";

    // рейтинг
    const rating = document.createElement("div");
    rating.className = "rating";
    rating.textContent = item.vote_average.toFixed(1);

    // источник
    const source = document.createElement("p");
    source.className = "source";
    source.textContent = "Kinoarea";

    // кнопка
    const button = document.createElement("button");
    button.className = "more-btn";
    button.textContent = "More";
    button.onclick = () => {
        localStorage.setItem("movieId", item.id)
        window.location.href = "/movie"
    }
    // собираем
    content.append(title, genres);
    right.append(rating, source, button);
    itemCard.append(poster, content, right);
    return itemCard
}