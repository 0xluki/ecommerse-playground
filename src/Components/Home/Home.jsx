import React from "react";
import MainSlider from "../MainSlider/MainSlider";
import ProductSlider from "../ProductSlider/ProductSlider";

import CategorySlider from "../CategorySlider/CategorySlider";

export default function Home() {
  return (
    <>
      <MainSlider />
      <CategorySlider />
      <ProductSlider />
    </>
  );
}
