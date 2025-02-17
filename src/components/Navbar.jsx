// "use client";

// import Link from "next/link";
// import { useState } from "react";
// import { FaBars, FaTimes } from "react-icons/fa"; // React Icons for hamburger and close icons

// const Navbar = () => {
//   const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

//   const toggleMobileMenu = () => {
//     setIsMobileMenuOpen(!isMobileMenuOpen);
//   };

//   return (
//     <nav className="bg-green-600 shadow-lg">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         <div className="flex justify-between h-16">
//           {/* Logo */}
//           <div className="flex items-center">
//             <Link href="/" className="text-white text-2xl font-bold">
//               🏏LiveScore
//             </Link>
//           </div>

//           {/* Desktop Menu */}
//           <div className="hidden md:flex items-center space-x-4">
//             <Link
//               href="/"
//               className="text-white hover:bg-blue-700 px-3 py-2 rounded-md text-sm font-medium"
//             >
//               Home
//             </Link>
//             <Link
//               href="/live-matches"
//               className="text-white hover:bg-blue-700 px-3 py-2 rounded-md text-sm font-medium"
//             >
//               Live Matches
//             </Link>
//             <Link
//               href="/recent-matches"
//               className="text-white hover:bg-blue-700 px-3 py-2 rounded-md text-sm font-medium"
//             >
//               Recent Matches
//             </Link>
//             <Link
//               href="/cricket-schedule/international"
//               className="text-white hover:bg-blue-700 px-3 py-2 rounded-md text-sm font-medium"
//             >
//               Schedule
//             </Link>
//           </div>

//           {/* Mobile Menu Toggle */}
//           <div className="flex items-center md:hidden">
//             <button
//               onClick={toggleMobileMenu}
//               className="text-white focus:outline-none"
//             >
//               {isMobileMenuOpen ? (
//                 <FaTimes className="w-6 h-6" />
//               ) : (
//                 <FaBars className="w-6 h-6" />
//               )}
//             </button>
//           </div>
//         </div>

//         {/* Mobile Menu */}
//         {isMobileMenuOpen && (
//           <div className="md:hidden">
//             <div className="flex flex-col space-y-2 pb-4">
//               <Link
//                 href="/"
//                 className="text-white hover:bg-blue-700 px-3 py-2 rounded-md text-sm font-medium"
//                 onClick={toggleMobileMenu}
//               >
//                 Home
//               </Link>
//               <Link
//                 href="/live-matches"
//                 className="text-white hover:bg-blue-700 px-3 py-2 rounded-md text-sm font-medium"
//                 onClick={toggleMobileMenu}
//               >
//                 Live Matches
//               </Link>

//               <Link
//                 href="/recent-matches"
//                 className="text-white hover:bg-blue-700 px-3 py-2 rounded-md text-sm font-medium"
//                 onClick={toggleMobileMenu}
//               >
//                 Recent Matches
//               </Link>
//               <Link
//                 href="/cricket-schedule/international"
//                 className="text-white hover:bg-blue-700 px-3 py-2 rounded-md text-sm font-medium"
//                 onClick={toggleMobileMenu}
//               >
//                 Schedule
//               </Link>
//             </div>
//           </div>
//         )}
//       </div>
//     </nav>
//   );
// };

// export default Navbar;

"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { FaBars, FaTimes, FaSun, FaMoon } from "react-icons/fa"; // Import dark mode icons
import { useTheme } from "next-themes";

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  // Ensure theme is mounted correctly
  useEffect(() => {
    setMounted(true);
  }, []);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav className="bg-gray-900 dark:bg-gray-800 shadow-lg transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          {/* Logo */}
          <div className="flex items-center">
            <Link href="/" className="text-yellow-400 text-2xl font-bold">
              🏏LiveScore
            </Link>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-4">
            <Link
              href="/"
              className="text-white dark:text-gray-300 hover:bg-blue-700 dark:hover:bg-gray-700 px-3 py-2 rounded-md text-sm font-medium"
            >
              Home
            </Link>
            <Link
              href="/live-matches"
              className="text-white dark:text-gray-300 hover:bg-blue-700 dark:hover:bg-gray-700 px-3 py-2 rounded-md text-sm font-medium"
            >
              Live Matches
            </Link>
            <Link
              href="/recent-matches"
              className="text-white dark:text-gray-300 hover:bg-blue-700 dark:hover:bg-gray-700 px-3 py-2 rounded-md text-sm font-medium"
            >
              Recent Matches
            </Link>
            <Link
              href="/cricket-schedule/international"
              className="text-white dark:text-gray-300 hover:bg-blue-700 dark:hover:bg-gray-700 px-3 py-2 rounded-md text-sm font-medium"
            >
              Schedule
            </Link>
          </div>

          {/* Dark Mode Toggle */}
          <div className="flex items-center">
            {mounted && (
              <button
                onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
                className="text-white dark:text-yellow-400 focus:outline-none mr-4"
              >
                {theme === "dark" ? (
                  <FaSun className="w-6 h-6" />
                ) : (
                  <FaMoon className="w-6 h-6" />
                )}
              </button>
            )}
          </div>

          {/* Mobile Menu Toggle */}
          <div className="flex items-center md:hidden">
            <button
              onClick={toggleMobileMenu}
              className="text-white focus:outline-none"
            >
              {isMobileMenuOpen ? (
                <FaTimes className="w-6 h-6" />
              ) : (
                <FaBars className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden">
            <div className="flex flex-col space-y-2 pb-4">
              <Link
                href="/"
                className="text-white dark:text-gray-300 hover:bg-blue-700 dark:hover:bg-gray-700 px-3 py-2 rounded-md text-sm font-medium"
                onClick={toggleMobileMenu}
              >
                Home
              </Link>
              <Link
                href="/live-matches"
                className="text-white dark:text-gray-300 hover:bg-blue-700 dark:hover:bg-gray-700 px-3 py-2 rounded-md text-sm font-medium"
                onClick={toggleMobileMenu}
              >
                Live Matches
              </Link>
              <Link
                href="/recent-matches"
                className="text-white dark:text-gray-300 hover:bg-blue-700 dark:hover:bg-gray-700 px-3 py-2 rounded-md text-sm font-medium"
                onClick={toggleMobileMenu}
              >
                Recent Matches
              </Link>
              <Link
                href="/cricket-schedule/international"
                className="text-white dark:text-gray-300 hover:bg-blue-700 dark:hover:bg-gray-700 px-3 py-2 rounded-md text-sm font-medium"
                onClick={toggleMobileMenu}
              >
                Schedule
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
