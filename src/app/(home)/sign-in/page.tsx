"use client";

import { SignIn, useUser } from "@stackframe/stack";

export default function SignInPage() {
  const user: any = useUser();

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white shadow-lg rounded-xl p-8 w-full max-w-md">
        <h1 className="text-2xl font-bold text-gray-800 mb-6 text-center">
          Welcome Back CompileX
        </h1>
        <p className="text-sm text-gray-500 mb-8 text-center">
          Sign in to your account to continue
        </p>
        <SignIn />
      </div>
    </div>
  );
}
