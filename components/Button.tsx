import Link from "next/link";
import { cn } from "@/lib/cn";

type ButtonVariant = "primary" | "secondary" | "ghost";
type ButtonSize = "md" | "lg";

type ButtonProps = {
  children: React.ReactNode;
  href: string;
  variant?: ButtonVariant;
  size?: ButtonSize;
  className?: string;
  ariaLabel?: string;
};

const variantClass: Record<ButtonVariant, string> = {
  primary:
    "bg-[linear-gradient(135deg,#f5f5f7_0%,#d9dbe0_52%,#a8adb7_100%)] text-[#131419] border border-white/40 shadow-[0_12px_24px_rgba(0,0,0,0.26)] hover:-translate-y-0.5 hover:shadow-[0_16px_28px_rgba(0,0,0,0.32)]",
  secondary:
    "glass-chip text-[var(--text-main)] border border-white/20 hover:border-white/35 hover:-translate-y-0.5",
  ghost: "text-[var(--text-muted)] hover:text-[var(--text-main)] hover:bg-white/5 border border-transparent"
};

const sizeClass: Record<ButtonSize, string> = {
  md: "px-5 py-2.5 text-sm",
  lg: "px-6 py-3 text-base"
};

export default function Button({ children, href, variant = "primary", size = "md", className, ariaLabel }: ButtonProps) {
  return (
    <Link
      href={href}
      aria-label={ariaLabel}
      className={cn(
        "inline-flex items-center justify-center rounded-xl font-semibold leading-[1.2] transition-all duration-200 hover:scale-[0.97] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--focus-ring)] focus-visible:ring-offset-2 focus-visible:ring-offset-[#090A0C]",
        variantClass[variant],
        sizeClass[size],
        className
      )}
    >
      {children}
    </Link>
  );
}
