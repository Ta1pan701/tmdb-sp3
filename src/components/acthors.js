export function Acthors(item) {
    let card = document.createElement("div")
    card.className = "card"
    const img = document.createElement("img");
    img.src = `https://image.tmdb.org/t/p/original${item.profile_path}`;
    img.alt = item.name;

    // имя
    const title = document.createElement("h2");
    title.textContent = item.name;

    // подпись
    const subtitle = document.createElement("p");
    subtitle.textContent = item.name;

    // собираем
    card.appendChild(img);
    card.appendChild(title);
    card.appendChild(subtitle);

    return card
}