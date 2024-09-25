// pages/products/[id].tsx

import { GetServerSideProps } from "next";
import React from "react";

type Product = {
  _id: string;
  image: string;
  title: string;
  price: number;
  ratings: number;
  category: string;
  description: string;
};

interface ProductDetailsProps {
  product: Product;
}

const ProductDetails: React.FC<ProductDetailsProps> = ({ product }) => {
  return (
    <div className="container mx-auto p-6">
      <div className="max-w-4xl mx-auto bg-white border border-gray-200 rounded-lg shadow-md overflow-hidden">
        {/* <img className="w-full h-96 object-cover" src={product.image} alt={product.title} /> */}
        <div className="p-8">
          <h1 className="text-3xl font-bold mb-4">{product.title}</h1>
          <p className="text-gray-500 text-sm mb-4">{product.category}</p>
          <p className="text-lg font-bold mb-4">${product.price.toFixed(2)}</p>
          <div className="flex items-center mb-4">
            <span className="text-yellow-500 mr-2">★</span>
            <span>{product.ratings} / 5</span>
          </div>
          <p className="text-gray-700 text-sm">{product.description}</p>
          <button
            className="mt-4 px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600"
            onClick={() => alert("Add to Cart functionality here")}
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

// Server-side function to fetch the product based on the ID
export const getServerSideProps: GetServerSideProps = async (context) => {
  const { id } = context.params as { id: string };

  const res = await fetch(`http://localhost:2024/api/v1/products/${id}`);
  const data = await res.json();

  return {
    props: {
      product: data.product,
    },
  };
};

export default ProductDetails;
