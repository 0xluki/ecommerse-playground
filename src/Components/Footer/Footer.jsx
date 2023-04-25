import React from "react";
import styles from "./Footer.module.css";

export default function Footer() {
  return (
    <>
      <div className="container-fluid pt-4 pb-2 bg-light">
        <div className="row">
          <div className="col-md-4">
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
                  <i class="fa-brands fa-facebook"></i>
                </div>
                <div className={`${styles.icon}  mx-2`}>
                  <i class="fa-brands fa-twitter"></i>
                </div>
                <div className={`${styles.icon} mx-2`}>
                  <i class="fa-brands fa-instagram"></i>
                </div>
                <div className={`${styles.icon} mx-2`}>
                  <i class="fa-brands fa-pinterest"></i>
                </div>
              </div>
            </div>
          </div>

          <div className="col-md-4 gy-3 gy-md-0">
            <div className="px-0 px-md-3">
              <h3 className="fw-bolder mb-3">Useful Links</h3>
              <div className="d-flex  font14">
                <div className="me-5">
                  <p>Home</p>
                  <p>Man Fashion</p>
                  <p>Accessories</p>
                  <p>OrderTracking</p>
                  <p>Wishlist</p>
                </div>
                <div className="ms-5">
                  <p>Cart</p>
                  <p>Woman Fashion</p>
                  <p>My Account</p>
                  <p>Terms</p>
                </div>
              </div>
            </div>
          </div>

          <div className="col-md-4">
            <h3 className="fw-bolder mb-3">Contact</h3>
            <div className="mb-3">
              <i class="fa-solid fa-location-dot me-2"></i>
              <span>622 Dixie Path , South Tobinchester 98336</span>
            </div>
            <div className="mb-3">
              <i class="fa-solid fa-phone me-2"></i>
              <span>+1 234 56 78</span>
            </div>
            <div className="mb-4">
              <i class="fa-solid fa-envelope me-2"></i>
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
