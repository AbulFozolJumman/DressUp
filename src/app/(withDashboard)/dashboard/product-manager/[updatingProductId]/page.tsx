"use client";
// Getting null
import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { useRouter } from "next/navigation";
import {
  useGetProductByIdQuery,
  useUpdateProductByIdMutation,
} from "@/redux/api/product/productApi";
import { ICreateProduct } from "@/types";

interface IUpdatingProductId {
  params: {
    updatingProductId: string;
  };
}

const UpdateProductPage = ({ params }: IUpdatingProductId) => {
  const router = useRouter();

  // Fetch the product data using the product ID
  const { data, isLoading, isError } = useGetProductByIdQuery(
    params.updatingProductId
  );

  const product = data?.product; // Access the nested product object

  // Set up the mutation for updating the product
  const [updateProduct, { isLoading: isUpdating }] =
    useUpdateProductByIdMutation();

  // Set up the react-hook-form
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm<ICreateProduct>();

  // Populate the form fields with the fetched product data when available
  useEffect(() => {
    if (product) {
      setValue("image", product.image);
      setValue("title", product.title);
      setValue("price", product.price);
      setValue("ratings", product.ratings);
      setValue("category", product.category);
      setValue("description", product.description);
    }
  }, [product, setValue]);

  // Handle the form submission for updating the product
  const onSubmit = async (data: ICreateProduct) => {
    try {
      await updateProduct({ id: params.updatingProductId, ...data });
      alert("Product updated successfully!");
      router.push("/dashboard/product-manager");
    } catch (error) {
      console.error(error);
      alert("Failed to update product.");
    }
  };

  // Handle loading and error states
  if (isLoading) return <div>Loading product...</div>;
  if (isError) return <div>Error fetching product.</div>;

  return (
    <div className="py-10">
      <h2 className="text-3xl font-bold text-[#093045] mb-6 text-center">
        Update Product
      </h2>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="max-w-lg mx-auto p-5 bg-white shadow-md rounded-lg"
      >
        <div className="mb-4">
          <label
            htmlFor="image"
            className="block text-sm font-medium text-gray-700"
          >
            Image URL
          </label>
          <input
            id="image"
            {...register("image", { required: true })}
            className="mt-1 block w-full px-3 py-2 border border-[#093045] rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
          />
          {errors.image && (
            <span className="text-red-500 text-sm">This field is required</span>
          )}
        </div>

        <div className="mb-4">
          <label
            htmlFor="title"
            className="block text-sm font-medium text-gray-700"
          >
            Title
          </label>
          <input
            id="title"
            {...register("title", { required: true })}
            className="mt-1 block w-full px-3 py-2 border border-[#093045] rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
          />
          {errors.title && (
            <span className="text-red-500 text-sm">This field is required</span>
          )}
        </div>

        <div className="mb-4">
          <label
            htmlFor="price"
            className="block text-sm font-medium text-gray-700"
          >
            Price
          </label>
          <input
            type="number"
            id="price"
            step="0.01"
            {...register("price", { required: true, valueAsNumber: true })}
            className="mt-1 block w-full px-3 py-2 border border-[#093045] rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
          />
          {errors.price && (
            <span className="text-red-500 text-sm">This field is required</span>
          )}
        </div>

        <div className="mb-4">
          <label
            htmlFor="ratings"
            className="block text-sm font-medium text-gray-700"
          >
            Ratings
          </label>
          <input
            type="number"
            id="ratings"
            step="0.1"
            {...register("ratings", { required: true, valueAsNumber: true })}
            className="mt-1 block w-full px-3 py-2 border border-[#093045] rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
          />
          {errors.ratings && (
            <span className="text-red-500 text-sm">This field is required</span>
          )}
        </div>

        <div className="mb-4">
          <label
            htmlFor="category"
            className="block text-sm font-medium text-gray-700"
          >
            Category
          </label>
          <input
            id="category"
            {...register("category", { required: true })}
            className="mt-1 block w-full px-3 py-2 border border-[#093045] rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
          />
          {errors.category && (
            <span className="text-red-500 text-sm">This field is required</span>
          )}
        </div>

        <div className="mb-4">
          <label
            htmlFor="description"
            className="block text-sm font-medium text-gray-700"
          >
            Description
          </label>
          <textarea
            id="description"
            {...register("description", { required: true })}
            className="mt-1 block w-full px-3 py-2 border border-[#093045] rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
          />
          {errors.description && (
            <span className="text-red-500 text-sm">This field is required</span>
          )}
        </div>

        <button
          type="submit"
          className="w-full py-2 px-4 hover:bg-blue-800 text-white font-semibold rounded-md shadow-md bg-[#093045] focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
          disabled={isUpdating}
        >
          {isUpdating ? "Updating..." : "Update Product"}
        </button>
      </form>
    </div>
  );
};

export default UpdateProductPage;
