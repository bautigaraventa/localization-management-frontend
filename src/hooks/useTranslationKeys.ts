import { useQuery, useMutation } from "@tanstack/react-query";
import { fetchTranslationKeys, FetchTranslationKeysParams, updateTranslationValue } from "@/lib/api";
import { TranslationKey } from "@/types";
import { toast } from 'sonner';

export const translationKeysQueryKey = (projectId: string, locale: string) => [
    "translation-keys",
    projectId,
    locale,
  ];

export function useTranslationKeys({projectId, locale}: FetchTranslationKeysParams) {
    return  useQuery<TranslationKey[]>({
    queryKey: translationKeysQueryKey(projectId || '', locale || ''),
    queryFn: () => fetchTranslationKeys({projectId, locale}),
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