import React, { useEffect, useState } from "react";
import styles from "./Products.module.css";
// import { popularProducts } from "../../data";
import axios from "axios";
import { Link } from "react-router-dom";

export default function Products({ cat, sort }) {
  // console.log(cat, filters, sort);
  const [products, setProducts] = useState([]);
  // const [filteredProducts, setFilteredProducts] = useState([]);

  useEffect(() => {
    const getProducts = async () => {
      try {
        // console.log(cat);
        const response = await axios.get(
          cat
            ? `http://localhost:5000/api/products/category/${cat}`
            : "http://localhost:5000/api/products"
        );
        console.log(response);
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

  console.log(products);

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

  // useEffect(() => {
  //   const getProducts = async () => {
  //     try {
  //       const response = await axios.get(
  //         `http://localhost:5000/api/products?sort=${sort}`
  //       );
  //       console.log(response);
  //       setProducts(response.data.products);
  //     } catch (error) {
  //       console.log(error);
  //     }
  //   };
  //   sort === ('asc' || 'desc')&& getProducts();
  // }, [sort]);

  return (
    <>
      <div className="container-fluid">
        <div className="row px-3">
          {products.map((product) => {
            return (
              <>
                <div key={product.id} className={`col-md-3 col-sm-6 px-2 py-3`}>
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
              </>
            );
          })}
        </div>
      </div>
    </>
  );
}
