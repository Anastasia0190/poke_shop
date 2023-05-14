import { createSlice } from "@reduxjs/toolkit";

import { getPokemonDetailsThunk } from "../api";
import { createStatsMap } from "../utils/createStatsList";

const initialState = {
    isLoading: false,
    errors: null,
    name: "",
    stats: {},
    sprites: [],
}

const pokemonDetailsSlice = createSlice({
    name: 'pokemonDetails',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(getPokemonDetailsThunk.pending, (state) => {
            state.isLoading = true;
        });
        builder.addCase(getPokemonDetailsThunk.fulfilled, (state, {payload}) => {
            const { name, stats, sprites } = payload;
            state.isLoading = false;
            state.name = name;
            state.stats = createStatsMap(stats);
            state.sprites = sprites;
        });
        builder.addCase(getPokemonDetailsThunk.rejected, (state, {error}) => {
            state.isLoading = false;
            state.errors = error;
        });
    },
});

export default pokemonDetailsSlice.reducer;