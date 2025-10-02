// components/Navbar.tsx
"use client";
import { useState } from "react";
import Link from "next/link";
// import { LogIn } from "lucide-react";

const Navbar = () => {
  // const { user } = useUser();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="sticky top-0 bg-white w-full shadow-insect-200 z-50 shadow-sm">
      <div className="w-11/12 mx-auto">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link href="/">
              <div className="flex items-center">
                <span className="text-xl font-bold">Zaakiy</span>
              </div>
            </Link>
          </div>

          {/* Desktop Menu */}
          <div className="hidden sm:flex items-center space-x-6">
            <Link
              href="/"
              className="text-gray-700 hover:text-[[#5D7DDE]] transition-colors"
            >
              Home
            </Link>
            <Link
              href="/products"
              className="text-gray-700 hover:text-blue-400 transition-colors"
            >
              Pricing
            </Link>

            <Link
              href="/about"
              className="text-gray-700 hover:text-blue-400 transition-colors"
            >
              About Us
            </Link>
          </div>

          <Link href="/auth/login">
            <button className="hidden pointer border border-[#5D7DDE] font-semibold md:flex items-center space-x-4 text-[#5D7DDE] px-7 py-2 rounded-lg gap-2">
              {/* <LogIn color="#ffffff" /> */}
              Log in
            </button>
          </Link>
          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-blue-600 focus:outline-none"
            >
              <svg
                className={`${isMenuOpen ? "hidden" : "block"} h-6 w-6`}
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
              <svg
                className={`${isMenuOpen ? "block" : "hidden"} h-6 w-6`}
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`${isMenuOpen ? "block" : "hidden"} md:hidden`}>
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
          <Link
            href="/"
            className="block px-3 py-2 rounded-md text-gray-700 hover:text-blue-600 hover:bg-gray-50"
          >
            Home
          </Link>
          <Link
            href="/products"
            className="block px-3 py-2 rounded-md text-gray-700 hover:text-blue-600 hover:bg-gray-50"
          >
            Products
          </Link>
          <Link
            href="/categories"
            className="block px-3 py-2 rounded-md text-gray-700 hover:text-blue-600 hover:bg-gray-50"
          >
            Categories
          </Link>
          <Link
            href="/about"
            className="block px-3 py-2 rounded-md text-gray-700 hover:text-blue-600 hover:bg-gray-50"
          >
            About
          </Link>
          <Link
            href="/contact"
            className="block px-3 py-2 rounded-md text-gray-700 hover:text-blue-600 hover:bg-gray-50"
          >
            Contact
          </Link>
          <div className="flex space-x-4 px-3 py-2">
            <Link href="/cart" className="text-gray-700 hover:text-blue-600">
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
                  strokeWidth={2}
                  d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                />
              </svg>
            </Link>
            <Link href="/account" className="text-gray-700 hover:text-blue-600">
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
                  strokeWidth={2}
                  d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                />
              </svg>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
