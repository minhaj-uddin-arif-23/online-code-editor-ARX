export interface ExplainRequest {
  code: string;
}
export interface ExplainResponse {
  code: string;
}
export interface DebuggingRequest {
  code: string;
  error?: string;
}
export interface DebuggingResponse {
  debugging: string;
}

export interface GenerateRequest {
  languages?: string;
  description: string;
}
export interface GenerateResponse {
  code: string;
}
export interface Tabs {
  id: "explain" | "debug" | "generate";
  label: string;
  icon: string;
  gradient: string;
}

export interface FeatureGrid {
  title: string;
  description: string;
  icon: string;
}

export interface HistoryItem {
  id: number;
  type: "explain" | "debug" | "generate";
  timestamp: string;
  input: string;
  output: string;
}
