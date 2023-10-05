import axios from "axios";

const api = axios.create({
    baseURL: "https://6515fc8409e3260018c94ef1.mockapi.io/musicas"
});

export default api;