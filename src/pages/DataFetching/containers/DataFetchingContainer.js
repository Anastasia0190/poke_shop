import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { getPokemonsThunk } from "../api";
import { usePagination } from "hooks";
import Layout from "../components";

const LIMIT = 21;

const DataFetchingContainer = () => {

    const [page, handlePageChange] = usePagination(1);

    const dispatch = useDispatch();

    const pokemons = useSelector((state) => state.dataFetching.data);
    const errors = useSelector((state) => state.dataFetching.errors);
    const isLoading = useSelector((state) => state.dataFetching.isLoading);

    useEffect(() => {
        dispatch(getPokemonsThunk({page, limit: LIMIT}));
    }, [dispatch, page]);

    return (
        <Layout
            errors={errors}
            isLoading={isLoading}
            pokemons={pokemons}
            page={page}
            handlePageChange={handlePageChange}
        />
    )
}

export default DataFetchingContainer;