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
        <div className="max-w-5xl w-full">
          {/* Header */}
          <div className="flex flex-col items-center mb-14">
            <h1 className="text-4xl font-bold tracking-tight">
              Welcome to <span className="text-blue-400">Your Dashboard</span>
            </h1>
            <p className="text-gray-400 mt-2 text-center max-w-lg">
              Manage your projects, view insights, track performance and more —
              all in one place.
            </p>
          </div>

          {/* Stats Section */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
            <motion.div
              whileHover={{ scale: 1.04 }}
              className="bg-gray-800 p-6 rounded-2xl shadow-lg border border-gray-700 hover:border-blue-500 transition"
            >
              <div className="flex items-center gap-4">
                <div className="p-4 rounded-xl bg-blue-500/20 border border-blue-400/40">
                  <Sparkles className="text-blue-400 w-7 h-7" />
                </div>
                <div>
                  <p className="text-gray-400 text-sm">Total Projects</p>
                  <h3 className="text-2xl font-bold">12</h3>
                </div>
              </div>
            </motion.div>

            <motion.div
              whileHover={{ scale: 1.04 }}
              className="bg-gray-800 p-6 rounded-2xl shadow-lg border border-gray-700 hover:border-pink-500 transition"
            >
              <div className="flex items-center gap-4">
                <div className="p-4 rounded-xl bg-pink-500/20 border border-pink-400/40">
                  <Rocket className="text-pink-400 w-7 h-7" />
                </div>
                <div>
                  <p className="text-gray-400 text-sm">Performance Score</p>
                  <h3 className="text-2xl font-bold">87%</h3>
                </div>
              </div>
            </motion.div>

            <motion.div
              whileHover={{ scale: 1.04 }}
              className="bg-gray-800 p-6 rounded-2xl shadow-lg border border-gray-700 hover:border-yellow-500 transition"
            >
              <div className="flex items-center gap-4">
                <div className="p-4 rounded-xl bg-yellow-500/20 border border-yellow-400/40">
                  <Star className="text-yellow-400 w-7 h-7" />
                </div>
                <div>
                  <p className="text-gray-400 text-sm">Cloud Backups</p>
                  <h3 className="text-2xl font-bold">5</h3>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Quick Actions */}
          <div className="flex flex-wrap justify-center gap-4 mb-16">
            <Link
              href="/projects/new"
              className="px-6 py-3 bg-blue-600 rounded-xl hover:bg-blue-700 transition text-white font-semibold shadow-lg"
            >
              + New Project
            </Link>
            <Link
              href="/settings"
              className="px-6 py-3 bg-gray-700 rounded-xl hover:bg-gray-600 transition text-white font-semibold shadow-lg"
            >
              Settings
            </Link>
            <Link
              href="/analytics"
              className="px-6 py-3 bg-green-600 rounded-xl hover:bg-green-700 transition text-white font-semibold shadow-lg"
            >
              Analytics
            </Link>
            <Link
              href="/"
              className="px-6 py-3 bg-amber-600 rounded-xl hover:bg-amber-700 transition text-white font-semibold shadow-lg"
            >
              Go Home
            </Link>
          </div>

          {/* Recent Activity */}
          <div>
            <h2 className="text-2xl font-bold mb-4">Recent Activity</h2>
            <div className="space-y-3">
              <div className="bg-gray-800 p-4 rounded-xl border border-gray-700 hover:border-blue-500 transition">
                <span className="text-blue-400 font-semibold">
                  Portfolio Website
                </span>{" "}
                — created 2 days ago
              </div>

              <div className="bg-gray-800 p-4 rounded-xl border border-gray-700 hover:border-pink-500 transition">
                <span className="text-pink-400 font-semibold">
                  E-commerce App
                </span>{" "}
                — updated yesterday
              </div>

              <div className="bg-gray-800 p-4 rounded-xl border border-gray-700 hover:border-yellow-500 transition">
                <span className="text-yellow-400 font-semibold">
                  Chatbot Project
                </span>{" "}
                — backup synced today
              </div>
            </div>
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
