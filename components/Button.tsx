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
    "bg-[linear-gradient(135deg,#f5f8ff_0%,#d9e4ff_52%,var(--accent-main)_100%)] text-[#131a2f] border border-white/45 shadow-[0_0_0_1px_rgba(255,255,255,0.2),0_16px_30px_rgba(10,22,52,0.52)] hover:-translate-y-0.5 hover:shadow-[0_0_0_1px_rgba(255,255,255,0.3),0_20px_34px_rgba(10,22,52,0.62)]",
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
