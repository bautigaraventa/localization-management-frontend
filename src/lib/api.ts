import { UpdateTranslationValue } from "@/types/translation";

export interface FetchTranslationKeysParams {
    projectId?: string;
    locale?: string;
}

// Faking unexisting (out of scope) api call.
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