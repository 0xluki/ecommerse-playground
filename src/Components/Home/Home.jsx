import React from "react";
// import Announcement from "../Announcement/Announcement";
import MainSlider from "../MainSlider/MainSlider";
import ProductSlider from "../ProductSlider/ProductSlider";

import CategorySlider from "../CategorySlider/CategorySlider";

export default function Home() {
  return (
    <>
      {/* <Announcement /> */}
      <MainSlider />
      <CategorySlider />
      <ProductSlider />
    </>
  );
}
