import React from "react";
import styles from "./Login.module.css";
import { Link } from "react-router-dom";

export default function Login() {
  return (
    <>
      <div
        className={`container-fluid d-flex align-items-center justify-content-center ${styles.container}`}
      >
        <div className="col-md-5 mx-auto bg-white p-3">
          <h4 className="fw-bold text-center">CREATE AN ACCOUNT</h4>
          <form className="text-center">
            <input
              className={`${styles.input}`}
              type="mail"
              placeholder="Email"
              id="mail"
            />
            <input
              className={`${styles.input}`}
              type="password"
              placeholder="Password"
              id="password"
            />
            <button className={`${styles.button}`}>LOGIN</button>
          </form>
          <div>
            <Link className={`${styles.link}`}>Forget Password?</Link>
          </div>
        </div>
      </div>
    </>
  );
}
