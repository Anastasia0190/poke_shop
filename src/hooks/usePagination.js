import { useEffect } from "react";
import { useSearchParams } from "react-router-dom";

const usePagination = (initialPage) => {
    const limit = 21;
    const [params, setParams] = useSearchParams({page: initialPage, limit});

    const page = +Object.fromEntries(params).page;

    useEffect(() => {
        setParams({page, limit});
    }, [page, setParams]);

    const handlePageChange = (_, page) => {
        setParams({page, limit});
    }

    return [page, handlePageChange];
}

export default usePagination;