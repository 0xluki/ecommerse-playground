import React from "react";
import { Link } from "react-router-dom";
import styles from "./Success.module.css";

export default function Success() {
  const order = Math.floor(Math.random() * 100000) + 1;
  return (
    <>
      <div className={`${styles.container}`}>
        <div className="d-flex align-items-center flex-column justify-content-center">
          <p className="font18">
            Order has been created successfully. Your order number is {order}
          </p>
          <button className={`${styles.button} mt-3`}>
            <Link className={`${styles.link}`} to={"/home"}>
              Go to home Page
            </Link>
          </button>
        </div>
      </div>
    </>
  );
}
