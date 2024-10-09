import { IProduct } from "@/types";
import Image from "next/image";
import Link from "next/link";
import { useDispatch } from "react-redux";
import { addToCart } from "@/redux/features/cartSlice";
// import DImage from "@/assets/bomber_jacket-removebg-preview.png";
import { FaCartPlus, FaStar } from "react-icons/fa";

const ProductCard = ({ product }: { product: IProduct }) => {
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
    <div className="shadow-md rounded-bottom w-full">
      <div className="w-full bg-[#093045]">
        <Image
          height={300}
          width={300}
          src={product.image}
          // src={DImage || product.image}
          alt={product.title}
          className="w-72 mx-auto h-72 object-cover"
        />
      </div>
      <div className="p-5 bg-white rounded-bottom">
        <h2 className="text-xl font-semibold mb-2 whitespace-nowrap overflow-hidden">
          {product.title}
        </h2>
        <p className="text-gray-500 text-sm mb-2">{product.category}</p>
        <div className="flex justify-between items-center mb-3">
          <p className="text-lg font-bold">${product.price}</p>
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

export default ProductCard;
