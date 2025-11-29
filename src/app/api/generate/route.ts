/* eslint-disable @typescript-eslint/no-unused-vars */
import { GenerateRequest } from "@/types";
import { GoogleGenerativeAI } from "@google/generative-ai";
import { NextRequest, NextResponse } from "next/server";
const apiKey = process.env.GEMINI_API_KEY;

if (!apiKey) {
  throw new Error("Api key required");
}
const genAi = new GoogleGenerativeAI(apiKey);

export const POST = async (req: NextRequest) => {
  try {
    const { description, language }: GenerateRequest = await req.json();
    if (!description) {
      return NextResponse.json(
        { error: "Description is required" },
        { status: 400 }
      );
    }
    const model = genAi.getGenerativeModel({ model: "gemini-2.5-flash" });
    const prompt = `Generate the ${
      language || "javascript"
    } code for ${description} \n\nCode`;
    const result = await model.generateContent(prompt);
    const response = await result.response;
    const generateContent = response.text();
    return NextResponse.json({ data: { generateContent } }, { status: 200 });
  } catch (error) {
    // console.log("Error", error);
    return NextResponse.json(
      { error: "Failed to generate content" },
      { status: 500 }
    );
  }
};
