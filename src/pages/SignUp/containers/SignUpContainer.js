import { Navigate } from "react-router-dom";
import { useSelector } from "react-redux";

import { ROUTE_NAMES } from "routes/routeNames";
import { isAuthenticatedSelector } from "pages/SignIn/selectors";
import Layout from "../components/Layout";

const SignUpContainer = () => {
  
  const isAuthenticated = useSelector(isAuthenticatedSelector);

  if (isAuthenticated) {
    return <Navigate to={ROUTE_NAMES.POKEMONS}/>;
}

  return (
    <Layout />
  );
};

export default SignUpContainer;