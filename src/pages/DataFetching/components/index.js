import { Link } from "react-router-dom";
import PropTypes from "prop-types";

import { ROUTE_NAMES } from "routes/routeNames";
import  Pagination  from "commonComponents/Pagination";
import Spinner from "commonComponents/Spinner";

import styles from "./styles.module.scss";

const Layout = ({
errors,
isLoading,
pokemons,
page,
handlePageChange

}) => {

    return (
    <div>
            <h1>Catalog</h1>
            
            {errors && <div className={styles.errors}>{errors}</div>}

            {isLoading && <Spinner/>}

            <div className={styles.wrapper}>
                {pokemons.map(({name, image, id})=> (
                    <Link key={id} to={`${ROUTE_NAMES.POKEMONS}/${name}`}>
                        <div className={styles.pokemons}>
                            <img src={image} alt="" width={250} height={250}/>
                            <div>{name}</div>
                        </div>
                        
                    </Link>
                ))}
            </div>
            <Pagination page={page} handlePageChange={handlePageChange}/>
            
        </div>
);
};

Layout.propTypes = {
    pokemons: PropTypes.arrayOf(
        PropTypes.shape( {
            name: PropTypes.string,
            image: PropTypes.string,
            id: PropTypes.string,
        }).isRequired,
    ).isRequired,
    errors: PropTypes.string,
    isLoading: PropTypes.bool,
    page: PropTypes.number,
    handlePageChange: PropTypes.func,

}

export default Layout;




