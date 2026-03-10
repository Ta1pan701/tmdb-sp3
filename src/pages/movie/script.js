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