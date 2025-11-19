"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";
import { Menu, X, Sparkles } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/editor/python", label: "Editor" },
    { href: "/tutorials", label: "Tutorials" },
    { href: "/whiteboard", label: "Whiteboard" },
    { href: "/dashboard", label: "Dashboard" },
    { href: "/about", label: "About" },
    { href: "/career", label: "Career" },
  ];

  const isActive = (href: string) => {
    if (href === "/") {
      return pathname === "/";
    }
    return pathname.startsWith(href);
  };

  return (
    <nav
      className={`text-white fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-out ${
        isScrolled
          ? "bg-gray-900/90 backdrop-blur-xl shadow-2xl border-b border-white/10"
          : "bg-linear-to-r from-gray-900 via-gray-800 to-gray-900 shadow-lg"
      }`}
    >
      {/* Animated white glow line on top */}
      <div
        className={`absolute top-0 left-0 right-0 h-0.5 bg-linear-to-r from-transparent via-white to-transparent transition-all duration-700 ${
          isScrolled ? "opacity-100 scale-x-100" : "opacity-0 scale-x-50"
        }`}
        style={{
          transformOrigin: "center",
        }}
      />

      {/* White glowing spots that appear on scroll */}
      {isScrolled && (
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-1/2 left-[15%] w-32 h-32 bg-white rounded-full opacity-5 blur-3xl animate-pulse-slow" />
          <div className="absolute top-1/2 right-[20%] w-40 h-40 bg-white rounded-full opacity-5 blur-3xl animate-pulse-slower" />
          <div
            className="absolute top-1/2 left-[60%] w-24 h-24 bg-white rounded-full opacity-5 blur-2xl animate-pulse-slow"
            style={{ animationDelay: "1s" }}
          />
        </div>
      )}

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div
          className={`flex justify-between items-center transition-all duration-500 ${
            isScrolled ? "h-14" : "h-16"
          }`}
        >
          {/* Logo with enhanced animation */}
          <div className="shrink-0 group relative">
            <Link
              href="/"
              className={`font-extrabold tracking-tight transition-all duration-500 flex items-center gap-2 ${
                isScrolled ? "text-xl" : "text-2xl"
              }`}
            >
              {/* White glow behind logo when scrolled */}
              {isScrolled && (
                <span className="absolute inset-0 blur-xl bg-white/20 rounded-full scale-150" />
              )}
              <span
                className={`text-indigo-400 inline-block transition-all duration-500 relative z-10 ${
                  isScrolled
                    ? "drop-shadow-[0_0_8px_rgba(255,255,255,0.5)]"
                    : ""
                } group-hover:rotate-12 group-hover:scale-110`}
              >
                Compile
              </span>
              <span className="relative z-10">
                X
                {isScrolled && (
                  <Sparkles className="absolute -top-1 -right-2 w-3 h-3 text-white animate-pulse" />
                )}
              </span>
            </Link>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-1">
            {navLinks.map((link, index) => (
              <Link
                key={link.href}
                href={link.href}
                className={`relative px-4 py-2 text-sm font-medium rounded-lg transition-all duration-300 group overflow-hidden ${
                  isActive(link.href)
                    ? "text-white bg-gradient-to-r from-indigo-600 to-purple-600 shadow-lg shadow-indigo-500/50 scale-105"
                    : "text-gray-300 hover:text-white hover:bg-gray-700/50 hover:scale-105"
                }`}
                style={{
                  transitionDelay: isScrolled ? `${index * 30}ms` : "0ms",
                }}
              >
                {/* White shine effect on scroll */}
                {isScrolled && (
                  <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent animate-shine-slow" />
                )}

                {/* Active link shine effect */}
                {isActive(link.href) && (
                  <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent animate-shine" />
                )}

                <span className="relative z-10">{link.label}</span>

                {/* Animated underline for non-active */}
                {!isActive(link.href) && (
                  <>
                    <span className="absolute -bottom-0 left-1/2 -translate-x-1/2 w-0 h-0.5 bg-white transition-all duration-300 group-hover:w-3/4" />
                    <span className="absolute inset-0 rounded-lg bg-white/0 group-hover:bg-white/5 transition-all duration-300" />
                  </>
                )}
              </Link>
            ))}
          </div>

          {/* Pro Button with enhanced animation */}
          <div className="hidden md:flex items-center">
            <Link
              href="/pro"
              className={`relative px-5 py-2 rounded-lg bg-gradient-to-r from-indigo-600 to-purple-600 text-sm font-medium overflow-hidden group transition-all duration-500 ${
                isScrolled
                  ? "shadow-xl shadow-white/20 scale-105"
                  : "shadow-lg shadow-indigo-500/30"
              }`}
            >
              <span className="relative z-10 flex items-center gap-2">
                Become Pro
                <span className="inline-block group-hover:rotate-12 transition-transform duration-300">
                  ⚡
                </span>
              </span>
              {/* Animated gradient overlay */}
              <span className="absolute inset-0 bg-gradient-to-r from-purple-600 to-pink-600 opacity-0 group-hover:opacity-100 transition-all duration-300" />
              {/* White shine effect */}
              <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
            </Link>
          </div>

          {/* Mobile Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className={`p-2 rounded-md hover:bg-gray-700 transition-all duration-300 ${
                isOpen ? "rotate-90" : "rotate-0"
              }`}
              aria-label="Toggle menu"
            >
              {isOpen ? (
                <X size={24} className="animate-spin-once" />
              ) : (
                <Menu size={24} />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu with stagger animation */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-500 ease-out ${
          isOpen ? "max-h-[600px] opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="bg-gray-800/95 backdrop-blur-xl px-4 pb-4 pt-2 space-y-2 border-t border-white/10">
          {navLinks.map((link, index) => (
            <Link
              key={link.href}
              href={link.href}
              className={`block py-2.5 px-4 text-sm font-medium rounded-lg transition-all duration-300 transform ${
                isActive(link.href)
                  ? "bg-gradient-to-r from-indigo-600 to-purple-600 text-white shadow-lg scale-105"
                  : "text-gray-300 hover:text-white hover:bg-gray-700/50 hover:translate-x-2"
              } ${
                isOpen
                  ? "translate-x-0 opacity-100"
                  : "-translate-x-4 opacity-0"
              }`}
              style={{
                transitionDelay: isOpen ? `${index * 50}ms` : "0ms",
              }}
              onClick={() => setIsOpen(false)}
            >
              <span className="flex items-center gap-2">
                {isActive(link.href) && <span className="text-white">●</span>}
                {link.label}
              </span>
            </Link>
          ))}
          <div
            className={`flex flex-col space-y-3 pt-4 border-t border-gray-700 transition-all duration-500 ${
              isOpen ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"
            }`}
            style={{
              transitionDelay: isOpen ? `${navLinks.length * 50}ms` : "0ms",
            }}
          >
            <Link
              href="/pro"
              className="relative px-5 py-2.5 rounded-lg bg-gradient-to-r from-indigo-600 to-purple-600 text-sm font-medium text-center overflow-hidden group shadow-lg shadow-indigo-500/50"
              onClick={() => setIsOpen(false)}
            >
              <span className="relative z-10 flex items-center justify-center gap-2">
                Become Pro ⚡
              </span>
              <span className="absolute inset-0 bg-gradient-to-r from-purple-600 to-pink-600 opacity-0 group-active:opacity-100 transition-opacity duration-200" />
            </Link>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes shine {
          0% {
            transform: translateX(-100%) skewX(-15deg);
          }
          100% {
            transform: translateX(200%) skewX(-15deg);
          }
        }
        @keyframes shine-slow {
          0% {
            transform: translateX(-100%) skewX(-15deg);
          }
          100% {
            transform: translateX(200%) skewX(-15deg);
          }
        }
        @keyframes pulse-slow {
          0%,
          100% {
            opacity: 0.03;
            transform: scale(1);
          }
          50% {
            opacity: 0.08;
            transform: scale(1.05);
          }
        }
        @keyframes pulse-slower {
          0%,
          100% {
            opacity: 0.03;
            transform: scale(1);
          }
          50% {
            opacity: 0.08;
            transform: scale(1.08);
          }
        }
        .animate-shine {
          animation: shine 3s ease-in-out infinite;
        }
        .animate-shine-slow {
          animation: shine-slow 4s ease-in-out infinite;
        }
        .animate-pulse-slow {
          animation: pulse-slow 4s ease-in-out infinite;
        }
        .animate-pulse-slower {
          animation: pulse-slower 6s ease-in-out infinite;
        }
        .animate-spin-once {
          animation: spin 0.3s ease-in-out;
        }
        @keyframes spin {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(180deg);
          }
        }
      `}</style>
    </nav>
  );
}
