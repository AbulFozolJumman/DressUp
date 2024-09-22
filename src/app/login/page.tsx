"use client";
import Image from "next/image";
import Link from "next/link";
import { useForm } from "react-hook-form";

type FormValues = {
  email: string;
  password: string;
};

const LoginPage = () => {
  const {
    register,
    handleSubmit,
    // formState: { errors },
  } = useForm<FormValues>();

  const onSubmit = async (data: FormValues) => {
    console.log(data);
  };

  return (
    <div className="my-10">
      <h1 className="text-center text-4xl mb-5">
        Login <span className="text-teal-600">Here</span>
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <Image
            src="https://img.freepik.com/free-vector/login-concept-illustration_114360-739.jpg?t=st=1710130697~exp=1710134297~hmac=f1b21d9c1823a0657d339c256a1c4ad8301168480e35b35aeba5106568a21010&w=740"
            width={500}
            height={200}
            alt="login page"
            className="w-full h-[85%] object-cover"
          />
        </div>

        <div className="w-full md:w-[70%] shadow-lg bg-white p-6 rounded-lg">
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
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
              Login
            </button>

            <p className="text-center mt-4">
              Don&apos;t have an account?{" "}
              <Link href="/register" className="text-teal-600 hover:underline">
                Create an account
              </Link>
            </p>
          </form>
          <p className="text-center mt-4">Or Sign Up Using</p>
          <div className="flex justify-center space-x-4 mt-2">
            <button className="w-12 h-12 bg-gray-200 rounded-full flex items-center justify-center">
              <Image
                src="https://www.freepnglogos.com/uploads/google-logo-png/google-logo-png-webinar-optimizing-for-success-google-business-webinar-13.png"
                width={30}
                height={30}
                alt="google logo"
              />
            </button>
            <button className="w-12 h-12 bg-gray-200 rounded-full flex items-center justify-center">
              <Image
                src="https://cdn-icons-png.flaticon.com/512/25/25231.png"
                width={30}
                height={30}
                alt="github logo"
              />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
