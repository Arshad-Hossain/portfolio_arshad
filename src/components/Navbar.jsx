"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { useTheme } from "next-themes";
import { FiMenu, FiX } from "react-icons/fi";
import { FaMoon, FaSun } from "react-icons/fa";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [mounted, setMounted] = useState(false);

  const { theme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <header className="fixed top-0 left-0 w-full z-50 backdrop-blur-md bg-black/10 border-b border-white/10">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 lg:px-8 py-5">
        {/* Logo */}
        <Link
          href="/"
          className="text-white dark:text-white light:text-black text-xl md:text-2xl font-bold"
        >
          Mohammad Hossain
        </Link>

        {/* Desktop Menu */}
        <nav className="hidden md:block">
          <ul className="flex items-center gap-8">
            <li>
              <a
                href="#"
                className="text-white dark:text-white hover:text-[#ff7a59]"
              >
                Home
              </a>
            </li>

            <li>
              <a
                href="#about"
                className="text-white dark:text-white hover:text-[#ff7a59]"
              >
                About
              </a>
            </li>

            <li>
              <a
                href="#projects"
                className="text-white dark:text-white hover:text-[#ff7a59]"
              >
                Projects
              </a>
            </li>

            <li>
              <a
                href="#contact"
                className="text-white dark:text-white hover:text-[#ff7a59]"
              >
                Contact
              </a>
            </li>
          </ul>
        </nav>

        {/* Right Side */}
        <div className="flex items-center gap-4">
          {/* Theme Toggle */}
          {mounted && (
            <button
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              className="text-white hover:text-[#ff7a59] transition"
            >
              {theme === "dark" ? <FaSun size={18} /> : <FaMoon size={18} />}
            </button>
          )}

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden text-white"
          >
            {menuOpen ? <FiX size={28} /> : <FiMenu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`
          md:hidden
          overflow-hidden
          transition-all
          duration-300
          ${menuOpen ? "max-h-80 border-t border-white/10" : "max-h-0"}
        `}
      >
        <div className="bg-[#081828]/95 backdrop-blur-lg">
          <nav className="px-6 py-5">
            <ul className="space-y-5">
              <li>
                <a
                  href="#"
                  onClick={() => setMenuOpen(false)}
                  className="block text-white hover:text-[#ff7a59]"
                >
                  Home
                </a>
              </li>

              <li>
                <a
                  href="#about"
                  onClick={() => setMenuOpen(false)}
                  className="block text-white hover:text-[#ff7a59]"
                >
                  About
                </a>
              </li>

              <li>
                <a
                  href="#projects"
                  onClick={() => setMenuOpen(false)}
                  className="block text-white hover:text-[#ff7a59]"
                >
                  Projects
                </a>
              </li>

              <li>
                <a
                  href="#contact"
                  onClick={() => setMenuOpen(false)}
                  className="block text-white hover:text-[#ff7a59]"
                >
                  Contact
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
}
