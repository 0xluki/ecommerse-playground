import React, { useState } from "react";
// import styles from "./ProductList.module.css";
import Products from "../Products/Products";
import { useLocation } from "react-router-dom";

export default function ProductList() {
  const location = useLocation();
  const category = location.pathname.split("/")[2];
  const [sort, setSort] = useState("newest");

  return (
    <>
      <div className="container-fluid mt-5">
        <div className="row p-3">
          <div className="col-md-3">
            <span className={`font18 fw-bold me-2`}>Sort Products:</span>
            <select
              className="p-md-2 p-1 "
              onChange={(e) => setSort(e.target.value)}
            >
              <option selected value="newest">
                Sort by price
              </option>
              <option value="asc"> Price (asc)</option>
              <option value="desc"> Price (desc)</option>
            </select>
          </div>
        </div>
      </div>
      <Products cat={category} sort={sort} />
    </>
  );
}
