"use client";

import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { useLoginMutation } from "@/redux/api/auth/authApi";
import { setToken, setUser } from "@/redux/features/userSlice";

export type FormValues = {
  email: string;
  password: string;
};

const LoginPage = () => {
  const { register, handleSubmit, setValue } = useForm<FormValues>();
  const router = useRouter();
  const dispatch = useDispatch();
  const [login] = useLoginMutation();

  const onSubmit = async (data: FormValues) => {
    try {
      const res = await login(data).unwrap();
      if (res.accessToken) {
        console.log(res);
        alert(res.message);

        // Dispatch actions to set user and token in Redux
        dispatch(setToken(res.accessToken));
        dispatch(setUser(res.user));

        router.push("/dashboard"); // Navigate to the dashboard after login
        router.refresh();
      }
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (err: any) {
      console.error(err.message);
      alert("Login failed, please check your credentials");
    }
  };

  // Pre-fill credentials for admin and user
  const fillDemoCredentials = (role: "admin" | "user") => {
    if (role === "admin") {
      setValue("email", "admin@gmail.com");
    } else {
      setValue("email", "user@gmail.com");
    }
    setValue("password", "12345678");
  };

  return (
    <div className="py-10 container mx-auto px-5">
      <h1 className="text-center text-4xl mb-5">
        Login <span className="text-indigo-600">Here</span>
      </h1>
      <div className="grid md:grid-cols-2 grid-cols-1 items-center gap-5">
        <div>
          <Image
            src="https://img.freepik.com/free-vector/login-concept-illustration_114360-739.jpg"
            width={500}
            height={200}
            alt="login page"
            className="w-full"
          />
        </div>

        <div className="shadow-lg bg-white rounded-lg p-5 md:p-10 border">
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
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
                {...register("password")}
                type="password"
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                required
              />
            </div>

            <button
              type="submit"
              className="w-full px-4 py-2 text-white bg-indigo-600 rounded-lg hover:bg-indigo-700 focus:outline-none"
            >
              Login
            </button>

            <p className="text-center mt-4">
              Don&apos;t have an account?{" "}
              <Link href="/register" className="text-indigo-600">
                Create an account
              </Link>
            </p>
          </form>

          {/* Demo credentials buttons */}
          <div className="flex justify-center mt-5">
            <button
              onClick={() => fillDemoCredentials("admin")}
              className="mx-2 px-4 py-2 bg-gray-100 border border-gray-300 rounded-lg"
            >
              Admin Login
            </button>
            <button
              onClick={() => fillDemoCredentials("user")}
              className="mx-2 px-4 py-2 bg-gray-100 border border-gray-300 rounded-lg"
            >
              User Login
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
