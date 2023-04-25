import React, { useState } from "react";
import styles from "./Login.module.css";
import { Link, useNavigate } from "react-router-dom";
import { useFormik } from "formik";
import * as Yup from "yup";
import axios from "axios";

export default function Login() {
  let navigate = useNavigate();
  let [isLoading, setisLoading] = useState(false);
  let [messageError, setmessageError] = useState("");

  async function handleLogin(values) {
    setisLoading(true);
    let response = await axios
      .post("http://localhost:5000/api/auth/register", values)
      .catch((error) => {
        console.log(error);
        setisLoading(false);
        setmessageError(`${error.response.statusText}`);
      });
    console.log(response);
    if (response.status === 201) {
      // localStorage.setItem("Token", response.token);
      setisLoading(false);
      navigate("/home");
    }
  }

  let validationSchema = Yup.object({
    email: Yup.string().required("Email is requird").email("Email is invalid"),
    password: Yup.string()
      .required("Password is requird")
      .matches(
        /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/,
        "Minimum eight characters, at least one letter and one number"
      ),
  });

  let formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema,
    onSubmit: handleLogin,
  });
  return (
    <>
      <div
        className={`container-fluid d-flex align-items-center justify-content-center ${styles.container}`}
      >
        <div className="col-md-5 mx-auto bg-white p-3">
          <h4 className="fw-bold text-center">CREATE AN ACCOUNT</h4>
          {messageError ? (
            <div className="alert alert-danger my-2">{messageError}</div>
          ) : null}
          <form onSubmit={formik.handleSubmit} className="text-center">
            <input
              className={`${styles.input}`}
              type="email"
              placeholder="Email"
              id="email"
              name="email"
              value={formik.values.email}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
            {formik.errors.email && formik.touched.email ? (
              <div className="alert alert-danger mt-2 p-1">
                {formik.errors.email}
              </div>
            ) : null}

            <input
              className={`${styles.input}`}
              type="password"
              placeholder="Password"
              id="password"
              name="password"
              value={formik.values.password}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
            {formik.errors.password && formik.touched.password ? (
              <div className="alert alert-danger mt-2 p-1">
                {formik.errors.password}
              </div>
            ) : null}

            {isLoading ? (
              <button className={`${styles.button}`} type="button">
                <i className="fas fa-spinner fa-spin"></i>
              </button>
            ) : (
              <button className={`${styles.button}`} type="submit">
                LOGIN
              </button>
            )}
          </form>
          <div>
            <Link className={`${styles.link}`} to={"/forgetPassword"}>
              Forget Password?
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
