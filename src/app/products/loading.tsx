import ProductLoadingCard from "@/components/product/ProductLoadingCard";
import { IProduct } from "@/types";
import React from "react";

const ProductsLoadingPage = async () => {
  const res = await fetch(`${process.env.BACKEND_URL}/products`);
  const data = await res.json();
  return (
    <div className="grid lg:grid-cols-4 md:grid-cols-3 grid-cols-1 gap-7 mt-5">
      {data?.products.map((product: IProduct) => (
        <ProductLoadingCard key={product._id} />
      ))}
    </div>
  );
};

export default ProductsLoadingPage;
