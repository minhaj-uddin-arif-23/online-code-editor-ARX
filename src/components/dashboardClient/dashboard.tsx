"use client";

import { useUser } from "@stackframe/stack";
import Link from "next/link";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Sparkles, Rocket, Star } from "lucide-react";

export default function DashboardPage() {
  const user = useUser();
  const [showPopup, setShowPopup] = useState(false);

  useEffect(() => {
    if (!user) setShowPopup(true);
  }, [user]);

  return (
    <div className="min-h-screen bg-gray-900 text-white flex flex-col items-center px-6 py-12">
      {/* Become a Pro Popup */}
      {showPopup && (
        <div className="fixed inset-0 bg-black/60 backdrop-blur-sm flex justify-center items-center z-50">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.3 }}
            className="bg-gray-800 p-8 rounded-2xl shadow-xl text-center max-w-md"
          >
            <h2 className="text-2xl font-bold mb-4 text-blue-400">
              Unlock Pro Features
            </h2>
            <p className="text-gray-300 mb-6">
              Log in or sign up to access your personalized dashboard and
              advanced features.
            </p>
            <div className="flex justify-center gap-4">
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
            <Link href={"/"}>
              {" "}
              <button
                onClick={() => setShowPopup(false)}
                className="mt-4 text-gray-400 hover:text-white"
              >
                Close
              </button>
            </Link>
          </motion.div>
        </div>
      )}

      {/* Dashboard Content */}
      {user && (
        <div className="text-center max-w-4xl w-full">
          {/* User Info */}
          <div className="flex flex-col items-center gap-2 mb-10">
            <img
              // src={user.image ?? "/default-user.png"}
              // alt={user.name}
              className="w-24 h-24 rounded-full border-4 border-blue-400 shadow-lg"
            />
            {/* <h1 className="text-3xl font-bold neon-text">{user.name}</h1>
            <p className="text-gray-300">{user.email}</p> */}
          </div>

          {/* Dashboard Stats */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="bg-gray-800 p-6 rounded-2xl shadow-lg hover:shadow-blue-500/30 transition"
            >
              <div className="flex flex-col items-center text-center gap-3">
                <Sparkles className="w-10 h-10 text-blue-400" />
                <h3 className="text-lg font-semibold neon-text">Projects</h3>
                <p className="text-gray-400 text-sm">
                  Manage all your coding projects in one place with live
                  updates.
                </p>
              </div>
            </motion.div>

            <motion.div
              whileHover={{ scale: 1.05 }}
              className="bg-gray-800 p-6 rounded-2xl shadow-lg hover:shadow-pink-500/30 transition"
            >
              <div className="flex flex-col items-center text-center gap-3">
                <Rocket className="w-10 h-10 text-pink-400" />
                <h3 className="text-lg font-semibold neon-text">Performance</h3>
                <p className="text-gray-400 text-sm">
                  Track your code execution speed and optimize your workflow.
                </p>
              </div>
            </motion.div>

            <motion.div
              whileHover={{ scale: 1.05 }}
              className="bg-gray-800 p-6 rounded-2xl shadow-lg hover:shadow-yellow-500/30 transition"
            >
              <div className="flex flex-col items-center text-center gap-3">
                <Star className="w-10 h-10 text-yellow-400" />
                <h3 className="text-lg font-semibold neon-text">
                  Cloud Backup
                </h3>
                <p className="text-gray-400 text-sm">
                  Keep your projects safe and accessible from anywhere at any
                  time.
                </p>
              </div>
            </motion.div>
          </div>

          {/* Quick Actions */}
          <div className="flex flex-wrap justify-center gap-6 mb-12">
            <Link
              href="/projects/new"
              className="px-6 py-3 bg-blue-600 rounded-xl hover:bg-blue-700 transition text-white font-semibold"
            >
              + New Project
            </Link>
            <Link
              href="/settings"
              className="px-6 py-3 bg-gray-700 rounded-xl hover:bg-gray-600 transition text-white font-semibold"
            >
              Settings
            </Link>
            <Link
              href="/analytics"
              className="px-6 py-3 bg-green-600 rounded-xl hover:bg-green-700 transition text-white font-semibold"
            >
              Analytics
            </Link>
            <Link
              href="/"
              className="px-6 py-3 bg-green-600 rounded-xl hover:bg-amber-700 transition text-white font-semibold"
            >
              Go to home
            </Link>
          </div>

          {/* Recent Activity */}
          <div className="text-left">
            <h2 className="text-2xl font-bold mb-4 neon-text">
              Recent Activity
            </h2>
            <ul className="space-y-3">
              <li className="bg-gray-800 p-4 rounded-xl shadow-sm hover:shadow-blue-500/20 transition">
                Created a new project:{" "}
                <span className="font-semibold">Portfolio Website</span>
              </li>
              <li className="bg-gray-800 p-4 rounded-xl shadow-sm hover:shadow-pink-500/20 transition">
                Updated project:{" "}
                <span className="font-semibold">E-commerce App</span>
              </li>
              <li className="bg-gray-800 p-4 rounded-xl shadow-sm hover:shadow-yellow-500/20 transition">
                Synced cloud backup for:{" "}
                <span className="font-semibold">Chatbot Project</span>
              </li>
            </ul>
          </div>
        </div>
      )}

      <style jsx>{`
        .neon-text {
          color: #00ffff;
          text-shadow: 0 0 5px #00ffff, 0 0 10px #00ffff, 0 0 20px #00ffff,
            0 0 40px #00ffff;
        }
      `}</style>
    </div>
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
      className="bg-gray-800 p-6 rounded-2xl shadow-lg hover:shadow-blue-500/30 transition"
    >
      <div className="flex flex-col items-center text-center gap-3">
        {icon}
        <h3 className="text-lg font-semibold neon-text">{title}</h3>
        <p className="text-gray-400 text-sm">{desc}</p>
      </div>
    </motion.div>
  );
}
