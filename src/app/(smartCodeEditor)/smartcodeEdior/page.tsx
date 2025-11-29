import Navbar from "@/components/shared/Navbar";
import FeatureCard from "@/components/smart-code-editor/featureCard";
import FeatureGrid from "@/components/smart-code-editor/featureGrid";
import Header from "@/components/smart-code-editor/header";
import RecentActivity from "@/components/smart-code-editor/historyPanel";
import React from "react";

export default function SmartCodeEditor() {
  return (
    <div>
      <div>
        <Navbar />
      </div>
      <div className="pt-16">
        <div>{/* <Header /> */}</div>
      </div>

      <div className="min-h-screen bg-linear-to-br from-[#0B0F19] to-[#020617] p-6 text-white">
        <div
          className="
        max-w-7xl mx-auto
        flex flex-col lg:flex-row
        gap-6
      "
        >
          {/* Left */}
          <div className="flex-1">
            <FeatureCard />
          </div>

          {/* Right */}
          {/* <div className="w-full lg:w-[350px]">
            <RecentActivity />
          </div>  */}
        </div>
      </div>
      <div>
        <FeatureGrid />
      </div>
    </div>
  );
}
