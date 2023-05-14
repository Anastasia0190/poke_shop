import { createSelector } from "@reduxjs/toolkit";

const baseSelector = (state) => state.pokemonDetails;

export const pokemonNameSelector = createSelector(baseSelector, (details) => details.name);
export const pokemonStatsSelector = createSelector(baseSelector, (details) => details.stats);
export const pokemonSpritesSelector = createSelector(baseSelector, (details) => details.sprites);
export const isPokemonDetailsLoadingSelector = createSelector(baseSelector, (details) => details.isLoading);
