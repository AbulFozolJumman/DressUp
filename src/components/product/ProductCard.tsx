import { IProduct } from "@/types";
import Image from "next/image";
import Link from "next/link";
import dressImage from "../../assets/Cute Kids Dress.png";

const ProductCard = ({ product }: { product: IProduct }) => {
  return (
    <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow-md overflow-hidden">
      <Image
        className="w-full h-48 object-cover"
        height={350}
        width={400}
        src={dressImage}
        alt={product.title}
      />
      <div className="p-4">
        <h2 className="text-xl font-semibold mb-2">{product.title}</h2>
        <p className="text-gray-500 text-sm mb-4">{product.category}</p>
        <p className="text-lg font-bold mb-2">${product.price}</p>
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
          <button className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600">
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
