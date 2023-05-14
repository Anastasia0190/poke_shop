import { useCallback, useEffect } from "react";

const useScrollTop = (spectatedValue) => {

    const scrollTop = useCallback(() => {
    window.scroll({
        behavior: 'smooth',
        top: 0,
        });
    }, []); 

    useEffect(() => {
        if (spectatedValue) {
            scrollTop();
        }
    }, [scrollTop, spectatedValue]);

    return scrollTop;
};

export default useScrollTop;