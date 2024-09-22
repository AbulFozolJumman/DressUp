/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import Image from "next/image";
import Link from "next/link";
import { useForm } from "react-hook-form";

export type UserData = {
  username: string;
  email: string;
  password: string;
};

const RegisterPage = () => {
  const {
    register,
    handleSubmit,
    // formState: { errors },
  } = useForm<UserData>();

  const onSubmit = async (data: UserData) => {
    console.log(data);

    try {
      // handle registration logic here
    } catch (err: any) {
      console.error(err.message);
      throw new Error(err.message);
    }
  };

  return (
    <div className="my-10">
      <h1 className="text-center text-4xl mb-5">
        Register <span className="text-teal-600">Now</span>
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <Image
            src="https://img.freepik.com/free-vector/mobile-login-concept-illustration_114360-135.jpg?t=st=1710081713~exp=1710085313~hmac=f637c194f1f143e63a84950cbf978997453777c872adf4aebbbecdaa445601a1&w=740"
            width={500}
            height={200}
            alt="register page"
            className="w-full h-[85%] object-cover"
          />
        </div>

        <div className="w-full md:w-[70%] shadow-lg bg-white p-6 rounded-lg">
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
            <div>
              <label className="block text-lg font-medium">Full Name</label>
              <input
                type="text"
                {...register("username")}
                placeholder="User Name"
                className="w-full p-3 border rounded-lg"
                required
              />
            </div>

            <div>
              <label className="block text-lg font-medium">Email</label>
              <input
                type="email"
                {...register("email")}
                placeholder="Email"
                className="w-full p-3 border rounded-lg"
                required
              />
            </div>

            <div>
              <label className="block text-lg font-medium">Password</label>
              <input
                {...register("password")}
                type="password"
                placeholder="Password"
                className="w-full p-3 border rounded-lg"
                required
              />
            </div>

            <button
              type="submit"
              className="w-full py-3 bg-teal-600 text-white rounded-lg hover:bg-teal-700"
            >
              Register
            </button>

            <p className="text-center mt-4">
              Already have an account?{" "}
              <Link href="/login" className="text-teal-600 hover:underline">
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
