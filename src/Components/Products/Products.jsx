import React, { useEffect, useState } from "react";
import styles from "./Products.module.css";
import axios from "axios";
import { Link } from "react-router-dom";
import { addCart } from "../../Redux/cartRedux";
import { addWishlist } from "../../Redux/wishlistRedux";
import { useDispatch } from "react-redux";

export default function Products({ cat, sort }) {
  const [products, setProducts] = useState([]);
  const dispatch = useDispatch();

  useEffect(() => {
    const getProducts = async () => {
      try {
        // console.log(cat);
        const response = await axios.get(
          cat
            ? `http://localhost:5000/api/products/category/${cat}`
            : "http://localhost:5000/api/products"
        );
        // console.log(response);
        if (cat) {
          setProducts(response.data.products);
        } else {
          setProducts(response.data);
        }
      } catch (error) {
        console.log(error);
      }
    };
    getProducts();
  }, [cat]);

  useEffect(() => {
    if (sort === "newest") {
      setProducts((prev) =>
        [...prev].sort((a, b) => a.createdAt - b.createdAt)
      );
    } else if (sort === "asc") {
      setProducts((prev) => [...prev].sort((a, b) => a.price - b.price));
    } else {
      setProducts((prev) => [...prev].sort((a, b) => b.price - a.price));
    }
  }, [sort]);

  const handleCartClick = (product) => {
    dispatch(addCart({ ...product, quantity: 1 }));
  };
  const handleWishClick = (product) => {
    dispatch(addWishlist({ ...product }));
  };

  return (
    <>
      <div className="container-fluid">
        <div className="row px-3">
          {products.map((product) => {
            return (
              <>
                <div
                  key={product._id}
                  className={`col-md-3 col-sm-6 px-2 py-2`}
                >
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
                        <p>{product.price}$</p>
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
                        <div className={`${styles.icon}  mx-3`}>
                          <i class="fa-solid fa-magnifying-glass"></i>
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
              </>
            );
          })}
        </div>
      </div>
    </>
  );
}
