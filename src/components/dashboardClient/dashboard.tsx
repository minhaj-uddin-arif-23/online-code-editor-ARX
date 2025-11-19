import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/authOptions";
import Link from "next/link";

export default async function DashboardClientPage() {
  const session = await getServerSession(authOptions);

  if (!session) {
    return (
      <div className="text-center mt-20">
        <p className="mb-4 text-lg">You’re not logged in.</p>
        <Link
          href="/auth/login"
          className="text-blue-600 underline hover:text-blue-800"
        >
          Go to Login
        </Link>
      </div>
    );
  }

  return (
    <div className="text-center mt-20">
      <h1 className="text-2xl font-semibold mb-4">
        Welcome, {session.user?.name}
      </h1>
      <p className="text-gray-600">Email: {session.user?.email}</p>
    </div>
  );
}
