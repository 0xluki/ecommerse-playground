import React, { useEffect, useState } from "react";
import "./CategorySlider.module.css";
import Slider from "react-slick";
import axios from "axios";
import { Link } from "react-router-dom";

export default function CategorySlider() {
  const [categories, setCategories] = useState([]);

  async function getCategories() {
    const { data } = await axios.get(
      "http://localhost:5000/api/products/categories"
    );
    // console.log(data);
    setCategories(data.categories);
  }

  useEffect(() => {
    getCategories();
  }, []);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
  };
  return (
    <>
      <div className="container-fluid p-5">
        <h5 className="fw-bold">SHOP BY CATEGORIES</h5>
        <Slider {...settings}>
          {categories.map((category) => {
            return (
              <>
                <div key={category._id} className="row py-3">
                  <Link
                    className="link"
                    to={`/productList/${category.categoryType}`}
                  >
                    <div key={category._id}>
                      <img
                        className="w-100"
                        height={200}
                        src={category.img}
                        alt=""
                      />
                      <h2 className="h6 pt-2 text-center">
                        {category.categoryType}
                      </h2>
                    </div>
                  </Link>
                </div>
              </>
            );
          })}
        </Slider>
      </div>
    </>
  );
}
