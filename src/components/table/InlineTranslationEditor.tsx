import { Input } from "../ui/input";
import { useState, useRef, useEffect } from "react";
import { useTranslationStore } from "@/store/translationStore";
import { cn } from "@/lib/utils";
import { Loader2, Pencil } from "lucide-react";
import { useUpdateTranslationKey } from "@/hooks/useTranslationKeys";

interface Props {
  keyId: string;
  initialValue: string;
}

export function InlineTranslationEditor({ keyId, initialValue }: Props) {
  const selectedLanguage = useTranslationStore((s) => s.selectedLanguage);

  const [value, setValue] = useState(initialValue);
  const [editing, setEditing] = useState(false);
  const [hovered, setHovered] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);

  const mutation = useUpdateTranslationKey();

  const handleSave = () => {
    if (value !== initialValue) {
      mutation.mutate({ id: keyId, language: selectedLanguage, value });
    }
    setEditing(false);
  };

  const handleCancel = () => {
    setValue(initialValue);
    setEditing(false);
  };

  useEffect(() => {
    if (editing) {
      inputRef.current?.focus();
    }
  }, [editing]);

  return editing ? (
    <Input
      ref={inputRef}
      value={value}
      onChange={(e) => setValue(e.target.value)}
      onBlur={handleSave}
      onKeyDown={(e) => {
        if (e.key === "Enter") {
          e.preventDefault();
          handleSave();
        }
        if (e.key === "Escape") {
          handleCancel();
        }
      }}
      disabled={mutation.isPending}
      className={cn("w-full", mutation.isPending && "opacity-50")}
    />
  ) : (
    <div
      className="flex items-center justify-between gap-1 group w-full cursor-pointer"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      onClick={() => setEditing(true)}
    >
      <div className="truncate w-full">
        {mutation.isPending ? (
          <Loader2 className="h-4 w-4 animate-spin" />
        ) : value ? (
          value
        ) : (
          <span className="italic text-muted-foreground">-</span>
        )}
      </div>
      <Pencil
        className={cn(
          "h-4 w-4 text-muted-foreground transition-opacity",
          hovered ? "opacity-100" : "opacity-0 group-hover:opacity-100"
        )}
      />
    </div>
  );
}
