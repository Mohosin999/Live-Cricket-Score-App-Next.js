// "use client";

// import button from "next/button";
// import { useState, useEffect } from "react";
// import { FaBars, FaTimes, FaSun, FaMoon } from "react-icons/fa"; // Import dark mode icons
// import { useTheme } from "next-themes";

// const Navbar = () => {
//   const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
//   const { theme, setTheme } = useTheme();
//   const [mounted, setMounted] = useState(false);

//   // Ensure theme is mounted correctly
//   useEffect(() => {
//     setMounted(true);
//   }, []);

//   const toggleMobileMenu = () => {
//     setIsMobileMenuOpen(!isMobileMenuOpen);
//   };

//   return (
//     // <nav className="fixed top-0 left-0 w-full z-50 bg-gray-900 dark:bg-gray-800 shadow-sm transition-colors">
//     <nav className="bg-gray-900 dark:bg-gray-800 shadow-sm transition-colors">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         <div className="flex justify-between h-16">
//           {/* Logo */}
//           <div className="flex items-center">
//             <button href="/" className="text-yellow-400 text-2xl font-bold">
//               🏏LiveScore
//             </button>
//           </div>

//           {/* Desktop Menu */}
//           <div className="hidden md:flex items-center space-x-4">
//             <button
//               href="/"
//               className="text-white dark:text-gray-300 hover:bg-blue-700 dark:hover:bg-gray-700 px-3 py-2 rounded-md text-sm font-medium"
//             >
//               Home
//             </button>

//             <button
//               href="/recent-matches/international"
//               className="text-white dark:text-gray-300 hover:bg-blue-700 dark:hover:bg-gray-700 px-3 py-2 rounded-md text-sm font-medium"
//             >
//               Recent Matches
//             </button>

//             <button
//               href="/cricket-schedule/international"
//               className="text-white dark:text-gray-300 hover:bg-blue-700 dark:hover:bg-gray-700 px-3 py-2 rounded-md text-sm font-medium"
//             >
//               Schedule
//             </button>
//           </div>

//           {/* Dark Mode Toggle */}
//           <div className="flex items-center">
//             {mounted && (
//               <button
//                 onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
//                 className="text-white dark:text-yellow-400 focus:outline-none mr-4"
//               >
//                 {theme === "dark" ? (
//                   <FaSun className="w-6 h-6" />
//                 ) : (
//                   <FaMoon className="w-6 h-6" />
//                 )}
//               </button>
//             )}
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
//               <button
//                 href="/"
//                 className="text-white dark:text-gray-300 hover:bg-blue-700 dark:hover:bg-gray-700 px-3 py-2 rounded-md text-sm font-medium"
//                 onClick={toggleMobileMenu}
//               >
//                 Home
//               </button>

//               <button
//                 href="/recent-matches/international"
//                 className="text-white dark:text-gray-300 hover:bg-blue-700 dark:hover:bg-gray-700 px-3 py-2 rounded-md text-sm font-medium"
//                 onClick={toggleMobileMenu}
//               >
//                 Recent Matches
//               </button>

//               <button
//                 href="/cricket-schedule/international"
//                 className="text-white dark:text-gray-300 hover:bg-blue-700 dark:hover:bg-gray-700 px-3 py-2 rounded-md text-sm font-medium"
//                 onClick={toggleMobileMenu}
//               >
//                 Schedule
//               </button>
//             </div>
//           </div>
//         )}
//       </div>
//     </nav>
//   );
// };

// export default Navbar;

"use client";

import { useState, useEffect } from "react";
import { FaBars, FaTimes, FaSun, FaMoon } from "react-icons/fa"; // Import dark mode icons
import { useTheme } from "next-themes";
import { usePathname, useRouter } from "next/navigation";

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const router = useRouter();
  const pathname = usePathname();

  // Ensure theme is mounted correctly
  useEffect(() => {
    setMounted(true);
  }, []);

  // Handle navigation function
  const handleNavigation = (path) => {
    setIsLoading(true); // Show loading spinner
    router.push(path); // Navigate to the new route
  };

  // Reset loading state when route changes
  useEffect(() => {
    setIsLoading(false);
  }, [pathname]);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <>
      {isLoading && (
        // <div className="fixed inset-0 bg-black bg-opacity-50 backdrop-blur-sm flex items-center justify-center z-50">
        //   <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-white"></div>
        // </div>
        <div className="fixed inset-0 bg-black bg-opacity-50 backdrop-blur-sm flex items-center justify-center z-50">
          <div className="animate-pulse text-yellow-400 text-4xl">
            🏏LiveScore
          </div>
        </div>
      )}

      <nav className="bg-gray-900 dark:bg-gray-800 shadow-sm transition-colors">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            {/* Logo */}
            <div className="flex items-center">
              <button
                onClick={() => handleNavigation("/")}
                className="text-yellow-400 text-2xl font-bold"
              >
                🏏LiveScore
              </button>
            </div>

            {/* Desktop Menu */}
            <div className="hidden md:flex items-center space-x-4">
              <button
                onClick={() => handleNavigation("/")}
                className="text-white dark:text-gray-300 hover:bg-blue-700 dark:hover:bg-gray-700 px-3 py-2 rounded-md text-sm font-medium"
              >
                Home
              </button>

              <button
                onClick={() =>
                  handleNavigation("/recent-matches/international")
                }
                className="text-white dark:text-gray-300 hover:bg-blue-700 dark:hover:bg-gray-700 px-3 py-2 rounded-md text-sm font-medium"
              >
                Recent Matches
              </button>

              <button
                onClick={() =>
                  handleNavigation("/cricket-schedule/international")
                }
                className="text-white dark:text-gray-300 hover:bg-blue-700 dark:hover:bg-gray-700 px-3 py-2 rounded-md text-sm font-medium"
              >
                Schedule
              </button>
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
                <button
                  onClick={() => {
                    handleNavigation("/");
                    toggleMobileMenu;
                  }}
                  className="text-white dark:text-gray-300 hover:bg-blue-700 dark:hover:bg-gray-700 px-3 py-2 rounded-md text-sm font-medium"
                >
                  Home
                </button>

                <button
                  onClick={() => {
                    handleNavigation("/recent-matches/international");
                    toggleMobileMenu;
                  }}
                  className="text-white dark:text-gray-300 hover:bg-blue-700 dark:hover:bg-gray-700 px-3 py-2 rounded-md text-sm font-medium"
                >
                  Recent Matches
                </button>

                <button
                  onClick={() => {
                    handleNavigation("/cricket-schedule/international");
                    toggleMobileMenu;
                  }}
                  className="text-white dark:text-gray-300 hover:bg-blue-700 dark:hover:bg-gray-700 px-3 py-2 rounded-md text-sm font-medium"
                >
                  Schedule
                </button>
              </div>
            </div>
          )}
        </div>
      </nav>
    </>
  );
};

export default Navbar;
