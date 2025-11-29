"use client";

import React, { useState } from "react";

export default function ContactRequest() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
    date: "",
    time: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // You can integrate API later
    console.log("Submitted data:", form);
    alert("Your Google Meet request has been sent!");
  };

  return (
    <main className="min-h-screen bg-gradient-to-tr from-blue-500 to-purple-500 px-5 py-16">
      <div className="max-w-2xl mx-auto bg-white p-10 rounded-2xl shadow-2xl">
        <h1 className="text-3xl font-bold text-center text-purple-600">
          Request a Google Meet
        </h1>
        <p className="mt-2 text-center text-gray-600">
          Fill out the form and we’ll schedule a meeting with you.
        </p>

        <form onSubmit={handleSubmit} className="mt-8 space-y-5">
          {/* Name */}
          <div>
            <label className="block font-medium text-gray-800">Your Name</label>
            <input
              type="text"
              name="name"
              required
              value={form.name}
              onChange={handleChange}
              className="w-full p-3 border border-gray-300 rounded-md focus:ring-purple-500 focus:border-purple-500"
              placeholder="Enter your full name"
            />
          </div>

          {/* Email */}
          <div>
            <label className="block font-medium text-gray-800">Email</label>
            <input
              type="email"
              name="email"
              required
              value={form.email}
              onChange={handleChange}
              className="w-full p-3 border border-gray-300 rounded-md focus:ring-purple-500 focus:border-purple-500"
              placeholder="Enter your email address"
            />
          </div>

          {/* Date */}
          <div>
            <label className="block font-medium text-gray-800">
              Preferred Meeting Date
            </label>
            <input
              type="date"
              name="date"
              required
              value={form.date}
              onChange={handleChange}
              className="w-full p-3 border border-gray-300 rounded-md focus:ring-purple-500 focus:border-purple-500"
            />
          </div>

          {/* Time */}
          <div>
            <label className="block font-medium text-gray-800">
              Preferred Meeting Time
            </label>
            <input
              type="time"
              name="time"
              required
              value={form.time}
              onChange={handleChange}
              className="w-full p-3 border border-gray-300 rounded-md focus:ring-purple-500 focus:border-purple-500"
            />
          </div>

          {/* Message */}
          <div>
            <label className="block font-medium text-gray-800">
              Your Message
            </label>
            <textarea
              name="message"
              value={form.message}
              onChange={handleChange}
              className="w-full p-3 border border-gray-300 rounded-md h-24 resize-none focus:ring-purple-500 focus:border-purple-500"
              placeholder="Tell us what you need help with..."
            ></textarea>
          </div>

          <button
            type="submit"
            className="w-full bg-purple-600 hover:bg-purple-700 text-white p-4 rounded-xl font-semibold transition"
          >
            Request Google Meet
          </button>
        </form>
      </div>
    </main>
  );
}
