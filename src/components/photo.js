export function Image(item){
    let imageItem = document.createElement("div")
    imageItem.classList.add("photo-elem")
    let imagePhoto = document.createElement("img")
    imagePhoto.classList.add("photo-img")
    imagePhoto.src = "https://image.tmdb.org/t/p/original" + item.file_path
    imageItem.append(imagePhoto)
    return imageItem
}