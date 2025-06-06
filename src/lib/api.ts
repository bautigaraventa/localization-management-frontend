import { TranslationKey, UpdateTranslationValue } from "@/types/translation";

export interface FetchTranslationKeysParams {
    projectId?: string;
    locale?: string;
}

export async function fetchTranslationKeys({projectId, locale}: FetchTranslationKeysParams): Promise<TranslationKey[]> {
  // For real API:
  //   if (projectId) {
  //     return fetch(`${process.env.API_URL}/localizations/${projectId}/${locale ?? 'en'}`).then((res) => res.json());
  //   } else {
  //     return fetch(`${process.env.API_URL}/localizations/${locale ?? 'en'}`).then((res) => res.json());
  //   }
  
  console.log("FAKE API CALL START")
  console.log({projectId})
  console.log({locale})
  await new Promise((r) => setTimeout(r, 2000));
  const { mockedTranslationKeys } = await import('./mocks');
  console.log("FAKE API CALL END")
  return mockedTranslationKeys;
}

export async function updateTranslationValue({
  id,
  language,
  value,
}: UpdateTranslationValue): Promise<UpdateTranslationValue> {
  /*
   Here we should hit a real API to update the translation keys, but this is out of scope
   We are just simulating a Promise now
  */
  console.log("Mock update:", { id, language, value });
  await new Promise((r) => setTimeout(r, 1000));
  return { id, language, value };
}