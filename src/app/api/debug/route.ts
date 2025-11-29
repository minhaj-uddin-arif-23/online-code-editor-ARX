import { DebuggingRequest } from "@/types";
import { GoogleGenerativeAI } from "@google/generative-ai";
import { NextRequest, NextResponse } from "next/server";
const apiKey = process.env.GEMINI_API_KEY;

if (!apiKey) {
  throw new Error("Api key required");
}
const genAi = new GoogleGenerativeAI(apiKey);

export const POST = async (req: NextRequest) => {
  try {
    const { code, error: errorMessage }: DebuggingRequest = await req.json();
    if (!code) {
      return NextResponse.json({ error: "Code is required" }, { status: 400 });
    }
    const model = genAi.getGenerativeModel({ model: "gemini-2.5-flash" });
    let prompt = `Please Debug the following code :\n\n${code} \n\n`;
    if (errorMessage) {
      prompt += `Error found this : ${errorMessage}`;
    }
    prompt += "Debugging suggestion";
    const result = await model.generateContent(prompt);
    const response = await result.response;
    const debugging = response.text();
    return NextResponse.json({ data: { debugging } }, { status: 200 });
  } catch (error) {
    console.log("Error", error);
    return NextResponse.json(
      { error: "Failed to generate Debugging" },
      { status: 500 }
    );
  }
};
