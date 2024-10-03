"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import DImage from "@/assets/Cute Kids Dress.png";

const FlashSale = () => {
  const [products, setProducts] = useState<
    {
      _id: string;
      image: string;
      title: string;
      price: number;
      ratings: number;
      category: string;
      description: string;
    }[]
  >([]);

  // Fetch products from API
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const res = await fetch(
          `${process.env.NEXT_PUBLIC_BACKEND_URL}/products`
        );
        const data = await res.json();
        setProducts(data.products.slice(0, 4)); // Get the first 4 products for Flash Sale
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };
    fetchProducts();
  }, []);

  return (
    <div className="py-10 container mx-auto px-4">
      {/* Flash Sale Header */}
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold">Flash Sale</h2>
        <Link href="/products" className="flex items-center text-black">
          <button className="bg-black text-white px-4 py-2 rounded-full flex items-center">
            View All
            <span className="ml-2">&gt;</span>
          </button>
        </Link>
      </div>

      {/* Products */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {products.map((product) => (
          <div
            key={product._id}
            className="bg-white text-gray-800 rounded-lg w-full"
          >
            <div className="relative">
              {/* Discount Percentage Tag */}
              <div className="absolute top-2 left-2 bg-gray-800 text-white text-xs px-2 py-1 rounded-full">
                15% {/* Example discount */}
              </div>

              {product.image ? (
                <Image
                  height={300}
                  width={300}
                  src={DImage || product.image}
                  alt={product.title}
                  className="rounded-lg shadow-lg h-40 w-full object-cover"
                />
              ) : (
                <div className="h-40 w-full bg-gray-300 rounded-lg" />
              )}
            </div>
            <h2 className="text-lg font-semibold mt-4 whitespace-nowrap overflow-hidden">
              {product.title}
            </h2>
            <p className="text-lg text-gray-500 line-through">
              ${(product.price + 50).toFixed(2)} {/* Original price */}
            </p>
            <p className="text-xl text-gray-900 font-bold">
              ${product.price.toFixed(2)} {/* Discounted price */}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FlashSale;
