import { createAsyncThunk } from "@reduxjs/toolkit";
import pick from "lodash/pick";

import { pokemonApiConfig as pokemonApi} from "config/pokemonApi";

const getPokemonByName = (name) => pokemonApi.get(`/pokemon/${name}`);

export const getPokemonDetailsThunk = createAsyncThunk(
    'pokemonDetails/getDetailsByName',
    async (name)=> {
    const response = await getPokemonByName(name);

    return pick(response.data, ['name', 'stats', 'abilities', 'sprites']);
});