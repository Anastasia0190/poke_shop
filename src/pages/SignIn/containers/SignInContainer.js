import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

import { isAuthenticatedSelector } from "../selectors";
import { ROUTE_NAMES } from "routes/routeNames";
import Layout from "../components/Layout";


const SignInContainer = (handleChange, handleSubmit) => {
    const isAuthenticated = useSelector(isAuthenticatedSelector);

    if (isAuthenticated) {
        return <Navigate to={ROUTE_NAMES.POKEMONS}/>;
    }

    return (
        <Layout 
        handleChange={handleChange}
        handleSubmit={handleSubmit}
        />
    );
};

export default SignInContainer;