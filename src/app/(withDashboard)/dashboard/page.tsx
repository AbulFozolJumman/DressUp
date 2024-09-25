"use client";
import useUserInfo from "@/hooks/useUserInfo";
import Image from "next/image";

const DashboardPage = () => {
  const userInfo = useUserInfo();
  return (
    <div>
      {userInfo?.role ? (
        <>
          <h1 className="text-4xl text-center mt-10">
            Welcome {userInfo?.name}
          </h1>
          <h1 className="text-4xl text-center mt-10">
            Logged-in user email: {userInfo?.email}
          </h1>
          <h1 className="text-4xl text-center mt-10">
            Logged-in user role: {userInfo?.role}
          </h1>
          <Image
            src={
              userInfo?.image ||
              "https://cdn.pixabay.com/photo/2020/07/01/12/58/icon-5359553_1280.png"
            }
            width={100}
            height={100}
            alt="user image"
            className="mx-auto rounded-full mt-5"
          />
        </>
      ) : (
        <h1 className="text-3xl">Please Login first to see Dashboard</h1>
      )}
    </div>
  );
};

export default DashboardPage;
