import { DetailedActhor } from "../../components/detailedActhor";
import { footer } from "../../components/footer";
import { header } from "../../components/header";
import { Movie } from "../../components/Movie";
import { api } from "../../libs/api";
import { render } from "../../libs/render";
import Swiper from 'swiper';
import { Scrollbar, FreeMode, Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
header()
footer()
let personId = JSON.parse(localStorage.getItem("personId"))
console.log(personId);
let topContainer = document.querySelector(".top-container")
api.get(`/person/${personId}`)
    .then(res=>{
        console.log(Object.keys(res.data));
        DetailedActhor(res.data)
    })
let bestFilms = document.querySelector(".swiper-wrapper")
api.get(`/person/${personId}/movie_credits`)
    .then(res=>{
        console.log(res.data);
        render(res.data.crew, bestFilms, Movie)
        const newSwiper = new Swiper(".swiper", {
            slidesPerView: 4,
            slidesPerGroup: 3,
            loop: false,
            // spaceBetween: 20,
            modules: [Navigation, Pagination],
            pagination: {
                el: ".swiper-pagination",
                type: "fraction",
            },

            navigation: {
                nextEl: ".popular-movies-next-btn",
                prevEl: ".popular-movies-last-btn",
            },
        });
    })