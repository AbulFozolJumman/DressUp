"use client";

/* eslint-disable @typescript-eslint/no-explicit-any */
import {
  useDeleteProductByIdMutation,
  useGetAllProductsQuery,
} from "@/redux/api/product/productApi";
import Link from "next/link";

const ProductManagerPage = () => {
  // Fetch all products
  const { data, error, isLoading } = useGetAllProductsQuery({
    page: 1,
    category: "",
    sort: "asc",
  });
  const [deleteProduct] = useDeleteProductByIdMutation();

  // Function to handle delete
  const handleDelete = async (productId: string) => {
    if (confirm("Are you sure you want to delete this product?")) {
      try {
        await deleteProduct(productId);
        alert("Product deleted successfully!");
      } catch (error) {
        console.error("Error deleting product:", error);
        alert("Failed to delete the product.");
      }
    }
  };

  return (
    <div className="container mx-auto px-5 py-10">
      <h2 className="text-3xl font-bold text-[#093045] mb-6 text-center">
        Manage Products
      </h2>

      {/* Create New Product Button */}
      <div className="flex justify-end mb-4">
        <Link href="/dashboard/create-product">
          <button className="bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700">
            Create New Product
          </button>
        </Link>
      </div>

      {/* Display Loading State */}
      {isLoading && <p>Loading products...</p>}

      {/* Error Message */}
      {error && <p>Failed to load products</p>}

      {/* Display Products in a Table */}
      {data?.products?.length > 0 ? (
        <div className="overflow-x-auto">
          <table className="table-auto w-full border-collapse border border-gray-200">
            <thead>
              <tr className="bg-gray-100">
                {/* <th className="border px-4 py-2">Product ID</th> */}
                <th className="border px-4 py-2">Title</th>
                <th className="border px-4 py-2">Price</th>
                <th className="border px-4 py-2">Category</th>
                <th className="border px-4 py-2">Actions</th>
              </tr>
            </thead>
            <tbody>
              {data.products.map((product: any) => (
                <tr key={product._id} className="text-center">
                  {/* <td className="border px-4 py-2">{product._id}</td> */}
                  <td className="border px-4 py-2">{product.title}</td>
                  <td className="border px-4 py-2">${product.price}</td>
                  <td className="border px-4 py-2">{product.category}</td>
                  <td className="border px-4 py-2 space-x-2">
                    {/* Update Button */}
                    <Link href="/update-product">
                      <button
                        //   onClick={() => handleUpdate(product._id)}
                        className="bg-green-500 text-white py-1 px-3 rounded hover:bg-green-600"
                      >
                        Update
                      </button>
                    </Link>

                    {/* Delete Button */}
                    <button
                      onClick={() => handleDelete(product._id)}
                      className="bg-red-500 text-white py-1 px-3 rounded hover:bg-red-600"
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      ) : (
        <p>No products found!</p>
      )}
    </div>
  );
};

export default ProductManagerPage;
