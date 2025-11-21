"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { Code2, Zap, Star, Rocket } from "lucide-react";
import { useUser } from "@stackframe/stack";

export default function BecomeApro() {
  const user: any = useUser(); // get logged-in user
  const [showPopup, setShowPopup] = useState(false);

  // show popup automatically if user is NOT logged in
  useEffect(() => {
    if (!user) {
      setShowPopup(true);
    }
  }, [user]);

  return (
    <section className="relative flex flex-col items-center justify-center min-h-screen bg-linear-to-b from-gray-900 to-gray-800 text-white px-6">
      {/* ---------- POPUP MODAL ---------- */}
      {showPopup && !user && (
        <div className="absolute inset-0 bg-black/50 backdrop-blur-sm flex justify-center items-center z-50">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.3 }}
            className="bg-gray-800 p-8 rounded-2xl shadow-xl text-center max-w-lg"
          >
            <h2 className="text-2xl font-semibold mb-4">
              Ready to <span className="text-blue-400">Become a Pro</span>?
            </h2>

            <p className="text-gray-400 mb-6">
              Log in or sign up to unlock your personalized code editor
              experience.
            </p>

            <div className="flex justify-center gap-4 mb-4">
              <Link
                href="/sign-in"
                className="px-6 py-2 bg-blue-600 rounded-md hover:bg-blue-700 transition"
              >
                Login
              </Link>

              <Link
                href="/sign-up"
                className="px-6 py-2 bg-green-600 rounded-md hover:bg-green-700 transition"
              >
                Sign Up
              </Link>
            </div>

            <button
              onClick={() => setShowPopup(false)}
              className="text-gray-400 hover:text-white text-sm mt-2"
            >
              Close
            </button>
          </motion.div>
        </div>
      )}
      {/* ---------- POPUP MODAL ---------- */}

      {/* Rest of your page content */}
      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-4xl md:text-5xl font-bold mb-4 text-center"
      >
        Unlock <span className="text-blue-400">Pro Features</span>
      </motion.h1>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2 }}
        className="text-gray-300 mb-10 text-center max-w-xl"
      >
        Take your coding experience to the next level with advanced tools, AI
        suggestions, cloud sync, and real-time collaboration.
      </motion.p>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
        <FeatureCard
          icon={<Code2 className="w-10 h-10 text-blue-400" />}
          title="Smart Code Editor"
          desc="Auto-completion, syntax highlighting, and instant debugging."
        />
        <FeatureCard
          icon={<Zap className="w-10 h-10 text-yellow-400" />}
          title="AI Assistance"
          desc="Get intelligent code suggestions powered by AI."
        />
        <FeatureCard
          icon={<Star className="w-10 h-10 text-green-400" />}
          title="Cloud Sync"
          desc="Access your projects anywhere with secure cloud backup."
        />
        <FeatureCard
          icon={<Rocket className="w-10 h-10 text-pink-400" />}
          title="Pro Performance"
          desc="Lightning-fast execution and optimized rendering."
        />
      </div>
    </section>
  );
}

type FeatureCardProps = {
  icon: React.ReactNode;
  title: string;
  desc: string;
};

function FeatureCard({ icon, title, desc }: FeatureCardProps) {
  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      className="bg-gray-800 p-6 rounded-2xl shadow-lg hover:shadow-blue-500/20 transition"
    >
      <div className="flex flex-col items-center text-center">
        <div className="mb-3">{icon}</div>
        <h3 className="text-lg font-semibold mb-2">{title}</h3>
        <p className="text-gray-400 text-sm">{desc}</p>
      </div>
    </motion.div>
  );
}
