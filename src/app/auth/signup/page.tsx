"use client";

import Navbar from "@/components/shared/Navbar";
import Image from "next/image";
import Link from "next/link";

export default function SignupPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-emerald-100">
      {/* Navbar */}
      <Navbar />

      {/* Main two-column layout */}
      <div className="flex flex-col md:flex-row min-h-[90vh]">
        {/* LEFT SIDE - Sign Up Form */}
        <div className="flex flex-col justify-center items-center w-full md:w-1/2 px-6 md:px-16 py-10 bg-white border-2">
          <div className="w-full max-w-sm">
            <h2 className="text-4xl font-bold text-gray-800 text-center mb-3">
              Create Account ✨
            </h2>
            <p className="text-center text-gray-500 mb-8 text-sm">
              Join us and start your journey today
            </p>

            <form className="space-y-5">
              <div>
                <label className="text-sm text-gray-600 mb-1 block">
                  Full Name
                </label>
                <input
                  type="text"
                  placeholder="Enter your full name"
                  className="w-full px-4 py-2.5 rounded-lg border border-gray-300 focus:ring-2 
                             focus:ring-green-500 focus:outline-none transition duration-200"
                />
              </div>

              <div>
                <label className="text-sm text-gray-600 mb-1 block">
                  Email Address
                </label>
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="w-full px-4 py-2.5 rounded-lg border border-gray-300 focus:ring-2 
                             focus:ring-green-500 focus:outline-none transition duration-200"
                />
              </div>

              <div>
                <label className="text-sm text-gray-600 mb-1 block">
                  Password
                </label>
                <input
                  type="password"
                  placeholder="Enter your password"
                  className="w-full px-4 py-2.5 rounded-lg border border-gray-300 focus:ring-2 
                             focus:ring-green-500 focus:outline-none transition duration-200"
                />
              </div>

              <button
                type="submit"
                className="w-full bg-green-600 text-white py-2.5 rounded-lg font-semibold 
                           hover:bg-green-700 transition duration-200"
              >
                Create Account
              </button>
            </form>

            <p className="text-center mt-8 text-sm text-gray-600">
              Already have an account?{" "}
              <Link
                href="login"
                className="text-green-600 font-medium hover:underline"
              >
                Log in
              </Link>
            </p>
          </div>
        </div>

        {/* RIGHT SIDE - Image */}
        <div className="w-full md:w-1/2 h-64 md:h-auto relative">
          <Image
            src="/signup.jpg"
            alt="Sign up illustration"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0"></div>
        </div>
      </div>
    </div>
  );
}
