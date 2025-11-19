"use client";

import { motion } from "framer-motion";
import { FaLaptopCode, FaMobileAlt, FaRocket, FaCloud } from "react-icons/fa";

export default function FeaturesSection() {
  const features = [
    {
      icon: <FaLaptopCode size={28} className="text-blue-500" />,
      title: "Multi-Language Support",
      description:
        "Write and run code in Python, JavaScript, C++, Java, Go, TypeScript, and more — all in one place.",
    },
    {
      icon: <FaMobileAlt size={28} className="text-green-500" />,
      title: "Mobile Friendly",
      description:
        "Our editor works seamlessly on Android & iOS devices — code anywhere, anytime.",
    },
    {
      icon: <FaRocket size={28} className="text-purple-500" />,
      title: "Fast & Efficient",
      description:
        "Instant compilation and execution, optimized for speed and reliability.",
    },
    {
      icon: <FaCloud size={28} className="text-yellow-500" />,
      title: "Cloud Sync",
      description:
        "Save your projects online and access them from any device, no setup required.",
    },
  ];

  return (
    <section className="bg-gray-900 text-white py-20 px-6 md:px-12">
      <div className="max-w-7xl mx-auto text-center">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl sm:text-5xl font-bold mb-6"
        >
          Why CompileX?
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-gray-400 text-lg sm:text-xl mb-16"
        >
          CodeSphere provides a complete coding environment for beginners and
          professionals alike. Learn, experiment, and deploy — all from your
          browser.
        </motion.p>

        {/* Features Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="bg-gray-800 p-6 rounded-2xl shadow-lg hover:shadow-2xl transition cursor-default"
            >
              <div className="mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-gray-400 text-sm">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
