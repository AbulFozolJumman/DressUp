"use client";

import Banner from "@/components/Home/Banner";
import Brands from "@/components/Home/Brands";
import FlashSale from "@/components/Home/FlashSale";
import DownloadApp from "@/components/Home/MobileApp";
import Services from "@/components/Home/Services";
import SubscribeUs from "@/components/Home/SubscribeUs";
import TopRatedProducts from "@/components/Home/TopRated";

const HomePage = () => {
  return (
    <>
      <Banner />
      <Services />
      <FlashSale />
      <TopRatedProducts />
      <Brands />
      <SubscribeUs />
      <DownloadApp />
    </>
  );
};

export default HomePage;
