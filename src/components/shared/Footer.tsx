import { FaFacebook, FaInstagram, FaTwitter, FaGithub } from "react-icons/fa";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="bg-cyan-900 text-white py-10">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 px-4">
        {/* Logo & Tagline */}
        <div className="flex flex-col items-center md:items-start">
          <Link href="/">
            <button className="text-2xl font-bold mb-2">DressUp</button>
          </Link>
          <p className="text-gray-400">Young & Youth Clothing Store</p>
        </div>

        {/* Navigation Links */}
        <div className="flex flex-col items-center space-y-4">
          <h3 className="font-semibold text-xl">Quick Links</h3>
          <Link href="/">
            <button className="text-gray-400 hover:text-white">Home</button>
          </Link>
          <Link href="/products">
            <button className="text-gray-400 hover:text-white">Products</button>
          </Link>
          <Link href="/about-us">
            <button className="text-gray-400 hover:text-white">About Us</button>
          </Link>
          <Link href="/dashboard">
            <button className="text-gray-400 hover:text-white">
              Dashboard
            </button>
          </Link>
        </div>

        {/* Social & Contact Info */}
        <div className="flex flex-col items-center md:items-end space-y-4">
          <h3 className="font-semibold text-xl">Follow Us</h3>
          <div className="flex space-x-4">
            <Link href="https://facebook.com" target="_blank" rel="noreferrer">
              <FaFacebook className="text-2xl hover:text-blue-500" />
            </Link>
            <Link href="https://instagram.com" target="_blank" rel="noreferrer">
              <FaInstagram className="text-2xl hover:text-pink-500" />
            </Link>
            <Link href="https://twitter.com" target="_blank" rel="noreferrer">
              <FaTwitter className="text-2xl hover:text-blue-400" />
            </Link>
            <Link href="https://github.com" target="_blank" rel="noreferrer">
              <FaGithub className="text-2xl hover:text-gray-400" />
            </Link>
          </div>
          <p className="text-gray-400">
            Contact: support@dress-up.com
            <br />
            +1 234 567 890
          </p>
        </div>
      </div>

      {/* Bottom footer - copyright */}
      <div className="text-center text-gray-400 text-sm mt-8 border-t border-gray-700 pt-4">
        &copy; {new Date().getFullYear()} DressUp. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
