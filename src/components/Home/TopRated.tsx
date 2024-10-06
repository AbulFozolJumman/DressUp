"use client";

import ProductLoadingCard from "../product/ProductLoadingCard";
import { IProduct } from "@/types";
import ProductCard from "../product/ProductCard";
import { useGetAllProductsQuery } from "@/redux/api/product/productApi";

const TopRatedProducts = () => {
  // Fetch products using the Redux hook
  const { data, error, isLoading } = useGetAllProductsQuery("");

  const err = () => {
    throw new Error("Failed to fetch data");
  };

  // Filter and sort top-rated products
  const topRatedProducts = data?.products
    ?.filter((product: IProduct) => product.ratings > 4) // Assuming rating above 4 is "top-rated"
    ?.sort((a: IProduct, b: IProduct) => b.ratings - a.ratings) // Sort by ratings in descending order
    ?.slice(0, 4); // Take top 4 products

  return (
    <div className="py-10 container mx-auto px-5">
      <h2 className="text-2xl md:text-4xl text-center font-bold mb-6 text-[#093045]">
        Top Rated Products
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
      ) : topRatedProducts?.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
          {topRatedProducts.map((product: IProduct) => (
            <ProductCard key={product._id} product={product} />
          ))}
        </div>
      ) : (
        <p>No top-rated products found!</p>
      )}
    </div>
  );
};

export default TopRatedProducts;
