import React from "react";
import styles from "./MainSlider.module.css";
import { sliderItems } from "../../data";

export default function MainSlider() {
  return (
    <>
      <div>
        <div
          id="carouselExample"
          className={`carousel slide ${styles.mainSlider}`}
        >
          <div className="carousel-inner w-100 h-100">
            <div
              className={`w-100 h-100 carousel-item active ${styles.carouselItem1}`}
            >
              <div className="row px-5 w-100 h-100 d-flex align-items-center justify-content-center">
                <div className="col-sm-6 col-5">
                  <img
                    className={`${styles.img}`}
                    src={sliderItems[2].img}
                    alt=""
                  />
                </div>
                <div className="col-sm-6 col-7">
                  <h1 className={`${styles.title}`}>{sliderItems[0].title}</h1>
                  <p className={`${styles.desc}`}>{sliderItems[0].desc}</p>
                  <button className={`${styles.button}`}>SHOP NOW</button>
                </div>
              </div>
            </div>

            <div
              className={`w-100 h-100 carousel-item ${styles.carouselItem2}`}
            >
              <div className="row px-5 w-100 h-100 d-flex align-items-center justify-content-center">
                <div className="col-6">
                  <img
                    className={`${styles.img}`}
                    src={sliderItems[2].img}
                    alt=""
                  />
                </div>
                <div className="col-6">
                  <h1 className={`${styles.title}`}>{sliderItems[1].title}</h1>
                  <p className={`${styles.desc}`}>{sliderItems[1].desc}</p>
                  <button className={`${styles.button}`}>SHOP NOW</button>
                </div>
              </div>
            </div>

            <div
              className={`w-100 h-100 carousel-item ${styles.carouselItem3}`}
            >
              <div className="row px-5 w-100 h-100 d-flex align-items-center justify-content-center">
                <div className="col-6">
                  <img
                    className={`${styles.img}`}
                    src={sliderItems[2].img}
                    alt=""
                  />
                </div>
                <div className="col-6">
                  <h1 className={`${styles.title}`}>{sliderItems[2].title}</h1>
                  <p className={`${styles.desc}`}>{sliderItems[2].desc}</p>
                  <button className={`${styles.button}`}>SHOP NOW</button>
                </div>
              </div>
            </div>
          </div>

          <button
            className={`${styles.carouselControlPrev} carousel-control-prev`}
            type="button"
            data-bs-target="#carouselExample"
            data-bs-slide="prev"
          >
            <div className={`${styles.bgIcon}`}>
              <span aria-hidden="true">
                <i className="fa-solid fa-angle-left text-dark"></i>
              </span>
            </div>
            <span className="visually-hidden">Previous</span>
          </button>
          <button
            className={`${styles.carouselControlNext} carousel-control-next`}
            type="button"
            data-bs-target="#carouselExample"
            data-bs-slide="next"
          >
            <div className={`${styles.bgIcon}`}>
              <span aria-hidden="true">
                <i className="fa-solid fa-angle-right text-dark"></i>
              </span>
            </div>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
      </div>
    </>
  );
}
