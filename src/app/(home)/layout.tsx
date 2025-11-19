import Navbar from "@/components/shared/Navbar";
import React from "react";

export default function HomeLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div>
      <Navbar />
      <div className="pt-16">{children}</div>
    </div>
  );
}
