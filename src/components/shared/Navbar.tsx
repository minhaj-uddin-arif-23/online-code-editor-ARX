"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/editor/python", label: "Editor" },
    { href: "/tutorials", label: "Tutorials" },
    { href: "/whiteboard", label: "Whiteboard" },
    { href: "/dashboard", label: "Dashboard" },
    { href: "/about", label: "About" },
    { href: "/career", label: "Career" },
  ];

  return (
    <nav className="bg-gradient-to-r from-gray-900 to-gray-800 text-white sticky top-0 z-50 shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link href="/" className="text-2xl font-extrabold tracking-tight">
              <span className="text-indigo-400">Compile</span>X
            </Link>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="relative text-sm font-medium hover:text-indigo-300 transition-colors duration-300 group"
              >
                {link.label}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-indigo-400 transition-all duration-300 group-hover:w-full"></span>
              </Link>
            ))}
          </div>

          {/* Pro Button */}
          <div className="hidden md:flex items-center">
            <Link
              href="/pro"
              className="relative px-5 py-2 rounded-lg bg-indigo-600 text-sm font-medium overflow-hidden"
            >
              <span className="relative z-10">Become Pro</span>
              <span className="absolute inset-0 border-2 border-transparent rounded-lg animate-border-glow"></span>
            </Link>
          </div>

          {/* Mobile Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-md hover:bg-gray-700 transition-colors"
              aria-label="Toggle menu"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-gray-800/95 backdrop-blur-sm px-4 pb-4 pt-2 space-y-3 transition-all duration-300 ease-in-out">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="block py-2 text-sm font-medium hover:text-indigo-300 hover:bg-gray-700/50 rounded-md transition-colors duration-200"
              onClick={() => setIsOpen(false)}
            >
              {link.label}
            </Link>
          ))}
          <div className="flex flex-col space-y-3 pt-4 border-t border-gray-700">
            <Link
              href="/pro"
              className="relative px-5 py-2 rounded-lg bg-indigo-600 text-sm font-medium text-center overflow-hidden"
              onClick={() => setIsOpen(false)}
            >
              <span className="relative z-10">Become Pro</span>
              <span className="absolute inset-0 border-2 border-transparent rounded-lg animate-border-glow"></span>
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
