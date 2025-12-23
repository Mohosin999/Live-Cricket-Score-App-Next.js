"use client";

import { useState, useEffect } from "react";
import { IoIosSunny, IoIosMoon } from "react-icons/io";
import { HiMiniBars3 } from "react-icons/hi2";
import { LiaTimesCircle } from "react-icons/lia";
import { useTheme } from "next-themes";
import { AnimatePresence, motion } from "framer-motion";
import { useRouter, usePathname } from "next/navigation";

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  const router = useRouter();
  const pathname = usePathname(); // current route path

  useEffect(() => {
    setMounted(true);
  }, []);

  const handleNavigation = (path) => {
    router.push(path);
    setIsMobileMenuOpen(false); // close mobile menu when navigating
  };

  const toggleMobileMenu = () => setIsMobileMenuOpen((prev) => !prev);

  const linkClass = (path) =>
    `px-3 py-2 rounded-md text-sm font-medium ${
      pathname === path
        ? "bg-blue-700 text-white dark:bg-gray-700 dark:text-yellow-400"
        : "text-white dark:text-gray-300 hover:bg-blue-700 dark:hover:bg-gray-700"
    }`;

  return (
    <>
      <nav className="bg-gray-900 dark:bg-gray-800 shadow-sm transition-colors relative z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <div className="flex items-center">
              <button
                onClick={() => handleNavigation("/")}
                className="text-yellow-400 text-2xl font-bold active:scale-102 duration-300"
              >
                🏏LiveScore
              </button>
            </div>

            {/* Desktop Menu */}
            <div className="hidden md:flex items-center space-x-4">
              <button
                onClick={() => handleNavigation("/")}
                className={linkClass("/")}
              >
                Home
              </button>

              <button
                onClick={() => handleNavigation("/recent-matches/international")}
                className={linkClass("/recent-matches/international")}
              >
                Recent Matches
              </button>

              <button
                onClick={() => handleNavigation("/cricket-schedule/international")}
                className={linkClass("/cricket-schedule/international")}
              >
                Schedule
              </button>
            </div>

            {/* Desktop Theme Toggle */}
            <div className="hidden md:flex items-center">
              {mounted && (
                <button
                  onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
                  className="text-white dark:text-yellow-400 focus:outline-none active:scale-105"
                  aria-label="Toggle theme"
                >
                  {theme === "dark" ? (
                    <IoIosSunny className="w-6 h-6" />
                  ) : (
                    <IoIosMoon className="w-6 h-6" />
                  )}
                </button>
              )}
            </div>

            {/* Mobile: theme icon and menu */}
            <div className="flex items-center gap-4 md:hidden">
              {mounted && (
                <button
                  onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
                  className="text-white dark:text-yellow-400 focus:outline-none active:scale-105"
                  aria-label="Toggle theme"
                >
                  {theme === "dark" ? (
                    <IoIosSunny className="w-6 h-6" />
                  ) : (
                    <IoIosMoon className="w-6 h-6" />
                  )}
                </button>
              )}
              <button
                onClick={toggleMobileMenu}
                className="text-white focus:outline-none active:scale-105"
                aria-label="Open menu"
                aria-expanded={isMobileMenuOpen}
              >
                <HiMiniBars3 className="w-6 h-6" />
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Sidebar */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              className="fixed inset-0 bg-black/50 z-40"
              onClick={toggleMobileMenu}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            />

            {/* Sidebar */}
            <motion.aside
              className="fixed top-0 right-0 h-full w-72 max-w-[85vw] bg-gray-900 dark:bg-gray-800 z-50 shadow-2xl"
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", stiffness: 400, damping: 40 }}
            >
              {/* Close button */}
              <div className="relative">
                <button
                  onClick={toggleMobileMenu}
                  className="absolute top-4 right-4 p-2 rounded-lg hover:bg-gray-700 text-white active:scale-105"
                  aria-label="Close menu"
                >
                  <LiaTimesCircle className="w-6 h-6" />
                </button>
              </div>

              {/* Menu items */}
              <div className="p-6 pt-14 flex flex-col space-y-3">
                <button
                  onClick={() => handleNavigation("/")}
                  className={linkClass("/")}
                >
                  Home
                </button>

                <button
                  onClick={() => handleNavigation("/recent-matches/international")}
                  className={linkClass("/recent-matches/international")}
                >
                  Recent Matches
                </button>

                <button
                  onClick={() => handleNavigation("/cricket-schedule/international")}
                  className={linkClass("/cricket-schedule/international")}
                >
                  Schedule
                </button>
              </div>
            </motion.aside>
          </>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
