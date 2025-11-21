"use client";
import Navbar from "@/components/shared/Navbar";
import { StackHandler, useUser } from "@stackframe/stack";

export default function Handler() {
  const user: any = useUser();

  return (
    <div className="min-h-screen flex flex-col">
      {/* Navbar at the top */}
      <Navbar
        user={
          user || {
            name: "Guest",
            email: "guest@example.com",
            image: "/default-avatar.png",
          }
        }
      />

      {/* StackHandler fills the rest of the page */}
      <div className="grow">
        <StackHandler fullPage />
      </div>
    </div>
  );
}
