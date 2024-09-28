import ProductCard from "@/components/product/ProductCard";
import { IProduct } from "@/types";

const Products = async () => {
  const res = await fetch(`${process.env.BACKEND_URL}/products`);
  const data = await res.json();

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-3xl font-bold mb-8">Our Products</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {data?.products?.map((product: IProduct) => (
          <ProductCard key={product._id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default Products;
