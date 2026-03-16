export function Acthors(item) {
    let card = document.createElement("div")
    card.classList.add("card")

    let img = document.createElement("img")
    img.src = "https://upload.wikimedia.org/wikipedia/commons/3/3f/Priyanka_Chopra_Jonas_2023.jpg"

    let title = document.createElement("h3")
    title.innerText = "Priyanka Chopra Jonas"

    let text = document.createElement("p")
    text.innerText = "Priyanka Chopra Jonas"

    card.append(img, title, text)

    return card
}