import React from "react";
import styles from "./Footer.module.css";

export default function Footer() {
  return (
    <>
      <div className="container-fluid ps-md-5 ps-0 pt-4 pb-2 bg-light">
        <div className="row">
          <div className="col-md-5 gy-3 gy-md-0">
            <div className="pe-4">
              <h3 className="fw-bolder mb-3">E-commerce</h3>
              <p>
                {" "}
                There are many variations of passages of Lorem Ipsum available,
                but the majority have suffered alteration in some form, by
                injected humour, or randomised words which don’t look even
                slightly believable.
              </p>
              <div className="d-flex">
                <div className={`${styles.icon}`}>
                  <i className="fa-brands fa-facebook"></i>
                </div>
                <div className={`${styles.icon}  mx-2`}>
                  <i className="fa-brands fa-twitter"></i>
                </div>
                <div className={`${styles.icon} mx-2`}>
                  <i className="fa-brands fa-instagram"></i>
                </div>
                <div className={`${styles.icon} mx-2`}>
                  <i className="fa-brands fa-pinterest"></i>
                </div>
              </div>
            </div>
          </div>

          <div className="col-md-5 offset-0 offset-md-1">
            <h3 className="fw-bolder mb-3">Contact</h3>
            <div className="mb-3">
              <i className="fa-solid fa-location-dot me-2"></i>
              <span>622 Dixie Path , South Tobinchester 98336</span>
            </div>
            <div className="mb-3">
              <i className="fa-solid fa-phone me-2"></i>
              <span>+1 234 56 78</span>
            </div>
            <div className="mb-4">
              <i className="fa-solid fa-envelope me-2"></i>
              <span> contact@team17.dev</span>
            </div>
            <div>
              <img src="https://i.ibb.co/Qfvn4z6/payment.png" alt="" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
