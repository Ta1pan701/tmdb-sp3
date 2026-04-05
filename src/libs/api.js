import axios from "axios";
export let accesToken = import.meta.env.VITE_ACCESS_TOKEN

export const api = axios.create({
    baseURL: " https://api.themoviedb.org/3",
    headers: {
        Authorization: `Bearer ${accesToken}`
    }
})