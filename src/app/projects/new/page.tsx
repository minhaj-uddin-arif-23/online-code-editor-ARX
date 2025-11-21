"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";

export default function NewProjectPage() {
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: any) => {
    e.preventDefault();
    setLoading(true);

    setTimeout(() => {
      alert("Project Created Successfully!");
      setLoading(false);
    }, 1200);
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white px-6 py-10 flex justify-center">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
        className="w-full max-w-2xl bg-gray-800 p-8 rounded-2xl shadow-xl border border-gray-700"
      >
        {/* Page Header */}
        <h1 className="text-3xl font-bold mb-2">Create New Project</h1>
        <p className="text-gray-400 mb-8">
          Start a new journey by creating a project. Add a title, description,
          and set the category.
        </p>

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Project Title */}
          <div>
            <label className="text-gray-300 mb-2 block">Project Title</label>
            <input
              type="text"
              required
              placeholder="e.g., portfolio website"
              className="w-full bg-gray-700 border border-gray-600 rounded-lg px-4 py-3 focus:border-blue-500 outline-none"
            />
          </div>

          {/* Description */}
          <div>
            <label className="text-gray-300 mb-2 block">Description</label>
            <textarea
              required
              rows={4}
              placeholder="Write something about your project..."
              className="w-full bg-gray-700 border border-gray-600 rounded-lg px-4 py-3 focus:border-blue-500 outline-none"
            ></textarea>
          </div>

          {/* Category */}
          <div>
            <label className="text-gray-300 mb-2 block">Category</label>
            <select
              required
              className="w-full bg-gray-700 border border-gray-600 rounded-lg px-4 py-3 focus:border-blue-500 outline-none"
            >
              <option value="">Select Category</option>
              <option value="web">Web Development</option>
              <option value="mobile">Mobile App</option>
              <option value="ml">Machine Learning</option>
              <option value="other">Other</option>
            </select>
          </div>

          {/* Buttons */}
          <div className="flex justify-between items-center pt-4">
            <Link
              href="/dashboard"
              className="text-gray-400 hover:text-white transition"
            >
              ← Back to Dashboard
            </Link>

            <button
              type="submit"
              disabled={loading}
              className="px-6 py-3 bg-blue-600 rounded-xl hover:bg-blue-700 transition font-semibold shadow-lg disabled:opacity-50"
            >
              {loading ? "Creating..." : "Create Project"}
            </button>
          </div>
        </form>
      </motion.div>
    </div>
  );
}
