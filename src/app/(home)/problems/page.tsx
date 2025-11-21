import Link from "next/link";

const languages = [
  { name: "javascript", color: "bg-yellow-400 hover:bg-yellow-300" },
  { name: "python", color: "bg-blue-500 hover:bg-blue-400" },
  { name: "cpp", color: "bg-indigo-500 hover:bg-indigo-400" },
  { name: "java", color: "bg-red-500 hover:bg-red-400" },
  { name: "c", color: "bg-green-500 hover:bg-green-400" },
];

export default function ProblemsHome() {
  return (
    <div className="max-w-4xl mx-auto p-6">
      <h1 className="text-4xl font-extrabold text-gray-900 text-center">
        Choose a Programming Language
      </h1>

      <ul className="mt-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {languages.map((lang) => (
          <li key={lang.name}>
            <Link
              href={`/problems/${lang.name}`}
              className={`block p-6 rounded-lg text-center text-white font-semibold text-xl shadow-md transition-transform transform hover:-translate-y-1 hover:shadow-xl ${lang.color}`}
            >
              {lang.name.toUpperCase()}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
