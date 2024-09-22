import Link from "next/link";

const Navbar = () => {
  return (
    <nav className="bg-white border-b w-[90%] mx-auto flex justify-between items-center py-4">
      {/* Navbar Start */}
      <div className="flex items-center">
        {/* Hamburger Menu for Mobile */}
        <div className="lg:hidden">
          <button className="text-gray-700 focus:outline-none">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </button>
          {/* Dropdown Menu */}
          <ul className="hidden absolute bg-white shadow-lg rounded-lg w-48 mt-2">
            <li className="border-b">
              <Link
                href="/"
                className="block px-4 py-2 text-gray-700 hover:bg-gray-200"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                href="/products"
                className="block px-4 py-2 text-gray-700 hover:bg-gray-200"
              >
                Products
              </Link>
            </li>
            <li className="border-b">
              <Link
                href="/about"
                className="block px-4 py-2 text-gray-700 hover:bg-gray-200"
              >
                About Us
              </Link>
            </li>
          </ul>
        </div>

        {/* Logo */}
        <Link href="/" className="text-xl font-bold text-gray-800">
          NextAuth
        </Link>
      </div>

      {/* Navbar Center for Larger Screens */}
      <div className="hidden lg:flex">
        <ul className="flex space-x-6">
          <li>
            <Link href="/" className="text-gray-700 hover:text-gray-900">
              Home
            </Link>
          </li>
          <li>
            <Link
              href="/products"
              className="text-gray-700 hover:text-gray-900"
            >
              Products
            </Link>
          </li>
          <li>
            <Link href="/about" className="text-gray-700 hover:text-gray-900">
              About Us
            </Link>
          </li>
          <li>
            <Link
              href="/dashboard"
              className="text-gray-700 hover:text-gray-900"
            >
              Dashboard
            </Link>
          </li>
        </ul>
      </div>

      {/* Navbar End */}
      <div className="flex space-x-4">
        <Link
          href="/login"
          className="px-5 py-2 bg-teal-500 text-white rounded-full hover:bg-teal-600"
        >
          Login
        </Link>
        <button className="px-5 py-2 bg-red-500 text-white rounded-full hover:bg-red-600">
          Logout
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
