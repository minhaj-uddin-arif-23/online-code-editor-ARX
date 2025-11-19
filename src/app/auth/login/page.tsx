"use client";

import Navbar from "@/components/shared/Navbar";
import { signIn } from "next-auth/react";
import Image from "next/image";
import Link from "next/link";

export default function LoginPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      {/* Navbar */}
      <Navbar />

      {/* Two-column layout */}
      <div className="flex flex-col md:flex-row min-h-[90vh]">
        {/* LEFT SIDE - Login Form */}
        <div className="flex flex-col justify-center items-center w-full md:w-1/2 px-6 md:px-16 py-10 bg-white border-2 border-gray">
          <div className="w-full max-w-sm">
            <h2 className="text-4xl font-bold text-gray-800 text-center mb-3">
              Welcome Back 👋
            </h2>
            <p className="text-center text-gray-500 mb-8 text-sm">
              Login to access your account
            </p>

            <form className="space-y-5">
              <div>
                <label className="text-sm text-gray-600 mb-1 block">
                  Email Address
                </label>
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="w-full px-4 py-2.5 rounded-lg border border-gray-300 focus:ring-2 
                             focus:ring-blue-500 focus:outline-none transition duration-200"
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
                             focus:ring-blue-500 focus:outline-none transition duration-200"
                />
              </div>

              <button
                type="submit"
                className="w-full bg-green-600 text-white py-2.5 rounded-lg font-semibold 
                           hover:bg-green-700 transition duration-200"
              >
                Login
              </button>
            </form>

            {/* Divider */}
            <div className="relative my-6">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-gray-300"></div>
              </div>
              <div className="relative flex justify-center text-sm">
                <span className="bg-white px-2 text-gray-500">
                  Or continue with
                </span>
              </div>
            </div>

            {/* Social Buttons */}
            <div className="flex flex-col sm:flex-row justify-center gap-3">
              <button
                type="button"
                name="action"
                value="google"
                // onClick={() => signIn("google")}
                className="flex items-center justify-center gap-2 border border-gray-300 
                           rounded-lg px-5 py-2.5 hover:bg-gray-100 transition-all duration-200 
                           shadow-sm w-full sm:w-auto cursor-pointer"
              >
                <Image
                  src="/google.png"
                  width={20}
                  height={20}
                  alt="Google logo"
                />
                <span className="text-gray-700 font-medium">Google</span>
              </button>

              <button
                type="button"
                name="action"
                value="github"
                // onClick={() => signIn("github")}
                className="flex items-center justify-center gap-2 border border-gray-300 
                           rounded-lg px-5 py-2.5 hover:bg-gray-100 transition-all duration-200 
                           shadow-sm w-full sm:w-auto cursor-pointer"
              >
                <Image
                  src="/github.png"
                  width={20}
                  height={20}
                  alt="GitHub logo"
                />
                <span className="text-gray-700 font-medium">GitHub</span>
              </button>
            </div>

            <p className="text-center mt-8 text-sm text-gray-600">
              Don’t have an account?{" "}
              <Link
                href="signup"
                className="text-green-600 font-medium hover:underline"
              >
                Sign up
              </Link>
            </p>
          </div>
        </div>

        {/* RIGHT SIDE - Background Image */}
        <div className="w-full md:w-1/2 h-64 md:h-auto relative">
          <Image
            src="/login.jpg"
            alt="Login illustration"
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
