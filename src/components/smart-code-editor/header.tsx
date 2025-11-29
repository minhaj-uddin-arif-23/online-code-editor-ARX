"use client";
import React from "react";

export default function Header() {
  return (
    <header className="w-full bg-gray-900 text-white h-80 flex items-center">
      <div className="max-w-6xl mx-auto px-4 text-center">
        {/* Site Name */}
        <h1 className="text-4xl md:text-5xl font-bold mb-2">SmartCodeEditor</h1>

        {/* Description */}
        <p className="text-gray-300 text-base md:text-lg max-w-2xl mx-auto">
          Your AI-powered coding companion to write, run and debug code easily.
        </p>
      </div>
    </header>
  );
}
