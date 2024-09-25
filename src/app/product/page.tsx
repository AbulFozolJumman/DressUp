import ProductCard from "@/components/product/ProductCard";

type Product = {
  _id: string;
  image: string;
  title: string;
  price: number;
  ratings: number;
  category: string;
  description: string;
};

const Products: React.FC = async () => {
  const res = await fetch(`${process.env.BACKEND_URL}/api/v1/products`);
  const data = res.json();
  console.log(data);

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-3xl font-bold mb-8">Our Products</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {data?.products?.map((product: Product) => (
          <ProductCard
            key={product._id}
            product={product}
            addToCart={addToCart}
          />
        ))}
      </div>
    </div>
  );
};

export default Products;
