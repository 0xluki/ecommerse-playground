import React from "react";
import styles from "./Cart.module.css";

export default function Cart() {
  return (
    <>
      <div className="container-fluid">
        <div className="row p-3">
          <h4 className="fw-bold text-center"> YOUR CART</h4>
          <div className="py-3 d-flex align-items-center justify-content-between">
            <button className={`${styles.button1}`}>CONTINUE SHOPPING</button>
            <div>
              <span className="me-3">Shopping Bag (2)</span>
              <span>Your Wishlist (0)</span>
            </div>
            <button className={`${styles.button2}`}>CHECKOUT NOW</button>
          </div>
        </div>
        <div className="row p-3">
          <div className="col-md-8 ">
            <div className="row pe-4 py-3 border-bottom">
              <div className="col-md-2 col-6 mx-auto mb-2 mb-md-0 mx-md-0">
                <img
                  height={135}
                  className="w-100"
                  src="https://res.cloudinary.com/dwp0imlbj/image/upload/Route-Academy-products/1680392991339-2.jpeg"
                  alt=""
                />
              </div>
              <div className="col-md-10 d-flex justify-content-between">
                <div className=" d-flex flex-column justify-content-around">
                  <h6 className="mb-2">
                    <b>Product: </b>Men's Knitwear Sweater
                  </h6>
                  <h6 className="mb-2">
                    <b>ID: </b>45690827
                  </h6>
                  <p className={`${styles.color} p-0 m-0 mb-2`}></p>
                  <h6>
                    <b>Size: </b>38
                  </h6>
                </div>
                <div className="d-flex flex-column justify-content-center align-items-center">
                  <div className="d-flex align-items-center mb-3">
                    <button className="me-3 fs-5 border-0 bg-white">
                      <i class="fa-solid fa-plus"></i>
                    </button>
                    <span className={`me-3 fs-6 px-3 py-1 ${styles.amount}`}>
                      1
                    </span>
                    <button className="fs-5 border-0 bg-white">
                      <i class="fa-solid fa-minus"></i>
                    </button>
                  </div>
                  <div>
                    <h5 className="fw-bold">34$</h5>
                  </div>
                </div>
              </div>
            </div>
            <div className="row pe-4 py-3 border-bottom">
              <div className="col-md-2 col-6 mb-2 mb-md-0  mx-auto mx-md-0">
                <img
                  height={135}
                  className="w-100"
                  src="https://res.cloudinary.com/dwp0imlbj/image/upload/Route-Academy-products/1680392991339-2.jpeg"
                  alt=""
                />
              </div>
              <div className="col-md-10 d-flex justify-content-between">
                <div className=" d-flex flex-column justify-content-around">
                  <h6 className="mb-2">
                    <b>Product: </b>Men's Knitwear Sweater
                  </h6>
                  <h6 className="mb-2">
                    <b>ID: </b>45690827
                  </h6>
                  <p className={`${styles.color} p-0 m-0 mb-2`}></p>
                  <h6>
                    <b>Size: </b>38
                  </h6>
                </div>
                <div className="d-flex flex-column justify-content-center align-items-center">
                  <div className="d-flex align-items-center mb-3">
                    <button className="me-3 fs-5 border-0 bg-white">
                      <i class="fa-solid fa-plus"></i>
                    </button>
                    <span className={`me-3 fs-6 px-3 py-1 ${styles.amount}`}>
                      1
                    </span>
                    <button className="fs-5 border-0 bg-white">
                      <i class="fa-solid fa-minus"></i>
                    </button>
                  </div>
                  <div>
                    <h5 className="fw-bold">34$</h5>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className={`col-md-3 offset-md-1 gy-3 gy-md-0 text-center`}>
            <div className={`${styles.summary} p-4`}>
              <h5 className="text-center fw-bold mb-4">ORDER SUMMARY</h5>
              <div className=" d-flex justify-content-between mb-4">
                <span>Subtotal:</span>
                <span>84$</span>
              </div>
              <div className=" d-flex justify-content-between mb-4">
                <span>Shipping:</span>
                <span>6$</span>
              </div>
              <hr className="w-75 mx-auto mb-4" />
              <div className=" d-flex justify-content-between fw-bolder mb-4">
                <span>Total:</span>
                <span>90$</span>
              </div>
              <button className={`${styles.button2}`}>CHECKOUT NOW</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
