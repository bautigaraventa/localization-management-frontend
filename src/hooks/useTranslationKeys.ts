import { useQuery, useMutation } from "@tanstack/react-query";
import { FetchTranslationKeysParams, updateTranslationValue } from "@/lib/api";
import { TranslationKey } from "@/types";
import { toast } from 'sonner';

export const translationKeysQueryKey = (projectId: string, locale: string) => [
    "translation-keys",
    projectId,
    locale,
  ];

  async function fetchTranslationKeysData({projectId, locale}: FetchTranslationKeysParams): Promise<TranslationKey[]> {
    const response = await fetch(`/api/translations?projectId=${projectId}&locale=${locale}`);
    if (!response.ok) {
      toast.error("Error fetching data. Please try again later.");
      throw new Error("Failed to fetch data");
    }

    const res = await response.json();
    return res.localizations;
  }

export function useTranslationKeys({projectId, locale}: FetchTranslationKeysParams) {
    return useQuery<TranslationKey[]>({
    queryKey: translationKeysQueryKey(projectId || '', locale || ''),
    queryFn: () => fetchTranslationKeysData({projectId, locale}),
  });
}

export function useUpdateTranslationKey() {
  return useMutation({
    mutationFn: updateTranslationValue,
    onSuccess: () => {
        toast.success("Translation updated")
    },
    onError: () => toast.error("Error trying to update. Try again!")
  });
}