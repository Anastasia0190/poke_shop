import { useNavigate } from "react-router-dom";
import { useFormik } from "formik";
import omit from "lodash/omit";
import PropTypes from "prop-types";

import { ROUTE_NAMES } from "routes/routeNames";
import { signUpValidationSchema } from "..//../validations";
import  useFetching  from "..//..//..//../hooks/useFetching";
import { signUp } from "..//../api";

import styles from "./styles.module.scss";

const Layout = () => {
    const { data, errors, handleDataLoad } = useFetching(signUp);
    const navigate = useNavigate();

    const formik = useFormik({
        initialValues: {
          firstName: "",
          lastName: "",
          email: "",
          password: "",
          confirmPassword: "",
          gender: "",
          phone: "",
        },
    
        validationSchema: signUpValidationSchema,
        onSubmit: (values, { resetForm }) => {
          handleDataLoad(omit(values, "confirmPassword"));
          resetForm();
        },
      });

    return (
        <div className={styles.wrapper}>
      <h1>Sign Up</h1>

      {data?.data ? (
        <>
          <div>{data.data.message}</div>
          <button onClick={() => navigate(ROUTE_NAMES.SIGN_IN)}>
            Go to Login
          </button>
        </>
      ) : (
        <>
          <form className={styles.submit} onSubmit={formik.handleSubmit}>
            <label htmlFor="firstName">First Name</label>
            <input
              id="firstName"
              name="firstName"
              type="text"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.firstName}
            />
            {formik.touched.firstName && formik.errors.firstName && (
              <div className={styles.errors}>{formik.errors.firstName}</div>
            )}

            <label htmlFor="lastName">Last Name</label>
            <input
              id="lastName"
              name="lastName"
              type="text"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.lastName}
            />
            {formik.touched.lastName && formik.errors.lastName && (
              <div className={styles.errors}>{formik.errors.lastName}</div>
            )}

            <label htmlFor="email">Email Address</label>
            <input
              id="email"
              name="email"
              type="email"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.email}
            />
            {formik.touched.email && formik.errors.email && (
              <div className={styles.errors}>{formik.errors.email}</div>
            )}

            <label htmlFor="password">Password</label>
            <input
              id="password"
              name="password"
              type="password"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.password}
            />
            {formik.touched.password && formik.errors.password && (
              <div className={styles.errors}>{formik.errors.password}</div>
            )}
            <label htmlFor="confirmPassword">Confirm Password</label>
            <input
              id="confirmPassword"
              name="confirmPassword"
              type="password"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.confirmPassword}
            />
            {formik.touched.confirmPassword &&
              formik.errors.confirmPassword && (
                <div className={styles.errors}>
                  {formik.errors.confirmPassword}
                </div>
              )}
            <label htmlFor="gender">Gender</label>
            <input
              id="gender"
              name="gender"
              type="text"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.gender}
            />
            {formik.touched.gender && formik.errors.gender && (
              <div className={styles.errors}>{formik.errors.gender}</div>
            )}
            <label htmlFor="phone">Phone</label>
            <input
              id="phone"
              name="phone"
              type="text"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.phone}
            />
            {formik.touched.phone && formik.errors.phone && (
              <div className={styles.errors}>{formik.errors.phone}</div>
            )}

            <button type="submit">Submit</button>
          </form>

          {errors && <div className={styles.errors}>{errors.message}</div>}
        </>
      )}
    </div>
    );
};

Layout.propTypes = {
    data: PropTypes.array,
    errors: PropTypes.array,
    handleDataLoad: PropTypes.func,
}

export default Layout;