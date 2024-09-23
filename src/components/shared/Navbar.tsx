"use client";

import { useState } from "react";
import { signOut } from "next-auth/react";
import Link from "next/link";
import { FaShoppingCart } from "react-icons/fa";
import { FiLogIn, FiLogOut } from "react-icons/fi";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai"; // Icons for Hamburger and Close button
import Image from "next/image";
import Logo from "@/asset/DressUp.png";

type UserProps = {
  user?: {
    name?: string | null | undefined;
    email?: string | null | undefined;
    image?: string | null | undefined;
  };
};

const Navbar = ({ session }: { session: UserProps | null }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false); // State for controlling the mobile menu

  return (
    <nav className="bg-white shadow-md w-full z-10">
      <div className="container mx-auto px-4 md:py-4 py-1 flex justify-between items-center">
        {/* Left - Logo */}
        <div className="text-2xl font-bold cursor-pointer w-14 h-14">
          <Link href="/">
            <Image
              src={Logo}
              width={100}
              height={100}
              alt="dressUp Logo"
              // className="rounded-full"
            />
          </Link>
        </div>

        {/* Middle - Navigation Links (Hidden on Mobile) */}
        <div className="hidden md:flex space-x-6 text-lg">
          <Link href="/" className="hover:text-gray-600">
            Home
          </Link>
          <Link href="/product" className="hover:text-gray-600">
            Products
          </Link>
          <Link href="/about" className="hover:text-gray-600">
            About Us
          </Link>
          <Link href="/dashboard" className="hover:text-gray-600">
            Dashboard
          </Link>
        </div>

        {/* Right - Shopping Cart and Login/Logout */}
        <div className="flex items-center space-x-6">
          {/* Shopping Cart */}
          <button className="relative">
            <FaShoppingCart className="text-2xl hover:text-gray-600" />
            <span className="absolute bottom-4 left-4 bg-red-600 text-white text-xs w-4 h-4 flex items-center justify-center rounded-full">
              0
            </span>
          </button>

          {/* Login/Logout */}
          {session?.user ? (
            <button
              onClick={() => signOut()}
              className="flex items-center space-x-2 hover:text-gray-600"
            >
              <FiLogOut className="text-2xl" />
              <span>Logout</span>
            </button>
          ) : (
            <Link
              href="/login"
              className="flex items-center space-x-2 hover:text-gray-600"
            >
              <FiLogIn className="text-2xl" />
              <span>Login</span>
            </Link>
          )}

          {/* Hamburger Menu Button for Mobile */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden text-2xl focus:outline-none"
          >
            {isMenuOpen ? <AiOutlineClose /> : <AiOutlineMenu />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden flex flex-col space-y-2 px-4 py-2">
          <Link href="/" className="block text-lg hover:text-gray-600">
            Home
          </Link>
          <Link href="/products" className="block text-lg hover:text-gray-600">
            Products
          </Link>
          <Link href="/about" className="block text-lg hover:text-gray-600">
            About Us
          </Link>
          <Link href="/dashboard" className="block text-lg hover:text-gray-600">
            Dashboard
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
