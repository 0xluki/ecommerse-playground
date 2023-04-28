import React, { useState } from "react";
import styles from "./Register.module.css";
import { useFormik } from "formik";
import * as Yup from "yup";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function Register() {
  let navigate = useNavigate();
  let [isLoading, setisLoading] = useState(false);
  let [messageError, setmessageError] = useState("");

  async function handleRegister(values) {
    let body = {
      username: values.username,
      email: values.email,
      password: values.password,
    };
    // console.log(body);
    setisLoading(true);
    let response = await axios
      .post("http://localhost:5000/api/auth/register", body)
      .catch((error) => {
        console.log(error);
        setisLoading(false);
        setmessageError(`${error.message}`);
      });
    // console.log(response);
    if (response.status === 201) {
      setisLoading(false);
      navigate("/login");
    }
  }

  let validationSchema = Yup.object({
    username: Yup.string()
      .required("Name is required")
      .matches(
        /^(?:[a-zA-Z0-9\s@,=%$#&_\u0600-\u06FF\u0750-\u077F\u08A0-\u08FF\uFB50-\uFDCF\uFDF0-\uFDFF\uFE70-\uFEFF]|(?:\uD802[\uDE60-\uDE9F]|\uD83B[\uDE00-\uDEFF])){2,20}$/,
        "Please enter a valid name"
      ),
    email: Yup.string().required("Email is requird").email("Email is invalid"),
    password: Yup.string()
      .required("Password is requird")
      .matches(
        /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/,
        "Minimum eight characters, at least one letter and one number"
      ),
    rePassword: Yup.string()
      .required("Repassword is requird")
      .oneOf([Yup.ref("password")], "Password and repassword doesnt match"),
  });

  let formik = useFormik({
    initialValues: {
      username: "",
      email: "",
      password: "",
      rePassword: "",
    },
    validationSchema,
    onSubmit: handleRegister,
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
              type="text"
              placeholder="Name"
              id=" username"
              name="username"
              value={formik.values.username}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
            {formik.errors.username && formik.touched.username ? (
              <div className="alert alert-danger mt-2 p-1">
                {formik.errors.username}
              </div>
            ) : null}

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

            <input
              className={`${styles.input}`}
              type="password"
              placeholder="Confirm Password"
              id="rePassword"
              name="rePassword"
              value={formik.values.rePassword}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
            {formik.errors.rePassword && formik.touched.rePassword ? (
              <div className="alert alert-danger mt-2 p-1">
                {formik.errors.rePassword}
              </div>
            ) : null}

            {isLoading ? (
              <button className={`${styles.button}`} type="button">
                <i className="fas fa-spinner fa-spin"></i>
              </button>
            ) : (
              <button className={`${styles.button}`} type="submit">
                CREATE
              </button>
            )}
          </form>
        </div>
      </div>
    </>
  );
}
