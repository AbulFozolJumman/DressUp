"use client";

import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";

export type FormValues = {
  email: string;
  password: string;
};

const LoginPage = () => {
  const { register, handleSubmit } = useForm<FormValues>();
  const router = useRouter();

  const onSubmit = async (data: FormValues) => {
    const res = await signIn("credentials", {
      redirect: false,
      email: data.email,
      password: data.password,
    });

    if (res?.ok) {
      router.push("/dashboard"); // Redirect to dashboard on successful login
    } else {
      alert("Invalid email or password");
    }
  };

  return (
    <div className="my-10">
      <h1 className="text-center text-4xl mb-5">
        Login <span className="text-accent">Here</span>
      </h1>
      <form onSubmit={handleSubmit(onSubmit)} className="w-[70%] mx-auto">
        <div className="form-group mb-4">
          <label>Email</label>
          <input
            type="email"
            {...register("email")}
            placeholder="Email"
            className="w-full p-2 border"
            required
          />
        </div>
        <div className="form-group mb-4">
          <label>Password</label>
          <input
            type="password"
            {...register("password")}
            placeholder="Password"
            className="w-full p-2 border"
            required
          />
        </div>
        <button type="submit" className="bg-blue-500 text-white px-4 py-2">
          Login
        </button>
      </form>
      <p className="text-center mt-4">
        Don`&#39;`t have an account?{" "}
        <a href="/register" className="text-blue-500">
          Create an account
        </a>
      </p>
    </div>
  );
};

export default LoginPage;
