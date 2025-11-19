import { NextResponse } from "next/server";
import axios from "axios";

const JUDGE0_URL =
  "https://judge0-ce.p.rapidapi.com/submissions?base64_encoded=false&wait=true";

const languageMap: Record<string, number> = {
  c: 50,
  cpp: 54,
  python: 71,
  java: 62,
  javascript: 63,
  go: 60,
  php: 68,
  ruby: 72,
  r: 80,
  typescript: 74,
  csharp: 51,
  rust: 73,
  kotlin: 78,
  swift: 83,
  perl: 79,
  assembly: 45,
  elixir: 87,
  sql: 86,
  dart: 85,
  lua: 82,
  scala: 81,
  objective_c: 84,
  haskell: 61,
  bash: 46,
};

export async function POST(req: Request) {
  try {
    const { language, code } = await req.json();

    if (!language || !code) {
      return NextResponse.json(
        { error: "Missing parameters" },
        { status: 400 }
      );
    }

    const language_id = languageMap[language];
    if (!language_id) {
      return NextResponse.json(
        { error: "Language not supported" },
        { status: 400 }
      );
    }

    const response = await axios.post(
      JUDGE0_URL,
      { language_id, source_code: code },
      {
        headers: {
          "X-RapidAPI-Key": process.env.RAPIDAPI_KEY || "",
          "X-RapidAPI-Host": "judge0-ce.p.rapidapi.com",
          "Content-Type": "application/json",
        },
      }
    );

    const output = response.data.stdout || response.data.stderr || "No output";
    return NextResponse.json({ output });
  } catch (error: any) {
    console.error(error.response?.data || error.message);
    return NextResponse.json(
      { output: "Execution error: " + (error.message || "Unknown") },
      { status: 500 }
    );
  }
}
