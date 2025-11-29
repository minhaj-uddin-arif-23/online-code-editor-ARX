import { HistoryItem } from "@/types";

interface HistoryItemProps {
  history: HistoryItem[];
}

const getTypeConfig = (type: HistoryItem["type"]) => {
  switch (type) {
    case "explain":
      return {
        color: "from-purple-500 to-pink-400",
        icon: "🔎",
        bg: "bg-purple-500/10",
      };
    case "debug":
      return {
        color: "from-red-500 to-yellow-400",
        icon: "🛠️",
        bg: "bg-red-500/10",
      };
    case "generate":
      return {
        color: "from-green-500 to-blue-400",
        icon: "✨",
        bg: "bg-green-500/10",
      };
    default:
      return {
        color: "from-gray-500 to-gray-400",
        icon: "📘",
        bg: "bg-gray-500/10",
      };
  }
};

export default function RecentActivity({ history }: HistoryItemProps) {
  const formatContent = (content: string, maxLength: number = 100): string => {
    if (content.length <= maxLength) return content;
    return content.substring(0, maxLength) + "...";
  };

  return (
    <div className="w-full bg-[#0F172A]/80 border border-white/10 rounded-xl p-6 h-fit">
      <h3 className="text-lg font-semibold mb-2">Recent Activity</h3>
      <p className="text-sm text-white/60 mb-6">Your recent AI interactions</p>

      <div>
        {history.length === 0 ? (
          <div className="flex flex-col items-center justify-center text-center gap-3 text-white/50">
            <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center">
              📘
            </div>
            <p className="text-sm">No activity yet</p>
            <p className="text-xs">Your interactions will appear here</p>
          </div>
        ) : (
          <div className="space-y-3">
            {history.map((item) => {
              const config = getTypeConfig(item.type);

              return (
                <div
                  key={item.id}
                  className={`p-3 rounded-lg flex items-center gap-3 ${config.bg}`}
                >
                  <span className="text-xl">{config.icon}</span>
                  <span className="text-sm text-white/80">
                    <span>{item.timestamp}</span>
                    <span>{item.type}</span>
                    <div>
                      <div>
                        <p className="text-xs font-medium text-gray-400 mb-1">
                          Input{" "}
                        </p>
                        <p>{formatContent(item.input, 60)}</p>
                      </div>
                      <div>
                        <p className="text-xs font-medium text-gray-400 mb-1">
                          Output{" "}
                        </p>
                        <p>{formatContent(item.output, 60)}</p>
                      </div>
                    </div>
                    {/* {formatContent(item.output)} */}
                  </span>
                </div>
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
}
