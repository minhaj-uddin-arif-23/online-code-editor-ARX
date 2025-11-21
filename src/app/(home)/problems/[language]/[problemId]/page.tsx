import { JUDGE0_LANGUAGE_IDS } from "@/lib/judge0";
// import EditorPage from "@/components/editore/editorPage";
import { problemSet } from "@/lib/problmSet";

export default function ProblemPage({ params }: any) {
  const { language, problemId } = params;

  const langProblems = problemSet[language];
  if (!langProblems) return <div>Language not found</div>;

  const problem = langProblems.find((p) => p.slug === problemId);
  if (!problem) return <div>Problem not found</div>;

  const languageId = JUDGE0_LANGUAGE_IDS[language];

  return (
    <div className="p-5">
      <h1 className="text-3xl font-bold">{problem.title}</h1>
      <p className="mt-2 text-gray-600">{problem.description}</p>

      {/* <EditorPage
      starterCode={problem.starterCode}
      testCases={problem.testCases}
      languages={language}
      judge0Id={languageId}
      problemId={problem.id}
      problemTitle={problem.title}
      /> */}
    </div>
  );
}
