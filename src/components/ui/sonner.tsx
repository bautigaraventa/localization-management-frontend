"use client";

import { Toaster as Sonner, ToasterProps } from "sonner";

const Toaster = ({ ...props }: ToasterProps) => {
  return (
    <Sonner
      className="toaster group"
      style={
        {
          "--normal-bg": "var(--color-bg-surface-default)",
          "--normal-text": "var(--color-text-primary-default)",
          "--normal-border": "var(--color-neutral-200)",
        } as React.CSSProperties
      }
      {...props}
    />
  );
};

export { Toaster };
