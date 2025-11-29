import { features } from "@/lib/features";
import React from "react";

export default function FeatureGrid() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid gap-8 md:grid-cols-3 sm:grid-cols-2">
          {features?.map((feature, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-lg p-6 flex flex-col items-center text-center hover:shadow-xl transition-shadow duration-300"
            >
              {/* Animated Icon */}
              <div className="text-2xl mb-4 text-indigo-600 animate-bounce">
                {feature.icon}
              </div>

              {/* Title */}
              <h3 className="text-xl font-semibold mb-2 text-gray-900">
                {feature.title}
              </h3>

              {/* Description */}
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
