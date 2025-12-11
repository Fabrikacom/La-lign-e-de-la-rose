import { GoogleGenAI } from "@google/genai";

// Safe access to API Key to prevent crash if process is undefined
const apiKey = (typeof process !== 'undefined' && process.env && process.env.API_KEY) || '';
const ai = new GoogleGenAI({ apiKey });

export const getOracleGuidance = async (userFeeling: string): Promise<string> => {
  if (!apiKey) {
    return "L'Oracle a besoin d'une clé API pour se connecter aux énergies cosmiques.";
  }

  try {
    const response = await ai.models.generateContent({
      model: 'gemini-2.5-flash',
      contents: `L'utilisatrice se sent : "${userFeeling}".
      Tu es un guide spirituel bienveillant, ancré dans la "Lignée de la Rose" (spiritualité féminine, douce, puissante).
      Génère un court message (max 3 phrases) de guidance ou une affirmation positive pour elle.
      Ton ton doit être poétique, apaisant et mystique.`,
    });

    return response.text || "Les étoiles sont silencieuses pour le moment. Respirez et réessayez.";
  } catch (error) {
    console.error("Erreur Oracle:", error);
    return "Une perturbation énergétique empêche la connexion. Veuillez réessayer plus tard.";
  }
};