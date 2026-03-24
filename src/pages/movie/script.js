import { DetailedMovie } from "../../components/detailedMovie";
import { footer } from "../../components/footer";
import { header } from "../../components/header";
import { Image } from "../../components/photo";
import { api } from "../../libs/api";
import { render } from "../../libs/render";

header()
footer()
let movieId = JSON.parse(localStorage.getItem("movieId"))

let acthorsBox = document.querySelector(".acthors-render")
let photoBox = document.querySelector(".photos-render")
let posterBox = document.querySelector(".posters-box")

let movieApi = api.get(`/movie/${movieId}`)
let acthorsApi = api.get(`movie/${movieId}/credits `)
let videosApi = api.get(`/movie/${movieId}/videos`)
let imageApi = api.get(`/movie/${movieId}/images`)

Promise.all([movieApi, acthorsApi, videosApi, imageApi])
    .then(([movieRes, acthorsRes, videoRes, imageRes]) => {
        console.log(movieRes.data);

        DetailedMovie(movieRes.data)
        console.log(movieRes);
        let movieTitle = document.querySelector(".trailer-title")

        render(acthorsRes.data.cast.slice(0, 10), acthorsBox, Acthors)
        movieTitle.textContent = `${movieRes.data.title} trailer`
        let trailer = videoRes.data.results.find(item => item.type == "Trailer")
        let frame = document.querySelector("iframe")
        frame.src = `https://www.youtube.com/embed/${trailer.key}`
        console.log(imageRes);
        render(imageRes.data.backdrops.slice(0, 4), photoBox, Image)
        render(imageRes.data.posters.slice(0, 4), posterBox, Image)
        let photoElem = document.querySelectorAll(".photo-elem")
        const overlay = document.createElement('div');
        overlay.className = 'overlay';
        let p = document.createElement("p")
        p.classList.add("photo-length")
        overlay.append(p)
        photoElem[7].append(overlay)
        p.textContent = `+${imageRes.data.backdrops.length}`
    })
