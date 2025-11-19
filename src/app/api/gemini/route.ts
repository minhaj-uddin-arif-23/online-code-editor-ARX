import { streamText, type Message } from "ai";
import { ourComipleXInitialMessage } from "@/lib/data";
import { createGoogleGenerativeAI } from "@ai-sdk/google";

const google = createGoogleGenerativeAI({
  apiKey: process.env.GOOGLE_API_KEY,
});
// app/api/hello/route.ts
import { NextRequest, NextResponse } from "next/server";

// GET request handler
export async function GET(request: NextRequest) {
  return NextResponse.json({ message: "Hello from Next.js API!" });
}

// POST request handler
export async function POST(request: NextRequest) {
  const data = await request.json();
  return NextResponse.json({ message: "Data received!", data });
}

export const runtime = "edge";
const generatedId = () => Math.random().toString(36).slice(2, 15);
const buildGoogleGenAIPrompt = (messages: Message[]): Message[] => [
  {
    id: generatedId(),
    role: "user",
    content: ourComipleXInitialMessage.content,
  },
  ...messages.map((message) => ({
    id: message.id || generatedId(),
    role: message.role,
    content: message.content,
  })),
];

export async function POST(request: Request) {
  const { message } = await request.json();
  const stream = await streamText({
    model: google("gemini-2.0-flash-exp"),
    messages: buildGoogleGenAIPrompt(message),
    temperature: 0.7,
  });
  return stream?.toTextStreamResponse();
}
