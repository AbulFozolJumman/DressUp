"use client";

import { ICreateProduct } from "@/types";
import Error from "next/error";
import { useForm } from "react-hook-form";
import { useRouter } from "next/navigation";
import { useAddProductMutation } from "@/redux/api/product/productApi";

const CreateProductPage = () => {
  const [createRoom] = useAddProductMutation();
  const router = useRouter();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ICreateProduct>();

  const onSubmit = async (data: ICreateProduct) => {
    const formattedData = {
      ...data,
      price: Number(data.price),
      ratings: Number(data.ratings),
    };

    try {
      console.log(formattedData);
      await createRoom(formattedData);
      alert("Product created successfully!");
      router.push("/dashboard/product-manager");
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (err: any) {
      throw new Error(err.message);
    }
  };

  return (
    <div className="py-10">
      <h2 className="text-3xl font-bold text-[#093045] mb-6 text-center">
        Create New Product
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
        >
          Create Product
        </button>
      </form>
    </div>
  );
};

export default CreateProductPage;
