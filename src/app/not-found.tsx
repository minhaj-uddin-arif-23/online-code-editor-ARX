import Link from "next/link";

export default function NotFound() {
  return (
    <div className="h-screen flex flex-col items-center justify-center bg-white text-center px-6">
      {/* Animated 404 */}
      <h1 className="text-8xl font-extrabold text-red-600 animate-bounce">
        404
      </h1>

      <p className="text-xl text-red-500 mt-4 font-semibold">Page Not Found</p>

      <p className="text-gray-500 mt-2">
        The page you are looking for is not available.
      </p>

      <Link
        href="/"
        className="mt-6 px-6 py-3 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-all"
      >
        Go Home
      </Link>
    </div>
  );
}
