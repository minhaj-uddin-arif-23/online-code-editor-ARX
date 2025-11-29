/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unused-vars */
import {
  languages,
  sampleBuggyCode,
  sampleCode,
  samplePrompts,
} from "@/lib/examples";
import { HistoryItem } from "@/types";
import React, { useState } from "react";
interface CodeGenerationPage {
  addTohistory: (
    type: HistoryItem["type"],
    input: string,
    output: string
  ) => void;
}

export default function CodeGenreration({ addTohistory }: CodeGenerationPage) {
  const [description, setDescription] = useState<string>("");
  const [language, setLanguage] = useState<string>("");
  const [generate, setGenerated] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);
  // handle explaination api to frontend hit

  const handleGenerate = async () => {
    if (!description.trim()) return;
    setLoading(true);

    try {
      const response = await fetch("/api/generate", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ description, language }),
      });
      const data = await response.json();
      console.log(data);
      if (response.ok) {
        console.log(response.ok);
        const generateCode =
          data.data?.generateContent || "No Generated code suggestions";
        setGenerated(generateCode);
        addTohistory("generate", `${language}: ${description}`, generateCode);
      } else {
        setGenerated(`Error : ${data.error}`);
      }
    } catch (error) {
      console.log(error);
      setGenerated("Failed to fetch Debugging.Please try again");
    } finally {
      setLoading(false);
    }
  };
  const insertSampleCodePromt = (propmt: string) => {
    setDescription(propmt);
  };
  return (
    <div className="p-6 md:p-8 bg-[#0F172A] border border-white/10 rounded-xl space-y-6 w-full">
      {/* Header */}
      <div className="flex items-center justify-between">
        <h2 className="text-xl font-semibold text-white">Generate Code</h2>
      </div>

      {/* Language Select */}
      <div className="space-y-2">
        <label htmlFor="language" className="text-white/70 text-sm">
          Select Language
        </label>
        <select
          id="language"
          value={language}
          onChange={(e: any) => setLanguage(e.target.value)}
          className="w-full bg-[#1E293B] text-white/90 border border-white/10 rounded-lg px-4 py-2 
                 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none text-sm"
        >
          {languages.map((lang) => (
            <option key={lang} value={lang}>
              {lang}
            </option>
          ))}
        </select>
      </div>

      {/* Description Area */}
      <div className="space-y-2 relative">
        <label htmlFor="description" className="text-white/70 text-sm">
          Describe what you want to explain in code
        </label>

        <textarea
          id="description"
          rows={3}
          className="w-full p-4 bg-[#1E293B] text-white/90 rounded-lg border border-white/10
                 focus:border-blue-500 focus:ring-2 focus:ring-blue-500 outline-none font-mono text-sm 
                 resize-none shadow-inner"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        ></textarea>

        {/* Character Counter */}
        <div className="absolute bottom-3 right-4 text-xs text-white/40 font-mono">
          {description.length} chars
        </div>
      </div>

      {/* Sample Prompts */}
      <div className="flex flex-wrap gap-2">
        {samplePrompts?.map((prompt, index) => (
          <button
            key={index}
            onClick={() => insertSampleCodePromt(prompt)}
            className="px-3 py-1.5 bg-[#1E293B] border border-white/10 text-white/70 text-xs rounded-lg 
                   hover:bg-[#334155] hover:text-white transition"
          >
            {prompt}
          </button>
        ))}
      </div>

      {/* Generate Button */}
      <button
        onClick={handleGenerate}
        disabled={loading || !description.trim()}
        className="w-full flex items-center justify-center gap-2 
               bg-linear-to-r from-emerald-500 to-blue-500 
               rounded-xl py-3 font-medium disabled:opacity-50"
      >
        {loading ? (
          <div className="flex items-center gap-2 text-white">
            <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
            <span className="text-sm">Generating Code...</span>
          </div>
        ) : (
          <div className="flex items-center gap-2 text-white/90 hover:text-white transition">
            <span className="text-lg">⚡</span>
            <span className="text-sm">Generate Code</span>
          </div>
        )}
      </button>

      {/* Output Section */}
      <div className="mt-6">
        {generate && (
          <div className="space-y-4 p-5 bg-[#1E293B] border border-white/10 rounded-xl shadow-inner">
            {/* Output Header */}
            <div className="flex items-center justify-between">
              <h3 className="text-lg font-semibold text-white">
                Generated Code
              </h3>

              {/* Language Badge */}
              <span className="px-3 py-1 text-xs rounded-lg bg-[#334155] text-white/70 border border-white/10">
                {language}
              </span>
            </div>

            {/* Copy Button */}
            <div className="flex justify-end">
              <button
                onClick={() => navigator.clipboard.writeText(generate)}
                className="flex items-center gap-2 text-xs px-3 py-1.5 bg-[#0F172A] text-white/70 
                     border border-white/10 rounded-lg hover:bg-[#1E293B] hover:text-white transition"
              >
                📋 Copy
              </button>
            </div>

            {/* Code Box */}
            <pre
              className="w-full overflow-x-auto p-4 bg-[#0F172A] text-white/90 border border-white/10 
                      rounded-lg text-sm font-mono leading-relaxed whitespace-pre-wrap"
            >
              {generate}
            </pre>
          </div>
        )}
      </div>
    </div>
  );
}
