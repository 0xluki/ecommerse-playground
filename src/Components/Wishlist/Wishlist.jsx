import React from "react";
import styles from "./Wishlist.module.css";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

export default function Wishlist() {
  const wishlist = useSelector((state) => state.wishlist);
  // console.log(wishlist);

  return (
    <>
      <div className="container-fluid pt-5">
        <div className="row p-3">
          <h4 className="fw-bold text-center"> YOUR WISHLIST</h4>
          <div className="py-3 d-flex align-items-center justify-content-between">
            <Link to={"/home"}>
              <button className={`${styles.button1}`}>CONTINUE SHOPPING</button>
            </Link>
          </div>
        </div>
        <div className="row p-3">
          <div className="col-md-9 mx-auto ">
            {wishlist.products.map((product) => {
              return (
                <>
                  <div className="row pe-4 py-3 border-bottom">
                    <div className="col-md-2 col-6 mx-auto mb-2 mb-md-0 mx-md-0">
                      <img
                        height={135}
                        className="w-100"
                        src={product.img}
                        alt=""
                      />
                    </div>
                    <div className="col-md-10 d-flex justify-content-between align-items-center">
                      <div className=" d-flex flex-column justify-content-around">
                        <h6 className="mb-2">
                          <b>Product: </b>
                          {product.title}
                        </h6>
                        <h6 className="mb-2">
                          <b>Product Price: </b>
                          {product.price}$
                        </h6>
                        <h6 className="mb-2">
                          <b>ID: </b>
                          {product._id}
                        </h6>
                      </div>
                      <div>
                        <Link to={`/product/${product._id}`}>
                          <button className={`${styles.button1}`}>
                            View Product
                          </button>
                        </Link>
                      </div>
                    </div>
                  </div>
                </>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
}
