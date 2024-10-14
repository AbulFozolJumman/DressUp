"use client";

import { useForm } from "react-hook-form";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useDispatch } from "react-redux";
import { useSignupMutation } from "@/redux/api/auth/authApi";
import { setToken, setUser } from "@/redux/features/userSlice";

export type UserData = {
  username: string;
  email: string;
  password: string;
  imageUrl: string;
};

const RegisterPage = () => {
  const { register, handleSubmit } = useForm<UserData>();
  const router = useRouter();
  const dispatch = useDispatch();
  const [signup] = useSignupMutation();

  const onSubmit = async (data: UserData) => {
    try {
      const res = await signup(data).unwrap();
      if (res.accessToken) {
        console.log(res);
        alert(res.message);

        // Dispatch actions to set user and token in Redux
        dispatch(setToken(res.accessToken));
        dispatch(setUser(res.user));

        router.push("/dashboard"); // Navigate to the dashboard after signup
        router.refresh();
      }
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (err: any) {
      console.error(err.message);
      alert("Signup failed, please try again");
    }
  };

  return (
    <div className="py-10 container mx-auto px-5">
      <h1 className="text-center text-4xl mb-5">
        Register <span className="text-indigo-600">Now</span>
      </h1>
      <div className="grid md:grid-cols-2 grid-cols-1 items-center gap-5">
        <div>
          <Image
            src="https://img.freepik.com/free-vector/mobile-login-concept-illustration_114360-135.jpg"
            width={500}
            height={200}
            alt="register page"
            className="w-full"
          />
        </div>

        <div className="shadow-lg bg-white rounded-lg border p-5 md:p-10">
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
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

            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700">
                Image Url
              </label>
              <input
                type="imageUrl"
                {...register("imageUrl")}
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
                Sign in here
              </Link>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default RegisterPage;
