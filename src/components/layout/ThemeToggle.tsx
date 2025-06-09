"use client";

import { useTheme } from "next-themes";
import { Button } from "@/components/ui";
import { Sun, Moon } from "lucide-react";

export function ThemeToggle() {
  const { theme, setTheme } = useTheme();

  return (
    <Button
      variant="ghost"
      size="icon"
      onClick={() => setTheme(theme === "light" ? "dark" : "light")}
    >
      {theme === "light" ? (
        <Sun className="h-5 w-5" data-testid="icon-sun" />
      ) : (
        <Moon className="h-5 w-5" data-testid="icon-moon" />
      )}
    </Button>
  );
}
