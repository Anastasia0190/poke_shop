import { combineReducers } from "redux";

import dataFetchingReducer from '../pages/DataFetching/reducers';
import signInReducer from '../pages/SignIn/reducers';
import pokemonDetailsReducer from '../pages/PokemonDetails/reducers';

export const rootReduder = combineReducers({
    auth: signInReducer,
    dataFetching: dataFetchingReducer,
    pokemonDetails: pokemonDetailsReducer,
      
});