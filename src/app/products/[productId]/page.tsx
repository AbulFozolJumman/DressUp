import { IProduct } from "@/types";
import Image from "next/image";
import DImage from "@/assets/Cute Kids Dress.png";
import AddToCart from "@/components/shared/addToCart";

interface IProductId {
  params: {
    productId: string;
  };
}

export const generateStaticParams = async () => {
  const res = await fetch(`${process.env.BACKEND_URL}/products`);
  const data = await res.json();
  return data.products.map((product: IProduct) => ({
    productId: product._id,
  }));
};

const ProductDetails = async ({ params }: IProductId) => {
  const res = await fetch(
    `${process.env.BACKEND_URL}/products/${params.productId}`,
    {
      cache: "no-store",
    }
  );
  const data = await res.json();

  return (
    <div className="container mx-auto p-6">
      <div className="max-w-4xl mx-auto bg-white border border-gray-200 rounded-lg shadow-md overflow-hidden">
        <Image
          className="w-full h-96 object-cover"
          height={350}
          width={400}
          src={DImage || data.product.image}
          alt={data.product.title}
        />
        <div className="p-8">
          <h1 className="text-3xl font-bold mb-4">{data.product.title}</h1>
          <p className="text-gray-500 text-sm mb-4">{data.product.category}</p>
          <p className="text-lg font-bold mb-4">
            ${data.product.price.toFixed(2)}
          </p>
          <div className="flex items-center mb-4">
            <span className="text-yellow-500 mr-2">★</span>
            <span>{data.product.ratings} / 5</span>
          </div>
          <p className="text-gray-700 text-sm">{data.product.description}</p>
          {/* <button className="mt-4 px-4 py-2 bg-[#093045] text-white rounded hover:bg-blue-700">
            Add to Cart
          </button> */}
          <AddToCart product={data.product} />
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
