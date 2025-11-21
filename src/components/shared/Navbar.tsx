"use client";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useState, useEffect } from "react";
import { Menu, X, Sparkles } from "lucide-react";
import { useUser } from "@stackframe/stack";

type User = {
  name: string;
  email: string;
  image: string;
} | null;

type NavbarProps = {
  user?: User | null;
};

export default function Navbar({ user }: NavbarProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();
  const users: any = useUser();
  const router = useRouter();

  const handleLogout = () => {
    // if user object has logout method, call it
    if (users?.logout) {
      users.logout();
    }
    // redirect to sign-in page
    router.push("/sign-in");
  };

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/editor/python", label: "Editor" },
    { href: "/tutorials", label: "Tutorials" },
    { href: "/whiteboard", label: "Whiteboard" },
    { href: "/dashboard", label: "Dashboard" },
    { href: "/problems", label: "Problem" },
    { href: "/about", label: "About" },
    { href: "/career", label: "Career" },
  ];

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled
          ? "bg-gray-900/90 backdrop-blur-xl shadow-2xl border-b border-white/10"
          : "bg-linear-to-r from-gray-900 via-gray-800 to-gray-900 shadow-lg"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div
          className={`flex justify-between items-center transition-all duration-500 ${
            isScrolled ? "h-14" : "h-16"
          }`}
        >
          {/* Logo */}
          <Link
            href="/"
            className="text-2xl font-extrabold flex items-center gap-2 text-white"
          >
            CompileX <Sparkles className="w-4 h-4 text-white animate-pulse" />
          </Link>

          {/* Desktop Links */}
          <div className="hidden md:flex items-center space-x-4">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`px-4 py-2 text-sm font-medium rounded-lg transition-all duration-300 ${
                  isActive(link.href)
                    ? "text-white bg-linear-to-r from-indigo-600 to-purple-600 shadow-lg"
                    : "text-gray-300 hover:text-white hover:bg-gray-700/50"
                }`}
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Become Pro / User Info */}
          <div className="hidden md:flex items-center">
            {user ? (
              <div className="flex items-center gap-2 px-3 py-2 rounded-lg bg-gray-800 hover:bg-gray-700 transition-all duration-300 cursor-pointer">
                <img
                  src={user.image}
                  alt={user.name}
                  className="w-8 h-8 rounded-full object-cover"
                />
                <div className="flex flex-col text-left">
                  <span className="text-sm font-semibold">{user.name}</span>
                  <span className="text-xs text-gray-300">{user.email}</span>
                </div>
                <button
                  onClick={handleLogout}
                  className="ml-2 px-2 py-1 bg-red-600 hover:bg-red-700 rounded text-xs text-white transition"
                >
                  Logout
                </button>
              </div>
            ) : (
              <Link
                href="/pro"
                className="px-5 py-2 rounded-lg bg-linear-to-r from-indigo-600 to-purple-600 text-sm font-medium text-center shadow-lg transition-all duration-500 text-white"
              >
                Become Pro ⚡
              </Link>
            )}
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-md hover:bg-gray-700 transition-all duration-300"
            >
              {isOpen ? (
                <X size={24} className="text-white" />
              ) : (
                <Menu size={24} className="text-white" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-gray-800/95 backdrop-blur-xl px-4 pb-4 pt-2 space-y-2 border-t border-white/10">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`block py-2.5 px-4 text-sm font-medium rounded-lg transition-all duration-300 ${
                isActive(link.href)
                  ? "bg-linear-to-r from-indigo-600 to-purple-600 text-white"
                  : "text-gray-300 hover:text-white hover:bg-gray-700/50"
              }`}
              onClick={() => setIsOpen(false)}
            >
              {link.label}
            </Link>
          ))}

          {/* Become Pro / User Info */}
          <div className="pt-4 border-t border-gray-700">
            {user ? (
              <div className="flex items-center gap-2 px-3 py-2 rounded-lg bg-gray-800 cursor-pointer">
                <img
                  src={user.image}
                  alt={user.name}
                  className="w-8 h-8 rounded-full object-cover"
                />
                <div className="flex flex-col text-left">
                  <span className="text-sm font-semibold">{user.name}</span>
                  <span className="text-xs text-gray-300">{user.email}</span>
                </div>
              </div>
            ) : (
              <Link
                href="/pro"
                className="block px-5 py-2 rounded-lg bg-linear-to-r from-indigo-600 to-purple-600 text-sm font-medium text-center shadow-lg transition-all duration-500 text-white"
                onClick={() => setIsOpen(false)}
              >
                Become Pro ⚡
              </Link>
            )}
          </div>
        </div>
      )}
    </nav>
  );
}
