import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { useSelector } from "react-redux";

import { isAuthenticatedSelector } from "pages/SignIn/selectors";
import { NAVIGATION_ITEMS, privateNavsKey, publicNavsKey } from "./config";
import { logOut } from "utils";

import styles from "./styles.module.scss";
import { omit } from "lodash";

const Header = () => {

  const isAuthenticated = useSelector(isAuthenticatedSelector);
  const navsItemsAccessKey = isAuthenticated ? privateNavsKey : publicNavsKey;
  const {pathname} = useLocation();

  return (
    <div className={styles.wrapper}>
      {isAuthenticated && <button onClick={logOut}>Logout</button>}
      {NAVIGATION_ITEMS(omit(navsItemsAccessKey, ['POKEMON_DETAILS'])).map(({title, path}) => (
        <Link 
          key={path} 
          to={path} 
          className={styles.navLink} 
          style={{backgroundColor: path === pathname ? "#BD18FF" : ""}}
        >
        {title}
        </Link>
      ))}

    </div>
  );
};

export default Header;