"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

export default function MobileApps() {
  return (
    <section className="bg-linear-to-r from-gray-900 via-gray-950 to-black text-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12 py-20 lg:py-32 flex flex-col-reverse lg:flex-row items-center gap-10 lg:gap-20">
        {/* --- Text Content --- */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="flex-1 text-center lg:text-left"
        >
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight">
            CodeSphere: Your Code, Anywhere
          </h1>
          <p className="mt-6 text-gray-300 text-lg sm:text-xl lg:text-2xl leading-relaxed">
            Compile, run, and learn coding on the go! Available for both Android
            & iOS devices. Stay productive and creative wherever you are.
          </p>

          {/* --- CTA Buttons --- */}
          <div className="mt-8 flex flex-col sm:flex-row justify-center lg:justify-start gap-4">
            <Link
              href="/download/android"
              className="px-6 py-3 bg-blue-500 hover:bg-blue-600 rounded-lg text-white font-medium transition"
            >
              Download for Android
            </Link>
            <Link
              href="/download/ios"
              className="px-6 py-3 bg-gray-800 hover:bg-gray-700 rounded-lg text-white font-medium transition"
            >
              Download for iOS
            </Link>
          </div>

          {/* --- Features Badges --- */}
          <div className="mt-10 flex flex-wrap justify-center lg:justify-start gap-4 text-sm sm:text-base text-gray-400">
            <span className="bg-gray-800 px-4 py-2 rounded-full">
              Multi-language support
            </span>
            <span className="bg-gray-800 px-4 py-2 rounded-full">
              Real-time code execution
            </span>
            <span className="bg-gray-800 px-4 py-2 rounded-full">
              Offline mode
            </span>
            <span className="bg-gray-800 px-4 py-2 rounded-full">
              Dark & Light theme
            </span>
          </div>
        </motion.div>

        {/* --- Image / Screenshot --- */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="flex-1 relative w-full max-w-md sm:max-w-lg lg:max-w-xl mx-auto"
        >
          <div className="relative w-full h-80 sm:h-96 lg:h-128">
            <Image
              src={"/mobile.jpg"}
              alt="CodeSphere App"
              className="object-contain rounded-xl shadow-2xl"
              fill
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
