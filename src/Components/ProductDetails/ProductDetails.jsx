import React from "react";
import { images } from "../../data";
import Slider from "react-slick";
import styles from "./ProductDetails.module.css";
import Announcement from "../Announcement/Announcement";

export default function ProductDetails() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
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
                    <img className="w-100" src={img} alt="" />
                  </>
                );
              })}
            </Slider>
          </div>
          <div className="offset-md-1 col-md-7">
            <h4 className="fw-bold">
              Crew Neck Long Sleeve Men's Knitwear Sweater
            </h4>
            <p>
              Material\tCotton\nColour Name\tNAVY\nDepartment\tMen\nMaterial
              Composition\tMAIN FABRIC: 100% Cotton
            </p>
            <p className="fs-3">87$</p>
            <div className="w-50 d-flex justify-content-between align-items-center">
              <div className="d-flex justify-content-center align-items-center">
                <span className="fw-bold me-3">Colors</span>
                <p className={`${styles.color} ${styles.color1} p-0 m-0`}></p>
                <p
                  className={`${styles.color} ${styles.color2} p-0 m-0 mx-2`}
                ></p>
                <p className={`${styles.color} ${styles.color3} p-0 m-0`}></p>
              </div>
              <div>
                <span className="fw-bold me-3">Size</span>
                <select className="p-md-2 p-1">
                  <option> XS</option>
                  <option> S</option>
                  <option> M</option>
                  <option> L</option>
                  <option> XL</option>
                </select>
              </div>
            </div>
            <div className="mt-4 w-50 d-flex align-items-center justify-content-between">
              <div className="d-flex align-items-center ">
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
                <button className={styles.button}>Add To Cart</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
