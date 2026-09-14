import OpenAI from "openai";
import dotenv from "dotenv";

dotenv.config();

const client = new OpenAI({
    apiKey: process.env.GROQ_API_KEY,
    baseURL: "https://api.groq.com/openai/v1",
});

export async function generatePlaywrightTest(userRequirement: string) {

    const prompt = `
    Generate Playwright TypeScript automation test.

    Requirements:
    ${userRequirement}

    Rules:
    - Use Playwright test syntax
    - Use TypeScript
    - Add assertions
    - Keep code clean
    `;

    const response = await client.chat.completions.create({
        model: "llama-3.3-70b-versatile",

        messages: [
            {
                role: "user",
                content: prompt
            }
        ],

        temperature: 0.3
    });

    return response.choices[0].message.content;
}