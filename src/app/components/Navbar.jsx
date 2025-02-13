"use client";

import Link from "next/link";
import { useState } from "react";

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav className="bg-blue-600 shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          {/* Logo */}
          <div className="flex items-center">
            <Link href="/" className="text-white text-2xl font-bold">
              🏏LiveScore
            </Link>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-4">
            <Link
              href="/"
              className="text-white hover:bg-blue-700 px-3 py-2 rounded-md text-sm font-medium"
            >
              Home
            </Link>
            <Link
              href="/live-scores"
              className="text-white hover:bg-blue-700 px-3 py-2 rounded-md text-sm font-medium"
            >
              Live Scores
            </Link>
            <Link
              href="/news"
              className="text-white hover:bg-blue-700 px-3 py-2 rounded-md text-sm font-medium"
            >
              News
            </Link>
            <Link
              href="/about"
              className="text-white hover:bg-blue-700 px-3 py-2 rounded-md text-sm font-medium"
            >
              About
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex items-center md:hidden">
            <button
              onClick={toggleMobileMenu}
              className="text-white hover:text-gray-200 focus:outline-none"
            >
              <svg
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {isMobileMenuOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16m-7 6h7"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-blue-600">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <Link
              href="/"
              className="text-white block px-3 py-2 rounded-md text-base font-medium hover:bg-blue-700"
            >
              Home
            </Link>
            <Link
              href="/live-scores"
              className="text-white block px-3 py-2 rounded-md text-base font-medium hover:bg-blue-700"
            >
              Live Scores
            </Link>
            <Link
              href="/news"
              className="text-white block px-3 py-2 rounded-md text-base font-medium hover:bg-blue-700"
            >
              News
            </Link>
            <Link
              href="/about"
              className="text-white block px-3 py-2 rounded-md text-base font-medium hover:bg-blue-700"
            >
              About
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
