import React from "react";
import styles from "./MainSlider.module.css";
import img1 from "../../Assets/1.png";
import img2 from "../../Assets/2.png";
import img3 from "../../Assets/3.png";

export default function MainSlider() {
  return (
    <>
      <div>
        <div
          id="carouselExample"
          className={`carousel slide pt-5 ${styles.mainSlider}`}
        >
          <div className="carousel-inner w-100 h-100">
            <div
              className={`w-100 h-100 carousel-item active px-md-5`}
            >
              <div className="row p-5 w-100 h-100 d-flex align-items-center justify-content-center">
                <div className="col-6">
                  <img className={`${styles.img}`} src={img1} alt="" />
                </div>
                <div className="col-5 offset-1">
                  <h3 className={`${styles.title}`}>Abkoncore hr120</h3>
                  <p className={`${styles.desc}`}>
                    3 SYNC ARGB Fans <br></br>+ Remote Controller
                  </p>
                  <button className={`${styles.button}`}>SHOP NOW</button>
                </div>
              </div>
            </div>

            <div
              className={`w-100 h-100 carousel-item px-md-5`}
            >
              <div className="row p-5 w-100 h-100 d-flex align-items-center justify-content-center">
                <div className="col-6">
                  <img className={`${styles.img}`} src={img2} alt="" />
                </div>
                <div className="col-5 offset-1">
                  <h3 className={`${styles.title}`}>Abkoncore h450x</h3>
                  <p className={`${styles.desc}`}>
                    {" "}
                    Middle Tower Case <br></br>+ 4 RGB Fan + PSU 700W
                  </p>
                  <button className={`${styles.button}`}>SHOP NOW</button>
                </div>
              </div>
            </div>

            <div
              className={`w-100 h-100 carousel-item px-md-5`}
            >
              <div className="row p-5 w-100 h-100 d-flex align-items-center justify-content-center">
                <div className="col-6">
                  <img className={`${styles.img}`} src={img3} alt="" />
                </div>
                <div className="col-5 offset-1">
                  <h3 className={`${styles.title}`}>Msi ds502</h3>
                  <p className={`${styles.desc}`}>
                    Surround Virtual 7.1 Gaming Headset{" "}
                  </p>
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
