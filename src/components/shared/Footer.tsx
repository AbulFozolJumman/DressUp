import { FaFacebook, FaInstagram, FaTwitter, FaGithub } from "react-icons/fa";
import Link from "next/link";
import Image from "next/image";
import Logo from "@/assets/DressUp.png";

const Footer = () => {
  return (
    <footer className="bg-[#093045] text-white pt-10 pb-5">
      <div className="container mx-auto px-5 grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Logo & Tagline */}
        <div className="flex flex-col items-center md:items-start">
          <div className="cursor-pointer w-20 h-20">
            <Link href="/">
              <Image src={Logo} width={200} height={200} alt="dressUp Logo" />
            </Link>
          </div>
          <h2 className="text-2xl font-bold mb-2">DressUp</h2>
          <p className="text-white">Young & Youth Clothing Store</p>
        </div>

        {/* Navigation Links */}
        <div className="flex flex-col items-center space-y-4">
          <h3 className="font-semibold text-xl">Quick Links</h3>
          <Link href="/">
            <button className="text-white hover:text-blue-600">Home</button>
          </Link>
          <Link href="/products">
            <button className="text-white hover:text-blue-600">Products</button>
          </Link>
          <Link href="/about-us">
            <button className="text-white hover:text-blue-600">About Us</button>
          </Link>
          <Link href="/dashboard">
            <button className="text-white hover:text-blue-600">
              Dashboard
            </button>
          </Link>
        </div>

        {/* Social & Contact Info */}
        <div className="flex flex-col items-center md:items-end space-y-4">
          <h3 className="font-semibold text-xl">Follow Us</h3>
          <div className="flex space-x-4">
            <Link href="https://facebook.com" target="_blank" rel="noreferrer">
              <FaFacebook className="text-2xl hover:text-blue-500 bg-[#093045]" />
            </Link>
            <Link href="https://instagram.com" target="_blank" rel="noreferrer">
              <FaInstagram className="text-2xl hover:text-pink-500 bg-[#093045]" />
            </Link>
            <Link href="https://twitter.com" target="_blank" rel="noreferrer">
              <FaTwitter className="text-2xl hover:text-blue-400 bg-[#093045]" />
            </Link>
            <Link href="https://github.com" target="_blank" rel="noreferrer">
              <FaGithub className="text-2xl hover:text-gray-400 bg-[#093045]" />
            </Link>
          </div>
          <p className="text-white text-right">
            Contact: support@dress-up.com
            <br />
            +1 234 567 890
          </p>
        </div>
      </div>

      {/* Bottom footer - copyright */}
      <div className="text-center text-white text-sm mt-8 border-t border-cyan-600 pt-4">
        &copy; {new Date().getFullYear()} DressUp. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
