import OpenAI from "openai";
import dotenv from "dotenv";

dotenv.config();

const client = new OpenAI({
    apiKey: process.env.GROQ_API_KEY,
    baseURL: "https://api.groq.com/openai/v1",
});

export async function analyzeBug(errorLog: string) {

    const prompt = `
    Analyze the following Playwright automation test failure.

    Error Log:
    ${errorLog}

    Provide:
    1. Probable root cause
    2. Suggested fix
    3. Short bug summary

    Keep the response clear and concise.
    `;

    const response = await client.chat.completions.create({
        model: "llama-3.3-70b-versatile",

        messages: [
            {
                role: "user",
                content: prompt
            }
        ],

        temperature: 0.2
    });

    return response.choices[0].message.content;
}