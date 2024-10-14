"use client";

import { RootState } from "@/redux/store";
import Image from "next/image";
import { useSelector } from "react-redux";

const DashboardPage = () => {
  const { user } = useSelector((state: RootState) => state.user);
  console.log(user?.imageUrl);
  return (
    <div>
      {user ? (
        <>
          <Image
            src={user?.imageUrl}
            width={100}
            height={100}
            alt="user image"
            className="mx-auto rounded-full mt-5"
          />
          <h1 className="text-4xl text-center mt-10">
            Welcome {user?.username}
          </h1>
          <h1 className="text-4xl text-center mt-10">Email: {user?.email}</h1>
        </>
      ) : (
        <h1 className="text-3xl">Please Login first to see Dashboard</h1>
      )}
    </div>
  );
};

export default DashboardPage;
