"use client";

import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
// import { signIn } from "next-auth/react";
import { useLoginMutation } from "@/redux/api/auth/authApi";
import { setToken, setUser } from "@/redux/features/userSlice";

export type FormValues = {
  email: string;
  password: string;
};

const LoginPage = () => {
  const { register, handleSubmit } = useForm<FormValues>();
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

  return (
    <div className="my-10">
      <h1 className="text-center text-4xl mb-5">
        Login <span className="text-indigo-600">Here</span>
      </h1>
      <div className="grid grid-cols-2 gap-4">
        <div>
          <Image
            src="https://img.freepik.com/free-vector/login-concept-illustration_114360-739.jpg"
            width={500}
            height={200}
            alt="login page"
            className="w-full h-[85%]"
          />
        </div>

        <div className="w-[70%] h-[80%] shadow-lg bg-white rounded-lg">
          <form onSubmit={handleSubmit(onSubmit)} className="p-6 space-y-4">
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

            <p className="text-center">
              Don&apos;t have an account?{" "}
              <Link href="/register" className="text-indigo-600">
                Create an account
              </Link>
            </p>
          </form>

          {/* <p className="text-center mt-4">Or Sign Up Using</p>
          <div className="flex justify-center mt-4">
            <button
              className="mx-2 bg-white p-3 rounded-full shadow"
              onClick={() => signIn("google", { callbackUrl: "/dashboard" })}
            >
              <Image
                src="https://www.freepnglogos.com/uploads/google-logo-png/google-logo-png-webinar-optimizing-for-success-google-business-webinar-13.png"
                width={50}
                height={50}
                alt="google logo"
              />
            </button>
            <button
              className="mx-2 bg-white p-3 rounded-full shadow"
              onClick={() => signIn("github", { callbackUrl: "/dashboard" })}
            >
              <Image
                src="https://cdn-icons-png.flaticon.com/512/25/25231.png"
                width={35}
                height={35}
                alt="github logo"
              />
            </button>
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
