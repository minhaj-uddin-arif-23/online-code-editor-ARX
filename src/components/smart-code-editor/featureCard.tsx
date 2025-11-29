"use client";
import { useState } from "react";
import { Sparkles } from "lucide-react";
import { tabs } from "@/lib/tabs";
import { HistoryItem, Tabs } from "@/types";
import CodeExplanation from "./codeExplanation";
import CodeDebugging from "./codeDebugging";
import CodeGenreration from "./codeGenreration";
import RecentActivity from "./historyPanel";

export default function FeatureCard() {
  const [activeTab, setActiveTab] = useState<Tabs["id"]>("explain");
  const [history, setHistory] = useState<HistoryItem[]>([]);

  const addTohistory = (
    type: HistoryItem["type"],
    input: string,
    output: string
  ) => {
    setHistory((prev) => [
      {
        id: Date.now(),
        type,
        timestamp: new Date().toLocaleString(),
        input,
        output,
      },
      ...prev.slice(0, 9),
    ]);
  };

  return (
    <div className="w-full bg-[#0F172A]/80 border border-white/10 rounded-xl p-6">
      {/* MAIN FLEX CONTAINER */}
      <div className="flex flex-col lg:flex-row gap-6">
        {/* LEFT SIDE */}
        <div className="flex-1">
          {/* Tabs */}
          <div className="flex flex-wrap gap-3 mb-6">
            {tabs.map((tab) => {
              const Icon = tab.icon;
              const active = activeTab === tab.id;

              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`flex items-center gap-2 px-4 py-2 rounded-lg border text-sm transition
                    ${
                      active
                        ? "bg-emerald-500/20 border-emerald-400 text-emerald-300"
                        : "bg-white/5 border-white/10 text-white/70 hover:bg-white/10"
                    }
                  `}
                >
                  {Icon}
                  {tab.label}
                </button>
              );
            })}
          </div>

          {/* Tab Content */}
          <div className="bg-white/5 rounded-xl p-4 mb-4">
            {activeTab === "explain" && (
              <CodeExplanation addTohistory={addTohistory} />
            )}
            {activeTab === "debug" && (
              <CodeDebugging addTohistory={addTohistory} />
            )}
            {activeTab === "generate" && (
              <CodeGenreration addTohistory={addTohistory} />
            )}
          </div>

          {/* Action Button */}
        </div>

        {/* RIGHT SIDE */}
        <div className="w-full lg:w-[340px]">
          <RecentActivity history={history} />
        </div>
      </div>
    </div>
  );
}
