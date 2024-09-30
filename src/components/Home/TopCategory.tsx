import React, { useEffect, useState } from "react";
import Image from "next/image";
import { IProduct } from "@/types";

const TopCategories = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch(
        `${process.env.NEXT_PUBLIC_BACKEND_URL}/products`
      );
      const data = await res.json();
      setProducts(data.products);
    };

    fetchData();
  }, []);

  return (
    <section className="mt-10">
      <h2 className="text-3xl font-bold text-center mb-8">Top Categories</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
        {products?.map((product: IProduct) => (
          <div key={product._id} className="bg-gray-100 rounded-lg p-4">
            <Image
              src={product.image}
              alt={product.title}
              width={300}
              height={200}
              className="object-cover rounded-lg"
            />
            <h3 className="text-lg font-medium text-center mt-2">
              {product.title}
            </h3>
          </div>
        ))}
      </div>
      <div className="text-center mt-4">
        <button className="bg-blue-500 text-white px-4 py-2 rounded-md">
          View All
        </button>
      </div>
    </section>
  );
};

export default TopCategories;
