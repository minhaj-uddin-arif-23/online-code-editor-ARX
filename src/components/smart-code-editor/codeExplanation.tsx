/* eslint-disable @typescript-eslint/no-unused-vars */
import { sampleCode } from "@/lib/examples";
import { HistoryItem } from "@/types";
import React, { useState } from "react";
interface CodeExplanationPage {
  addTohistory: (
    type: HistoryItem["type"],
    input: string,
    output: string
  ) => void;
}

export default function CodeExplanation({ addTohistory }: CodeExplanationPage) {
  const [code, setCode] = useState<string>("");
  const [explain, setExplain] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);
  // handle explaination api to frontend hit

  const handleExplain = async () => {
    if (!code.trim()) return;
    setLoading(true);

    try {
      const response = await fetch("/api/explain", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ code }),
      });
      const data = await response.json();
      console.log("explain data ->", data);
      if (response.ok) {
        console.log(response.ok);
        const explanationText =
          data.data?.explanation || "No explanation generated";
        setExplain(explanationText);
        addTohistory("explain", code, explanationText);
      } else {
        setExplain(`Error : ${data.error}`);
      }
    } catch (error) {
      console.log(error);
      setExplain("Failed to fetch explanation.Please try again");
    } finally {
      setLoading(false);
    }
  };
  const insertSampleCode = () => {
    setCode(sampleCode);
  };
  return (
    <div className="p-6 bg-[#0F172A] border border-white/10 rounded-xl space-y-5">
      {/* Header */}
      <div className="flex items-center justify-between">
        <h2 className="text-lg font-semibold text-white">Explain Code</h2>

        <button
          onClick={insertSampleCode}
          className="text-sm px-4 py-2 rounded-md bg-blue-600/90 hover:bg-blue-500 active:scale-95 transition-all shadow-md"
        >
          Try Sample
        </button>
      </div>

      {/* Input Box */}
      <div className="space-y-2">
        <div className="relative">
          {/* Code editor box */}
          <textarea
            id="code"
            rows={12}
            className="w-full p-4 bg-[#1E293B] text-white/90 rounded-lg border border-white/10 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 outline-none font-mono text-sm resize-none shadow-inner"
            value={code}
            onChange={(e) => setCode(e.target.value)}
            placeholder="Paste your code here..."
          ></textarea>

          {/* Decorative bottom-right corner indicator */}
          <div className="absolute bottom-2 right-3 text-xs text-white/30 font-mono">
            {code.length} chars
          </div>
        </div>
      </div>
      <button
        onClick={handleExplain}
        disabled={loading || !code.trim()}
        className="w-full flex items-center justify-center gap-2 bg-linear-to-r from-emerald-500 to-blue-500 rounded-xl py-3 font-medium"
      >
        {loading ? (
          <div className="flex items-center gap-2 text-white">
            <div className="w-4 h-4 border-2 border-blue-400 border-t-transparent rounded-full animate-spin"></div>
            <span className="text-sm">Analyzing Code...</span>
          </div>
        ) : (
          <div className="flex items-center gap-2 text-white/80 hover:text-white transition-colors">
            <span className="text-lg">🔎</span>
            <span className="text-sm font-medium">Explain Code</span>
          </div>
        )}
      </button>
      <div>
        {explain && (
          <div className="mt-4 p-4 bg-[#1E293B] border border-white/10 rounded-xl text-white/80 text-sm leading-relaxed shadow-inner animate-in fade-in duration-300 max-h-[300px] overflow-y-auto">
            {explain}
          </div>
        )}
      </div>
    </div>
  );
}
