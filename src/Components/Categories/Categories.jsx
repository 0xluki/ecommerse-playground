import React from "react";
import { categories } from "../../data";
import styles from "./Categories.module.css";

export default function Categories() {
  return (
    <>
      <div className="container-fluid py-3">
        <div className="row px-3">
          {categories.map((category) => {
            return (
              <>
                <div key={category.id} className="col-md-4 px-2 gy-3 gy-md-0 ">
                  <div className="position-relative">
                    <img
                      className={`${styles.img} w-100`}
                      src={category.img}
                      alt=""
                    />
                    <div className={`${styles.layer}`}>
                      <h4 className={`${styles.title}`}>{category.title}</h4>
                      <button className={`${styles.button}`}>SHOP NOW</button>
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
