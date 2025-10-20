import Homepage from "@/components/Homepage";
import Navbar from "@/components/shared/Navbar";
import React from "react";

export default function Home() {
  return (
    <div>
      <Navbar />
      <div>
        <Homepage />
      </div>
    </div>
  );
}
