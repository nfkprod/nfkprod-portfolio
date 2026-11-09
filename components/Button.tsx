import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { cn } from "@/lib/cn";

type ButtonProps = {
  children: React.ReactNode;
  href: string;
  variant?: "primary" | "secondary" | "ghost";
  size?: "md" | "lg";
  className?: string;
  ariaLabel?: string;
};

export default function Button({
  children,
  href,
  variant = "primary",
  size = "md",
  className,
  ariaLabel,
}: ButtonProps) {
  return (
    <Link
      href={href}
      aria-label={ariaLabel}
      className={cn(
        "studio-button",
        `studio-button--${variant}`,
        size === "lg" && "studio-button--large",
        className,
      )}
    >
      {children}
      <ArrowUpRight size={18} />
    </Link>
  );
}
