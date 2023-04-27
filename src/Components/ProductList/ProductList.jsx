import React, { useState } from "react";
// import styles from "./ProductList.module.css";
// import Announcement from "../Announcement/Announcement";
import Products from "../Products/Products";
import { useLocation } from "react-router-dom";

export default function ProductList() {
  const location = useLocation();
  const category = location.pathname.split("/")[2];
  // const [filters, setFilters] = useState({});
  const [sort, setSort] = useState("newest");

  // const handleFilters = (e) => {
  //   const value = e.target.value;
  //   setFilters({
  //     ...filters,
  //     [e.target.name]: value,
  //   });
  // };
  // console.log(filters, sort);

  return (
    <>
      {/* <Announcement /> */}
      <div className="container-fluid mt-5">
        <div className="row p-3">
          {/* <div className="d-flex justify-content-between">
            <div className="col-md-3">
              <span className={`font18 fw-bold me-2`}>Filter Products:</span>
              <select
                name="color"
                onChange={handleFilters}
                className="me-2 p-md-2 p-1 "
              >
                <option disabled>Color</option>
                <option> White</option>
                <option> Black</option>
                <option> Red</option>
                <option> Blue</option>
                <option> Green</option>
              </select>
              <select
                name="size"
                onChange={handleFilters}
                className="p-md-2 p-1"
              >
                <option disabled>Size</option>
                <option> XL</option>
                <option> L</option>
                <option> M</option>
                <option> S</option>
                <option> XS</option>
              </select>
            </div>
            <div className="col-md-3">
              <span className={`font18 fw-bold me-2`}>Sort Products:</span>
              <select
                className="p-md-2 p-1 "
                onChange={(e) => setSort(e.target.value)}
              >
                <option selected value="newest">
                  Newest
                </option>
                <option value="asc"> Price (asc)</option>
                <option value="desc"> Price (desc)</option>
              </select>
            </div>
          </div> */}
          <div className="col-md-3">
            <span className={`font18 fw-bold me-2`}>Sort Products:</span>
            <select
              className="p-md-2 p-1 "
              onChange={(e) => setSort(e.target.value)}
            >
              <option selected value="newest">
                Newest
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
