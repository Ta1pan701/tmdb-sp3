export function Acthors(item) {
    let card = document.createElement("div")
    card.classList.add("card")

    let img = document.createElement("img")
    img.src = `https://image.tmdb.org/t/p/original${item.profile_path}`

    let name = document.createElement("h3")
    name.innerText = item.name

    let text = document.createElement("p")
    text.innerText = item.name

    card.append(img, name, text)

    return card
}