/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  Code2,
  Zap,
  Star,
  Rocket,
  Server,
  Globe,
  Shield,
  Crown,
} from "lucide-react";
import { useRouter } from "next/navigation";
import { useUser } from "@stackframe/stack";

export default function BecomeApro() {
  const user: any = useUser();
  const router = useRouter();

  const [showPopup, setShowPopup] = useState(false);

  // Show popup if NOT logged in
  useEffect(() => {
    if (!user) {
      setShowPopup(true);
    }
  }, [user]);

  // Redirect to subscriptions page when clicking button
  const handleSubscribeClick = () => {
    if (!user) {
      setShowPopup(true);
      return;
    }
    router.push("/subscriptions");
  };

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
              Login or sign up to unlock full premium access.
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
        Upgrade to Pro and access premium tools, advanced AI, global compiler
        support, unlimited cloud storage, and more.
      </motion.p>
      {/* ---------- SUBSCRIBE BUTTON ---------- */}
      <div className="flex space-x-2 my-6">
        <Link href={"/bkash-payment"}>
          {" "}
          <motion.button
            whileHover={{ scale: 1.05 }}
            className="my-3 px-10 py-3 bg-pink-700 hover:bg-pink-600 text-lg font-semibold rounded-xl transition shadow-lg shadow-blue-500/20 cursor-pointer"
          >
            Bkash
          </motion.button>
        </Link>
        <motion.button
          whileHover={{ scale: 1.05 }}
          onClick={handleSubscribeClick}
          className=" my-3 px-10 py-3 bg-blue-600 hover:bg-blue-700 text-lg font-semibold rounded-xl transition shadow-lg shadow-blue-500/20 cursor-pointer"
        >
          Card Payment
        </motion.button>
      </div>

      {/* ---------- FEATURE CARDS ---------- */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
        <Link href={"/smartcodeEdior"}>
          <FeatureCard
            icon={<Code2 className="w-10 h-10 text-blue-400" />}
            title="Smart Code Editor"
            desc="Auto-complete, error detection, and real-time hints."
          />
        </Link>

        <FeatureCard
          icon={<Zap className="w-10 h-10 text-yellow-400" />}
          title="AI Code Generation"
          desc="Generate code, fix bugs, and optimize like a pro."
        />

        <FeatureCard
          icon={<Star className="w-10 h-10 text-green-400" />}
          title="Cloud Sync"
          desc="Save projects securely and access from anywhere."
        />

        <FeatureCard
          icon={<Server className="w-10 h-10 text-purple-400" />}
          title="Unlimited Execution"
          desc="Run any code language with fast server execution."
        />

        <FeatureCard
          icon={<Globe className="w-10 h-10 text-orange-400" />}
          title="Global Compile Nodes"
          desc="Super low-latency compilers deployed worldwide."
        />

        <FeatureCard
          icon={<Shield className="w-10 h-10 text-red-400" />}
          title="Secure Cloud Storage"
          desc="Encrypted storage with version control."
        />

        <FeatureCard
          icon={<Rocket className="w-10 h-10 text-pink-400" />}
          title="Boosted Performance"
          desc="Faster builds, faster responses, faster everything."
        />

        <FeatureCard
          icon={<Crown className="w-10 h-10 text-yellow-300" />}
          title="Early Access Features"
          desc="Be first to try experimental features & updates."
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
