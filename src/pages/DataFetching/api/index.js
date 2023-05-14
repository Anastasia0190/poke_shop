import { createAsyncThunk } from "@reduxjs/toolkit";

import { mainApi } from "config/mainApi";

const getPokemonsCall = ({page, limit = 21}) => mainApi.get('/products', {
    params: {
        page,
        limit,
    },
});


export const getPokemonsThunk = createAsyncThunk(
    "dataFetching/getPokemons",
    async (body, {rejectWithValue}) => {
        try {
          const response = await getPokemonsCall(body);

            return response.data;  

        } catch (error) {
            return rejectWithValue(error.response.data.message);
        }
        
    }
);