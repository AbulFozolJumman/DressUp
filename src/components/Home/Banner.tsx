"use client";

import { useState, useEffect } from "react";
import defaultImage from "@/assets/Cute Kids Dress.png";
import Image from "next/image";

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
    <div className="bg-cyan-900 text-white py-10 relative">
      <div className="text-center mb-10 px-4">
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
        <button onClick={handlePrev} className="text-white p-4">
          &lt;
        </button>

        {/* Show 3 products */}
        <div className="flex justify-between items-center space-x-2 md:space-x-4 overflow-hidden">
          {getVisibleProducts().map((product) => {
            if (!product) return null; // Guard clause for undefined product
            return (
              <div
                key={product._id}
                className="bg-white text-gray-800 rounded-lg p-2 md:p-4 w-40 md:w-60"
              >
                {product.image ? (
                  <Image
                    height={200}
                    width={200}
                    src={defaultImage || product.image}
                    alt={product.title}
                    className="rounded-lg shadow-lg h-32 w-full object-cover md:h-40"
                  />
                ) : (
                  <div className="h-32 w-full bg-gray-300 rounded-lg md:h-40" />
                )}
                <h2 className="text-sm md:text-lg font-semibold mt-2 md:mt-4 whitespace-nowrap overflow-hidden">
                  {product.title}
                </h2>
                <p className="text-xs md:text-lg text-gray-500 line-through">
                  ${(product.price + 50).toFixed(2)}
                </p>
                <p className="text-sm md:text-xl text-gray-900 font-bold">
                  ${product.price.toFixed(2)}
                </p>
              </div>
            );
          })}
        </div>

        <button onClick={handleNext} className="text-white p-4">
          &gt;
        </button>
      </div>
    </div>
  );
};

export default Banner;
