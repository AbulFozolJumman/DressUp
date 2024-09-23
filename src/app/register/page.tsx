"use client";

import { useForm } from "react-hook-form";
import { useRouter } from "next/navigation";
import { registerUser } from "@/utils/actions/registerUser";

export type UserData = {
  username: string;
  email: string;
  password: string;
};

const RegisterPage = () => {
  const { register, handleSubmit } = useForm<UserData>();
  const router = useRouter();

  const onSubmit = async (data: UserData) => {
    const res = await registerUser(data);

    if (res.success) {
      alert(res.message);
      router.push("/login"); // Redirect to login page on successful registration
    } else {
      alert("Registration failed. Please try again.");
    }
  };

  return (
    <div className="my-10">
      <h1 className="text-center text-4xl mb-5">
        Register <span className="text-accent">Now</span>
      </h1>
      <form onSubmit={handleSubmit(onSubmit)} className="w-[70%] mx-auto">
        <div className="form-group mb-4">
          <label>Full Name</label>
          <input
            type="text"
            {...register("username")}
            placeholder="Full Name"
            className="w-full p-2 border"
            required
          />
        </div>
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
          Register
        </button>
      </form>
      <p className="text-center mt-4">
        Already have an account?{" "}
        <a href="/login" className="text-blue-500">
          Login
        </a>
      </p>
    </div>
  );
};

export default RegisterPage;
