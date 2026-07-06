import type { ComponentProps } from "react";

import { cn } from "../lib/cn";

type ButtonVariant = "primary" | "secondary" | "ghost";
type ButtonSize = "sm" | "md" | "lg";

const variantClasses: Record<ButtonVariant, string> = {
  primary: "bg-accent text-accent-foreground hover:opacity-90",
  secondary: "border border-border bg-background text-foreground hover:bg-background-subtle",
  ghost: "text-foreground-secondary hover:bg-background-muted hover:text-foreground",
};

const sizeClasses: Record<ButtonSize, string> = {
  sm: "min-h-9 h-9 px-3 text-sm",
  md: "min-h-11 h-11 px-4 text-base",
  lg: "min-h-12 h-12 px-6 text-base",
};

export interface ButtonProps extends ComponentProps<"button"> {
  variant?: ButtonVariant;
  size?: ButtonSize;
}

export function Button({
  variant = "primary",
  size = "md",
  className,
  type = "button",
  ...props
}: ButtonProps) {
  return (
    <button
      type={type}
      className={cn(
        "focus-visible:ring-accent inline-flex items-center justify-center rounded-lg font-medium transition-opacity duration-150 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
        variantClasses[variant],
        sizeClasses[size],
        className,
      )}
      {...props}
    />
  );
}
