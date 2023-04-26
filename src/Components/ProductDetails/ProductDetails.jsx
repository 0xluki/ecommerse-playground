import React from "react";
import { images } from "../../data";
import Slider from "react-slick";
import styles from "./ProductDetails.module.css";
import Announcement from "../Announcement/Announcement";
import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import axios from "axios";
import { addProduct } from "../../Redux/cartRedux";
import { useDispatch } from "react-redux";

export default function ProductDetails() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  const location = useLocation();
  const id = location.pathname.split("/")[2];
  const [product, setProduct] = useState({});
  const [quantity, setQuantity] = useState(1);
  const [color, setColor] = useState("");
  const [size, setSize] = useState("");
  const dispatch = useDispatch();

  useEffect(() => {
    const getProduct = async () => {
      try {
        const res = await axios.get(
          "http://localhost:5000/api/products/find/" + id
        );
        // console.log(res);
        setProduct(res.data);
      } catch (err) {
        console.log(err);
      }
    };
    getProduct();
  }, [id]);

  const handleQuantity = (type) => {
    if (type === "inc") {
      setQuantity(quantity + 1);
    } else {
      quantity > 1 && setQuantity(quantity - 1);
    }
  };

  const handleClick = () => {
    dispatch(addProduct({ ...product, quantity, color, size }));
  };

  return (
    <>
      <Announcement />
      <div className="container">
        <div className="row py-5 d-flex align-items-center justify-content-center">
          <div className="col-md-4">
            <Slider {...settings}>
              {images.map((img) => {
                return (
                  <>
                    <img className="w-100" src={product.img} alt="" />
                  </>
                );
              })}
            </Slider>
          </div>
          <div className="offset-md-1 col-md-7 gy-4 ">
            <h4 className="fw-bold">{product.title}</h4>
            <p>{product.desc}</p>
            <p className="fs-3">{product.price}</p>
            <div className="w-75 d-flex justify-content-between align-items-center mx-auto mx-md-0">
              <div className="d-flex justify-content-center align-items-center">
                <span className="fw-bold me-3">Colors</span>
                {product.color?.map((c) => (
                  <p
                    key={c}
                    className={`${styles.color} p-0 m-0 me-2`}
                    style={{ backgroundColor: `${c}` }}
                    onClick={() => setColor(c)}
                  ></p>
                ))}
              </div>
              <div>
                <span className="fw-bold me-3">Size</span>
                <select
                  className="p-md-2 p-1"
                  onChange={(e) => setSize(e.target.value)}
                >
                  {product.size?.map((s) => (
                    <option>{s}</option>
                  ))}
                </select>
              </div>
            </div>
            <div className="mt-4 w-75 d-flex align-items-center justify-content-between  mx-auto mx-md-0">
              <div className="d-flex align-items-center ">
                <button
                  className="me-2 me-md-3 fs-5 border-0 bg-white"
                  onClick={() => handleQuantity("inc")}
                >
                  <i class="fa-solid fa-plus"></i>
                </button>
                <span
                  className={`me-2 me-md-3 fs-6 px-3 py-1 ${styles.amount}`}
                >
                  {quantity}
                </span>
                <button
                  className="fs-5 border-0 bg-white"
                  onClick={() => handleQuantity("dec")}
                >
                  <i class="fa-solid fa-minus"></i>
                </button>
              </div>
              <div>
                <button onClick={handleClick} className={styles.button}>
                  Add To Cart
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
