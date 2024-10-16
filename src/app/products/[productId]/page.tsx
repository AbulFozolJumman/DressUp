import { IProduct } from "@/types";
import Image from "next/image";
// import DImage from "@/assets/Cute Kids Dress.png";
import AddToCart from "@/components/shared/addToCart";
// Add Review

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
    <div className="container mx-auto px-5 my-10">
      <div className="flex items-center md:flex-row flex-col border border-gray-200 rounded-lg shadow-md overflow-hidden">
        <div className="md:w-1/2">
          <Image
            className="w-full"
            height={500}
            width={500}
            // src={DImage || data.product.image}
            src={data.product.image}
            alt={data.product.title}
          />
        </div>
        <div className="md:p-10 p-5 md:w-1/2">
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
          <AddToCart product={data.product} />
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
