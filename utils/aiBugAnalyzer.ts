import OpenAI from "openai";
import dotenv from "dotenv";

dotenv.config();

const client = new OpenAI({
  apiKey: process.env.GROQ_API_KEY,
  baseURL: "https://api.groq.com/openai/v1",
});

export async function analyzeBug(errorLog: string) {
  const response = await client.chat.completions.create({
    model: "llama-3.3-70b-versatile",
    messages: [
      {
        role: "user",
        content: `
Analyze this Playwright failure:

${errorLog}

Provide:
1. Root Cause
2. Suggested Fix
3. Short Summary
`,
      },
    ],
    temperature: 0.2,
  });

  return response.choices[0].message.content;
}