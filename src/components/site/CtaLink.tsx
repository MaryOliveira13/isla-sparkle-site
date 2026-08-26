import { cn } from "@/lib/utils";
import type { AnchorHTMLAttributes, ButtonHTMLAttributes } from "react";

const base =
  "group inline-flex min-h-12 items-center justify-center gap-2.5 rounded-full px-7 text-[0.7rem] font-semibold uppercase tracking-[0.18em] transition-all duration-500 ease-out";

const variants = {
  solid:
    "bg-primary text-primary-foreground shadow-[0_18px_40px_-22px_var(--petrol-deep)] hover:bg-petrol hover:shadow-[0_22px_48px_-20px_var(--petrol-deep)]",
  outline:
    "border border-ink/15 text-ink hover:border-ink/40 hover:bg-ink/[0.03]",
  glass:
    "glass-panel text-ink hover:bg-white/80",
  ghost:
    "text-ink/70 px-0 hover:text-ink",
} as const;

type Variant = keyof typeof variants;

export function CtaLink({
  variant = "solid",
  className,
  children,
  ...props
}: AnchorHTMLAttributes<HTMLAnchorElement> & { variant?: Variant }) {
  return (
    <a className={cn(base, variants[variant], className)} {...props}>
      {children}
    </a>
  );
}

export function CtaButton({
  variant = "solid",
  className,
  children,
  ...props
}: ButtonHTMLAttributes<HTMLButtonElement> & { variant?: Variant }) {
  return (
    <button className={cn(base, variants[variant], className)} {...props}>
      {children}
    </button>
  );
}
