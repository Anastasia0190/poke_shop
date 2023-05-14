import axios from "axios";

const config = {
    baseURL: "https://pokeapi.co/api/v2/",
};

export const pokemonApiConfig = axios.create(config);