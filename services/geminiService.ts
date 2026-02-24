import { ProjectAnalysis, Language } from "../types";

export const analyzeProjectIdea = async (idea: string, language: Language): Promise<ProjectAnalysis> => {
  try {
    const response = await fetch('/api/analyze', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ idea, language })
    });

    if (!response.ok) {
      throw new Error(`API error: ${response.status}`);
    }

    return await response.json() as ProjectAnalysis;
  } catch (error) {
    console.error("Error analyzing project:", error);
    throw error;
  }
};