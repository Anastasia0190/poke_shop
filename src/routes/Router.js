import { Route, Routes } from "react-router-dom";

import HomePageContainer from "pages/Home/containers/HomePageContainer";
import DataFetchingContainer from "pages/DataFetching/containers/DataFetchingContainer";
import PokemonDetailsContainer from "pages/PokemonDetails/containers/PokemonDetailsContainer";
import SignUpContainer from "pages/SignUp/containers/SignUpContainer";
import SignInContainer from "pages/SignIn/containers/SignInContainer";
import { ROUTE_NAMES } from "./routeNames";
import PrivateRoute from "./PrivateRoute";


const Router = () => {
  return (
    <Routes>
      <Route path={ROUTE_NAMES.SIGN_UP} element={<SignUpContainer />} />
      <Route path={ROUTE_NAMES.SIGN_IN} element={<SignInContainer />} />
      <Route path={ROUTE_NAMES.HOME} element={<HomePageContainer />} />
      <Route path={ROUTE_NAMES.POKEMONS} element={
        <PrivateRoute>
          <DataFetchingContainer />
        </PrivateRoute>} />
        <Route path={ROUTE_NAMES.POKEMON_DETAILS} element={<PokemonDetailsContainer />} />
      
      <Route path="*" element={<h1>404 Not found</h1>} />
    </Routes>
  );
};

export default Router;