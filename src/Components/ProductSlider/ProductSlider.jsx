import React, { useEffect, useState } from "react";
import styles from "./ProductSlider.module.css";
import axios from "axios";
import { Link } from "react-router-dom";
import Slider from "react-slick";

export default function Products() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const getProducts = async () => {
      try {
        // console.log(cat);
        const response = await axios.get("http://localhost:5000/api/products");
        console.log(response);
        setProducts(response.data);
      } catch (error) {
        console.log(error);
      }
    };
    getProducts();
  });
  console.log(products);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
  };

  return (
    <>
      <div className="container-fluid p-5">
        <h5 className="fw-bold">SHOP BY PRODUCTS</h5>
        <Slider {...settings}>
          {products.map((product) => {
            return (
              <>
                <div className="row px-3">
                  <div key={product.id}>
                    <div className={`position-relative ${styles.item}`}>
                      <div className={`${styles.circle}`}></div>
                      <div className={`position-relative py-4`}>
                        <img
                          className={`${styles.img} w-100`}
                          src={product.img}
                          alt=""
                        />
                        <div className={`${styles.layer} `}>
                          <div className={`${styles.icon}`}>
                            <i class="fa-solid fa-cart-shopping"></i>
                          </div>
                          <Link
                            className={`${styles.link}`}
                            to={`/product/${product._id}`}
                          >
                            <div className={`${styles.icon}  mx-3`}>
                              <i class="fa-solid fa-magnifying-glass"></i>
                            </div>
                          </Link>
                          <div className={`${styles.icon}`}>
                            <i class="fa-regular fa-heart"></i>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </>
            );
          })}
        </Slider>
        <div className="d-flex justify-content-end pt-3">
          <Link to={"/productList"}>
            {" "}
            <button className={`${styles.button}`}>Browse All</button>
          </Link>
        </div>
      </div>
    </>
  );
}
