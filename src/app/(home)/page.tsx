// import Chat from "@/components/chat/chat";
import Chat from "@/components/chat/chat";
import Homepage from "@/components/Homepage";
import MobileApps from "@/components/shared/avilable";
import FeaturesSection from "@/components/shared/feature_section";
import FeatureContent from "@/components/shared/featureContent";
import Footer from "@/components/shared/footer";
// import Navbar from "@/components/shared/Navbar";
import React from "react";

export default function Home() {
  return (
    <div>
      <div>
        <Homepage />
        <FeaturesSection />
        <FeatureContent />
        <MobileApps />
        <Footer />
        <Chat />
      </div>
    </div>
  );
}
