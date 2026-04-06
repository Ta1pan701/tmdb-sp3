import { router } from "./routing/router";

router()

let searchTypes = document.querySelectorAll(".type")
let searchInp = document.querySelector('.search-content')

function changeType(type) {

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

const searchHandler = debounce(() => {
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
        });
}, 1000); // задержка 500мс

searchInp.onkeyup = searchHandler;
function debounce(fn, delay) {
    let timeout;

    return function (...args) {
        clearTimeout(timeout);
        timeout = setTimeout(() => {
            fn.apply(this, args);
        }, delay);
    };
}