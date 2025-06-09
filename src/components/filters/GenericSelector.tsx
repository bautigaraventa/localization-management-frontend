"use client";

import {
  Select,
  SelectTrigger,
  SelectContent,
  SelectItem,
  SelectValue,
} from "@/components/ui";

interface GenericSelectorProps {
  label: string;
  value: string;
  onChange: (value: string) => void;
  options: { value: string; label: string }[];
  placeholder?: string;
}

export function GenericSelector({
  label,
  value,
  onChange,
  options,
  placeholder = "Select an option",
}: GenericSelectorProps) {
  return (
    <div className="flex md:flex-col items-center md:items-start mb-2 justify-between">
      <h2 className="text-lg font-semibold text-stone-700 dark:text-stone-300 mr-8 md:mb-3">
        {label}
      </h2>
      <Select value={value} onValueChange={onChange}>
        <SelectTrigger data-testid="select-button">
          <SelectValue placeholder={placeholder} />
        </SelectTrigger>
        <SelectContent>
          {options.map((opt) => (
            <SelectItem key={opt.value} value={opt.value}>
              {opt.label}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
    </div>
  );
}
