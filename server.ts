import express from 'express';
import { GoogleGenAI, Type } from "@google/genai";
import dotenv from 'dotenv';

dotenv.config();

const app = express();
app.use(express.json());

const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY });

app.post('/api/analyze', async (req, res) => {
  try {
    const { idea, language } = req.body;

    if (!idea || !language) {
      return res.status(400).json({ error: 'Missing idea or language' });
    }

    const langName = language === 'tr' ? 'Turkish' : 'English';

    const response = await ai.models.generateContent({
      model: "gemini-2.0-flash",
      contents: `You are a Senior Solutions Architect at Thracian Soft, a premium software agency. 
      Analyze the following project idea from a potential client: "${idea}".
      
      Provide a professional breakdown including:
      1. Recommended Tech Stack (list of technologies).
      2. Estimated Duration (e.g., "3-4 months").
      3. Key Features (bullet points).
      4. A brief, encouraging summary of why Thracian Soft is the right fit.
      
      IMPORTANT: Respond in ${langName}.
      The JSON keys (techStack, estimatedDuration, keyFeatures, summary) MUST remain in English, but the values must be in ${langName}.
      
      Keep the tone professional, innovative, and welcoming.`,
      config: {
        responseMimeType: "application/json",
        responseSchema: {
          type: Type.OBJECT,
          properties: {
            techStack: {
              type: Type.ARRAY,
              items: { type: Type.STRING },
              description: "List of recommended technologies"
            },
            estimatedDuration: {
              type: Type.STRING,
              description: "Rough timeline estimate"
            },
            keyFeatures: {
              type: Type.ARRAY,
              items: { type: Type.STRING },
              description: "List of core features needed"
            },
            summary: {
              type: Type.STRING,
              description: "Professional summary and sales pitch"
            }
          },
          required: ["techStack", "estimatedDuration", "keyFeatures", "summary"]
        }
      }
    });

    const text = response.text;
    if (!text) {
      throw new Error("No response from AI");
    }

    res.json(JSON.parse(text));
  } catch (error) {
    console.error("Error analyzing project:", error);
    res.status(500).json({ error: 'Failed to analyze project idea' });
  }
});

const PORT = 3001;
app.listen(PORT, () => {
  console.log(`API server running on http://localhost:${PORT}`);
});
