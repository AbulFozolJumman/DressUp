"use client";

import { useState } from "react";
import ProductCard from "@/components/product/ProductCard";
import { IProduct } from "@/types";
import ProductLoadingCard from "@/components/product/ProductLoadingCard";
import { useGetAllProductsQuery } from "@/redux/api/product/productApi";

const ProductsPage = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [category, setCategory] = useState<string>("");
  const [sort, setSort] = useState<string>("");
  const [limit, setLimit] = useState<string>("12");

  const { data, error, isLoading } = useGetAllProductsQuery({
    page: currentPage,
    category,
    sort,
    limit,
  });

  const handleCategoryChange = (
    event: React.ChangeEvent<HTMLSelectElement>
  ) => {
    setCategory(event.target.value);
    setCurrentPage(1);
  };

  const handleSortChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSort(event.target.value);
    setCurrentPage(1);
  };

  const handleLimitChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setLimit(event.target.value);
    setCurrentPage(1);
  };

  const handlePageChange = (page: number) => {
    if (page >= 1 && page <= data?.totalPages) {
      setCurrentPage(page);
    }
  };

  const err = () => {
    throw new Error("Failed to fetch data");
  };

  return (
    <div className="py-10 container mx-auto px-5">
      <h1 className="text-3xl font-bold mb-6 text-center">Our Products</h1>

      {/* Filters and Sorting */}
      <div className="mb-6 flex justify-between items-center gap-5">
        {/* Category Filter */}
        <div>
          <label htmlFor="category" className="mr-2">
            Filter by Category:
          </label>
          <select
            id="category"
            value={category}
            onChange={handleCategoryChange}
            className="border p-2 rounded"
          >
            <option value="">All</option>
            <option value="Kids">Kids</option>
            <option value="Boys">Boys</option>
            <option value="Man">Men</option>
          </select>
        </div>

        {/* Sort by Price */}
        <div>
          <label htmlFor="sort" className="mr-2">
            Sort by Price:
          </label>
          <select
            id="sort"
            value={sort}
            onChange={handleSortChange}
            className="border p-2 rounded"
          >
            <option value="">Recently Added</option>
            <option value="asc">Low to High</option>
            <option value="desc">High to Low</option>
          </select>
        </div>

        {/* Set Limit */}
        <div className="hidden">
          <label htmlFor="limit" className="mr-2">
            Products per Page:
          </label>
          <select
            id="limit"
            value={limit}
            onChange={handleLimitChange}
            className="border p-2 rounded"
          >
            <option value="">All</option>
            <option value="4">4</option>
            <option value="8">8</option>
            <option value="12">12</option>
          </select>
        </div>
      </div>

      {/* Error Message */}
      {error && err()}

      {/* Product Grid */}
      {isLoading ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
          <ProductLoadingCard />
          <ProductLoadingCard />
          <ProductLoadingCard />
          <ProductLoadingCard />
        </div>
      ) : data?.products?.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
          {data.products.map((product: IProduct) => (
            <ProductCard key={product._id} product={product} />
          ))}
        </div>
      ) : (
        <p>No products found for the selected category.</p>
      )}

      {/* Pagination */}
      <div className="mt-8 flex justify-center">
        <button
          className="px-4 py-2 border rounded-l disabled:opacity-50"
          disabled={currentPage === 1}
          onClick={() => handlePageChange(currentPage - 1)}
        >
          Previous
        </button>
        <span className="px-4 py-2 border">{currentPage}</span>
        <button
          className="px-4 py-2 border rounded-r disabled:opacity-50"
          disabled={currentPage === data?.totalPages}
          onClick={() => handlePageChange(currentPage + 1)}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default ProductsPage;
