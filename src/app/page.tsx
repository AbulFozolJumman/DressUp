"use client";

import Banner from "@/components/Home/Banner";
import FlashSale from "@/components/Home/FlashSale";
import DownloadApp from "@/components/Home/MobileApp";
import Services from "@/components/Home/Services";
import SubscribeUs from "@/components/Home/SubscribeUs";
import TopCategories from "@/components/Home/TopCategory";

const HomePage = () => {
  return (
    <>
      <Banner />
      <Services />
      <FlashSale />
      <SubscribeUs />
      <TopCategories />
      {/* <Brands /> */}
      <DownloadApp />
    </>
  );
};

export default HomePage;
