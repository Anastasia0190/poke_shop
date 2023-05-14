import { useDispatch } from "react-redux";
import PropTypes from "prop-types";

import { useForm } from "hooks";
import { signInThunk } from "..//../api"

import styles from "./styles.module.scss";


const Layout = () => {

const dispatch = useDispatch();

const { form, handleChange } = useForm({
    email: "",
    password: "",
});

const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(signInThunk(form))
};

    return (

        <div className={styles.wrapper}>
            <h1>Sign In</h1>

            <form  onSubmit={handleSubmit}>
                <label>
                    <p>Email</p>
                    <input 
                        type="email" 
                        value={form.email} 
                        name="email" 
                        onChange={handleChange}
                    />
                </label>
                <label>
                    <p>Password</p>
                    <input 
                        type="password" 
                        value={form.password} 
                        name="password" 
                        onChange={handleChange}
                    />
                </label>
                <button role="none">Log In</button>
            </form>
        </div>
    );
};

Layout.propTypes = {
    handleSubmit: PropTypes.func,
    handleChange: PropTypes.func,
}

export default Layout;