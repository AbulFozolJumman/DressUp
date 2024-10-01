"use client";

import { useForm } from "react-hook-form";
import Link from "next/link";
import Image from "next/image";
import { registerUser } from "@/utils/actions/registerUser";
import { useRouter } from "next/navigation";
import { setToLocalStorage } from "@/utils/localStorageManager";

export type UserData = {
  username: string;
  email: string;
  password: string;
};

const RegisterPage = () => {
  const { register, handleSubmit } = useForm<UserData>();
  const router = useRouter();

  const onSubmit = async (data: UserData) => {
    try {
      const res = await registerUser(data);
      if (res.accessToken) {
        console.log(res);
        alert(res.message);
        setToLocalStorage("accessToken", res.accessToken);
        router.push("/dashboard");
        router.refresh();
      }
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (err: any) {
      console.error(err.message);
      throw new Error(err.message);
    }
  };

  return (
    <div className="my-10">
      <h1 className="text-center text-4xl mb-5">
        Register <span className="text-indigo-600">Now</span>
      </h1>
      <div className="grid grid-cols-2 gap-4">
        <div>
          <Image
            src="https://img.freepik.com/free-vector/mobile-login-concept-illustration_114360-135.jpg"
            width={500}
            height={200}
            alt="register page"
            className="w-full h-[85%]"
          />
        </div>

        <div className="w-[70%] h-[70%] shadow-lg bg-white rounded-lg">
          <form onSubmit={handleSubmit(onSubmit)} className="p-6 space-y-4">
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700">
                Full Name
              </label>
              <input
                type="text"
                {...register("username")}
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                required
              />
            </div>

            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700">
                Email
              </label>
              <input
                type="email"
                {...register("email")}
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                required
              />
            </div>

            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700">
                Password
              </label>
              <input
                type="password"
                {...register("password")}
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                required
              />
            </div>

            <button
              type="submit"
              className="w-full px-4 py-2 text-white bg-indigo-600 rounded-lg hover:bg-indigo-700 focus:outline-none"
            >
              Register
            </button>

            <p className="text-center">
              Already have an account?{" "}
              <Link href="/login" className="text-indigo-600">
                Login
              </Link>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default RegisterPage;
