"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

const slides = [
  {
    title: "Code Anywhere, Anytime",
    description: "Run and compile your code on desktop, Android, or iOS.",
    image: "/mobile.jpg",
    bg: "bg-gradient-to-r from-gray-900 via-gray-950 to-black",
  },
  {
    title: "Multi-Language Support",
    description: "Python, JavaScript, C++, Java, Go, Rust, and more!",
    image: "/img-2.jpg",
    bg: "bg-gradient-to-r from-indigo-900 via-purple-950 to-black",
  },
  {
    title: "Learn & Improve",
    description: "Interactive tutorials and exercises for beginners and pros.",
    image: "/img-3.jpg",
    bg: "bg-gradient-to-r from-green-900 via-teal-950 to-black",
  },
];

export default function AnimatedHeroSlider() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative overflow-hidden w-full">
      <AnimatePresence mode="wait">
        {slides.map((slide, index) =>
          index === current ? (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.8 }}
              className={`${slide.bg} text-white min-h-[70vh] w-full flex flex-col-reverse lg:flex-row items-center py-20 gap-10 px-6 md:px-12`}
            >
              {/* Centered content container */}
              <div className="max-w-7xl w-full mx-auto flex flex-col-reverse lg:flex-row items-center gap-10 lg:gap-20">
                {/* Text */}
                <div className="flex-1 text-center lg:text-left">
                  <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-4">
                    {slide.title}
                  </h1>
                  <p className="text-gray-300 sm:text-lg lg:text-xl mb-6">
                    {slide.description}
                  </p>
                </div>

                {/* Image */}
                <div className="flex-1 relative w-full max-w-md sm:max-w-lg lg:max-w-xl mx-auto">
                  <div className="relative w-full h-80 sm:h-96 lg:h-128">
                    <Image
                      src={slide.image}
                      alt={slide.title}
                      className="object-contain rounded-xl shadow-2xl"
                      fill
                    />
                  </div>
                </div>
              </div>
            </motion.div>
          ) : null
        )}
      </AnimatePresence>

      {/* Slide indicators */}
      <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex gap-3">
        {slides.map((_, i) => (
          <button
            key={i}
            className={`w-3 h-3 rounded-full transition ${
              i === current ? "bg-blue-500" : "bg-gray-600"
            }`}
            onClick={() => setCurrent(i)}
          ></button>
        ))}
      </div>
    </section>
  );
}
