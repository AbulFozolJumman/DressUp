"use client";

import { useGetProductsQuery } from "@/redux/api/baseApi";

const AboutPage = () => {
  const { data } = useGetProductsQuery("");
  console.log(data);
  return <div>About{data?.products.length}</div>;
};

export default AboutPage;
