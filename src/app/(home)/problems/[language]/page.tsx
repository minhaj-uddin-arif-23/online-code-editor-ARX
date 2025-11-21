import { problemSet } from "@/lib/problmSet";
import Link from "next/link";

export default function LanguageProblems({ params }: any) {
  const { language } = params;

  const problems = problemSet[language];
  if (!problems) return <div>Language not found.</div>;

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold">
        Problems for {language.toUpperCase()}
      </h1>

      <ul className="mt-4 space-y-3">
        {problems.map((p) => (
          <li key={p.id}>
            <Link
              href={`/problems/${language}/${p.slug}`}
              className="text-blue-600 hover:underline"
            >
              {p.title} — <span className="text-gray-500">{p.difficulty}</span>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
