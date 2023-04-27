import React from "react";
// import Announcement from "../Announcement/Announcement";
import MainSlider from "../MainSlider/MainSlider";
// import Categories from "../Categories/Categories";
import Products from "../Products/Products";
import CategorySlider from "../CategorySlider/CategorySlider";

export default function Home() {
  return (
    <>
      {/* <Announcement /> */}
      <MainSlider />
      <CategorySlider />
      {/* <Categories /> */}
      <Products />
    </>
  );
}
