import ProductLoadingCard from "@/components/product/ProductLoadingCard";
import { IProduct } from "@/types";
import React from "react";

const ProductsLoadingPage = async () => {
  const res = await fetch(`${process.env.BACKEND_URL}/products`);
  const data = await res.json();
  return (
    <div className="flex justify-center items-center flex-wrap gap-5">
      {data?.products.map((product: IProduct) => (
        <ProductLoadingCard key={product._id} />
      ))}
    </div>
  );
};

export default ProductsLoadingPage;
