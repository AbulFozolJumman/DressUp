"use client";

import { useDispatch } from "react-redux";
import { addToCart } from "@/redux/slices/cartSlice";
import { FaCartPlus } from "react-icons/fa";
import { IProduct } from "@/types";

const AddToCart = ({ product }: { product: IProduct }) => {
  const dispatch = useDispatch();

  const handleAddToCart = () => {
    dispatch(
      addToCart({
        id: product._id,
        title: product.title,
        price: product.price,
        quantity: 1,
      })
    );
    alert("Add to Cart Successful!");
  };

  return (
    <button
      title="Add To Cart!"
      onClick={handleAddToCart}
      className="mt-4 px-4 py-2 bg-[#093045] text-white rounded hover:bg-blue-800 flex justify-center items-center gap-2"
    >
      <span>Add To Cart</span>
      <FaCartPlus />
    </button>
  );
};

export default AddToCart;
