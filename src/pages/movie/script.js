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
console.log(movieId);

let acthorsBox = document.querySelector(".test")
let test = document.querySelector(".render-box")
console.log(acthorsBox);

let movieApi = api.get(`/movie/${movieId}`)
let acthorsApi = api.get(`movie/${movieId}/credits `)

Promise.all([movieApi, acthorsApi])
    .then(([movieRes, acthorsRes]) => {
        console.log(movieRes);
        console.log(acthorsRes);
        DetailedMovie(movieRes.data)
        render(acthorsRes.data, acthorsBox, Acthors)
    })

let searchTypes = document.querySelectorAll(".type")
let searchInp = document.querySelector('.search-content')
let searchResults = document.querySelector(".render-box")
function changeType(type) {
    console.log(type);

    searchInp.onkeyup = () => {
        api.get(`/search/${type}?query=${searchInp.value}`)
            .then(res => {
                console.log(res.data);
                if (type == "movie") {
                    render(Object.values(res.data.results), searchResults, SearchMovie)
                } else if (type == "person") {
                    render(Object.values(res.data.results), searchResults, searchPerson)
                } else {
                    render(Object.values(res.data.results), searchResults, SearchMovie)
                }
            })
    }

}
changeType('movie')

searchTypes.forEach((type, i) => {
    type.onclick = () => {
        changeType(type.id)
    }
})
