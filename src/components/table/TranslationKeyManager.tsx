"use client";

import { TranslationTable } from "./TranslationTable";
import { TableLoader } from "./TableLoader";
import { TranslationKey } from "@/types";

interface TranslationKeyManagerProps {
  keys: TranslationKey[];
  isFetching: boolean;
}

export function TranslationKeyManager({
  keys,
  isFetching,
}: TranslationKeyManagerProps) {
  if (isFetching) return <TableLoader />;

  return (
    <div className="space-y-2">
      <TranslationTable data={keys} />
    </div>
  );
}
