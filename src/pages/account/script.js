import { footer } from "../../components/footer";
import { header } from "../../components/header";
import { api } from "../../libs/api";
header()
footer()

api.get("https://api.themoviedb.org/3/account/22829525/favorite/movies?language=en-US&page=1&sort_by=created_at.asc")
    .then(res=> {
        console.log(res.data);

    })