"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import DImage from "@/assets/Cute_Kids_Dress2-removebg-preview.png";

const Banner = () => {
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
  const [currentIndex, setCurrentIndex] = useState(0);

  // Fetch products from API
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const res = await fetch(
          `${process.env.NEXT_PUBLIC_BACKEND_URL}/products`
        );
        const data = await res.json();
        setProducts(data.products);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };
    fetchProducts();
  }, []);

  // Automatic Carousel Transition
  useEffect(() => {
    const intervalId = setInterval(() => {
      handleNext();
    }, 5000); // Change slide every 5 seconds

    return () => clearInterval(intervalId); // Cleanup on component unmount
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentIndex, products.length]); // Depend on currentIndex and products length

  // Handle next and previous buttons
  const handlePrev = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 3 + products.length) % products.length
    );
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 3) % products.length);
  };

  // Get three products to display
  const getVisibleProducts = () => {
    const visibleProducts = [];
    for (let i = 0; i < 4; i++) {
      visibleProducts.push(products[(currentIndex + i) % products.length]);
    }
    return visibleProducts;
  };

  return (
    <div className="bg-white text-[#093045] py-10 relative container mx-auto">
      <div className="text-center mb-10 px-5">
        <h1 className="text-2xl md:text-4xl font-bold">
          Explore Fashion that Defines You
        </h1>
        <p className="text-sm md:text-lg mt-2">
          Discover the latest trends and styles with our unique and trendy
          products
        </p>
      </div>

      {/* Carousel Navigation */}
      <div className="flex justify-center items-center">
        <button
          onClick={handlePrev}
          className="text-[#093045] font-bold text-4xl pr-5"
        >
          &lt;
        </button>

        {/* Show 3 products */}
        <div className="flex justify-between items-center gap-5">
          {getVisibleProducts().map((product) => {
            if (!product) return null; // Guard clause for undefined product
            return (
              <div
                key={product._id}
                className="w-72 bg-white border border-gray-200 rounded-lg shadow-md"
              >
                {product.image ? (
                  <Image
                    height={200}
                    width={200}
                    src={DImage || product.image}
                    alt={product.title}
                    className="h-72 w-72"
                  />
                ) : (
                  <div className="h-72 w-72 bg-gray-300" />
                )}
                <div className="p-5">
                  <h2 className="text-xl font-semibold mb-2 whitespace-nowrap overflow-hidden">
                    {product.title}
                  </h2>
                  {/* <p className="text-xs md:text-lg text-gray-500 line-through">
                  ${(product.price + 50).toFixed(2)}
                </p> */}
                  <p className="text-sm md:text-xl text-gray-900 font-bold">
                    ${product.price.toFixed(2)}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        <button
          onClick={handleNext}
          className="text-[#093045] font-bold text-4xl pl-5"
        >
          &gt;
        </button>
      </div>
    </div>
  );
};

export default Banner;
