import React from "react";
import Announcement from "../Announcement/Announcement";
import MainSlider from "../MainSlider/MainSlider";
import Categories from "../Categories/Categories";
import Products from "../Products/Products";

export default function Home() {
  return (
    <>
      <Announcement />
      <MainSlider />
      <Categories />
      <Products />
    </>
  );
}
