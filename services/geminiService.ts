import { GoogleGenAI } from "@google/genai";

const SYSTEM_INSTRUCTION = `
You are the AI Digital Twin of Soham Purkait. You are embedded in his portfolio website.
Your goal is to answer visitor questions about Soham's professional background, skills, and services professionally but concisely.

Soham's Profile:
- Role: Data Scientist & AI Solutions Developer.
- Core Mission: Building end-to-end data-driven solutions for businesses.
- Specializations: 
  1. Data Analysis (Extracting insights from complex datasets).
  2. Trend Analysis & Business Forecasting.
  3. AI Solutions (Chatbots, RAG apps, Automation tools, Custom AI products).
- Approach: Minimalist, efficient, and business-focused.
- Contact: Available for freelance and contract work.

Guidelines:
- Keep answers short (under 75 words unless asked for detail).
- Tone: Professional, helpful, slightly sophisticated (matching the website's minimalist aesthetic).
- If asked about hiring, encourage them to use the contact form below.
- Do not hallucinate personal details not provided here.
`;

let ai: GoogleGenAI | null = null;

export const initializeGenAI = () => {
  if (import.meta.env.VITE_API_KEY && !ai) {
    ai = new GoogleGenAI({ apiKey: import.meta.env.VITE_API_KEY});
  }
};

export const chatWithSohamAI = async (message: string, history: {role: string, parts: {text: string}[]}[] = []) => {
  initializeGenAI();

  if (!ai) {
    console.error("Gemini API Key missing");
    return "I am currently offline. Please contact Soham directly via email.";
  }

  try {
    const model = ai.models;
    
    // 1. Filter history to start with User (API Requirement)
    let filteredHistory = history;
    while (filteredHistory.length > 0 && filteredHistory[0].role === 'model') {
      filteredHistory = filteredHistory.slice(1);
    }

    // 2. Ensure strictly alternating roles to prevent API errors
    // (e.g., prevents sending [User, User] if a previous model response failed)
    const sanitizedHistory = [];
    let lastRole = null;
    for (const item of filteredHistory) {
      if (item.role !== lastRole) {
        sanitizedHistory.push(item);
        lastRole = item.role;
      }
    }

    const contents = [
      ...sanitizedHistory.map(h => ({ 
        role: h.role, 
        parts: h.parts.map(p => ({ text: p.text })) 
      })),
      { role: 'user', parts: [{ text: message }] }
    ];

    const response = await model.generateContent({
      model: 'gemini-2.5-flash',
      contents: contents,
      config: {
        systemInstruction: SYSTEM_INSTRUCTION,
        maxOutputTokens: 500,
        temperature: 0.7,
      }
    });

    return response.text || "I apologize, I couldn't formulate a response right now.";
  } catch (error) {
    console.error("AI Error:", error);
    return "I seem to be having trouble connecting to my knowledge base right now. Please try again.";
  }
};