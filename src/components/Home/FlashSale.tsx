"use client";

import FlashSaleProductCard from "../product/FlashSaleCard";
import ProductLoadingCard from "../product/ProductLoadingCard";
import { IProduct } from "@/types";
import { useGetAllProductsQuery } from "@/redux/api/product/productApi";

const FlashSale = () => {
  // Fetch products using the Redux hook
  const { data, error, isLoading } = useGetAllProductsQuery("");

  const err = () => {
    throw new Error("Failed to fetch data");
  };

  return (
    <div className="py-10 container mx-auto px-5">
      <h2 className="text-2xl md:text-4xl text-center font-bold mb-6 text-[#093045]">
        Flash Sale
      </h2>

      {/* Error Message */}
      {error && err()}

      {isLoading ? (
        <div className="flex justify-center items-center flex-wrap gap-5">
          <ProductLoadingCard />
          <ProductLoadingCard />
          <ProductLoadingCard />
          <ProductLoadingCard />
        </div>
      ) : data?.products?.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
          {data.products.slice(4, 8).map((product: IProduct) => (
            <FlashSaleProductCard key={product._id} product={product} />
          ))}
        </div>
      ) : (
        <p>No products found for Flash Sale!</p>
      )}
    </div>
  );
};

export default FlashSale;
