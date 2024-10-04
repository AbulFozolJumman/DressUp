import { IProduct } from "@/types";
import Image from "next/image";
import Link from "next/link";
import { useDispatch } from "react-redux";
import { addToCart } from "@/redux/slices/cartSlice";
import DImage from "@/assets/bomber_jacket-removebg-preview.png";
import { FaCartPlus, FaStar } from "react-icons/fa";

const FlashSaleProductCard = ({ product }: { product: IProduct }) => {
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
    <div className="w-72 bg-white border border-gray-200 rounded-lg shadow-md">
      <div className="relative">
        <div className="absolute top-2 left-2 bg-white text-[#093045] font-semibold text-lg p-2 rounded-full">
          30%
        </div>
        <Image
          height={300}
          width={300}
          src={DImage || product.image}
          alt={product.title}
          className="w-full h-72 object-cover"
        />
      </div>

      <div className="p-5">
        <h2 className="text-xl font-semibold mb-2 whitespace-nowrap overflow-hidden">
          {product.title}
        </h2>
        <p className="text-gray-500 text-sm mb-2">{product.category}</p>

        <div className="flex justify-between items-center mb-3">
          <div className="flex items-center justify-start gap-3">
            <p className="text-lg text-gray-500 line-through">
              ${(product.price * 1.3).toFixed(2)}
            </p>
            <p className="text-xl text-gray-900 font-bold">
              ${product.price.toFixed(2)}
            </p>
          </div>
          <div className="flex items-center">
            <span className="text-yellow-500 mr-1 bg-white">
              <FaStar />
            </span>
            <span>{product.ratings}/5</span>
          </div>
        </div>
        <div className="flex justify-between">
          <Link href={`/products/${product._id}`}>
            <button className="px-4 py-2 bg-[#093045] text-white rounded hover:bg-blue-800">
              See Details
            </button>
          </Link>
          <button
            title="Add To Cart!"
            onClick={handleAddToCart}
            className="text-3xl text-[#093045] hover:text-blue-800 bg-white"
          >
            <FaCartPlus />
          </button>
        </div>
      </div>
    </div>
  );
};

export default FlashSaleProductCard;
