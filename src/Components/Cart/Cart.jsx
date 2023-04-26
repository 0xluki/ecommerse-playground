import React, { useEffect, useState } from "react";
import styles from "./Cart.module.css";
import { useSelector } from "react-redux";
import StripeCheckout from "react-stripe-checkout";
import { userRequest } from "../../requestMethod";
import { useNavigate } from "react-router-dom";

export default function Cart() {
  const cart = useSelector((state) => state.cart);
  const KEY = process.env.REACT_APP_STRIPE;
  const [stripeToken, setStripeToken] = useState(null);
  const navigate = useNavigate();
  const amount = Math.round(cart.total * 100);

  const onToken = (token) => {
    setStripeToken(token);
  };
  // console.log(stripeToken);

  useEffect(() => {
    const makeRequest = async () => {
      try {
        const res = await userRequest.post(
          "http://localhost:5000/api/checkout/payment",
          {
            tokenId: stripeToken.id,
            amount: amount,
          }
        );
        console.log(res.data);
        navigate("/success", {
          stripeData: res.data,
          products: cart,
        });
      } catch (err) {
        console.log(err);
      }
    };
    stripeToken && makeRequest();
    // stripeToken && cart.total >= 1 && makeRequest();
  }, [stripeToken, amount, navigate, cart]);

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
            {cart.products.map((product) => {
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
                    <div className="col-md-10 d-flex justify-content-between">
                      <div className=" d-flex flex-column justify-content-around">
                        <h6 className="mb-2">
                          <b>Product: </b>
                          {product.title}
                        </h6>
                        <h6 className="mb-2">
                          <b>ID: </b>
                          {product._id}
                        </h6>
                        <p
                          className={`${styles.color} p-0 m-0 mb-2`}
                          style={{ backgroundColor: `${product.color}` }}
                        ></p>
                        <h6>
                          <b>Size: </b>
                          {product.size}
                        </h6>
                      </div>
                      <div className="d-flex flex-column justify-content-center align-items-center">
                        <div className="d-flex align-items-center mb-3">
                          <button className="me-3 fs-5 border-0 bg-white">
                            <i class="fa-solid fa-plus"></i>
                          </button>
                          <span
                            className={`me-3 fs-6 px-3 py-1 ${styles.amount}`}
                          >
                            {product.quantity}
                          </span>
                          <button className="fs-5 border-0 bg-white">
                            <i class="fa-solid fa-minus"></i>
                          </button>
                        </div>
                        <div>
                          <h5 className="fw-bold">
                            {product.price * product.quantity}
                          </h5>
                        </div>
                      </div>
                    </div>
                  </div>
                </>
              );
            })}
          </div>

          <div className={`col-md-3 offset-md-1 gy-3 gy-md-0 text-center`}>
            <div className={`${styles.summary} p-4`}>
              <h5 className="text-center fw-bold mb-4">ORDER SUMMARY</h5>
              <div className=" d-flex justify-content-between mb-4">
                <span>Subtotal:</span>
                <span>{cart.total}</span>
              </div>
              <div className=" d-flex justify-content-between mb-4">
                <span>Shipping:</span>
                <span>0$</span>
              </div>
              <hr className="w-75 mx-auto mb-4" />
              <div className=" d-flex justify-content-between fw-bolder mb-4">
                <span>Total:</span>
                <span>{cart.total}</span>
              </div>
              <StripeCheckout
                name="Shop"
                image="https://avatars.githubusercontent.com/u/1486366?v=4"
                billingAddress
                shippingAddress
                description={`Your total is $${cart.total}`}
                amount={cart.total * 100}
                token={onToken}
                stripeKey={KEY}
              >
                <button className={`${styles.button2}`}>CHECKOUT NOW</button>
              </StripeCheckout>
              {/* <button className={`${styles.button2}`}>CHECKOUT NOW</button> */}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
