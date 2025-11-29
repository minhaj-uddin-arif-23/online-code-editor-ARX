import { ExplainRequest } from "@/types";
import { GoogleGenerativeAI } from "@google/generative-ai";
import { NextRequest, NextResponse } from "next/server";
const apiKey = process.env.GEMINI_API_KEY;

if (!apiKey) {
  throw new Error("Api key required");
}
const genAi = new GoogleGenerativeAI(apiKey);

export const POST = async (req: NextRequest) => {
  try {
    const { code }: ExplainRequest = await req.json();
    if (!code) {
      return NextResponse.json({ error: "Code is required" }, { status: 400 });
    }
    const model = genAi.getGenerativeModel({ model: "gemini-2.5-flash" });
    const prompt = `Please Explain the following code in detail :\n\n${code} \n\nExplain`;
    const result = await model.generateContent(prompt);
    const response = await result.response;
    const explanation = response.text();
    return NextResponse.json({ data: { explanation } }, { status: 200 });
  } catch (error) {
    console.log("Error", error);
    return NextResponse.json(
      { error: "Failed to generate explanation" },
      { status: 500 }
    );
  }
};
