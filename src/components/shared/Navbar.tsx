"use client";

import { useState } from "react";
import Link from "next/link";
import { FaShoppingCart } from "react-icons/fa";
import { FiLogIn, FiLogOut } from "react-icons/fi";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import Image from "next/image";
import Logo from "@/assets/DressUp.png";
// import useUserInfo from "@/hooks/useUserInfo";
// import { useRouter } from "next/navigation";
// import { logoutUser } from "@/utils/logoutUser";
import { useSelector } from "react-redux";
import { RootState } from "@/redux/store";
import { useAppDispatch } from "@/redux/hooks";
import { logout } from "@/redux/features/userSlice";

const Navbar = () => {
  const cartItems = useSelector((state: RootState) => state.cart.items);
  const cartCount = cartItems.reduce((count, item) => count + item.quantity, 0);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  // const userInfo = useUserInfo();
  const { user } = useSelector((state: RootState) => state.user);
  const dispatch = useAppDispatch();
  // const router = useRouter();
  const handleLogOut = () => {
    if (window.confirm("Are you sure you want to logout?")) {
      dispatch(logout());
    }
  };
  return (
    <nav className="bg-[#093045] w-full z-10">
      <div className="container mx-auto px-5 md:py-1 py-1 flex justify-between items-center">
        {/* Left - Logo */}
        <div className="cursor-pointer md:w-20 w-16 md:h-20 h-16">
          <Link href="/" className="outline-none">
            <Image src={Logo} width={200} height={200} alt="dressUp Logo" />
          </Link>
        </div>

        {/* Middle - Navigation Links (Hidden on Mobile) */}
        <div className="hidden md:flex space-x-6 text-lg">
          <Link href="/" className="hover:text-blue-600 text-white">
            Home
          </Link>
          <Link href="/products" className="hover:text-blue-600 text-white">
            Products
          </Link>
          <Link href="/about" className="hover:text-blue-600 text-white">
            About Us
          </Link>
          <Link href="/dashboard" className="hover:text-blue-600 text-white">
            Dashboard
          </Link>
        </div>

        {/* Right - Shopping Cart and Login/Logout */}
        <div className="flex items-center md:space-x-6 space-x-5">
          {/* Shopping Cart */}
          <Link href="/dashboard/user-info">
            <button className="relative">
              <FaShoppingCart className="text-2xl hover:text-blue-600 bg-[#093045] text-white" />
              {cartCount > 0 && (
                <span className="absolute bottom-4 left-4 bg-red-600 text-white text-xs w-4 h-4 flex items-center justify-center rounded-full">
                  {cartCount}
                </span>
              )}
            </button>
          </Link>

          {/* Login/Logout */}
          {user ? (
            <button
              onClick={handleLogOut}
              className="flex items-center space-x-2 text-white hover:text-blue-600"
            >
              <FiLogOut className="text-2xl bg-[#093045]" />
              <span>Logout</span>
            </button>
          ) : (
            <Link
              href="/login"
              className="flex items-center space-x-2 hover:text-blue-600 text-white"
            >
              <FiLogIn className="text-2xl bg-[#093045]" />
              <span>Login</span>
            </Link>
          )}

          {/* Hamburger Menu Button for Mobile */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden text-white bg-[#093045] text-3xl focus:outline-none"
          >
            {isMenuOpen ? <AiOutlineClose /> : <AiOutlineMenu />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden flex flex-col space-y-3 px-5 pt-2 pb-5">
          <Link
            href="/"
            className="block text-lg hover:text-blue-600 text-white"
          >
            Home
          </Link>
          <Link
            href="/products"
            className="block text-lg hover:text-blue-600 text-white"
          >
            Products
          </Link>
          <Link
            href="/about"
            className="block text-lg hover:text-blue-600 text-white"
          >
            About Us
          </Link>
          <Link
            href="/dashboard"
            className="block text-lg hover:text-blue-600 text-white"
          >
            Dashboard
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
