// git branch - проверка ветки
// git fetch - загружает ветки

import { DetailedMovie } from "../../components/detailedMovie";
import { footer } from "../../components/footer";
import { header } from "../../components/header";
import { api } from "../../libs/api";
import { render } from "../../libs/render";

console.log(1);
header()
footer()
let movieId = JSON.parse(localStorage.getItem("movieId"))
console.log(movieId);

api.get(`/movie/${movieId}`)
.then(res=>{
    console.log(res.data);
    DetailedMovie(res.data)
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
                if(type == "movie"){
                    render(Object.values(res.data.results), searchResults, SearchMovie)
                } else if(type == "person") {
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