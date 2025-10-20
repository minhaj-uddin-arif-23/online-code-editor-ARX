"use client";

import { useState, useEffect, useRef } from "react";
import { useParams } from "next/navigation";
import Editor, { OnMount } from "@monaco-editor/react";
import type { editor } from "monaco-editor";
import axios from "axios";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Play,
  Download,
  Copy,
  Terminal,
  AlertCircle,
  CheckCircle2,
  FileCode,
  Maximize2,
  Minimize2,
  LayoutGrid,
  ZoomIn,
  ZoomOut,
  Palette,
} from "lucide-react";
import Link from "next/link";

const defaultTemplates: Record<string, string> = {
  python: `# Python Code Editor
def greet(name):
    """Greet a person by name"""
    return f"Hello, {name}!"

# Main execution
if __name__ == "__main__":
    message = greet("World")
    print(message)
    
    # Example: List comprehension
    numbers = [x**2 for x in range(1, 6)]
    print("Squares:", numbers)`,

  cpp: `#include <iostream>
#include <vector>
#include <string>
using namespace std;

// Function to greet
string greet(string name) {
    return "Hello, " + name + "!";
}

int main() {
    cout << greet("World") << endl;
    
    // Example: Vector usage
    vector<int> numbers = {1, 2, 3, 4, 5};
    cout << "Numbers: ";
    for(int num : numbers) {
        cout << num << " ";
    }
    cout << endl;
    
    return 0;
}`,

  javascript: `// JavaScript Code Editor
function greet(name) {
    return \`Hello, \${name}!\`;
}

// Main execution
console.log(greet("World"));

// Example: Array operations
const numbers = [1, 2, 3, 4, 5];
const squares = numbers.map(x => x ** 2);
console.log("Squares:", squares);

// Example: Async operation
setTimeout(() => {
    console.log("Async operation completed!");
}, 1000);`,

  java: `public class Main {
    // Method to greet
    public static String greet(String name) {
        return "Hello, " + name + "!";
    }
    
    public static void main(String[] args) {
        System.out.println(greet("World"));
        
        // Example: Array operations
        int[] numbers = {1, 2, 3, 4, 5};
        System.out.print("Numbers: ");
        for (int num : numbers) {
            System.out.print(num + " ");
        }
        System.out.println();
    }
}`,

  typescript: `// TypeScript Code Editor
interface Person {
    name: string;
    age: number;
}

function greet(person: Person): string {
    return \`Hello, \${person.name}! You are \${person.age} years old.\`;
}

const user: Person = { name: "World", age: 25 };
console.log(greet(user));`,
};

// Available themes
const THEMES = [
  { value: "vs-dark", label: "Dark (Default)" },
  { value: "vs-light", label: "Light" },
  { value: "hc-black", label: "High Contrast Dark" },
  { value: "hc-light", label: "High Contrast Light" },
];

interface ConsoleMessage {
  type: "log" | "error" | "warn" | "info";
  message: string;
  timestamp: string;
}

interface ExecutionResult {
  output: string;
  error?: string;
  executionTime?: number;
  memoryUsed?: number;
}

export default function EditorPage() {
  const params = useParams();
  const language = params?.language as string;
  const [code, setCode] = useState("");
  const [output, setOutput] = useState("");
  const [consoleMessages, setConsoleMessages] = useState<ConsoleMessage[]>([]);
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState<editor.IMarker[]>([]);
  const [executionTime, setExecutionTime] = useState<number | null>(null);
  const [activeTab, setActiveTab] = useState("output");
  const [terminalPosition, setTerminalPosition] = useState<"bottom" | "right">(
    "bottom"
  );
  const [isTerminalVisible, setIsTerminalVisible] = useState(true);
  const [theme, setTheme] = useState("vs-dark");
  const [fontSize, setFontSize] = useState(14);
  const editorRef = useRef<editor.IStandaloneCodeEditor | null>(null);

  const handleEditorMount: OnMount = (editorInstance, monacoInstance) => {
    editorRef.current = editorInstance;

    // Add translate-page action to suppress warning
    try {
      editorInstance.addAction({
        id: "translate-page",
        label: "Translate Page (Disabled)",
        run: () => {},
      });
    } catch (e) {
      console.warn("Skip translate-page warning:", e);
    }

    // Listen for errors/warnings
    const model = editorInstance.getModel();
    if (model) {
      monacoInstance.editor.onDidChangeMarkers(() => {
        const markers = monacoInstance.editor.getModelMarkers({
          resource: model.uri,
        });
        setErrors(markers);
      });
    }

    // Add keyboard shortcuts
    editorInstance.addCommand(
      monacoInstance.KeyMod.CtrlCmd | monacoInstance.KeyCode.Enter,
      () => {
        handleRun();
      }
    );

    // Zoom In: Ctrl/Cmd + =
    editorInstance.addCommand(
      monacoInstance.KeyMod.CtrlCmd | monacoInstance.KeyCode.Equal,
      () => {
        handleZoomIn();
      }
    );

    // Zoom Out: Ctrl/Cmd + -
    editorInstance.addCommand(
      monacoInstance.KeyMod.CtrlCmd | monacoInstance.KeyCode.Minus,
      () => {
        handleZoomOut();
      }
    );
  };

  useEffect(() => {
    setCode(defaultTemplates[language] || "");
    setOutput("");
    setConsoleMessages([]);
    setErrors([]);
    setExecutionTime(null);
  }, [language]);

  const addConsoleMessage = (type: ConsoleMessage["type"], message: string) => {
    const timestamp = new Date().toLocaleTimeString();
    setConsoleMessages((prev) => [...prev, { type, message, timestamp }]);
  };

  const handleRun = async () => {
    setLoading(true);
    setOutput("");
    setConsoleMessages([]);
    setExecutionTime(null);
    setActiveTab("output");

    addConsoleMessage("info", "Starting execution...");

    const startTime = performance.now();

    try {
      const res = await axios.post<ExecutionResult>("/api/run", {
        language,
        code,
      });

      const endTime = performance.now();
      const execTime = Math.round(endTime - startTime);
      setExecutionTime(execTime);

      if (res.data.error) {
        setOutput(res.data.error);
        addConsoleMessage("error", `❌ ${res.data.error}`);
      } else {
        const outputText =
          res.data.output || "Program executed successfully (no output)";
        setOutput(outputText);
        addConsoleMessage("log", `✅ ${outputText}`);
        addConsoleMessage(
          "info",
          `⏱️ Execution completed in ${res.data.executionTime || execTime}ms`
        );
      }
    } catch (error) {
      const errorMsg = axios.isAxiosError(error)
        ? error.response?.data?.error || error.message
        : "Error executing code.";
      setOutput(
        `❌ ERROR:\n\n${errorMsg}\n\nPlease check your code and try again.`
      );
      addConsoleMessage("error", `❌ ${errorMsg}`);
    } finally {
      setLoading(false);
    }
  };

  const handleCopyCode = () => {
    navigator.clipboard.writeText(code);
    addConsoleMessage("info", "Code copied to clipboard!");
  };

  const handleDownloadCode = () => {
    const extensions: Record<string, string> = {
      python: "py",
      cpp: "cpp",
      javascript: "js",
      java: "java",
      typescript: "ts",
    };
    const ext = extensions[language] || "txt";
    const blob = new Blob([code], { type: "text/plain" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = `code.${ext}`;
    a.click();
    URL.revokeObjectURL(url);
  };

  const handleFormatCode = () => {
    if (editorRef.current) {
      editorRef.current.getAction("editor.action.formatDocument")?.run();
      addConsoleMessage("info", "Code formatted successfully!");
    }
  };

  const handleZoomIn = () => {
    setFontSize((prev) => Math.min(prev + 2, 32));
    addConsoleMessage("info", `Font size increased to ${fontSize + 2}px`);
  };

  const handleZoomOut = () => {
    setFontSize((prev) => Math.max(prev - 2, 8));
    addConsoleMessage("info", `Font size decreased to ${fontSize - 2}px`);
  };

  const handleThemeChange = (newTheme: string) => {
    setTheme(newTheme);
    addConsoleMessage("info", `Theme changed to ${newTheme}`);
  };

  const getLanguageIcon = () => {
    const icons: Record<string, string> = {
      python: "🐍",
      cpp: "⚙️",
      javascript: "🟨",
      java: "☕",
      typescript: "💙",
    };
    return icons[language] || "📝";
  };

  return (
    <main className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 p-4 flex flex-col gap-4 ">
      {/* Header */}
      <header className="flex justify-between items-center bg-gray-800/50 backdrop-blur-sm rounded-lg    border-2 border-gray-700">
        <div className="flex items-center gap-3">
          <span className="text-3xl">{getLanguageIcon()}</span>
          <div>
            <Link
              href={"/"}
              className="text-2xl font-bold text-white capitalize"
            >
              CompileX
            </Link>
            <p className="text-sm text-gray-400">
              Press Ctrl+Enter to run • {errors.length} issues detected
            </p>
          </div>
        </div>
        <div className="flex gap-2 items-center">
          {/* Theme Selector */}
          <div className="flex items-center gap-2">
            <Palette className="w-4 h-4 text-gray-400" />
            <Select value={theme} onValueChange={handleThemeChange}>
              <SelectTrigger className="w-[160px] bg-gray-700 border-gray-600 text-white">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                {THEMES.map((t) => (
                  <SelectItem key={t.value} value={t.value}>
                    {t.label}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          {/* Zoom Controls */}
          <div className="flex items-center gap-1 border-l border-gray-600 pl-2 ml-2">
            <Button
              variant="outline"
              size="sm"
              onClick={handleZoomOut}
              className="bg-gray-700 hover:bg-gray-600 text-white border-gray-600 px-2"
              title="Zoom Out (Ctrl+-)"
            >
              <ZoomOut className="w-4 h-4" />
            </Button>
            <span className="text-xs text-gray-400 px-2 min-w-[45px] text-center">
              {fontSize}px
            </span>
            <Button
              variant="outline"
              size="sm"
              onClick={handleZoomIn}
              className="bg-gray-700 hover:bg-gray-600 text-white border-gray-600 px-2"
              title="Zoom In (Ctrl+=)"
            >
              <ZoomIn className="w-4 h-4" />
            </Button>
          </div>

          <div className="border-l border-gray-600 pl-2 ml-2 flex gap-2">
            <Button
              variant="outline"
              size="sm"
              onClick={handleCopyCode}
              className="bg-gray-700 hover:bg-gray-600 text-white border-gray-600"
            >
              <Copy className="w-4 h-4 mr-2" />
              Copy
            </Button>
            <Button
              variant="outline"
              size="sm"
              onClick={handleDownloadCode}
              className="bg-gray-700 hover:bg-gray-600 text-white border-gray-600"
            >
              <Download className="w-4 h-4 mr-2" />
              Download
            </Button>
            <Button
              variant="outline"
              size="sm"
              onClick={handleFormatCode}
              className="bg-gray-700 hover:bg-gray-600 text-white border-gray-600"
            >
              <FileCode className="w-4 h-4 mr-2" />
              Format
            </Button>
            <Button
              variant="outline"
              size="sm"
              onClick={() =>
                setTerminalPosition(
                  terminalPosition === "bottom" ? "right" : "bottom"
                )
              }
              className="bg-gray-700 hover:bg-gray-600 text-white border-gray-600"
            >
              <LayoutGrid className="w-4 h-4 mr-2" />
              {terminalPosition === "bottom" ? "Side" : "Bottom"}
            </Button>
            <Button
              onClick={handleRun}
              disabled={loading}
              className="bg-green-600 hover:bg-green-700 text-white"
            >
              <Play className="w-4 h-4 mr-2" />
              {loading ? "Running..." : "Run Code"}
            </Button>
          </div>
        </div>
      </header>

      {/* Main Content Area */}
      <div
        className={`flex-1 flex gap-4 ${
          terminalPosition === "right" ? "flex-row" : "flex-col"
        }`}
      >
        {/* Editor Section */}
        <Card
          className={`bg-gray-800/50 border-gray-700 overflow-hidden ${
            terminalPosition === "right" ? "flex-1" : "flex-1"
          }`}
        >
          <CardHeader className="pb-2 border-b border-gray-700">
            <CardTitle className="text-white flex items-center justify-between">
              <span className="flex items-center gap-2">
                <FileCode className="w-5 h-5" />
                Code Editor
              </span>
              {errors.length > 0 && (
                <span className="text-sm text-yellow-400 flex items-center gap-1">
                  <AlertCircle className="w-4 h-4" />
                  {errors.length} issue{errors.length !== 1 ? "s" : ""}
                </span>
              )}
            </CardTitle>
          </CardHeader>
          <CardContent className="p-0">
            <Editor
              height={
                terminalPosition === "right" ? "calc(100vh - 200px)" : "50vh"
              }
              theme={theme}
              language={language}
              value={code}
              onMount={handleEditorMount}
              onChange={(v) => setCode(v || "")}
              options={{
                minimap: { enabled: true },
                fontSize: fontSize,
                scrollBeyondLastLine: false,
                contextmenu: true,
                automaticLayout: true,
                // Enhanced IntelliSense options for better code suggestions
                suggestOnTriggerCharacters: true,
                quickSuggestions: {
                  other: true,
                  comments: true,
                  strings: true,
                },
                suggest: {
                  showKeywords: true,
                  showSnippets: true,
                  showClasses: true,
                  showFunctions: true,
                  showVariables: true,
                  showModules: true,
                  showWords: true,
                  showOperators: true,
                  showIcons: true,
                  insertMode: "replace",
                },
                parameterHints: { enabled: true },
                acceptSuggestionOnCommitCharacter: true,
                acceptSuggestionOnEnter: "on",
                wordBasedSuggestions: "allDocuments",
                tabCompletion: "on",
                // Error/Warning highlights
                renderValidationDecorations: "on",
                // Formatting
                formatOnPaste: true,
                formatOnType: true,
                // Other enhancements
                bracketPairColorization: { enabled: true },
                guides: {
                  bracketPairs: true,
                  indentation: true,
                },
                folding: true,
                lineNumbers: "on",
                rulers: [80, 120],
                cursorBlinking: "smooth",
                smoothScrolling: true,
                mouseWheelZoom: true, // Enable zoom with Ctrl + Mouse Wheel
                snippetSuggestions: "top",
              }}
            />
          </CardContent>
        </Card>

        {/* Terminal/Output Section */}
        {isTerminalVisible && (
          <Card
            className={`bg-gray-800/50 border-gray-700 ${
              terminalPosition === "right" ? "w-[45%]" : ""
            }`}
          >
            <CardHeader className="pb-2 border-b border-gray-700 flex flex-row items-center justify-between">
              <CardTitle className="text-white flex items-center gap-2">
                <Terminal className="w-5 h-5" />
                Terminal
              </CardTitle>
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setIsTerminalVisible(false)}
                className="text-gray-400 hover:text-white"
              >
                <Minimize2 className="w-4 h-4" />
              </Button>
            </CardHeader>
            <CardContent className="p-0">
              <Tabs value={activeTab} onValueChange={setActiveTab}>
                <TabsList className="w-full justify-start bg-gray-900/50 rounded-none border-b border-gray-700">
                  <TabsTrigger
                    value="output"
                    className="data-[state=active]:bg-gray-700"
                  >
                    <Terminal className="w-4 h-4 mr-2" />
                    Output
                  </TabsTrigger>
                  <TabsTrigger
                    value="console"
                    className="data-[state=active]:bg-gray-700"
                  >
                    <CheckCircle2 className="w-4 h-4 mr-2" />
                    Console ({consoleMessages.length})
                  </TabsTrigger>
                  <TabsTrigger
                    value="problems"
                    className="data-[state=active]:bg-gray-700"
                  >
                    <AlertCircle className="w-4 h-4 mr-2" />
                    Problems ({errors.length})
                  </TabsTrigger>
                </TabsList>

                <TabsContent value="output" className="m-0">
                  <div
                    className="bg-black text-green-400 p-4 font-mono text-sm overflow-auto whitespace-pre-wrap"
                    style={{
                      height:
                        terminalPosition === "right"
                          ? "calc(100vh - 260px)"
                          : "35vh",
                    }}
                  >
                    {loading ? (
                      <div className="flex items-center gap-2">
                        <div className="animate-spin h-4 w-4 border-2 border-green-400 border-t-transparent rounded-full"></div>
                        <span>⚡ Executing your code...</span>
                      </div>
                    ) : output ? (
                      <div>
                        <div className="text-blue-400 mb-2">
                          ═══════════════════════════════
                        </div>
                        <div className="text-white">{output}</div>
                        <div className="text-blue-400 mt-2">
                          ═══════════════════════════════
                        </div>
                      </div>
                    ) : (
                      <div className="text-center text-gray-500 mt-8">
                        <Terminal className="w-12 h-12 mx-auto mb-2 opacity-50" />
                        <p>Click "Run Code" to see output...</p>
                        <p className="text-xs mt-2">
                          Tip: Press Ctrl+Enter to run
                        </p>
                      </div>
                    )}
                    {executionTime && (
                      <div className="text-gray-400 text-xs mt-3 flex items-center gap-2">
                        <CheckCircle2 className="w-3 h-3" />
                        Execution time: {executionTime}ms
                      </div>
                    )}
                  </div>
                </TabsContent>

                <TabsContent value="console" className="m-0">
                  <div
                    className="bg-black p-4 font-mono text-sm overflow-auto"
                    style={{
                      height:
                        terminalPosition === "right"
                          ? "calc(100vh - 260px)"
                          : "35vh",
                    }}
                  >
                    {consoleMessages.length === 0 ? (
                      <div className="text-center text-gray-500 mt-8">
                        <CheckCircle2 className="w-12 h-12 mx-auto mb-2 opacity-50" />
                        <p>No console messages yet...</p>
                        <p className="text-xs mt-2">
                          Run your code to see logs
                        </p>
                      </div>
                    ) : (
                      consoleMessages.map((msg, idx) => (
                        <div
                          key={idx}
                          className={`mb-2 flex gap-2 items-start ${
                            msg.type === "error"
                              ? "text-red-400"
                              : msg.type === "warn"
                              ? "text-yellow-400"
                              : msg.type === "info"
                              ? "text-blue-400"
                              : "text-green-400"
                          }`}
                        >
                          <span className="text-gray-500 text-xs mt-0.5 flex-shrink-0">
                            [{msg.timestamp}]
                          </span>
                          <span className="font-bold flex-shrink-0">
                            {msg.type.toUpperCase()}:
                          </span>
                          <span className="break-all">{msg.message}</span>
                        </div>
                      ))
                    )}
                  </div>
                </TabsContent>

                <TabsContent value="problems" className="m-0">
                  <div
                    className="bg-black p-4 font-mono text-sm overflow-auto"
                    style={{
                      height:
                        terminalPosition === "right"
                          ? "calc(100vh - 260px)"
                          : "35vh",
                    }}
                  >
                    {errors.length === 0 ? (
                      <div className="text-center text-green-400 mt-8">
                        <CheckCircle2 className="w-12 h-12 mx-auto mb-2" />
                        <p className="font-bold">No problems detected!</p>
                        <p className="text-xs mt-2 text-gray-400">
                          Your code looks clean
                        </p>
                      </div>
                    ) : (
                      <div className="space-y-3">
                        {errors.map((error, idx) => (
                          <div
                            key={idx}
                            className={`p-3 rounded border-l-4 ${
                              error.severity === 8
                                ? "border-red-500 bg-red-900/20"
                                : "border-yellow-500 bg-yellow-900/20"
                            }`}
                          >
                            <div className="flex items-start gap-2">
                              <AlertCircle
                                className={`w-5 h-5 mt-0.5 flex-shrink-0 ${
                                  error.severity === 8
                                    ? "text-red-400"
                                    : "text-yellow-400"
                                }`}
                              />
                              <div className="flex-1">
                                <div
                                  className={`font-bold mb-1 ${
                                    error.severity === 8
                                      ? "text-red-300"
                                      : "text-yellow-300"
                                  }`}
                                >
                                  {error.severity === 8
                                    ? "❌ Error"
                                    : "⚠️ Warning"}{" "}
                                  at Line {error.startLineNumber}:
                                  {error.startColumn}
                                </div>
                                <div className="text-sm text-gray-300">
                                  {error.message}
                                </div>
                                <div className="text-xs text-gray-500 mt-1">
                                  Code:{" "}
                                  {typeof error.code === "string"
                                    ? error.code
                                    : error.code?.value || "N/A"}
                                </div>
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                </TabsContent>
              </Tabs>
            </CardContent>
          </Card>
        )}
      </div>

      {/* Show Terminal Button (when hidden) */}
      {!isTerminalVisible && (
        <Button
          onClick={() => setIsTerminalVisible(true)}
          className="fixed bottom-4 right-4 bg-green-600 hover:bg-green-700"
        >
          <Maximize2 className="w-4 h-4 mr-2" />
          Show Terminal
        </Button>
      )}
    </main>
  );
}
