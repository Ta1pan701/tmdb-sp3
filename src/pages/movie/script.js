import { Acthors } from "../../components/acthors";
import { DetailedMovie } from "../../components/detailedMovie";
import { footer } from "../../components/footer";
import { header } from "../../components/header";
import { popularPeople } from "../../components/popularity";
import { api } from "../../libs/api";
import { render } from "../../libs/render";

header()
footer()
let movieId = JSON.parse(localStorage.getItem("movieId"))

let acthorsBox = document.querySelector(".acthors-render")
let test = document.querySelector(".render-box")

let movieApi = api.get(`/movie/${movieId}`)
let acthorsApi = api.get(`movie/${movieId}/credits `)

Promise.all([movieApi, acthorsApi])
    .then(([movieRes, acthorsRes]) => {
        DetailedMovie(movieRes.data)
        render(acthorsRes.data.cast.slice(0, 10), acthorsBox, Acthors)
    })

let frame = document.querySelector("iframe")
let movieTitle = document.querySelector(".movie-title")
let photoElem = document.querySelectorAll(".photo-elem img")
api.get(`/movie/${movieId}/videos`)
    .then(res => {
        let trailer = res.data.results.find(item => item.type == "Trailer")
        // console.log(res);

        frame.src = `https://www.youtube.com/embed/${trailer.key}`
    })
    console.log(photoElem);
    
        api.get(`/movie/${movieId}/images`)
            .then(res => {
                let photoPath = res.data.backdrops.map(item => item.file_path);

                photoElem.forEach((elem, index) => {
                    if (photoPath[index]) {
                        elem.src = `https://image.tmdb.org/t/p/original${photoPath[index]}`;
                    }
                });
            });