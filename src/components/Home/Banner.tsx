"use client";

import { useState, useEffect } from "react";
import { useWindowSize } from "@/hooks/useWindowSize";
import ProductLoadingCard from "../product/ProductLoadingCard";
import ProductCard from "../product/ProductCard";
import { FaArrowAltCircleLeft, FaArrowAltCircleRight } from "react-icons/fa";

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
  const { width } = useWindowSize();

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
  }, [currentIndex, products.length]);

  // Get visible product count based on screen size
  const getVisibleProductCount = () => {
    if (width < 765) return 1; // Mobile: 1 card
    if (width < 1023) return 2; // Tablet: 2 cards
    if (width < 1439) return 3; // Laptop: 3 cards
    return 4; // Larger screens: 4 cards
  };

  // Handle next and previous buttons
  const handlePrev = () => {
    const visibleCount = getVisibleProductCount();
    setCurrentIndex(
      (prevIndex) =>
        (prevIndex - visibleCount + products.length) % products.length
    );
  };

  const handleNext = () => {
    const visibleCount = getVisibleProductCount();
    setCurrentIndex(
      (prevIndex) => (prevIndex + visibleCount) % products.length
    );
  };

  // Get the visible products to display
  const getVisibleProducts = () => {
    const visibleCount = getVisibleProductCount();
    const visibleProducts = [];
    for (let i = 0; i < visibleCount; i++) {
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
          <FaArrowAltCircleLeft />
        </button>

        {/* Show visible products */}
        <div className="flex justify-between items-center gap-5">
          {getVisibleProducts().map((product, index) => {
            if (!product) return <ProductLoadingCard key={index} />;
            return <ProductCard key={product._id} product={product} />;
          })}
        </div>

        <button
          onClick={handleNext}
          className="text-[#093045] font-bold text-4xl pl-5"
        >
          <FaArrowAltCircleRight />
        </button>
      </div>
    </div>
  );
};

export default Banner;
