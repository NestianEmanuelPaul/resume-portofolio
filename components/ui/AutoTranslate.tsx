"use client";
import { useEffect, useState } from "react";

async function translateText(text: string, targetLang: string) {
  if (targetLang === "en") {
    return text; // nu traduce, textul e deja engleză
  }

  const res = await fetch(
    "https://api.cognitive.microsofttranslator.com/translate?api-version=3.0&to=" + targetLang,
    {
      method: "POST",
      headers: {
        "Ocp-Apim-Subscription-Key": process.env.NEXT_PUBLIC_TRANSLATOR_KEY!,
        "Ocp-Apim-Subscription-Region": "westeurope", // regiunea ta Azure
        "Content-Type": "application/json"
      },
      body: JSON.stringify([{ Text: text }])
    }
  );

  const data = await res.json();
  return data[0].translations[0].text;
}

export default function AutoTranslate({ text, lang }: { text: string; lang: string }) {
  const [translated, setTranslated] = useState(text);

  useEffect(() => {
    async function run() {
      const result = await translateText(text, lang);
      setTranslated(result);
    }
    run();
  }, [text, lang]);

  return translated;
}
