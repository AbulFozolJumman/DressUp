// components/ProductCard.tsx

import React from "react";
import Link from "next/link";

type Product = {
  _id: string;
  image: string;
  title: string;
  price: number;
  ratings: number;
  category: string;
  description: string;
};

interface ProductCardProps {
  product: Product;
  addToCart: (productId: string) => void;
}

const ProductCard: React.FC<ProductCardProps> = ({ product, addToCart }) => {
  return (
    <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow-md overflow-hidden">
      {/* <img
        className="w-full h-48 object-cover"
        src={product.image}
        alt={product.title}
      /> */}
      <div className="p-4">
        <h2 className="text-xl font-semibold mb-2">{product.title}</h2>
        <p className="text-gray-500 text-sm mb-4">{product.category}</p>
        <p className="text-lg font-bold mb-2">${product.price.toFixed(2)}</p>
        <div className="flex items-center mb-4">
          <span className="text-yellow-500 mr-2">★</span>
          <span>{product.ratings} / 5</span>
        </div>
        <div className="flex justify-between">
          <Link href={`/products/${product._id}`}>
            <button className="px-4 py-2 bg-indigo-500 text-white rounded hover:bg-indigo-600">
              See Details
            </button>
          </Link>
          <button
            onClick={() => addToCart(product._id)}
            className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600"
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
