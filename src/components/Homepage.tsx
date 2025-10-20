import Link from "next/link";
import { Card, CardHeader, CardTitle } from "@/components/ui/card";
import { languages } from "@/utils/languages";

export default function HomePage() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-b from-gray-50 via-white to-gray-100 px-6 py-12">
      {/* Header */}
      <h1 className="text-4xl md:text-5xl font-extrabold mb-4 text-center text-gray-900">
        🌍 Welcome to <span className="text-blue-600">CodePlayground</span>
      </h1>

      <p className="text-gray-600 mb-10 text-center max-w-xl">
        Select a programming language and start coding instantly in your
        browser.
      </p>

      {/* Language Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
        {languages.map((lang) => (
          <Link key={lang.slug} href={`/editor/${lang.slug}`}>
            <Card className="cursor-pointer group border border-gray-200 bg-white rounded-2xl shadow-sm hover:shadow-lg hover:border-blue-500 transition-all duration-200 min-h-[80px] flex items-center  justify-center px-15">
              <CardHeader className="w-full">
                <CardTitle className="text-gray-800 font-semibold group-hover:text-blue-600 break-words  ">
                  {lang.name}
                </CardTitle>
              </CardHeader>
            </Card>
          </Link>
        ))}
      </div>

      {/* Footer */}
      <footer className="mt-16 text-gray-400 text-sm text-center">
        Built with ❤️ using{" "}
        <span className="text-blue-600 font-medium">Next.js</span> &{" "}
        <span className="text-blue-600 font-medium">Tailwind CSS</span>
      </footer>
    </main>
  );
}
