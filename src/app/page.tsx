"use client";

import Banner from "@/components/Home/Banner";
import FlashSale from "@/components/Home/FlashSale";
import DownloadApp from "@/components/Home/MobileApp";
import TopCategories from "@/components/Home/TopCategory";

const HomePage = () => {
  return (
    <>
      <Banner />
      <FlashSale />
      <TopCategories />
      {/* <Brands /> */}
      <DownloadApp />
    </>
  );
};

export default HomePage;
