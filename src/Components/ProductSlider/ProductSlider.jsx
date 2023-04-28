import React, { useEffect, useState } from "react";
import styles from "./ProductSlider.module.css";
import axios from "axios";
import { Link } from "react-router-dom";
import Slider from "react-slick";
import { addWishlist } from "../../Redux/wishlistRedux";
import { useDispatch } from "react-redux";
import { addCart } from "../../Redux/cartRedux";

export default function Products() {
  const [products, setProducts] = useState([]);
  const dispatch = useDispatch();

  useEffect(() => {
    const getProducts = async () => {
      try {
        const response = await axios.get("http://localhost:5000/api/products");
        // console.log(response);
        setProducts(response.data);
      } catch (error) {
        console.log(error);
      }
    };
    getProducts();
  }, []);

  const handleCartClick = (product) => {
    dispatch(addCart({ ...product, quantity: 1 }));
  };
  const handleWishClick = (product) => {
    dispatch(addWishlist({ ...product }));
  };

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
                <div className="row px-3 py-4">
                  <div key={product.id}>
                    <div className={`position-relative ${styles.item} py-2`}>
                      <div>
                        <div>
                          <img
                            className={`${styles.img} w-100`}
                            src={product.img}
                            alt=""
                          />
                        </div>
                        <div className="text-center mt-2">
                          <p className="m-0 mb-2">{product.title}</p>
                          <p>{product.price}</p>
                        </div>
                      </div>
                      <div className={`${styles.layer} `}>
                        <div
                          className={`${styles.icon}`}
                          onClick={() => {
                            handleCartClick(product);
                          }}
                        >
                          <i className="fa-solid fa-cart-shopping"></i>
                        </div>
                        <Link
                          className={`${styles.link}`}
                          to={`/product/${product._id}`}
                        >
                          <div className={`${styles.icon} mx-3`}>
                            <i className="fa-solid fa-magnifying-glass"></i>
                          </div>
                        </Link>
                        <div
                          className={`${styles.icon}`}
                          onClick={() => {
                            handleWishClick(product);
                          }}
                        >
                          <i className="fa-regular fa-heart"></i>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </>
            );
          })}
        </Slider>
        <div className="d-flex justify-content-end pt-5 pt-md-4">
          <Link to={"/productList"}>
            {" "}
            <button className={`${styles.button}`}>Browse All</button>
          </Link>
        </div>
      </div>
    </>
  );
}
