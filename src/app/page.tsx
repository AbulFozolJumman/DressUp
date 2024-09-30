"use client";

import Banner from "@/components/Home/Banner";
import Brands from "@/components/Home/Brands";
import FlashSale from "@/components/Home/FlashSale";
import TopCategories from "@/components/Home/TopCategory";

const HomePage = () => {
  return (
    <>
      <Banner />
      <FlashSale />
      <TopCategories />
      <Brands />
    </>
  );
};

export default HomePage;
