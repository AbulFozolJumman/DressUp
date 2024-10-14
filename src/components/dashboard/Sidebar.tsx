"use client";

import { RootState } from "@/redux/store";
import Link from "next/link";
import { useSelector } from "react-redux";
import { IoStatsChart } from "react-icons/io5";
import { FaShoppingCart } from "react-icons/fa";

const Sidebar = () => {
  const { user } = useSelector((state: RootState) => state.user);
  return (
    <div className="bg-white min-h-screen h-full md:p-4 p-1 pl-0">
      <ul className="md:space-y-4 space-y-1">
        <li>
          <Link
            href="/dashboard"
            className="flex items-center justify-center md:justify-start p-2 space-x-3 rounded-md bg-[#093045] shadow hover:bg-blue-800 text-white"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
              />
            </svg>
            <span className="hidden md:block">Dashboard</span>
          </Link>
        </li>

        {user?.role === "user" && (
          <li>
            <Link
              href="/dashboard/user-cart"
              className="flex items-center justify-center md:justify-start p-2 space-x-3 rounded-md bg-[#093045] shadow hover:bg-blue-800 text-white"
            >
              <FaShoppingCart />
              <span className="hidden md:block">User Cart</span>
            </Link>
          </li>
        )}

        {user?.role === "admin" && (
          <li>
            <Link
              href="/dashboard/stats"
              className="flex items-center justify-center md:justify-start p-2 space-x-3 rounded-md bg-[#093045] shadow hover:bg-blue-800 text-white"
            >
              <IoStatsChart />
              <span className="hidden md:block">Statistics</span>
            </Link>
          </li>
        )}
        {user?.role === "admin" && (
          <li>
            <Link
              href="/dashboard/product-manager"
              className="flex items-center justify-center md:justify-start p-2 space-x-3 rounded-md bg-[#093045] shadow hover:bg-blue-800 text-white"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M5 13l4 4L19 7"
                />
              </svg>
              <span className="hidden md:block">Product Manager</span>
            </Link>
          </li>
        )}
      </ul>
    </div>
  );
};

export default Sidebar;
